// Play button speech for the playground. Module worker with its own onnxruntime-web (WASM only,
// 1 thread), so the page stays responsive. Model: Kokoro-82M v1.0 ONNX, q8f16 (about 86 MB,
// sha256 04c658ae...), voice if_sara, pinned to a Hugging Face revision and kept in Cache Storage.
// Fed IPA phoneme tokens only (kokoro-ipa.js); never the Greek text.
import * as ort from "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.30.0/dist/ort.wasm.min.mjs";
import { toIds } from "./kokoro-ipa.js?v=16";
const HF = "https://huggingface.co/onnx-community/Kokoro-82M-v1.0-ONNX/resolve/1939ad2a8e416c0acfeecc08a694d14ef25f2231/";
const SIZE = 86033585, VSIZE = 522240, CACHE = "greek-phonology-tts-v1";
let sess = null, voice = null, loading = null, stage = "boot";
// Error details for the page toast: step, HTTP status, bytes loaded vs expected.
const D = { step: "boot", status: null, got: 0, want: 0 };
const fail = (msg, extra) => Object.assign(new Error(msg), extra || {});
// onnxruntime-web 1.30 ships only the pthread build, which always creates a shared WebAssembly
// memory with a 4 GiB maximum. Safari must reserve a shared memory's maximum up front, and on
// iPhone that reservation can fail ("RangeError: Out of memory"), especially when another wasm
// heap is already open in the tab. Kokoro needs about 230 MB (about 330 MB for 200 phonemes), so
// cap this worker's shared memory at 512 MiB (256 MiB fallback). A smaller maximum is a valid
// import for the module's declared 4 GiB limit.
const WM = WebAssembly.Memory;
function CappedMemory(d) {
  if (!(d && d.shared && (d.maximum || 0) > 8192)) return new WM(d);
  try { return new WM({ ...d, maximum: 8192 }); } catch (e) { return new WM({ ...d, maximum: 4096 }); }
}
CappedMemory.prototype = WM.prototype;
try { WebAssembly.Memory = CappedMemory; } catch (e) {}
// Short reason codes shown in the error message.
function dstep(err) {
  if (err && err.meta) return err.meta.step;
  if (D.step === "session create" && /no available backend|\[wasm\]|instantiate|initWasm/i.test(String(err && err.message))) return "ORT init";
  return D.step;
}
function reason(err, st) {
  const t = String(err && err.name || "") + " " + String(err && err.message || err);
  if (/out of memory|bad_alloc|\boom\b|allocation|RangeError|memory access out of bounds/i.test(t)) return st === "fetch" ? "fetch-oom" : "wasm-oom";
  if (st === "fetch") { if (/http \d/.test(t)) return "fetch-http"; if (/short|size/.test(t)) return "fetch-size"; return "fetch-net"; }
  if (/no available backend|wasm|instantiate|compile|import/i.test(t)) return "wasm-init";
  if (st === "init") return "model-init";
  if (/nan/.test(t)) return "nan"; return st || "unknown";
}
// Streams straight into one preallocated buffer (no per-chunk copies), so peak worker memory
// stays about 1x the model before onnxruntime (iOS kills large workers without an error event).
// A short or wrong-size cached copy is dropped and fetched again.
async function fetchInto(url, dst, onBytes, label) {
  const meta = { step: label, status: null, got: 0, want: dst.length };
  let c = null; try { c = await caches.open(CACHE); } catch (e) {}
  let r = null; try { r = c && await c.match(url); } catch (e) {}
  if (r && Number(r.headers.get("content-length") || dst.length) !== dst.length) { try { await c.delete(url); } catch (e) {} r = null; }
  const cached = !!r;
  if (!r) { r = await fetch(url).catch((e) => { throw Object.assign(e, { meta }); }); meta.status = r.status; if (!r.ok) throw fail("http " + r.status, { meta }); if (c) { try { await c.put(url, r.clone()); } catch (e) {} } }
  const rd = r.body.getReader(); let n = 0;
  for (;;) { const { done, value } = await rd.read(); if (done) break; if (n + value.length > dst.length) { meta.got = n + value.length; throw fail("size", { meta }); } dst.set(value, n); n += value.length; onBytes(value.length); meta.got = n; }
  if (n !== dst.length) { if (c) { try { await c.delete(url); } catch (e) {} } throw fail("short download " + n, { meta }); }
  return cached;
}
async function load() {
  const t0 = performance.now(); let got = 0, last = 0;
  const tick = (k) => { got += k; const p = got / (SIZE + VSIZE); if (p - last > 0.01) { last = p; postMessage({ type: "progress", p }); } };
  stage = "fetch"; D.step = "fetch";
  const m = new Uint8Array(SIZE), vb = new Uint8Array(VSIZE);
  const [mc, vc] = await Promise.all([fetchInto(HF + "onnx/model_q8f16.onnx", m, tick, "fetch model"), fetchInto(HF + "voices/if_sara.bin", vb, tick, "fetch voice")]);
  voice = new Float32Array(vb.buffer, 0, VSIZE / 4);
  ort.env.wasm.wasmPaths = "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.30.0/dist/"; ort.env.wasm.numThreads = 1;
  D.step = "concat"; D.got = m.length; D.want = SIZE;
  const t1 = performance.now(); stage = "init"; D.step = "session create";
  sess = await ort.InferenceSession.create(m, { executionProviders: ["wasm"], enableCpuMemArena: false, enableMemPattern: false });
  stage = "ready";
  return { cached: mc && vc, fetch_ms: Math.round(t1 - t0), init_ms: Math.round(performance.now() - t1) };
}
// q8f16 on WASM sometimes returns an all-NaN waveform for a given (tokens, speed) pair (fp16
// overflow). Retry with nearby speeds, then with a leading stress mark ˈ; the first finite result wins.
const TRIES = [[0.85, ""], [1.0, ""], [0.9, ""], [0.8, ""], [0.85, "ˈ"], [0.95, "ˈ"]];
async function speak(ipa) {
  D.step = "inference";
  const t0 = performance.now(); let r = null, tries = 0;
  for (const [sp, pre] of TRIES) {
    tries++; r = await run(pre + String(ipa || ""), sp);
    let bad = 0; for (let i = 0; i < r.audio.length; i += 97) if (!Number.isFinite(r.audio[i])) { bad = 1; break; }
    if (!bad) break;
    r.audio = null;
  }
  if (!r.audio) throw new Error("nan output");
  return { ...r, tries, ms: Math.round(performance.now() - t0) };
}
async function run(ipa, speed) {
  const { ids, unk, ph } = toIds(ipa);
  if (!ids.length) throw new Error("no phonemes");
  const n = Math.min(ids.length, 509), row = voice.subarray(n * 256, n * 256 + 256);
  const out = await sess.run({
    input_ids: new ort.Tensor("int64", BigInt64Array.from([0, ...ids.slice(0, 509), 0].map(BigInt)), [1, n + 2]),
    style: new ort.Tensor("float32", Float32Array.from(row), [1, 256]),
    speed: new ort.Tensor("float32", new Float32Array([speed]), [1])
  });
  const w = (out.waveform || out[Object.keys(out)[0]]).data;
  return { audio: Float32Array.from(w), unk, ph };
}
onmessage = async (e) => {
  const m = e.data;
  try {
    if (m.type === "load") { if (!loading) loading = load(); const info = await loading; postMessage({ type: "ready", info }); }
    else if (m.type === "speak") { await loading; const r = await speak(m.ipa); postMessage({ type: "audio", id: m.id, ...r }, [r.audio.buffer]); }
  } catch (err) { if (m.type === "load") loading = null; postMessage({ type: "error", id: m.id, stage: m.type, step: dstep(err), status: err && err.meta ? err.meta.status : D.status, got: err && err.meta ? err.meta.got : D.got, want: err && err.meta ? err.meta.want : D.want, code: reason(err, m.type === "load" ? stage : "speak"), name: String(err && err.name || "Error"), message: String(err && err.message || err).slice(0, 200) }); }
};

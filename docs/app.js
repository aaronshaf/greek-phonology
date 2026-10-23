// greek-phonology playground. Loads the wasm build (byte-buffer ABI); falls back to the JS build.
const SCHEMES = [["koine", "Koine"], ["attic", "Attic"], ["erasmian", "Erasmian"], ["modern", "Modern"]];
const EXAMPLES = {
  koine: "Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν",
  attic: "ἄνδρα μοι ἔννεπε, μοῦσα, πολύτροπον, θάλασσα",
  erasmian: "Μακάριοι οἱ πτωχοὶ τῷ πνεύματι, ἡ χάρις",
  modern: "Πάτερ ἡμῶν ὁ ἐν τοῖς οὐρανοῖς, ὁ κόσμος",
};
const V = "18";
const $ = (id) => document.getElementById(id);
const scheme = () => ($("scheme").querySelector('[aria-checked="true"]') || {}).dataset?.v || "koine";
let lib = null, ready = false;
// Prerendered initial HTML (index.html, written by moonbit/tools/prerender.py). put() only touches the
// DOM when the HTML actually changes, so the first live render after loading changes nothing on screen.
const H = JSON.parse(document.getElementById("pre")?.textContent || "{}");
window.__H = H;
window.__render = () => { render(); runTool(); };
const put = (id, html) => { if (H[id] !== html) { $(id).innerHTML = html; H[id] = html; } };

async function loadWasm() {
  const imports = { spectest: { print_char: () => {} } };
  const { instance } = await WebAssembly.instantiateStreaming(fetch("greek-phonology.wasm?v=" + V), imports);
  const x = instance.exports;
  if (x._start) x._start();
  const enc = new TextEncoder(), dec = new TextDecoder();
  const call = (cmd, a0, a1 = "") => {
    x.in_clear();
    for (const b of enc.encode(a0)) x.in_push(b);
    x.in_push(0);
    for (const b of enc.encode(a1)) x.in_push(b);
    const n = x.run(cmd), out = new Uint8Array(n);
    for (let i = 0; i < n; i++) out[i] = x.out_get(i);
    return dec.decode(out);
  };
  const loadBytes = (bytes) => { x.in_clear(); for (const b of bytes) x.in_push(b); const n = x.run(3); let s = ""; for (let i = 0; i < n; i++) s += String.fromCharCode(x.out_get(i)); return +s; };
  return { kind: "wasm", detect: (i, t) => JSON.parse(call(0, i, t)), ipa: (t, s) => call(1, t, s), word: (w) => JSON.parse(call(2, w)), lookup: (w) => JSON.parse(call(4, w)), call: (f, a, b = "") => call(5, f, a + "\u0001" + b), loadBytes };
}

async function loadJs() {
  const src = await (await fetch("greek-phonology.js?v=" + V)).text();
  const module = { exports: {} };
  new Function("module", "exports", src)(module, module.exports);
  const m = module.exports;
  const loadBytes = (bytes) => { m.in_clear(); for (const b of bytes) m.in_push(b); m.run(3); return -1; };
  return { kind: "js", detect: (i, t) => JSON.parse(m.detect_json(i, t)), ipa: m.ipa, word: (w) => JSON.parse(m.word_json(w)), lookup: (w) => JSON.parse(m.lookup_json(w)), call: (f, a, b = "") => m.call(f, a, b), loadBytes };
}

function bars(probs, empty) {
  const top = empty ? null : SCHEMES.map((x) => x[0]).reduce((a, b) => ((probs[b] || 0) > (probs[a] || 0) ? b : a));
  return SCHEMES.map(([k, name]) => {
    const p = probs[k] || 0, pct = (100 * p).toFixed(1);
    return `<div class="prob${k === top ? " top" : ""}"><div class="lbl"><span>${name}</span><span class="pct">${empty ? "–" : pct + "%"}</span></div><sl-progress-bar value="${empty ? 0 : pct}" label="${name}: ${empty ? "no data" : pct + " percent"}"></sl-progress-bar></div>`;
  }).join("");
}

// IPA "a b | c d" -> one unbreakable span per word, normal spaces between words.
const ipaWords = (s) => String(s).split("|").map((w) => w.trim().split(/\s+/).join("")).filter(Boolean);
const ipaHtml = (s) => `<span class="ipaw">${ipaWords(s).map((w) => `<span>${esc(w)}</span>`).join(" ")}</span>`;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function render() {
  if (!ready) return;
  const ipa = $("ipa").value.trim(), text = $("greek").value.trim();
  if (ipa) {
    const d = lib.detect(ipa, text);
    put("probs", bars(d.probs));
    put("mode", d.mode === "aligned" ? "Compared with how each pronunciation reads the Greek above." : "No Greek text, so this guess uses the sounds alone (less certain).");
  } else {
    put("probs", bars({}, true));
    put("mode", '<span class="empty">No IPA yet.</span>');
  }
  const words = text.split(/[\s,.;·:!?()\[\]"“”]+/).filter(Boolean).slice(0, 40);
  const ctx = lib.call ? JSON.parse(lib.call("check_phrase_accents", text)) : [];
  const ctxFor = (i) => { const c = ctx[i]; if (!c) return "–"; return c.ok ? '<span class="ok">as expected</span>' : `<span class="bad">expected ${esc(c.expected)}</span>`; };
  const sc = scheme();
  const cards = words.map((w, i) => {
    const info = lib.word(w), lx = lib.lookup(w), wi = lib.ipa(w, sc);
    const syl = (info.syllables || []).map((x) => x.join("")).join(" · ");
    const law = info.accent_ok === null || info.accent_ok === undefined ? "–" : info.accent_ok ? '<span class="ok">follows the rules</span>' : '<span class="bad">accent is too far from the end</span>';
    const badges = lx ? [lx.nt && "NT", lx.lxx && "LXX"].filter(Boolean).map((b) => `<sl-badge class="found" pill>${b}</sl-badge> `).join("") + (lx.form !== w ? ` <span class="gk">${esc(lx.form)}</span>` : "") : '<sl-badge pill>not in NT/LXX</sl-badge>';
    return `<div class="wcard"><div class="w">${esc(w)}</div>
<div class="ln"><span class="k">IPA</span>${ipaHtml(wi)}${playBtn(wi)}</div>
<div class="ln"><span class="k">Syllables</span><span class="gk">${esc(syl)}</span></div>
<div class="ln"><span class="k">Accent</span>${law}</div>
<div class="ln"><span class="k">In context</span>${ctxFor(i)}</div>
<div class="ln">${badges}</div></div>`;
  });
  put("words", cards.length ? cards.join("") : '<p class="empty">No Greek text.</p>');
  put("ipaview", ipaHtml(ipa));
}

// The IPA box follows the Greek text automatically (typing, pasting, scheme change) until the user
// types or pastes their own IPA there; clearing the box makes it automatic again.
let ipaEdited = false;
function toIpa() { if (ready) { $("ipa").value = lib.ipa($("greek").value, scheme()); render(); } }

// Scheme change keeps the Greek text and regenerates the IPA from it; an empty Greek box gets
// that scheme's sample.
function schemeChanged() {
  if (!$("greek").value.trim()) $("greek").value = EXAMPLES[scheme()] || EXAMPLES.koine;
  ipaEdited = false; stopPlay();
  toIpa();
}
function setScheme(btn, focus) {
  for (const b of $("scheme").children) { const on = b === btn; b.setAttribute("aria-checked", on ? "true" : "false"); b.tabIndex = on ? 0 : -1; }
  if (focus) btn.focus();
  schemeChanged();
}
$("scheme").addEventListener("click", (e) => { const b = e.target.closest("button[role=radio]"); if (b && b.getAttribute("aria-checked") !== "true") setScheme(b); });
$("scheme").addEventListener("keydown", (e) => {
  const bs = [...$("scheme").children], i = bs.indexOf(document.activeElement); if (i < 0) return;
  const k = e.key, j = k === "ArrowRight" || k === "ArrowDown" ? (i + 1) % bs.length : k === "ArrowLeft" || k === "ArrowUp" ? (i - 1 + bs.length) % bs.length : k === "Home" ? 0 : k === "End" ? bs.length - 1 : -1;
  if (j >= 0) { e.preventDefault(); setScheme(bs[j], true); }
});
$("greek").addEventListener("sl-input", () => { if (!ipaEdited) toIpa(); else render(); });
$("ipa").addEventListener("sl-input", () => { ipaEdited = $("ipa").value.trim() !== ""; if (!ipaEdited) toIpa(); else render(); });

// ---- Play: speaks IPA (never the Greek text) with a small speech model run in the browser.
// Lazy: nothing downloads until the first press; the model is kept in Cache Storage afterwards.
const PLAY_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path class="i-play" d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z"/><rect class="i-stop" x="7" y="7" width="10" height="10" rx="1.5"/></svg>';
function playBtn(ipa) { return ipa ? `<button type="button" class="play" data-ipa="${esc(ipa)}" aria-label="Play" title="Play">${PLAY_SVG}</button>` : ""; }
const T = { w: null, st: "idle", ctx: null, src: null, btn: null, want: null, id: 0, cache: new Map() };
function stopPlay() {
  if (T.src) { try { T.src.onended = null; T.src.stop(); } catch {} T.src = null; }
  T.want = null; document.querySelectorAll(".play.playing, .play.busy").forEach((b) => b.classList.remove("playing", "busy"));
}
function playBuf(a, btn) {
  stopPlay();
  if (T.ctx.state !== "running") T.ctx.resume().catch(() => {});
  setTimeout(() => { if (T.ctx && T.ctx.state !== "running" && T.st !== "failed") ttsFail("audio output is blocked (" + T.ctx.state + ")", { code: "audio-" + T.ctx.state, step: "audio", name: "AudioContext", message: "state " + T.ctx.state }); }, 1500);
  const b = T.ctx.createBuffer(1, a.length, 24000); b.getChannelData(0).set(a);
  const s = T.ctx.createBufferSource(); s.buffer = b; s.connect(T.ctx.destination);
  s.onended = () => { if (T.src === s) { T.src = null; btn.classList.remove("playing"); } };
  T.src = s; btn.classList.add("playing"); s.start();
  let pk = 0, sq = 0; for (const x of a) { pk = Math.max(pk, Math.abs(x)); sq += x * x; }
  window.__ttsLast = { n: a.length, peak: pk, rms: Math.sqrt(sq / a.length) };
}
function speak(ipa, btn) {
  if (T.cache.has(ipa)) return playBuf(T.cache.get(ipa), btn);
  const id = ++T.id; T.want = { id, ipa, btn }; btn.classList.add("busy");
  T.w.postMessage({ type: "speak", id, ipa });
}
// Small dismissable toast with the error details (selectable, with Copy). Nothing is sent anywhere.
function ttsToast(m) {
  try {
    document.getElementById("tts-toast")?.remove();
    const ua = navigator.userAgent, iv = /OS (\d+[_.]\d+(?:[_.]\d+)?) like Mac/.exec(ua);
    const L = ["Play error [" + (m.code || m.stage || "load") + "]", "stage: " + (m.step || m.stage || "load"), "error: " + (m.name || "Error") + ": " + String(m.message || "").slice(0, 300)];
    if (m.status != null) L.push("http: " + m.status);
    if (m.want) L.push("bytes: " + (m.got || 0) + " / " + m.want);
    L.push("iOS: " + (iv ? iv[1].replace(/_/g, ".") : "no"), "ua: " + ua);
    const txt = L.join("\n"), box = document.createElement("div"); box.id = "tts-toast"; box.setAttribute("role", "status");
    box.style.cssText = "position:fixed;left:50%;bottom:max(12px,env(safe-area-inset-bottom));transform:translateX(-50%);z-index:9999;width:min(92vw,520px);box-sizing:border-box;background:#f7f7f5;color:#333;border:1px solid #d6d6d0;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,.12);font:12px/1.4 ui-monospace,Menlo,monospace;padding:8px 10px";
    const pre = document.createElement("pre"); pre.textContent = txt; pre.style.cssText = "margin:0 0 6px;white-space:pre-wrap;word-break:break-word;user-select:text;-webkit-user-select:text;max-height:40vh;overflow:auto";
    const bar = document.createElement("div"); bar.style.cssText = "display:flex;gap:8px;justify-content:flex-end";
    const btn = (t, f) => { const b = document.createElement("button"); b.type = "button"; b.textContent = t; b.style.cssText = "font:12px system-ui,sans-serif;background:#fff;color:#333;border:1px solid #ccc;border-radius:6px;padding:3px 10px;cursor:pointer"; b.onclick = f; bar.appendChild(b); return b; };
    const sel = () => { const r = document.createRange(); r.selectNodeContents(pre); const g = getSelection(); g.removeAllRanges(); g.addRange(r); try { document.execCommand("copy"); cp.textContent = "Copied"; } catch {} };
    const cp = btn("Copy", () => { try { navigator.clipboard.writeText(txt).then(() => { cp.textContent = "Copied"; }, sel); } catch { sel(); } });
    btn("Dismiss", () => box.remove()).setAttribute("aria-label", "Dismiss error details");
    box.append(pre, bar); document.body.appendChild(box);
  } catch {}
}
// Failure is never silent: every play button turns red with the reason in its tooltip.
function ttsFail(why, m) {
  why = why || "the speech model failed to load"; clearTimeout(T.dog);
  T.st = "failed"; if (T.w) { try { T.w.terminate(); } catch {} T.w = null; }
  const msg = "Playback unavailable: " + why + ". Reload to retry.";
  document.querySelectorAll(".play").forEach((b) => { b.classList.remove("loading", "busy", "playing"); b.disabled = true; b.title = msg; b.setAttribute("aria-label", msg);
    b.style.color = "#c0392b"; b.style.borderColor = "#c0392b"; b.style.opacity = ".7"; });
  console.warn("player", why);
  ttsToast(m || { stage: "load", message: why });
}
function watch() { clearTimeout(T.dog); T.dog = setTimeout(() => { if (T.st === "loading") ttsFail("the speech model didn't finish loading (low memory?) [timeout]", { code: "timeout", step: "load (no progress 45s)", message: "no progress 45s" }); }, 45000); }
// iOS: no audioSession "playback" (it blocks mic capture in other pages/tabs). The context must be
// created and resumed inside the tap, with a tiny buffer started to unlock output.
function unlock() {
  if (!T.ctx) T.ctx = new (window.AudioContext || window.webkitAudioContext)();
  try { if (T.ctx.state !== "running") T.ctx.resume().catch(() => {}); } catch {}
  try { const b = T.ctx.createBuffer(1, 1, T.ctx.sampleRate || 24000), s = T.ctx.createBufferSource(); s.buffer = b; s.connect(T.ctx.destination); s.start(0); } catch {}
}
function ttsInit(btn) {
  try { T.w = new Worker(new URL("tts-worker.js?v=" + V, import.meta.url), { type: "module" }); } catch (e) { return ttsFail("the speech worker could not start: " + e.message, { code: "worker-new", step: "worker", name: e.name, message: e.message }); }
  T.st = "loading"; T.btn = btn; btn.classList.add("loading"); btn.style.setProperty("--pp", "0.02"); watch();
  T.w.onerror = (e) => { ttsFail("the speech worker failed" + (e && e.message ? ": " + e.message : "")); };
  T.w.onmessageerror = () => ttsFail("the speech worker failed");
  T.w.onmessage = (e) => {
    const m = e.data;
    if (m.type === "progress") watch();
    if (m.type === "progress") T.btn.style.setProperty("--pp", String(Math.min(1, m.p)));
    else if (m.type === "ready") { clearTimeout(T.dog); T.st = "ready"; T.btn.classList.remove("loading"); window.__ttsInfo = m.info; const w = T.want; T.want = null; if (w) speak(w.ipa, w.btn); }
    else if (m.type === "audio") { window.__ttsMs = m.ms; const a = new Float32Array(m.audio); if (T.want && T.want.id === m.id) { const w = T.want; T.want = null; w.btn.classList.remove("busy"); T.cache.set(w.ipa, a); if (document.contains(w.btn)) playBuf(a, w.btn); } }
    else if (m.type === "error") { console.warn("player", m.stage, m.message); if (m.stage === "load") ttsFail("the speech model failed to load [" + (m.code || "load") + "] (" + m.message + ")", m); else { if (T.want && T.want.btn) T.want.btn.title = "Couldn't play that: " + m.message; stopPlay(); ttsToast(m); } }
  };
  T.w.postMessage({ type: "load" });
}
// Play is off for now: buttons hidden (html.noplay) and the speech worker/model never load. Set true to restore.
const PLAY_ON = false;
document.addEventListener("click", (e) => {
  if (!PLAY_ON) return;
  const btn = e.target.closest(".play"); if (!btn || btn.disabled || T.st === "failed") return;
  if (btn.classList.contains("playing")) return stopPlay();
  const ipa = btn.dataset.src === "ipa" ? $("ipa").value.trim() : btn.dataset.ipa; if (!ipa) return;
  try { unlock(); } catch { return ttsFail("audio is not available in this browser"); } // synchronously inside the tap (iOS)
  if (T.st === "idle") { T.want = { ipa, btn }; return ttsInit(btn); }
  if (T.st === "loading") { T.want = { ipa, btn }; return; } // one load; the latest press wins
  speak(ipa, btn);
});

const SCHEME_OPTS = ["koine", "attic", "erasmian", "modern"];
const PARADIGMS = ["present-active-indicative", "imperfect-active-indicative", "future-active-indicative", "future-middle-indicative", "middle-passive-indicative", "present-active-subjunctive"];
const TOOLS = [
  ["accentuate_phrase", "Accents in context: enclitics, proclitics, acute → grave. Type words with their dictionary accents.", "ἄνθρωπος τις ἦλθεν καί εἰ τις θέλει"],
  ["check_phrase_accents", "Checks the accents of a written phrase word by word against the rules.", "ἄνθρωπός τις ἦλθεν καὶ εἴ τις θέλει"],
  ["lexical_phrase", "Undoes context changes: graves back to acutes, extra enclitic accents removed.", "ἄνθρωπός τις ἦλθεν καὶ εἴ τις θέλει"],
  ["accentuate_verb", "Puts the recessive accent on a verb form.", "ἐλυομεν"],
  ["syllabify", "Splits a word into syllables.", "ἄνθρωπος"],
  ["add_acute", "Adds an acute to a letter.", "ε"],
  ["add_circumflex", "Adds a circumflex to a letter.", "ω"],
  ["remove_acutes", "Removes acute accents.", "ἄνθρωπός"],
  ["remove_graves", "Removes grave accents.", "καὶ τὸν λόγον"],
  ["remove_circumflexes", "Removes circumflex accents.", "τοῦ θεοῦ"],
  ["without_accents", "Strips every accent, breathing and iota subscript.", "ἐν ἀρχῇ ἦν ὁ λόγος"],
  ["contract", "Contracts adjacent vowels (Black's table).", "ποιεω"],
  ["amalgamate", "Combines consonant + σ (πσ → ψ, κσ → ξ, τσ → σ).", "γραφσω"],
  ["augmentize", "Adds the past-time prefix ἐ-.", "λυον"],
  ["conjugate", "Six forms of a verb stem (1st–3rd singular, then plural).", "λυ", PARADIGMS],
  ["extract_consonant_clusters", "Consonant clusters at the start of words in a text.", "στρατος κτισις πλοιον"],
  ["lookup", "Looks a word up in the NT/LXX word list (ignores case and accents if needed).", "λογος"],
  ["ipa", "Greek text → IPA in a chosen pronunciation.", "εὐαγγέλιον τοῦ θεοῦ", SCHEME_OPTS],
  ["detect", "Which pronunciation does this IPA sound like? (without the Greek text)", "e v a ŋ ɟ e l i o n"],
];
const item = (lab, val, cls = "") => `<div class="it">${lab ? `<span class="lab">${esc(lab)}</span>` : ""}<span class="${cls}">${val}</span></div>`;
const PERSONS = ["1st sg", "2nd sg", "3rd sg", "1st pl", "2nd pl", "3rd pl"];
function pretty(name, v) {
  if (v === null || v === undefined) return item("", "not found");
  if (name === "ipa") return `<div class="it">${ipaHtml(v)}</div>`;
  if (name === "detect") return Object.entries(v.probs).sort((a, b) => b[1] - a[1]).map(([k, p]) => item(k, (100 * p).toFixed(1) + "%")).join("");
  if (name === "check_phrase_accents") return v.map((x) => item("", `${esc(x.word)} ${x.ok ? '<span class="ok">✓</span>' : `<span class="bad">→ ${esc(x.expected)}</span>`}`)).join("");
  if (name === "conjugate") return v.map((f, i) => item(PERSONS[i] || "", esc(f))).join("");
  if (name === "syllabify") return item("", esc(v.map((x) => (Array.isArray(x) ? x.join("") : x)).join(" · ")));
  if (Array.isArray(v)) return v.length ? v.map((x) => item("", esc(Array.isArray(x) ? x.join("") : x))).join("") : item("", "(none)");
  if (typeof v === "object") return Object.entries(v).map(([k, x]) => item(k, esc(x))).join("");
  return item("", esc(v));
}
function runTool() {
  if (!ready) return;
  const t = TOOLS[toolIdx()];
  $("fnerr").innerHTML = "";
  try {
    const arg = String($("fnarg").value).trim();
    if (!arg) { put("fnout", '<p class="empty">No input.</p>'); $("copy").value = ""; return; }
    put("fnout", pretty(t[0], JSON.parse(lib.call(t[0], arg, t[3] ? $("fnarg2").value : ""))));
    $("copy").value = [...$("fnout").querySelectorAll(".it")].map((d) => d.innerText.replace(/\s+/g, " ").trim()).join("\n");
  } catch (e) {
    put("fnout", "");
    $("fnerr").innerHTML = `<sl-alert variant="danger" open>Can't process that input: ${esc(e.message)}</sl-alert>`;
  }
}
function pickTool() {
  const t = TOOLS[toolIdx()];
  $("fndesc").textContent = t[1]; $("fnarg").value = t[2];
  $("fnarg2").hidden = !t[3];
  if (t[3]) { $("fnarg2").innerHTML = t[3].map((o) => `<sl-option value="${o}">${o.replace(/-/g, " ")}</sl-option>`).join(""); $("fnarg2").value = t[3][0]; }
  runTool();
}
put("fn", TOOLS.map((t, i) => `<sl-option value="t${i}">${t[0].replace(/_/g, " ")}</sl-option>`).join(""));
const toolIdx = () => +String($("fn").value || "t0").slice(1);
$("fn").addEventListener("sl-change", pickTool);
$("fnarg").addEventListener("sl-input", runTool);
$("fnarg2").addEventListener("sl-change", runTool);

matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => document.documentElement.classList.toggle("sl-theme-dark", e.matches));
// Loading indicator: a thin top bar that index.html shows only if loading takes longer than ~500 ms.
const fail = (msg) => { document.documentElement.dataset.ready = "error"; $("loadbar").hidden = true; $("err").innerHTML = `<sl-alert variant="danger" open>${esc(msg)}</sl-alert>`; };

(async () => {
  const wasm = loadWasm().catch((e) => { console.warn("wasm failed, using JS build", e); return loadJs(); });
  const lex = fetch("greek-phonology-lexicon.bin?v=" + V).then((r) => (r.ok ? r.arrayBuffer() : Promise.reject(new Error("HTTP " + r.status))));
  await Promise.race([Promise.all(["sl-select", "sl-textarea", "sl-input"].map((t) => customElements.whenDefined(t))), new Promise((r) => setTimeout(r, 8000))]);
  await Promise.all(["greek", "ipa", "fn", "fnarg"].map((id) => $(id).updateComplete));
  lib = await wasm;
  try { lib.loadBytes(new Uint8Array(await lex)); } catch (e) { console.warn("word list failed", e); }
  ready = true;
  if (!$("fnarg").value) { $("fndesc").textContent = TOOLS[0][1]; $("fnarg").value = TOOLS[0][2]; }
  $("loadbar").hidden = true;
  if (!$("greek").value.trim()) $("greek").value = EXAMPLES[scheme()] || EXAMPLES.koine;
  if (!$("ipa").value.trim()) $("ipa").value = lib.ipa($("greek").value, scheme());
  render();
  runTool();
  document.documentElement.dataset.ready = "1";
})().catch((e) => fail("The library failed to load: " + e.message));

// greek-phonology playground. Loads the wasm build (byte-buffer ABI); falls back to the JS build.
const SCHEMES = [["koine", "Koine"], ["attic", "Restored Attic"], ["erasmian", "Erasmian"], ["modern", "Modern Greek"], ["byzantine", "Byzantine"]];
const EXAMPLES = {
  koine: "Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν",
  attic: "ἄνδρα μοι ἔννεπε, μοῦσα, πολύτροπον",
  erasmian: "Μακάριοι οἱ πτωχοὶ τῷ πνεύματι",
  modern: "Πάτερ ἡμῶν ὁ ἐν τοῖς οὐρανοῖς",
  byzantine: "οἱ υἱοὶ τῆς γῆς εὐλογοῦσιν",
};
const $ = (id) => document.getElementById(id);
let lib = null;

async function loadWasm() {
  const imports = { spectest: { print_char: () => {} } };
  const { instance } = await WebAssembly.instantiateStreaming(fetch("greek-phonology.wasm"), imports);
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
  return { kind: "wasm", detect: (i, t) => JSON.parse(call(0, i, t)), ipa: (t, s) => call(1, t, s), word: (w) => JSON.parse(call(2, w)), lookup: (w) => JSON.parse(call(4, w)), loadBytes };
}

async function loadJs() {
  const src = await (await fetch("greek-phonology.js")).text();
  const module = { exports: {} };
  new Function("module", "exports", src)(module, module.exports);
  const m = module.exports;
  const loadBytes = (bytes) => { m.in_clear(); for (const b of bytes) m.in_push(b); m.run(3); return -1; };
  return { kind: "js", detect: (i, t) => JSON.parse(m.detect_json(i, t)), ipa: m.ipa, word: (w) => JSON.parse(m.word_json(w)), lookup: (w) => JSON.parse(m.lookup_json(w)), loadBytes };
}

function bars(probs) {
  return SCHEMES.map(([k, name]) => {
    const p = probs[k] || 0;
    return `<div class="bar"><span>${name}</span><div class="track"><div class="fill" style="width:${(100 * p).toFixed(1)}%"></div></div><span>${(100 * p).toFixed(1)}%</span></div>`;
  }).join("");
}

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function render() {
  if (!lib) return;
  const ipa = $("ipa").value.trim(), text = $("greek").value.trim();
  if (ipa) {
    const d = lib.detect(ipa, text);
    $("probs").innerHTML = bars(d.probs);
    $("mode").textContent = d.mode === "aligned" ? "Compared phone by phone against the Greek text." : "No Greek text given: judged from typical sound patterns only (less certain).";
  } else {
    $("probs").innerHTML = bars({});
    $("mode").textContent = "Type or generate some IPA above.";
  }
  const words = text.split(/[\s,.;·:!?()\[\]"“”'’]+/).filter(Boolean).slice(0, 40);
  const rows = words.map((w) => {
    const info = lib.word(w), lx = lib.lookup(w);
    const syl = (info.syllables || []).map((s) => s.join("")).join("·");
    const law = info.accent_ok === null || info.accent_ok === undefined ? "–" : info.accent_ok ? '<span class="ok">follows the rules</span>' : '<span class="bad">breaks the law of limitation</span>';
    const dict = lx ? `${esc(lx.form)} (${[lx.nt && "NT", lx.lxx && "LXX"].filter(Boolean).join(", ")}${lx.match !== "exact" ? ", matched ignoring " + (lx.match === "fold" ? "case" : "accents") : ""})` : "not found";
    return `<tr><td>${esc(w)}</td><td>${esc(syl)}</td><td>${law}</td><td>${dict}</td></tr>`;
  });
  $("words").innerHTML = rows.length ? `<table><tr><th>Word</th><th>Syllables</th><th>Accent</th><th>In NT/LXX word list</th></tr>${rows.join("")}</table>` : "";
}

function toIpa() { if (lib) { $("ipa").value = lib.ipa($("greek").value, $("scheme").value); render(); } }

document.querySelectorAll("button[data-ex]").forEach((b) => b.addEventListener("click", () => {
  $("greek").value = EXAMPLES[b.dataset.ex]; $("scheme").value = b.dataset.ex; toIpa();
}));
$("toipa").addEventListener("click", toIpa);
$("scheme").addEventListener("change", toIpa);
$("greek").addEventListener("input", render);
$("ipa").addEventListener("input", render);

(async () => {
  try { lib = await loadWasm(); } catch (e) { console.warn("wasm failed, using JS build", e); lib = await loadJs(); }
  toIpa();
  $("status").textContent = `Running on ${lib.kind}. Loading NT + LXX word list…`;
  const bytes = new Uint8Array(await (await fetch("greek-phonology-lexicon.bin")).arrayBuffer());
  lib.loadBytes(bytes);
  $("status").textContent = `Running on ${lib.kind}, fully in your browser. Word list: SBLGNT (CC BY 4.0) + Rahlfs LXX forms.`;
  render();
})();

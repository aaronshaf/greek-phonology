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
  return { kind: "wasm", detect: (i, t) => JSON.parse(call(0, i, t)), ipa: (t, s) => call(1, t, s), word: (w) => JSON.parse(call(2, w)), lookup: (w) => JSON.parse(call(4, w)), call: (f, a, b = "") => call(5, f, a + "\u0001" + b), loadBytes };
}

async function loadJs() {
  const src = await (await fetch("greek-phonology.js")).text();
  const module = { exports: {} };
  new Function("module", "exports", src)(module, module.exports);
  const m = module.exports;
  const loadBytes = (bytes) => { m.in_clear(); for (const b of bytes) m.in_push(b); m.run(3); return -1; };
  return { kind: "js", detect: (i, t) => JSON.parse(m.detect_json(i, t)), ipa: m.ipa, word: (w) => JSON.parse(m.word_json(w)), lookup: (w) => JSON.parse(m.lookup_json(w)), call: (f, a, b = "") => m.call(f, a, b), loadBytes };
}

function bars(probs) {
  return SCHEMES.map(([k, name]) => {
    const p = probs[k] || 0;
    return `<div class="bar"><span class="name">${name}</span><div class="track"><div class="fill" style="width:${(100 * p).toFixed(1)}%"></div></div><span class="pct">${(100 * p).toFixed(1)}%</span></div>`;
  }).join("");
}

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function render() {
  if (!lib) return;
  const ipa = $("ipa").value.trim(), text = $("greek").value.trim();
  if (ipa) {
    const d = lib.detect(ipa, text);
    $("probs").innerHTML = bars(d.probs);
    $("mode").classList.remove("skel");
    $("mode").textContent = d.mode === "aligned" ? "Compared phone by phone against the Greek text." : "No Greek text given: judged from typical sound patterns only (less certain).";
  } else {
    $("probs").innerHTML = bars({});
    $("mode").textContent = "Type or generate some IPA above.";
  }
  const words = text.split(/[\s,.;·:!?()\[\]"“”]+/).filter(Boolean).slice(0, 40);
  const ctx = lib.call ? JSON.parse(lib.call("check_phrase_accents", text)) : [];
  const ctxFor = (i) => { const c = ctx[i]; if (!c) return "–"; return c.ok ? '<span class="ok">as expected</span>' : `<span class="bad">expected ${esc(c.expected)}</span>`; };
  const rows = words.map((w, i) => {
    const info = lib.word(w), lx = lib.lookup(w);
    const syl = (info.syllables || []).map((s) => s.join("")).join("·");
    const law = info.accent_ok === null || info.accent_ok === undefined ? "–" : info.accent_ok ? '<span class="ok">follows the rules</span>' : '<span class="bad">breaks the law of limitation</span>';
    const dict = lx ? `${esc(lx.form)} (${[lx.nt && "NT", lx.lxx && "LXX"].filter(Boolean).join(", ")}${lx.match !== "exact" ? ", matched ignoring " + (lx.match === "fold" ? "case" : "accents") : ""})` : "not found";
    return `<tr><td class="gk" data-label="Word">${esc(w)}</td><td class="gk" data-label="Syllables">${esc(syl)}</td><td data-label="Accent">${law}</td><td data-label="In context">${ctxFor(i)}</td><td data-label="NT/LXX word list">${dict}</td></tr>`;
  });
  $("words").innerHTML = rows.length ? `<div class="tablewrap"><table><tr class="head"><th>Word</th><th>Syllables</th><th>Accent</th><th>Accent in context</th><th>In NT/LXX word list</th></tr>${rows.join("")}</table></div>` : "";
}

function toIpa() { if (lib) { $("ipa").value = lib.ipa($("greek").value, $("scheme").value); render(); } }

document.querySelectorAll("button[data-ex]").forEach((b) => b.addEventListener("click", () => {
  $("greek").value = EXAMPLES[b.dataset.ex]; $("scheme").value = b.dataset.ex; toIpa();
}));
$("toipa").addEventListener("click", toIpa);
$("scheme").addEventListener("change", toIpa);
$("greek").addEventListener("input", render);
$("ipa").addEventListener("input", render);

const SCHEME_OPTS = ["koine", "attic", "erasmian", "modern", "byzantine"];
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
function pretty(v) {
  if (Array.isArray(v) && v.length && typeof v[0] === "object" && v[0] && "word" in v[0])
    return v.map((x) => `${x.word}  ${x.ok ? "✓" : "→ expected " + x.expected}`).join("\n");
  if (Array.isArray(v)) return v.map((x) => (Array.isArray(x) ? x.join("") : x)).join(Array.isArray(v[0]) ? " · " : "\n");
  if (v && typeof v === "object" && v.probs) return Object.entries(v.probs).sort((a, b) => b[1] - a[1]).map(([k, p]) => `${k.padEnd(10)} ${(100 * p).toFixed(1)}%`).join("\n");
  if (v && typeof v === "object") return Object.entries(v).map(([k, x]) => `${k}: ${x}`).join("\n");
  if (v === null) return "not found";
  return String(v);
}
function runTool() {
  if (!lib) return;
  const t = TOOLS[$("fn").selectedIndex];
  try { $("fnout").textContent = pretty(JSON.parse(lib.call(t[0], $("fnarg").value.trim(), t[3] ? $("fnarg2").value : ""))); }
  catch (e) { $("fnout").textContent = "error: " + e.message; }
}
function pickTool() {
  const t = TOOLS[$("fn").selectedIndex];
  $("fndesc").textContent = t[1]; $("fnarg").value = t[2];
  $("fnarg2wrap").hidden = !t[3];
  if (t[3]) $("fnarg2").innerHTML = t[3].map((o) => `<option>${o}</option>`).join("");
  runTool();
}
$("fn").innerHTML = TOOLS.map((t) => `<option>${t[0]}</option>`).join("");
$("fn").addEventListener("change", pickTool);
$("fnarg").addEventListener("input", runTool);
$("fnarg2").addEventListener("change", runTool);
$("fndesc").textContent = TOOLS[0][1]; $("fnarg").value = TOOLS[0][2];

(async () => {
  $("probs").innerHTML = bars({}); // same layout before the wasm arrives: no shift
  try { lib = await loadWasm(); } catch (e) { console.warn("wasm failed, using JS build", e); lib = await loadJs(); }
  toIpa();
  $("status").textContent = `Running on ${lib.kind}. Loading NT + LXX word list…`;
  const bytes = new Uint8Array(await (await fetch("greek-phonology-lexicon.bin")).arrayBuffer());
  lib.loadBytes(bytes);
  $("status").textContent = `Running on ${lib.kind}, fully in your browser. Word list: SBLGNT (CC BY 4.0) + Rahlfs LXX forms.`;
  render();
  pickTool();
})();

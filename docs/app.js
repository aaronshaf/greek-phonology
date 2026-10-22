// greek-phonology playground. Loads the wasm build (byte-buffer ABI); falls back to the JS build.
const SCHEMES = [["koine", "Koine"], ["attic", "Restored Attic"], ["erasmian", "Erasmian"], ["modern", "Modern Greek"]];
const EXAMPLES = {
  koine: "Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν",
  attic: "ἄνδρα μοι ἔννεπε, μοῦσα, πολύτροπον, θάλασσα",
  erasmian: "Μακάριοι οἱ πτωχοὶ τῷ πνεύματι, ἡ χάρις",
  modern: "Πάτερ ἡμῶν ὁ ἐν τοῖς οὐρανοῖς, ὁ κόσμος",
};
const V = "15";
const $ = (id) => document.getElementById(id);
const scheme = () => $("scheme").value || $("scheme").getAttribute("value") || "koine";
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
    put("mode", d.mode === "aligned" ? "Aligned to the Greek text." : "No Greek text: sound patterns only (less certain).");
  } else {
    put("probs", bars({}, true));
    put("mode", '<span class="empty">No IPA yet.</span>');
  }
  const words = text.split(/[\s,.;·:!?()\[\]"“”]+/).filter(Boolean).slice(0, 40);
  const ctx = lib.call ? JSON.parse(lib.call("check_phrase_accents", text)) : [];
  const ctxFor = (i) => { const c = ctx[i]; if (!c) return "–"; return c.ok ? '<span class="ok">as expected</span>' : `<span class="bad">expected ${esc(c.expected)}</span>`; };
  const sc = scheme();
  const cards = words.map((w, i) => {
    const info = lib.word(w), lx = lib.lookup(w);
    const syl = (info.syllables || []).map((x) => x.join("")).join(" · ");
    const law = info.accent_ok === null || info.accent_ok === undefined ? "–" : info.accent_ok ? '<span class="ok">follows the rules</span>' : '<span class="bad">breaks the law of limitation</span>';
    const badges = lx ? [lx.nt && "NT", lx.lxx && "LXX"].filter(Boolean).map((b) => `<sl-badge class="found" pill>${b}</sl-badge> `).join("") + (lx.form !== w ? ` <span class="gk">${esc(lx.form)}</span>` : "") : '<sl-badge pill>not in NT/LXX</sl-badge>';
    return `<div class="wcard"><div class="w">${esc(w)}</div>
<div class="ln"><span class="k">IPA</span>${ipaHtml(lib.ipa(w, sc))}</div>
<div class="ln"><span class="k">Syllables</span><span class="gk">${esc(syl)}</span></div>
<div class="ln"><span class="k">Accent</span>${law}</div>
<div class="ln"><span class="k">In context</span>${ctxFor(i)}</div>
<div class="ln">${badges}</div></div>`;
  });
  put("words", cards.length ? cards.join("") : '<p class="empty">No Greek text.</p>');
  put("ipaview", ipaHtml(ipa));
}

function toIpa() { if (ready) { $("ipa").value = lib.ipa($("greek").value, scheme()); render(); } }

// Scheme change keeps the Greek text and regenerates the IPA from it; an empty Greek box gets
// that scheme's sample.
function schemeChanged() {
  if (!$("greek").value.trim()) $("greek").value = EXAMPLES[scheme()] || EXAMPLES.koine;
  toIpa();
}
$("toipa").addEventListener("click", toIpa);
$("scheme").addEventListener("sl-change", schemeChanged);
$("greek").addEventListener("sl-input", render);
$("ipa").addEventListener("sl-input", render);

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
  await Promise.all(["greek", "scheme", "ipa", "fn", "fnarg"].map((id) => $(id).updateComplete));
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

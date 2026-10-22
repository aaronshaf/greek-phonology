// Parity: MoonBit JS build vs the original koine-lexer TypeScript, function by function.
// The TypeScript was removed from the repo; its outputs are frozen in tests/kl_golden.json.gz
// (generated from the last TS version, tsc CommonJS, on every 7th of the 56,760 SBLGNT+LXX forms
// and their unaccented copies, plus data/verb_sample.json and ten verb paradigms).
// usage: node tools/kl_parity.cjs   (after `moon build --target js --release`)
// Prints exact-match counts. accentuate_verb / conjugate mismatches are scored against the
// attested accented form (SBLGNT/LXX) so "beats" can be checked.
const fs = require("fs"), path = require("path"), zlib = require("zlib");
const G = JSON.parse(zlib.gunzipSync(fs.readFileSync(path.join(__dirname, "../tests/kl_golden.json.gz"))));
const mb = require(path.join(__dirname, "../_build/js/release/build/api/api.js"));
const call = (f, a, b = "") => JSON.parse(mb.call(f, a, b));
const log = (s) => process.stdout.write(s + "\n");
const nfc = (s) => (typeof s === "string" ? s.normalize("NFC") : s);
const same = (a, b) => JSON.stringify(nfc(a)) === JSON.stringify(nfc(b));
let fails = 0;
for (const [f, rows] of Object.entries(G.exact)) {
  let ok = 0; const bad = [];
  for (const [w, a] of rows) { const b = call(f, w); if (same(a, b)) ok++; else bad.push([w, a, b]); }
  fails += bad.length;
  log(`${f}: ${ok}/${rows.length} identical${bad.length ? "  e.g. " + JSON.stringify(bad.slice(0, 2)) : ""}`);
}
{ const [t, a] = G.clusters; const b = call("extract_consonant_clusters", t);
  log(`extract_consonant_clusters: ${same(a, b) ? "identical" : "DIFF"} (${a.length} clusters)`); if (!same(a, b)) fails++; }
let agree = 0, tsOk = 0, mbOk = 0; const worse = [];
const strip = (s) => s.normalize("NFD").replace(/[\u0300\u0301\u0342]/g, "").normalize("NFC");
for (const [v, a] of G.accentuate_verb) {
  const b = call("accentuate_verb", strip(v));
  const truth = v.normalize("NFD").replace(/\u0300/g, "\u0301").normalize("NFC");
  if (a === b) agree++; if (a === truth) tsOk++; if (b === truth) mbOk++;
  if (a === truth && b !== truth) worse.push([v, a, b]);
}
log(`accentuate_verb: ${G.accentuate_verb.length} attested verb forms; agree ${agree}; correct TS ${tsOk}, MoonBit ${mbOk}; MoonBit wrong where TS right: ${worse.length} ${JSON.stringify(worse.slice(0, 3))}`);
let cAgree = 0, cTot = 0; const tsErr = new Set(), stems = new Set();
for (const { lex, stem, name, ts } of G.conjugate) {
  cTot += 6;
  if (!stems.has(lex)) { stems.add(lex); if (call("verb_stem", lex) !== stem) fails++; }
  if (ts === null) { tsErr.add(name); continue; }
  const b = call("conjugate", stem, name); ts.forEach((x, i) => { if (x === b[i]) cAgree++; });
}
log(`conjugate: ${cAgree}/${cTot} forms identical to TS (differences come from accentuate_verb); TS crashed on: ${[...tsErr].join(", ") || "none"}; verb_stem identical`);
process.exit(fails ? 1 : 0);

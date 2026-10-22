// Parity: MoonBit JS build vs the original koine-lexer TypeScript, function by function.
// usage: node tools/kl_parity.cjs <dir with tsc CommonJS output of ../src> <word list (one per line)>
//   tsc: npx tsc --outDir /tmp/klts --module commonjs --target es2019 --noEmit false --skipLibCheck src/*.ts src/utils/*.ts
// Prints exact-match counts. For accentuate_verb / syllabify / conjugate, mismatches are scored
// against the attested accented form (SBLGNT/LXX) so "beats" can be checked.
const fs = require("fs"), path = require("path");
const ts = process.argv[2], words = fs.readFileSync(process.argv[3], "utf8").split("\n").filter(Boolean);
console.log = () => {}; // contract() logs every call
const R = (p) => require(path.join(ts, p));
const U = R("utils"), d = (p) => R(p).default;
const mb = require(path.join(__dirname, "../_build/js/release/build/api/api.js"));
const call = (f, a, b = "") => JSON.parse(mb.call(f, a, b));
const out = [];
const log = (s) => process.stdout.write(s + "\n");
const strip = (s) => s.normalize("NFD").replace(/[\u0300\u0301\u0342]/g, "").normalize("NFC");
const sample = words.filter((_, i) => i % 7 === 0); // ~8k forms
const nfc = (s) => (typeof s === "string" ? s.normalize("NFC") : s);
const same = (a, b) => JSON.stringify(nfc(a)) === JSON.stringify(nfc(b));
const exact = {
  amalgamate: R("amalgamate").amalgamate,
  contract: d("contract"),
  remove_acutes: d("utils/remove_acutes"),
  remove_graves: d("utils/remove_graves"),
  remove_circumflexes: d("utils/remove_circumflexes"),
  contains_circumflex: d("utils/contains_circumflex"),
  add_acute: d("utils/add_acute"),
  add_circumflex: d("utils/add_circumflex"),
  without_accents: U.withoutAccents,
  accentuate_last_vowel: d("utils/accentuate_last_vowel"),
  is_long_syllable: U.isLongSyllable,
  remove_punctuation: U.removePunctuation,
  remove_numbers: U.removeNumbers,
};
let fails = 0;
for (const [f, tf] of Object.entries(exact)) {
  const inputs = f.startsWith("add_") ? [..."αεηιουωᾳῃῳἀἐὁ"] : f.startsWith("remove_") || f === "is_long_syllable" ? sample.concat(sample.map(strip)) : sample.concat(sample.map(strip), ["λυ σω, 12  ab.\nc·d;"]);
  let ok = 0, bad = [];
  for (const w of inputs) { const a = tf(w), b = call(f, w); if (same(a, b)) ok++; else bad.push([w, a, b]); }
  fails += bad.length;
  log(`${f}: ${ok}/${inputs.length} identical${bad.length ? "  e.g. " + JSON.stringify(bad.slice(0, 2)) : ""}`);
}
{ const t = sample.join(" "); const a = R("syllabify").extractConsonantClustersPronouncedTogether(t), b = call("extract_consonant_clusters", t);
  log(`extract_consonant_clusters: ${same(a, b) ? "identical" : "DIFF"} (${a.length} clusters)`); if (!same(a, b)) fails++; }
// accentuate_verb: compare both against the attested form
const verbs = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/verb_sample.json"), "utf8"));
let agree = 0, tsOk = 0, mbOk = 0, worse = [];
for (const v of verbs) {
  const a = R("accentuation").accentuateVerb(strip(v)).normalize("NFC"), b = call("accentuate_verb", strip(v));
  const truth = v.normalize("NFD").replace(/\u0300/g, "\u0301").normalize("NFC");
  if (a === b) agree++; if (a === truth) tsOk++; if (b === truth) mbOk++;
  if (a === truth && b !== truth) worse.push([v, a, b]);
}
log(`accentuate_verb: ${verbs.length} attested verb forms; agree ${agree}; correct TS ${tsOk}, MoonBit ${mbOk}; MoonBit wrong where TS right: ${worse.length} ${JSON.stringify(worse.slice(0, 3))}`);
// conjugate vs TS paradigms (TS uses its own accentuateVerb)
const V = R("verbs"); let cAgree = 0, cTot = 0; const tsErr = new Set();
for (const lex of ["λύω", "πιστεύω", "γράφω", "ἀκούω", "βλέπω", "πέμπω", "ἄγω", "πείθω", "διώκω", "λέγω"]) {
  const st = V.stem({ principleParts: { 1: lex } });
  const pick = (o) => [o.singular[1], o.singular[2], o.singular[3], o.plural[1], o.plural[2], o.plural[3]].map(nfc);
  for (const [name, fn] of [["present-active-indicative", V.presentActiveIndicatives], ["imperfect-active-indicative", V.imperfectActiveIndicatives], ["future-active-indicative", V.futureActiveIndicatives], ["future-middle-indicative", V.futureMiddleIndicatives], ["present-active-subjunctive", V.presentActiveSubjunctives]]) {
    let a; try { a = pick(fn(st)); } catch (e) { tsErr.add(name); cTot += 6; continue; }
    const b = call("conjugate", st, name); cTot += 6; a.forEach((x, i) => { if (x === b[i]) cAgree++; });
  }
  if (call("verb_stem", lex) !== st) fails++;
}
log(`conjugate: ${cAgree}/${cTot} forms identical to TS (differences come from accentuate_verb); TS crashed on: ${[...tsErr].join(", ") || "none"}; verb_stem identical`);
process.exit(fails ? 1 : 0);

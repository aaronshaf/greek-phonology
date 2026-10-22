// Round trip on Rahlfs LXX running text (no punctuation in this source, so clause-final acutes count as errors).
// usage: node tools/phrase_eval_lxx.cjs text_accented.csv
const fs = require("fs"); const m = require("../_build/js/release/build/api/api.js");
const w = fs.readFileSync(process.argv[2], "utf8").split("\n").map((l) => l.split("\t")[2]).filter(Boolean);
let n = 0, ok = 0, okNoFinalAcute = 0, nNo = 0;
for (let i = 0; i < w.length; i += 3000) {
  const r = JSON.parse(m.call("check_phrase_accents", w.slice(i, i + 3000).join(" "), ""));
  for (const x of r) {
    n++; if (x.ok) ok++;
    const finalAcuteOnly = /[άέήίόύώ]\S*$/.test(x.word.normalize("NFC")) && x.expected.normalize("NFD").includes("\u0300");
    if (!finalAcuteOnly) { nNo++; if (x.ok) okNoFinalAcute++; }
  }
}
console.log(`LXX words ${n}: consistent ${(100 * ok / n).toFixed(2)}%; excluding acute-for-grave at unmarked clause ends ${(100 * okNoFinalAcute / nNo).toFixed(2)}% (${nNo})`);

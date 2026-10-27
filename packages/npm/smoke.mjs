// Local smoke test for the built package. Not part of the published file list.
import assert from "node:assert/strict";
import {
  ipa, g2p, phoneDistance, phoneCredit, hearingCredit, unitHearingCredit, alignPhonesJson, creditLevel,
  CREDIT_LEVEL_CLOSE, CREDIT_LEVEL_LIGHT, CREDIT_LEVEL_MEDIUM, CREDIT_LEVEL_CLEAR, CREDIT_LEVEL_DEEPEST,
  schemeId, distTable, detect, call, loadLexicon, lookup, word,
} from "./index.js";

assert.equal(ipa("θεός", "attic"), "tʰ e o s");
const units = g2p("αι", "modern");
assert.equal(units.v, 1);
assert.equal(units.words[0].units.map((u) => u.t).join(""), "αι");
assert.equal(units.words[0].phones.join(" "), ipa("αι", "modern"));
assert.equal(g2p("εὖ", "koine").words[0].phones.join(" "), "ɛ v");
assert.equal(ipa("εὖ τοῦ", "koine"), "ɛ v | t u");
assert.equal(g2p("εὖ τοῦ", "koine", "ctx").words[0].phones.join(" "), "ɛ f");
const near = phoneDistance("ð", "d", "koine", "gracious");
const strict = phoneDistance("ð", "d", "koine", "strict");
assert.equal(near.tier, "tolerated");
assert.equal(strict.tier, "not-a-match");
assert.equal(strict.note, near.note);
assert.equal(strict.advice, near.advice);
assert.equal(strict.d, near.d);
assert.equal(phoneCredit("ð", "koine", "gracious", "d=0.55,z=0.41").best.phone, "z");
const typed = hearingCredit("ð", [["d", 0.55], ["z", 0.41]], "koine", "gracious");
const text = hearingCredit("ð", "d=0.55,z=0.41", "koine", "gracious");
assert.equal(typed.best.phone, "z");
assert.equal(typed.combined, text.combined);
assert.equal(typed.note, text.note);
assert.equal(typed.combined, phoneCredit("ð", "koine", "gracious", "d=0.55,z=0.41").combined);
const beta = unitHearingCredit(
  g2p("εὖ", "koine", "alts").words[0].units[0],
  [{ phone: "β", p: 1 }],
  "koine",
  "gracious",
);
assert.match(beta.note, /Nothing needs fixing/);
assert.equal(CREDIT_LEVEL_CLOSE, 8);
assert.equal(CREDIT_LEVEL_LIGHT, 30);
assert.equal(CREDIT_LEVEL_MEDIUM, 60);
assert.equal(CREDIT_LEVEL_CLEAR, 85);
assert.equal(CREDIT_LEVEL_DEEPEST, 95);
assert.equal(creditLevel(0.07), "none");
assert.equal(creditLevel(0.08), "close tint");
assert.equal(creditLevel(0.95), "deepest");
assert.equal(creditLevel(0.5, { medium: 40, clear: 80 }), "medium");
assert.equal(schemeId("koine"), "koine");
assert.equal(schemeId("attic-reconstructed"), "attic");
assert.equal(schemeId("grc-modern-style"), "modern");
assert.equal(schemeId("grc-erasmian-us"), "erasmian");
assert.equal(ipa("αι", "attic-reconstructed"), "");
assert.equal(distTable("koine").goal_default, "gracious");
const alt = g2p("εὖ", "koine", "alts").words[0].units[0].alts.find((a) => a.heard.join(" ") === "ɛ f");
assert.equal(alt.tier, "tolerated");
assert.match(alt.note, /more accurate/);
const detected = detect("e n | a r x i");
assert.equal(typeof detected.probs.koine, "number");
assert.equal(call("accentuate_verb", "λυομεν"), "λύομεν");
const one = alignPhonesJson({
  vocab: ["", "a"],
  T: 1,
  V: 2,
  spf: 0.02,
  lp: [Math.log(0.2), Math.log(0.8)],
  lane: { tgt: ["a"], phones: ["a"], start: [0], wlen: [1] },
});
assert.ok(one.words[0].score >= 80);
assert.equal(alignPhonesJson("{").overall, 0);
assert.deepEqual(alignPhonesJson("{").words, []);
assert.equal(call("without_accents", "a\tb"), "a\tb");
const info = word("λόγος");
assert.ok(Array.isArray(info.syllables));
assert.equal(info.accent_ok, true);
loadLexicon();
const hit = lookup("λογος");
assert.ok(hit);
assert.equal(hit.form, "λόγος");
console.log("npm smoke ok");

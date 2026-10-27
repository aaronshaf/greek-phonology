// Local smoke test for the built package. Not part of the published file list.
import assert from "node:assert/strict";
import { ipa, detect, call, loadLexicon, lookup, word } from "./index.js";

assert.equal(ipa("θεός", "attic"), "tʰ e o s");
const detected = detect("e n | a r x i");
assert.equal(typeof detected.probs.koine, "number");
assert.equal(call("accentuate_verb", "λυομεν"), "λύομεν");
assert.equal(call("without_accents", "a\tb"), "a\tb");
const info = word("λόγος");
assert.ok(Array.isArray(info.syllables));
assert.equal(info.accent_ok, true);
loadLexicon();
const hit = lookup("λογος");
assert.ok(hit);
assert.equal(hit.form, "λόγος");
console.log("npm smoke ok");

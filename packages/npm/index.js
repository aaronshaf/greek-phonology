// ESM entry for greek-phonology (MoonBit JS build). See README.
import { createRequire } from "node:module";
import { readFileSync } from "node:fs";
const require = createRequire(import.meta.url);
const m = require("./greek-phonology.cjs");
const j = (s) => JSON.parse(s);
/** Greek text to space-separated IPA in one scheme. */
export const ipa = (text, scheme) => m.ipa(text, scheme);
/** Scheme probabilities for an IPA string (optionally with the Greek text it reads). */
export const detect = (ipaText, greekText = "") => j(m.detect_json(ipaText, greekText));
/** Syllables, accent and lexicon info for one word. */
export const word = (w) => j(m.word_json(w));
/** Look a form up in the NT + LXX word list (call loadLexicon first). */
export const lookup = (w) => j(m.lookup_json(w));
/** Call any library function by name; returns parsed JSON. */
export const call = (name, arg = "", arg2 = "") => j(m.call(name, arg, arg2));
let loaded = false;
/** Load the bundled SBLGNT + Rahlfs LXX word list (enables lookup and accent restoration). */
export function loadLexicon(bytes = readFileSync(new URL("./greek-phonology-lexicon.bin", import.meta.url))) {
  if (loaded) return; m.in_clear(); for (const b of bytes) m.in_push(b); m.run(3); loaded = true;
}
export const wasmPath = new URL("./greek-phonology.wasm", import.meta.url);
export default { ipa, detect, word, lookup, call, loadLexicon, wasmPath };

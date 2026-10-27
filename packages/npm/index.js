// ESM entry for greek-phonology (MoonBit JS build). See README.
import { createRequire } from "node:module";
import { readFileSync } from "node:fs";
const require = createRequire(import.meta.url);
const m = require("./greek-phonology.cjs");
const j = (s) => JSON.parse(s);
/** Greek text to space-separated IPA in one scheme. */
export const ipa = (text, scheme) => m.ipa(text, scheme);
/** Grapheme units for one reading. flags is a comma list: "alts", "ctx". Both default off. */
export const g2p = (text, scheme, flags = "") => j(m.g2p_json_flags(text, scheme, flags));
/** Graded distance between a target phone and a heard phone. goal: strict | gracious | lenient. */
export const phoneDistance = (target, heard, scheme = "", goal = "") =>
  j(m.phone_distance_json(target, heard, scheme, goal));
/** Credit for a recognizer posterior, "phone=weight" pairs separated by commas. */
export const phoneCredit = (target, scheme = "", goal = "", posterior = "") =>
  j(m.phone_credit_json(target, scheme, goal, posterior));
function posteriorText(posterior) {
  if (typeof posterior === "string") return posterior;
  if (Array.isArray(posterior)) return JSON.stringify(posterior);
  return "";
}
/** Same credit as phoneCredit, plus the note for the best alternate. */
export const hearingCredit = (target, posterior, scheme = "", goal = "") =>
  j(m.hearing_credit_json(target, posteriorText(posterior), scheme, goal));
/** Credit and note for one grapheme unit. `at` < 0 keeps the strongest phone. */
export const unitHearingCredit = (unit, posterior, scheme = "", goal = "", at = -1) =>
  j(m.unit_hearing_credit_json(JSON.stringify(unit ?? {}), posteriorText(posterior), scheme, goal, String(at)));
function isTypedArray(value) {
  return ArrayBuffer.isView(value) && !(value instanceof DataView);
}
function bytesFromBase64(b64) {
  if (typeof Buffer !== "undefined") {
    const buf = Buffer.from(b64, "base64");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
  }
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}
/** Little-endian float32, base64. */
function floatsFromBase64(b64) {
  const bytes = bytesFromBase64(b64);
  const copy = new Uint8Array(bytes.byteLength);
  copy.set(bytes);
  return new Float32Array(copy.buffer);
}
function asPosterior(lp) {
  if (typeof lp === "string") return floatsFromBase64(lp);
  if (isTypedArray(lp) || Array.isArray(lp)) return lp;
  return null;
}
/**
 * Store one log-posterior matrix for a later `alignPhonesJson({ postRef: true, ... })`.
 * `lp` is a number array, Float32Array, Float64Array, or base64 of float32 LE.
 * The array is kept by reference.
 */
export function alignSetPost(lp, T, V, spf = 0.02) {
  const arr = asPosterior(lp);
  if (!arr) {
    m.align_clear_post();
    return;
  }
  const width = V | 0;
  const frames = (T | 0) > 0 ? T | 0 : width > 0 ? Math.floor(arr.length / width) : 0;
  m.align_set_post(arr, frames, width, Number(spf) || 0);
}
/** Drop the matrix stored by `alignSetPost`. */
export function alignClearPost() {
  m.align_clear_post();
}
function posteriorOf(spec) {
  if (!spec || typeof spec !== "object") return null;
  if (typeof spec.lpB64 === "string") return { lp: spec.lpB64, T: spec.T, V: spec.V, spf: spec.spf };
  if (typeof spec.postB64 === "string") return { lp: spec.postB64, T: spec.T, V: spec.V, spf: spec.spf };
  if (isTypedArray(spec.lp) || Array.isArray(spec.lp) || typeof spec.lp === "string") {
    return { lp: spec.lp, T: spec.T, V: spec.V, spf: spec.spf };
  }
  if (isTypedArray(spec.post) || typeof spec.post === "string") {
    return { lp: spec.post, T: spec.T, V: spec.V, spf: spec.spf };
  }
  const post = spec.post;
  if (post && typeof post === "object") {
    if (typeof post.lpB64 === "string") {
      return { lp: post.lpB64, T: post.T ?? spec.T, V: post.V ?? spec.V, spf: post.spf ?? spec.spf };
    }
    if (isTypedArray(post.lp) || Array.isArray(post.lp) || typeof post.lp === "string") {
      return { lp: post.lp, T: post.T ?? spec.T, V: post.V ?? spec.V, spf: post.spf ?? spec.spf };
    }
  }
  return null;
}
function withoutPosterior(spec) {
  const next = { ...spec, postRef: true };
  delete next.lp;
  delete next.lpB64;
  delete next.postB64;
  if (isTypedArray(spec.post) || typeof spec.post === "string") {
    delete next.post;
  } else if (spec.post && typeof spec.post === "object") {
    const post = { ...spec.post };
    delete post.lp;
    delete post.lpB64;
    next.post = post;
  }
  return next;
}
/**
 * Align a recognizer posterior to target phones. `spec` is a JSON string or an object.
 * A number array, Float32Array, Float64Array, or base64 float32 matrix is handed to
 * MoonBit without a JSON number list. `lanes` scores every lane from one soft decode.
 * Opt-in: ipa() does not call it.
 */
export function alignPhonesJson(spec) {
  if (typeof spec === "string") return j(m.align_phones_json(spec));
  const found = posteriorOf(spec ?? {});
  if (found && asPosterior(found.lp)) {
    alignSetPost(found.lp, found.T, found.V, found.spf ?? 0.02);
    return j(m.align_phones_json(JSON.stringify(withoutPosterior(spec))));
  }
  return j(m.align_phones_json(JSON.stringify(spec ?? {})));
}
const creditScale = j(m.credit_scale_json());
/** Default display cutoffs, in percent. Override any of them in creditLevel. */
export const CREDIT_LEVEL_CLOSE = creditScale.close;
export const CREDIT_LEVEL_LIGHT = creditScale.light;
export const CREDIT_LEVEL_MEDIUM = creditScale.medium;
export const CREDIT_LEVEL_CLEAR = creditScale.clear;
export const CREDIT_LEVEL_DEEPEST = creditScale.deepest;
/** The six tint bands for the credit table. */
export function creditBands(scale) {
  if (!scale) return j(m.credit_bands_json(""));
  const close = scale.close ?? CREDIT_LEVEL_CLOSE;
  const light = scale.light ?? CREDIT_LEVEL_LIGHT;
  const medium = scale.medium ?? CREDIT_LEVEL_MEDIUM;
  const clear = scale.clear ?? CREDIT_LEVEL_CLEAR;
  const deepest = scale.deepest ?? CREDIT_LEVEL_DEEPEST;
  return j(m.credit_bands_json([close, light, medium, clear, deepest].join(",")));
}
/** Rough breathing `h` (and `hː`) is optional. Pass phones as an array or a comma list. */
export const optionalPhones = (phones) =>
  j(m.optional_phones_json(Array.isArray(phones) ? phones.join(",") : String(phones ?? "")));
/** Display level for a combined credit in [0, 1]. */
export function creditLevel(combined, scale) {
  if (!scale) return j(m.credit_level_json(combined, ""));
  const close = scale.close ?? CREDIT_LEVEL_CLOSE;
  const light = scale.light ?? CREDIT_LEVEL_LIGHT;
  const medium = scale.medium ?? CREDIT_LEVEL_MEDIUM;
  const clear = scale.clear ?? CREDIT_LEVEL_CLEAR;
  const deepest = scale.deepest ?? CREDIT_LEVEL_DEEPEST;
  return j(m.credit_level_json(combined, [close, light, medium, clear, deepest].join(",")));
}
/** Short scheme id for a page id or a long id. Unknown returns "". */
export const schemeId = (name) => m.scheme_id(name);
/** Scheme notes, learner-goal thresholds, and curated grapheme alternates. */
export const distTable = (scheme) => j(m.dist_table_json(scheme));
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
export default {
  ipa, g2p, phoneDistance, phoneCredit, hearingCredit, unitHearingCredit, alignPhonesJson,
  alignSetPost, alignClearPost, creditLevel,
  creditBands, optionalPhones,
  CREDIT_LEVEL_CLOSE, CREDIT_LEVEL_LIGHT, CREDIT_LEVEL_MEDIUM, CREDIT_LEVEL_CLEAR, CREDIT_LEVEL_DEEPEST,
  schemeId, distTable, detect, word, lookup, call, loadLexicon, wasmPath,
};

# Changelog

Versions match `moonbit/moon.mod` and the npm package `greek-phonology`. Git tags have not been created. Times are the npm publish timestamps.

## Unreleased

- Sourced phonetic-distance rows (E01–E03, E06, E07, E09–E15, E17–E19, E21–E25, E27, E28, E34) are opt-in. Policy rows are marked `"policy": true`. See `docs/DISTANCE_TABLE.md`. `ipa()` and the golden snapshot are unchanged. Koine postnasal stops stay voiceless in `ipa()`; voiced `n d` / `m b` / `ŋ g` is an accurate variant. Gated Koine k/g, t/d, and z/s (E24, E25) are not a match unless the caller passes a target posterior of at least 0.15. Modern medial nasals, doubled consonants, ʝ↔j, and an ι absorbed into ʝ are scored inside alignment.
- 0.3.2 is written in `moonbit/moon.mod` and `packages/npm/package.json`. It has not been published to npm. 0.3.1 and 0.3.0 were not published either. Nothing here publishes or tags.
- `alignPhonesJson` accepts the log-posterior matrix as a `Float32Array`, `Float64Array`, number array, or base64 of little-endian float32, and `alignSetPost` plus `postRef: true` stores it for the next call. `lanes` soft-decodes once and returns `{ tokens, takes }`. A JSON string of `lp` numbers still works and matches these paths. `ipa()` does not call it.
- `params.nearMiss: false` or `params.goal: "exact"` scores a phone only from the posterior share on the target or a lane alternate. The default still adds tolerated near-miss credit. The path is unchanged.
- Equal-cost tokens for one target prefer the identical phone string, then the higher posterior on that target.
- `params.subCost` (`[["e","i",0.5],["r","l",0.5]]`, either order) replaces the path price for those pairs. The default stays 1 for `e`/`i` and `r`/`l`: the feature table does not tolerate a step of vowel height or an r/l manner change. The same phone string stays 0. The override does not add a credit tier.
- `attemptCredit` lists every scored attempt (`w`, `att`, `credited`, `score`). Restart lists and the pass/fail gate stay on the page. See `docs/PROPOSALS.md`.
- Koine [β] and [v] are the same sound in `phone_distance` (tier `accurate`, distance 0, both directions, every learner goal). The note is unchanged: nothing needs fixing. [f] for word-final αυ/ευ/ηυ stays tolerated. With no scheme, [β] against [v] keeps the feature-table distance. `ipa()` is unchanged. Source: Aaron, 2026-10-27, the same decision as the note; see `docs/RESEARCH.md`.
- Word `score` and `overall` from `align_phones` include a tolerated near miss via `hearing_credit`. An exact phone, or a lane alternate, that clears the posterior floor keeps the old score. `params.goal` changes that credit only. The path still uses the gracious distance. JSON adds `credit`, `level`, `overallCredit`, and `overallLevel`.
- Alignment substitution stays on `phone_distance`, not the old CLASS list. `e`/`i` and `r`/`l` cost 1. Koine `β`/`v` costs 0.
- `credit_bands` is the tint table. `phone_is_optional` / `optional_phones` marks rough breathing [h] optional and leaves `pʰ` required.
- `align_tokens` refuses a side over 20,000 or a matrix over 250,000 cells (cost `1e9`, no pairs) instead of allocating.
- `moon prove` reports 218 goals with Z3 4.13.0, up from 208. The metric and the goals that timed out are in `docs/VERIFICATION.md`. The informational verify workflow is removed. Checks run from `.githooks/pre-commit`. The Pages workflow only builds.
- `align_phones` (JavaScript `alignPhonesJson`) aligns a recognizer posterior to target phones. It tolerates a restart of up to three words, a skipped word, a repeated word, and stray sounds, and credits each word from its best coherent attempt. Substitution cost uses `phone_distance` at the gracious goal: 0 when accurate, 0.5 when tolerated, 1 otherwise. The same phone string is 0 even when the feature table does not know it. `ipa()` does not call it.
- `g2p_json` (wasm command 6) returns per-grapheme units that tile the typed word. The lexicon form supplies phones when it only restores marks. A unit is `restored` when a phone depended on a mark the user did not type (rough breathing, Attic length, iota subscript, or a diaeresis that split a diphthong). An acute or grave that does not change the phones is not `restored`.
- Koine word-final αυ/ευ/ηυ is [v] in `ipa()`, the same phone as the letter β. [f] is a tolerated hearing, not the target. Before a voiceless consonant the target stays [f]. Medial, before a vowel or a voiced consonant, it stays [β]. Source: Aaron, 2026-10-27. The golden snapshot changes fifteen Koine cells, and no other column: Αζαυ, Ἠσαῦ, Ησαυ, Ναβαυ, Ρααυ, Ραγαυ, Σαβευ, Χασελευ, ἄνευ, αιλευ, βασιλεῦ, εὖ, θαυ, ἱερεῦ, ουαυ. Each was `… β` and is now `… v`.
- Phonetic distance is opt-in (`phone_distance`, `phone_credit`, `dist_table`, and the `alts` flag on `g2p_json`). It is the playground's hand-weighted feature table. A learner goal (`strict`, `gracious`, `lenient`) changes the tier and the credit only. `gracious` is the default. `ipa()` does not call it.
- Learner notes no longer mention the library or a "phone". Koine word-final β beside v says the two are the same sound and nothing needs fixing. Tiers, distances, and credit are unchanged.
- `hearing_credit` and `unit_hearing_credit` turn a recognizer candidate list, or the existing `phone=weight` string, into the same credit as `phone_credit` plus the best alternate note. `credit_level` maps that credit to `none`, `close tint`, `light`, `medium`, `clear`, or `deepest` at 8, 30, 60, 85, and 95 percent; a caller can pass other cutoffs. `scheme_id` accepts the page's short ids and the longer ids (`attic-reconstructed`, `grc-koine-reconstructed`, and the other `grc-*` names) and returns `modern`, `koine`, `attic`, or `erasmian`.
- Erasmian χ heard as [k], and Attic ου heard as [o], are unchanged. See the open question in `docs/RESEARCH.md`.
- Cross-word voicing is the `ctx` flag, default off. For Koine and Modern it sets word-final αυ/ευ/ηυ to [f] before a voiceless letter and [v] before a vowel or a voiced letter. Phrase-final output matches the isolated word. `ipa()` ignores the flag. A separate snapshot covers the flag-on phrases.
- JSON results escape tab, carriage return, backspace, form feed, and every other code point below U+0020. Text without those characters is unchanged, including U+2028.
- `ipa()` output for the current rules is frozen in `moonbit/tests/ipa_golden.tsv.gz`.
- Local pre-commit checks replaced the informational verify workflow. That workflow is deleted.
- The module description no longer mentions a Byzantine scheme. The published npm package is still 0.2.0.
- The npm package source lives in `packages/npm/`. `moonbit/tools/build_npm.sh` rebuilds it. There is no publish step.

## 0.2.0 — 2026-10-22

Published to npm at 20:05Z (14:05 MDT).

- Byzantine is removed. Four schemes remain: Modern, Koine, restored Attic, Erasmian. The 0.1.0 package description still said five schemes.

## 0.1.0 — 2026-10-22

Published to npm at 18:08Z (12:08 MDT). First MoonBit release of this package (the package was created the same day).

- Greek text to IPA, scheme detection, syllables, accents, and the SBLGNT + Rahlfs lexicon, as JavaScript and WebAssembly.
- Still included a Byzantine scheme.
- Attic ου as [uː], marked vowel length, Erasmian χ as [x], and Modern σ → [z] before voiced consonants were already in this release.

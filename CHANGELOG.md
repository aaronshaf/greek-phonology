# Changelog

Versions match `moonbit/moon.mod` and the npm package `greek-phonology`. Git tags have not been created. Times are the npm publish timestamps.

## Unreleased

- 0.3.1 is written in `moonbit/moon.mod` and `packages/npm/package.json`. It has not been published to npm. 0.3.0 was not published either.
- `g2p_json` (wasm command 6) returns per-grapheme units that tile the typed word. The lexicon form supplies phones when it only restores marks. A unit is `restored` when a phone depended on a mark the user did not type (rough breathing, Attic length, iota subscript, or a diaeresis that split a diphthong). An acute or grave that does not change the phones is not `restored`.
- Koine word-final αυ/ευ/ηυ is [v] in `ipa()`, the same phone as the letter β. [f] is a tolerated hearing, not the target. Before a voiceless consonant the target stays [f]. Medial, before a vowel or a voiced consonant, it stays [β]. Source: Aaron, 2026-10-27. The golden snapshot changes fifteen Koine cells, and no other column: Αζαυ, Ἠσαῦ, Ησαυ, Ναβαυ, Ρααυ, Ραγαυ, Σαβευ, Χασελευ, ἄνευ, αιλευ, βασιλεῦ, εὖ, θαυ, ἱερεῦ, ουαυ. Each was `… β` and is now `… v`.
- Phonetic distance is opt-in (`phone_distance`, `phone_credit`, `dist_table`, and the `alts` flag on `g2p_json`). It is the playground's hand-weighted feature table. A learner goal (`strict`, `gracious`, `lenient`) changes the tier and the credit only. `gracious` is the default. `ipa()` does not call it.
- Learner notes no longer mention the library or a "phone". Koine word-final β beside v says the two are the same sound and nothing needs fixing. Tiers, distances, and credit are unchanged.
- `hearing_credit` and `unit_hearing_credit` turn a recognizer candidate list, or the existing `phone=weight` string, into the same credit as `phone_credit` plus the best alternate note. `credit_level` maps that credit to `none`, `close tint`, `light`, `medium`, `clear`, or `deepest` at 8, 30, 60, 85, and 95 percent; a caller can pass other cutoffs. `scheme_id` accepts the page's short ids and the longer ids (`attic-reconstructed`, `grc-koine-reconstructed`, and the other `grc-*` names) and returns `modern`, `koine`, `attic`, or `erasmian`.
- Erasmian χ heard as [k], and Attic ου heard as [o], are unchanged. See the open question in `docs/RESEARCH.md`.
- Cross-word voicing is the `ctx` flag, default off. For Koine and Modern it sets word-final αυ/ευ/ηυ to [f] before a voiceless letter and [v] before a vowel or a voiced letter. Phrase-final output matches the isolated word. `ipa()` ignores the flag. A separate snapshot covers the flag-on phrases.
- JSON results escape tab, carriage return, backspace, form feed, and every other code point below U+0020. Text without those characters is unchanged, including U+2028.
- `ipa()` output for the current rules is frozen in `moonbit/tests/ipa_golden.tsv.gz`.
- An informational GitHub Actions workflow reports `moon prove` and related checks and does not block merges.
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

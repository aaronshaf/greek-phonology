# Changelog

Versions match `moonbit/moon.mod` and the npm package `greek-phonology`. Git tags have not been created. Times are the npm publish timestamps.

## Unreleased

- JSON results escape tab, carriage return, backspace, form feed, and every other code point below U+0020. Text without those characters is unchanged, including U+2028.
- `ipa()` output for the current rules is frozen in `moonbit/tests/ipa_golden.tsv.gz`.
- An informational GitHub Actions workflow reports `moon prove` and related checks and does not block merges.
- `moonbit/moon.mod` version is 0.2.0, the same as the published npm package. The module description no longer mentions a Byzantine scheme.
- The npm package source lives in `packages/npm/`. `moonbit/tools/build_npm.sh` rebuilds it. There is no publish step.

## 0.2.0 — 2026-10-22

Published to npm at 20:05Z (14:05 MDT).

- Byzantine is removed. Four schemes remain: Modern, Koine, restored Attic, Erasmian. The 0.1.0 package description still said five schemes.

## 0.1.0 — 2026-10-22

Published to npm at 18:08Z (12:08 MDT). First MoonBit release of this package (the package was created the same day).

- Greek text to IPA, scheme detection, syllables, accents, and the SBLGNT + Rahlfs lexicon, as JavaScript and WebAssembly.
- Still included a Byzantine scheme.
- Attic ου as [uː], marked vowel length, Erasmian χ as [x], and Modern σ → [z] before voiced consonants were already in this release.

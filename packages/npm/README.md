# greek-phonology

Ancient Greek pronunciation tools: Greek text to IPA under four schemes (Modern, Koine, restored Attic, Erasmian), a guess at which scheme a speaker used from their IPA, syllables, accents, and an NT + LXX word list. Built with [MoonBit](https://www.moonbitlang.com); no dependencies. [Playground](https://aaronshaf.github.io/greek-phonology/) · [Source](https://github.com/aaronshaf/greek-phonology)

```sh
npm install greek-phonology
```

```js
import { ipa, g2p, phoneDistance, schemeId, detect, call, loadLexicon } from "greek-phonology";
ipa("ἐν ἀρχῇ ἦν ὁ λόγος", "koine");          // "ɛ n | a r kʰ e | e n | o | l o ɣ o s"
g2p("αι", "modern");                          // units that tile the typed word
phoneDistance("ð", "d", "koine", "gracious"); // tier, note, and advice
schemeId("attic-reconstructed");              // "attic"
detect("e n | a r x i", "ἐν ἀρχῇ").probs;    // { modern: …, koine: …, attic: …, erasmian: … }
call("accentuate_verb", "λυομεν");            // "λύομεν"
loadLexicon();                                 // optional: enables lookup() and accent restoration
```

Schemes: `"modern"`, `"koine"`, `"attic"`, `"erasmian"`. Phones are separated by spaces, words by `|`.
`g2p(text, scheme, flags)` is the same reading split into grapheme units. `alts` and `ctx` are optional flags and default off; neither changes `ipa()`. Koine word-final αυ/ευ/ηυ is [v].
`phoneDistance`, `phoneCredit`, `hearingCredit`, `unitHearingCredit`, and `distTable` score a heard phone against a target. The learner goal (`strict`, `gracious`, `lenient`) changes acceptance and credit only. `gracious` is the default. In Koine, [β] and [v] are the same sound. Sourced rows are default off: call `phoneDistanceIn` (and `params.sourced` for alignment). They do not change `ipa()`. `creditLevel` maps a combined credit to a display level (cutoffs 8, 30, 60, 85, and 95 percent). `creditBands` is that table. `schemeId` turns a long scheme id into `modern`, `koine`, `attic`, or `erasmian`.
`alignPhonesJson` aligns a recognizer posterior to target phones (restarts, skips, repeats, stray sounds) and does not affect `ipa()`. Pass `lp` as a Float32Array, a number array, or base64 float32, or use `alignSetPost` and `postRef: true`. `lanes` scores every lane from one decode. Word `score` and `overall` include a tolerated near miss unless `params.nearMiss` is false or `goal` is `"exact"`. `params.goal` otherwise changes that credit, not the alignment path. `params.subCost` can price a pair at 0.5; `e`/`i` and `r`/`l` stay at 1 unless named. `optionalPhones` marks rough breathing [h] as optional.
The detector uses no audio data: a simple prior over recognizer confusions plus phone-bigram tables from SBLGNT and Rahlfs LXX word counts.
`greek-phonology.wasm` (byte-buffer ABI, see the repo's `docs/app.js`) is included for browsers and other hosts.

Word list: SBL Greek New Testament (CC BY 4.0) and Rahlfs 1935 LXX forms. Code: MIT.

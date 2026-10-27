# greek-phonology

Ancient Greek pronunciation tools: Greek text to IPA under four schemes (Modern, Koine, restored Attic, Erasmian), a guess at which scheme a speaker used from their IPA, syllables, accents, and an NT + LXX word list. Built with [MoonBit](https://www.moonbitlang.com); no dependencies. [Playground](https://aaronshaf.github.io/greek-phonology/) · [Source](https://github.com/aaronshaf/greek-phonology)

```sh
npm install greek-phonology
```

```js
import { ipa, detect, call, loadLexicon } from "greek-phonology";
ipa("ἐν ἀρχῇ ἦν ὁ λόγος", "koine");          // "ɛ n | a r kʰ e | e n | o | l o ɣ o s"
detect("e n | a r x i", "ἐν ἀρχῇ").probs;    // { modern: …, koine: …, attic: …, erasmian: … }
call("accentuate_verb", "λυομεν");            // "λύομεν"
loadLexicon();                                 // optional: enables lookup() and accent restoration
```

Schemes: `"modern"`, `"koine"`, `"attic"`, `"erasmian"`. Phones are separated by spaces, words by `|`.
The detector uses no audio data: a simple prior over recognizer confusions plus phone-bigram tables from SBLGNT and Rahlfs LXX word counts.
`greek-phonology.wasm` (byte-buffer ABI, see the repo's `docs/app.js`) is included for browsers and other hosts.

Word list: SBL Greek New Testament (CC BY 4.0) and Rahlfs 1935 LXX forms. Code: MIT.

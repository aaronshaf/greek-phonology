# greek-phonology

*Formerly koine-lexer.*

greek-phonology helps you work with how Ancient Greek sounds. It turns Greek text into IPA under five pronunciation schemes (Modern, Byzantine, Koine, restored Attic, Erasmian), and guesses which scheme a speaker used from their IPA. It also splits words into syllables, checks and places accents, and looks words up in a built-in New Testament and Septuagint word list. It is written in [MoonBit](https://www.moonbitlang.com) and ships as WebAssembly and JavaScript, with no server and no dependencies. Try it in the [playground](docs/index.html).

## Install

Not on npm yet. Build it from source:

```sh
curl -fsSL https://cli.moonbitlang.com/install/unix.sh | bash
cd moonbit && ./tools/build_pages.sh   # writes docs/greek-phonology.{wasm,js} and the word list
```

## Use it

JavaScript (Node or a bundler):

```js
const gp = require("./greek-phonology.js");
gp.ipa("ἐν ἀρχῇ ἦν ὁ λόγος", "koine");        // "ɛ n | a r kʰ e | e n | o | l o ɣ o s"
JSON.parse(gp.detect_json("e n | a r x i", "")); // { probs: { modern: 0.46, byzantine: 0.44, ... }, ... }
gp.call("accentuate_verb", "λυομεν", "");       // "\"λύομεν\""  (call returns JSON)
```

WebAssembly (browser, wasmtime, any host). Strings go in and out one UTF-8 byte at a time, so you don't need a shared allocator. See `docs/app.js` for a 20-line wrapper:

```js
const { instance } = await WebAssembly.instantiateStreaming(fetch("greek-phonology.wasm"), { spectest: { print_char() {} } });
// in_clear(); in_push(byte)...; in_push(0); in_push(byte)...; n = run(cmd); out_get(0..n-1)
// cmd 0 detect, 1 ipa, 2 word, 3 load word list, 4 lookup, 5 call(name, arg)
```

The word list (`greek-phonology-lexicon.bin`, 168 KB gzipped) is optional. Load it once to turn on `lookup` and to restore accents and breathings on bare input before G2P.

## Functions

Every function below can be called through `call(name, arg, arg2)`. The most common ones also have their own JS functions.

**Pronunciation**
- `ipa(text, scheme)`: Greek to IPA. Phones are separated by spaces and words by `|`. `ipa("θεός", "attic")` → `tʰ e o s`
- `detect(ipa, greek_text?)`: scheme probabilities, plus the evidence behind them. It is more reliable when you pass the Greek text.
- `lookup(word)`: finds a word in the NT/LXX list, ignoring case or accents if needed. `lookup("λογος")` → `{form: "λόγος", nt: true, lxx: true, ...}`

**Syllables and accent**
- `syllabify(word)`: `syllabify("ἄνθρωπος")` → `[["α","ν"],["θ","ρ","ω"],["π","ο","ς"]]`
- `word(word)`: syllables, the written accent, whether it obeys the law of limitation, and the recessive accent.
- `accentuate_phrase(text)` / `check_phrase_accents(text)`: accents in context (enclitics, proclitics, grave, elision). `accentuate_phrase("ἄνθρωπος τις ἦλθεν")` → `ἄνθρωπός τις ἦλθεν`
- `accentuate_verb(word)`: places the recessive accent. `accentuate_verb("δουλος")` → `δοῦλος`
- `accentuate_last_vowel(s)`: `accentuate_last_vowel("χα")` → `χά`
- `add_acute(s)` / `add_circumflex(s)`: `add_circumflex("α")` → `ᾶ`
- `remove_acutes(s)`, `remove_graves(s)`, `remove_circumflexes(s)`, `contains_circumflex(s)`, `without_accents(s)`: `without_accents("ἄνθρωπος")` → `ανθρωπος`
- `is_long_syllable(s)`: `is_long_syllable("τη")` → `true`

**Forms**
- `amalgamate(s)`: consonant + σ. `amalgamate("γραφσω")` → `γραψω`
- `contract(s)`: vowel contraction (Black's table). `contract("ποιεω")` → `ποιω`
- `verb_stem(lexical_form)`: `verb_stem("λύω")` → `λύ`
- `augmentize(s)`: `augmentize("λυον")` → `ἐλυον`
- `conjugate(stem, paradigm)`: six forms. `conjugate("λυ", "future-active-indicative")` → `λύσω λύσεις λύσει …`

**Text**
- `remove_punctuation(s)`, `remove_numbers(s)`, `extract_consonant_clusters(text)`: `extract_consonant_clusters("στρατος κτισις")` → `["στρ","κτ"]`

## Checked by proof and tests

`moon prove` machine-checks the syllable split, the law of limitation and the recessive-accent rule. Property tests cover the rest: probabilities sum to 1, syllables rejoin to the word, `accentuate_verb` output always obeys the law of limitation. Parity tests compare the library with the original TypeScript and with the reference G2P.

## Data

The NT forms come from the SBL Greek New Testament (CC BY 4.0). The Septuagint forms are Rahlfs 1935 (public domain), via eliranwong/LXX-Rahlfs-1935. See `moonbit/data/README.md`.

## License

MIT for the code. The word list carries the attributions above.

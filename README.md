# greek-phonology

[![npm](https://img.shields.io/npm/v/greek-phonology)](https://www.npmjs.com/package/greek-phonology)

greek-phonology helps you work with how Ancient Greek sounds. It turns Greek text into IPA under four pronunciation schemes (Modern, Koine, restored Attic, Erasmian), and guesses which scheme a speaker used from their IPA. It also splits words into syllables, checks and places accents, and looks words up in a built-in New Testament and Septuagint word list. It is written in [MoonBit](https://www.moonbitlang.com) and ships as WebAssembly and JavaScript, with no server and no dependencies. Try it in the [playground](docs/index.html).

## Install

```sh
npm install greek-phonology
```

## Use it

JavaScript (ESM, Node 18+):

```js
import { ipa, detect, call, loadLexicon, lookup } from "greek-phonology";
ipa("ἐν ἀρχῇ ἦν ὁ λόγος", "koine");       // "ɛ n | a r kʰ e | e n | o | l o ɣ o s"
detect("e n | a r x i").probs;             // { modern: …, koine: …, attic: …, erasmian: … }
call("accentuate_verb", "λυομεν");         // "λύομεν"
loadLexicon(); lookup("λογος").form;       // "λόγος"
```

WebAssembly (browser, wasmtime, any host). The package ships `greek-phonology.wasm` (also exported as `wasmPath`). Strings go in and out one UTF-8 byte at a time, so you don't need a shared allocator. See `docs/app.js` for a 20-line wrapper:

```js
import { readFileSync } from "node:fs";
import { wasmPath } from "greek-phonology";
const { instance } = await WebAssembly.instantiate(readFileSync(wasmPath), { spectest: { print_char() {} } });
// in_clear(); in_push(byte)...; in_push(0); in_push(byte)...; n = run(cmd); out_get(0..n-1)
// cmd 0 detect, 1 ipa, 2 word, 3 load word list, 4 lookup, 5 call(name, arg)
```

### Build from source

```sh
curl -fsSL https://cli.moonbitlang.com/install/unix.sh | bash
cd moonbit && ./tools/build_pages.sh   # writes docs/greek-phonology.{wasm,js} and the word list
```

The word list (`greek-phonology-lexicon.bin`, 168 KB gzipped, bundled in the package) is optional. Load it once (`loadLexicon()`) to turn on `lookup` and to restore accents and breathings on bare input before G2P.

## Functions

Every function below can be called through `call(name, arg, arg2)`. The most common ones also have their own JS functions.

**Pronunciation**
- `ipa(text, scheme)`: Greek to IPA. Phones are separated by spaces and words by `|`. `ipa("θεός", "attic")` → `tʰ e o s`. Attic follows Allen's 4th-century target (ου [uː], length shown where the spelling marks it, geminates as Cː), Erasmian χ is [x], and Modern voices σ to [z] before β γ δ μ ν λ ρ. See [docs/RESEARCH.md](docs/RESEARCH.md).
- `detect(ipa, greek_text?)`: scheme probabilities, plus the evidence behind them. It is more reliable when you pass the Greek text. It allows for typical phone-recognizer mistakes, using a simple prior (the expected phone 80% of the time, any other phone uniformly otherwise); no audio data is used. Phone-bigram tables come from SBLGNT and Rahlfs LXX word counts.
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

## What's proven

See [VERIFICATION.md](VERIFICATION.md) for the full verification stack (CI runs `moon test`, `moon prove`, and `tools/verify_spec.py`).

`moon prove` machine-checks these (184 goals in `moonbit/kernel`, up from 54). The library's real code paths call these proved functions:

- **Syllables:** every syllable has exactly one vowel, the pieces rejoin to the word, and an onset never takes more consonants than are legal or available.
- **Law of limitation:** the accent checker matches the rule exactly, and the recessive accent used by `accentuate_verb` and `conjugate` always lands where the rule allows.
- **`ipa` (all four schemes):** the rules are finite tables plus a proved step function over code points. Every code point is consumed (each step advances 1 or 2 and the steps end exactly at the word's end), the step is a pure function, and every phone it emits is in that scheme's sound inventory. Attic vowel length (aː iː yː from a circumflex, macron or iota subscript) goes through a proved helper that stays in the Attic inventory; reading the marks and writing geminates as Cː is tested, not proven.
- **`contract`:** a table plus a proved step function over code points, with the `[ει]`/`[ου]` markers as single tokens. The output is never longer than the input, and every output token is a valid letter, mark or marker.
- **Accent slots:** on a word as an array of syllables with per-vowel mark flags, the proved target picker chooses the last vowel of the target syllable. Rendering a phrase decision changes only that slot (grave, acute, circumflex or an extra acute). Undoing it gives back the dictionary marks exactly.
- **Phrase accents** (`accentuate_phrase`): every per-word decision comes from one proved function. A grave appears only when an ordinary word follows. An extra acute appears only before an enclitic and only on a proparoxytone or properispomenon. A word never gets more than two accents. A two-syllable enclitic keeps its accent only after a paroxytone. Undoing the decision (as `lexical_phrase` does) gives back every ordinary word's dictionary accent.
- **`detect` probabilities:** every probability is at least 0 and they add up to exactly 1. Internally they are integer shares of 2^30, and the rounding remainder goes to the provably strongest scheme. Evidence hits never exceed totals.
- **`amalgamate`:** the output is never longer than the input, and each step either copies a letter or merges a stop+σ into ψ, ξ or σ.
- **Removing accents:** only the target mark is dropped and base letters are kept, so running it again changes nothing.
- **Lookup:** tries an exact match first, then ignores case, then ignores accents.

Tested, not proven:
- The Unicode boundary: splitting strings into code points, NFC normalization, and turning phone ids back into IPA strings. The prover has no model of Unicode.
- Writing the accent mark back into the NFC string (before an iota subscript, then NFC). The slot logic is proved; the string step is checked on the whole SBLGNT.
- `without_accents` and `syllabify` give the same syllables in either order. The exception is diaeresis, which marks a syllable break, so removing it rightly changes the split.

Parity tests compare the library with the original TypeScript (its outputs are frozen in `moonbit/tests/kl_golden.json.gz`; run `node moonbit/tools/kl_parity.cjs`).

## Data

The NT forms come from the SBL Greek New Testament (CC BY 4.0). The Septuagint forms are Rahlfs 1935 (public domain), via eliranwong/LXX-Rahlfs-1935. See `moonbit/data/README.md`.

## License

MIT for the code. The word list carries the attributions above.

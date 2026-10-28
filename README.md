# greek-phonology

[![npm](https://img.shields.io/npm/v/greek-phonology)](https://www.npmjs.com/package/greek-phonology)

greek-phonology helps you work with how Ancient Greek sounds. It turns Greek text into IPA under four pronunciation schemes (Modern, Koine, restored Attic, Erasmian), and guesses which scheme a speaker used from their IPA. It also splits words into syllables, checks and places accents, and looks words up in a built-in New Testament and Septuagint word list. It is written in [MoonBit](https://www.moonbitlang.com) and ships as WebAssembly and JavaScript, with no server and no dependencies. Try it in the [playground](https://aaronshaf.github.io/greek-phonology/).

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
// cmd 0 detect, 1 ipa, 2 word, 3 load word list, 4 lookup, 5 call(name, arg), 6 g2p_json
```

### Build from source

```sh
curl -fsSL https://cli.moonbitlang.com/install/unix.sh | bash
cd moonbit && ./tools/build_pages.sh   # writes docs/greek-phonology.{wasm,js} and the word list
```

A release wasm build is 178,373 bytes (66,993 bytes gzipped) with moon 0.1.20261023. `docs/greek-phonology.wasm` is the copy the playground serves and can lag that build. `moonbit/tools/check_artifacts.sh` compares them; the pre-commit hook does not run it. The word list (`greek-phonology-lexicon.bin`, 370,483 bytes, 167,674 bytes gzipped) is optional. Load it once (`loadLexicon()`) to turn on `lookup` and to restore accents and breathings on bare input before G2P.

## Functions

Every function below can be called through `call(name, arg, arg2)`. The most common ones also have their own JS functions.

**Pronunciation**
- `ipa(text, scheme)`: Greek to IPA. Phones are separated by spaces and words by `|`. `ipa("θεός", "attic")` → `tʰ e o s`. Attic follows Allen's 4th-century target (ου [uː], length shown where the spelling marks it, geminates as Cː), Erasmian χ is [x], and Modern voices σ to [z] before β γ δ μ ν λ ρ. Koine word-final αυ/ευ/ηυ is [v]; before a voiceless consonant it is [f], and medial before a vowel or voiced consonant it stays [β]. See [docs/RESEARCH.md](docs/RESEARCH.md).
- `g2p(text, scheme, flags?)`: the same phones, plus one unit per grapheme. Concatenating `units[].t` gives the typed word back. `restored` is true when a phone used a mark the user did not type. Flags are a comma list: `alts` adds tolerated hearings, `ctx` voices word-final αυ/ευ/ηυ from the next word. Both are off by default, and neither changes `ipa()`. Wasm command 6. `g2p("αι", "modern")` → `{v:1, scheme:"modern", lib:"0.3.2", words:[{text:"αι", phones:["e"], units:[{t:"αι", k:"diph", ph:["e"], …}]}]}`.
- `phoneDistance(target, heard, scheme?, goal?)`: graded distance between one target phone and one heard phone, for any recognizer's IPA. `goal` is `strict`, `gracious` (default), or `lenient`. It changes `tier` and `sim` only; `d`, `note`, and `advice` stay put. Tiers are `accurate`, `tolerated`, and `not-a-match`. Unknown phones return `not-a-match` and do not throw. This call stays on the hand-weighted feature table. Sourced rows, including the policy rows, are default off; see [docs/DISTANCE_TABLE.md](docs/DISTANCE_TABLE.md). `phoneDistanceIn` is the opt-in. It takes `left,right,right2,place,posterior` when a row needs neighbors or a confidence gate. With no posterior, a gated row is not a match.
- `phoneCredit(target, scheme, goal, posterior)`: credit for a comma list of `phone=weight` pairs. An exact hit outranks a near miss, and nothing outside the tolerated tier scores.
- `hearingCredit(target, posterior, scheme?, goal?)`: the same numbers as `phoneCredit`, plus the note for the best alternate. `posterior` may be the `phone=weight` list or a candidate array (`{phone, p}`, `{phone, probability}`, or `[phone, probability]`).
- `unitHearingCredit(unit, posterior, scheme?, goal?, at?)`: the same, for one grapheme unit from `g2p`. A curated alternate note (for example Koine word-final β beside v) replaces the generic note when that hearing is the best near miss. Omit `at` to keep the phone in the unit with the highest combined credit; pass a phone index to score only that phone.
- `creditLevel(combined, scale?)`: a display level for a combined credit from 0 to 1. The levels are `none`, `close tint`, `light`, `medium`, `clear`, and `deepest`. The default cutoffs are 8, 30, 60, 85, and 95 percent, exported as `CREDIT_LEVEL_CLOSE`, `CREDIT_LEVEL_LIGHT`, `CREDIT_LEVEL_MEDIUM`, `CREDIT_LEVEL_CLEAR`, and `CREDIT_LEVEL_DEEPEST`. Pass `scale` (`{close, light, medium, clear, deepest}`, each a percent) to override any of them.
- `creditBands(scale?)`: those six bands as `{level, from, until}` percents. A page paints from this table instead of copying the cutoffs.
- `schemeId(name)`: the short id `ipa` expects. The playground page uses `koine`, `attic`, `erasmian`, and `modern`. Longer ids such as `attic-reconstructed`, `grc-koine-reconstructed`, `grc-attic-restored`, `grc-modern-style`, and `grc-erasmian-us` map to the same four. An unknown name returns `""`. `ipa` itself still accepts only the short ids.
- `alignPhonesJson(spec)`: align one recognizer take to target phone units. `spec` is a JSON string or the same object: log-posteriors (`lp`, `T`, `V`, `spf`), `vocab`, `lane`, and optional `params`. Pass `lp` as a `Float32Array`, `Float64Array`, number array, or base64 of little-endian float32, or call `alignSetPost(lp, T, V, spf)` and then `{ postRef: true }`, so the matrix is not a JSON number list. `lanes` scores every lane from one soft decode and returns `{ tokens, takes }`; each lane may set `scheme` or `params`. `windows` plus `totalSec` stitches overlapping matrices first; without a lane or `lanes` that call returns the stitched matrix. Each word is credited from its best coherent attempt. A restart may go back three words, a skip costs one per word, and stray tokens are insertions. Substitution cost is `phone_distance` at the gracious goal: 0 accurate, 0.5 tolerated, 1 otherwise. `e`/`i` and `r`/`l` cost 1 unless `params.subCost` names the pair, for example `[["e","i",0.5],["r","l",0.5]]` (either order). The same string stays 0. `params.goal` changes near-miss credit on `score` and `overall` only, not the path. `params.nearMiss: false` or `goal: "exact"` scores only the posterior share on the target or a lane alternate. When two heard tokens match one target at the same cost, the identical string wins, then the higher posterior on that target. Both numbers are 0–100; the JSON also has `credit`, `level`, `overallCredit`, `overallLevel`, and `attemptCredit` (`{w, att, credited, score}` for every attempt). A side over 20,000 phones or a matrix over 250,000 cells returns no pairs. Call name `align_phones`. `ipa()` does not call it.
- `optionalPhones(phones)`: default abstain flags. Rough breathing `h` is optional. `pʰ` is not. Call name `optional_phones`.
- `distTable(scheme)`: the learner-goal thresholds, the scheme notes, and the curated grapheme alternates (Koine word-final [f] for αυ/ευ/ηυ, with a "more accurate" note; Erasmian υι beside the classroom [w]).
- `detect(ipa, greek_text?)`: scheme probabilities, plus the evidence behind them. It is more reliable when you pass the Greek text. It allows for typical phone-recognizer mistakes, using a simple prior (the expected phone 80% of the time, any other phone uniformly otherwise); no audio data is used. Phone-bigram tables come from SBLGNT and Rahlfs LXX word counts. The distance table does not feed the detector.
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

`moon prove` machine-checks these. With Z3 4.13.0 the verifier reports **227** proved goals (227 valid, none invalid or timed out). The count depends on the MoonBit and Z3 versions. Run `python3 moonbit/tools/coverage.py` after `moon prove` for the local count; see [docs/VERIFICATION.md](docs/VERIFICATION.md). The library's real code paths call these proved functions:

- **Syllables:** every syllable has exactly one vowel, the pieces rejoin to the word, and an onset never takes more consonants than are legal or available.
- **Law of limitation:** the accent checker matches the rule exactly, and the recessive accent used by `accentuate_verb` and `conjugate` always lands where the rule allows.
- **`ipa` (all four schemes):** the rules are finite tables plus a proved step function over code points. Every code point is consumed (each step advances 1 or 2 and the steps end exactly at the word's end), the step is a pure function, and every phone it emits is in that scheme's sound inventory. Koine word-final αυ/ευ/ηυ emits [v]; that postcondition sits inside the existing `g_diph_seq` check and does not add a goal. Attic vowel length (aː iː yː from a circumflex, macron or iota subscript) goes through a proved helper that stays in the Attic inventory; reading the marks and writing geminates as Cː is tested, not proven. Grapheme-unit tiling and the distance table are tested, not proved.
- **Alignment backtrace:** a match, insert, or delete keeps both cursors at least 0 and strictly lowers their sum. A match lowers that sum by at least 1. A restart jump lands on a phone index inside the verse and lowers a rank that counts the attempt by at least 1, so that jump cannot cycle. An emitted pair's indexes sit inside the heard tokens and the target phones. The chosen end index is one of the two candidates. An integer cost or score pick returns one of its two inputs. A skip covers at least one whole word. With the one-half fraction, a one-phone word needs one credited phone and a longer word needs at least half of its phones and at least the minimum count. Scores clamp to 0 through 100. The backtrace step cap is the constant 1,000,000. The matrix is refused when a side exceeds 20,000 or the cell count exceeds 250,000. The substitution bucket is 0 exactly for an accurate pair. A sourced full miss is bucket 2 and an accurate sourced row is bucket 0 (`sourced_distance_buckets`); the default alignment path does not feed those rows in. An equal-cost tie takes the identical string, then the higher posterior. Near-miss credit is on only when the switch is on and the goal is not exact. A supplied substitution price replaces the table price.
- **Learner-goal integers:** tolerances 0.20 / 0.33 / 0.42 and credit caps 0.60 / 0.75 / 0.90, with strict at or below gracious at or below lenient. A larger distance never improves the tier code. Near-miss credit in thousandths is `cap * sim / 1000`. The display rank stays in 0 through 5. Two-call monotonicity lemmas timed out and are tested instead.
- **`contract`:** a table plus a proved step function over code points, with the `[ει]`/`[ου]` markers as single tokens. The output is never longer than the input, and every output token is a valid letter, mark or marker.
- **Accent slots:** on a word as an array of syllables with per-vowel mark flags, the proved target picker chooses the last vowel of the target syllable. Rendering a phrase decision changes only that slot (grave, acute, circumflex or an extra acute). Undoing it gives back the dictionary marks exactly.
- **Phrase accents** (`accentuate_phrase`): every per-word decision comes from one proved function. A grave appears only when an ordinary word follows. An extra acute appears only before an enclitic and only on a proparoxytone or properispomenon. A word never gets more than two accents. A two-syllable enclitic keeps its accent only after a paroxytone. Undoing the decision (as `lexical_phrase` does) gives back every ordinary word's dictionary accent.
- **`detect` probabilities:** every probability is at least 0 and they add up to exactly 1. Internally they are integer shares of 2^30, and the rounding remainder goes to the provably strongest scheme. Evidence hits never exceed totals.
- **`amalgamate`:** the output is never longer than the input, and each step either copies a letter or merges a stop+σ into ψ, ξ or σ.
- **Removing accents:** only the target mark is dropped and base letters are kept, so running it again changes nothing.
- **Lookup:** tries an exact match first, then ignores case, then ignores accents.

Tested, not proven:
- The floating-point alignment matrix. Each cell asks the proved picker whether a candidate is strictly cheaper, then stores a `Double`. This prover has no useful theory of `Double`, so monotonicity of those costs is not a goal. The same limit applies to proving that 1,000,000 steps always cover a matrix: each step's rank falls, which rules out a cycle, but a cap of `(heard + 1) * (phones + 1)` is too small once a restart revisits a cell, and "the cap is at least the matrix size" is false once the constant saturates.
- The Unicode boundary: splitting strings into code points, NFC normalization, and turning phone ids back into IPA strings. The prover has no model of Unicode.
- Writing the accent mark back into the NFC string (before an iota subscript, then NFC). The slot logic is proved; the string step is checked on the whole SBLGNT.
- `without_accents` and `syllabify` give the same syllables in either order. The exception is diaeresis, which marks a syllable break, so removing it rightly changes the split.

Parity tests compare the library with the original TypeScript (its outputs are frozen in `moonbit/tests/kl_golden.json.gz`; run `node moonbit/tools/kl_parity.cjs`).

## Layout

- `moonbit/kernel/` — proved core (`moon prove`), split across `syllable.mbt`, `law.mbt`, `contract.mbt`, `phrase.mbt`, `detect_arith.mbt`, `g2p_core.mbt`, `align.mbt`, and `metric.mbt`. The prover still uses one logic file, `spec.mbtp`.
- `moonbit/lib/` — syllables (`syllable.mbt`), accents (`accent.mbt`), G2P (`g2p.mbt`, `g2p_units.mbt`), the opt-in distance table (`phondist.mbt`, `phondist_adapt.mbt`), restart-tolerant alignment (`align.mbt`, `align_json.mbt`), morphology (`morph.mbt`), marks (`marks.mbt`), `call_json` (`call.mbt`), the lexicon, and JSON. Reusable logic lives here, not in the playground.
- `moonbit/api/` — WebAssembly byte ABI and the JavaScript exports.
- `moonbit/tests/` — property tests, the `ipa()` golden snapshot, and the cross-word snapshot.
- `moonbit/tools/` — generators, the Pages build, and the golden and verify scripts.
- `moonbit/data/` — the lexicon blob and the word counts used to build the detector tables.
- `docs/` — the GitHub Pages playground (`index.html`, `app.js`) plus committed wasm, JS, and lexicon copies, and [RESEARCH.md](docs/RESEARCH.md).
- `notes/` — working notes. The build does not read them.
- `packages/npm/` — npm package source (`package.json`, `index.js`, `index.d.ts`). `moonbit/tools/build_npm.sh` copies the release JS, wasm, and lexicon in. Nothing here publishes to npm.

## Versioning

`moonbit/moon.mod` and the npm package `greek-phonology` use the same version number. Published npm releases are 0.1.0 (2026-10-22 18:08Z) and 0.2.0 (2026-10-22 20:05Z). The working tree is 0.3.2 and has not been published; see [CHANGELOG.md](CHANGELOG.md). This repository has no git tags. Creating tags is a separate push and is not done from documentation changes. The proved-goal count is not a version: `moon prove` on your machine prints whatever MoonBit and Z3 you installed.

## Check locally

```sh
sh scripts/setup-hooks.sh
```

The hook runs `moon check`, `moon test` (including the golden snapshot), an additive `.mbti` check, and `moon prove` when `z3` is on PATH. Details are in [CONTRIBUTING.md](CONTRIBUTING.md). Alignment, the distance table, credit, and schemes are summarized in [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

## Data

The NT forms come from the SBL Greek New Testament (CC BY 4.0). The Septuagint forms are Rahlfs 1935 (public domain), via eliranwong/LXX-Rahlfs-1935. See `moonbit/data/README.md`.

## License

MIT for the code. The word list carries the attributions above.

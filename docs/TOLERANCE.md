# Model tolerance

**Default off.** `ipa()`, the golden snapshot, `phone_distance`, and alignment do not read this table. Call it when you want to be lenient where the on-device recognizer is unreliable.

The table is reliability-v1, generated `2026-11-02T15:36:41-07:00`, for model **ft-AC-20mb-lo** (`model.int8.onnx`, greedy CTC). sha256 `bd035d0c51ed2bb876891dff3490f4c2a9a28a5345b8aae63d49620b9e7002cd`. The Attic rows are 46 held-out reconstructed readings (1,485 reference phones). That set is small. The Modern rows are 204 FLEURS el_gr dev sentences. **There is no Koine test set.** The only Koine audio eval is TTS and was left out. Koine and Erasmian use the Attic row when the phone is in that table, and otherwise the Attic class pool, then a neutral 0.500.

## Call

```js
import { tolerance, toleranceWord } from "greek-phonology";

tolerance("tʰ", "attic", "onset");
// weight 0.004, band "lenient", accept ["∅", "t"]
// rung "position", n 23, set "attic"

tolerance("s", "modern", "onset");
// weight 0.893, band "strict", accept [], set "fleurs"

toleranceWord("θεός", "attic", "x e o s");
// θ is lenient (0.004). Hearing x for tʰ costs 0.004, not 1.
// ε 0.377 mixed, ό 0.436 mixed, ς 0.628 strict. penalty 0.004
```

`tolerance(phone, scheme, position, stress)` returns:

| Field | Meaning |
|---|---|
| `weight` | 0..=1. **1 trusts a miss fully.** Lower down-weights it. |
| `accept` | Hearings to treat as not a miss. `∅` means the model deleted the phone. |
| `rung` | `position`, `stress`, `position+stress`, `phone`, `class`, or `default` |
| `band` | `lenient` below 0.350, `mixed` below 0.600, `strict` from 0.600. Colour a letter with this. |
| `n` | Observations behind that rung |
| `set` | `attic` or `fleurs` |

`position` is `onset`, `nucleus`, or `coda`. `stress` is `stressed` or `unstressed`. An empty string skips that slice. Vowels are nucleus. A consonant before the syllable's vowel is onset, and one after it is coda. Rough breathing `h` is onset. Stress is the written accent (`accented_syllables`). An unaccented word, including all-caps text, is unstressed.

`toleranceWord(text, scheme, heard)` walks the `g2p` units. Each unit's `weight` is the lowest phone weight on that letter, so one unreliable phone keeps the letter lenient. `heard` is space-separated IPA in target-phone order (`|` between words is ignored). Empty `heard` only colours: `miss` and `penalty` are -1. A hearing that matches the phone, sits in `accept`, or is only a length miss scores 0. Any other miss scores that phone's weight. `penalty` is the sum.

Wasm and `call`: `tolerance` (phone, scheme, optional `position,stress`), `tolerance_word` (text, scheme, optional heard), `tolerance_meta`.

## How the weight is chosen

The rate is the Wilson 95% lower bound on accuracy, stored in thousandths. A used estimate is then shrunk toward its parent with 8 pseudo-counts:

`(n * slice + 8 * parent) / (n + 8)`

Back-off:

1. A position or stress slice is used only with at least 20 observations, and only when that count is below the phone count. A vowel's nucleus row is the whole phone, so it is not a second estimate.
2. If both slices qualify, the weight is the lower of the two. One unreliable context is enough to be lenient.
3. Otherwise the phone, if it has at least 8 observations.
4. Otherwise the phone's class pool (vowel, aspirate, stop, fricative, nasal, liquid, glide, breath), same floor of 8.
5. Otherwise 0.500.

Aspirates are their own class. Attic `tʰ` in the onset was missed 23 times out of 23, so the weight is 0.004 and `t` or a deletion is accepted. `pʰ` and `kʰ` have only 8 onset tokens, under the slice floor, and back off to the phone; the weight is still 0.040. A coda `t` with one token backs off to the phone (weight 0.680) instead of the sparse 0.207.

Class pools use the length-ignoring success count for a long phone, so missing length marks do not drag every vowel down.

## Length

The model almost never writes `ː`. For a long phone the phone-level rate is the Wilson bound of accuracy *ignoring length*, and the position and stress slices are not used, because those slices count a short hearing as a miss. The short phone is always accepted. `ɔː` also accepts `o`: Attic ω is `ɔː`, the model writes `o`, and `o` is this library's letter ο. Hearing `φῶς` as `pʰ o s` scores 0.

A confusion is listed when the phone's Wilson bound is below 0.55, the confusion has at least 2 hits and at least 10% of the tokens, and it is one of the top 3. Length aliases are extra and do not use that cap.

## Where the numbers live

`moonbit/data/reliability-v1.json` is the aggregate file (counts and rates only). `python3 tools/gen_tol.py` writes `moonbit/lib/tol_data.mbt`. The integer mix, the floors, the band cutoffs, and the length-miss cost of 0 are in `moonbit/kernel/tol.mbt` and are what `moon prove` checks. The string table is tested, not proved.

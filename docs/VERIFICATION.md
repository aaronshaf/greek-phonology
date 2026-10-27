# Verification

Checks run on a developer's machine. There is no verification workflow in GitHub Actions. See [CONTRIBUTING.md](../CONTRIBUTING.md) for the hook.

```sh
sh scripts/setup-hooks.sh
cd moonbit
moon check
moon test
moon prove          # needs z3 on PATH; the hook skips with a message when it is missing
python3 tools/coverage.py
```

`moon test` compares `ipa()` to `tests/ipa_golden.tsv.gz` (8,109 lexicon forms plus 160 extras). That is the golden-snapshot check. `node tools/regen_golden.cjs --check` rebuilds that snapshot from a release JS build and is opt-in (`GREEK_PHONOLOGY_FULL=1` on the hook) because it is the slow one.

## Coverage metric

Computed by `moonbit/tools/coverage.py`. It is a report, not a ratchet. A drop does not fail the hook unless `moon prove` itself returns a non-zero status (an invalid goal or a timeout).

| Count | How |
|---|---|
| Proved goals | `summary.valid` in `moonbit/_build/verif/kernel/kernel.proof.json` after `moon prove` |
| Public functions | `pub fn` lines in `moonbit/kernel/pkg.generated.mbti`, `moonbit/lib/pkg.generated.mbti`, and `moonbit/api/pkg.generated.mbti` |

One function can have several goals, so goals divided by public functions can be greater than 1. It is not "the fraction of functions that have a proof."

On this change, with moon 0.1.20261023 and Z3 4.13.0:

| | Before | After |
|---|---|---|
| Proved goals | 218 valid, 0 invalid, 0 timeout | 221 valid, 0 invalid, 0 timeout |
| Public functions | 172 | 185 |
| Tests (`moon test`) | 77 passed | 81 passed |

The three new goals are the integer decisions in `moonbit/kernel/align.mbt`: equal-cost tie-break (`align_tie_take`), the exact-credit switch (`align_near_miss_on`), and the substitution-price override (`align_pick_price`). The library calls them from `align_tokens`, `phone_score_of`, and `align_sub_cost_with`. The earlier ten goals (cell cap, substitution bucket, goal bounds, tier code, near-miss credit product, display rank, and the rank-drop postconditions) are unchanged.

## What is proved

The kernel proofs listed in the README still hold (syllables, law of limitation, g2p step and inventory, contract, amalgamate, accent slots, phrase accents, detect shares, lookup stage, alignment backtrace). Added here:

- Alignment matrix cell count is over the cap exactly when `(heard + 1) * (phones + 1) > 250000`, for sides up to 20,000.
- The substitution bucket is 0 exactly when the pair is the same phone or scheme-accurate, 1 only when tolerated, otherwise 2.
- An equal-cost token tie keeps the identical string over a stand-in, and otherwise keeps the higher posterior. An equal posterior keeps the token already chosen.
- Near-miss credit is off when the caller disables it or the goal is exact, and on only when both allow it.
- A caller-supplied substitution price is the one used; otherwise the table price is used.
- A match or a restart/skip jump lowers the integer rank by at least 1, so those steps cannot cycle.
- Goal tolerances are 0.20 / 0.33 / 0.42 and credit caps are 0.60 / 0.75 / 0.90, with strict ≤ gracious ≤ lenient on both.
- A larger integer distance never improves the tier code.
- Near-miss credit in thousandths is `cap * sim / 1000` and stays inside 0..=cap.
- The display rank is 0..=5 and a band is reached only at or above its cutoff.

## What was not proved, and why

- **Credit monotone in similarity, credit monotone in the goal cap, and display-rank monotone across two percents.** Each is a postcondition about two calls. Z3 timed out on all three under the default budget (3 timeouts when they were included, 0 invalid). They were removed from the kernel so `moon prove` stays clean. `tests/metric_test.mbt` checks the same orderings on the integer functions, and `tests/phondist_test.mbt` checks that a stricter goal never raises float `sim` or credit.
- **Triangle inequality of `phone_distance`.** It does not hold. `w` to `e` is farther than `w` to `j` plus `j` to `e`, because a glide is scored as a stand-in vowel plus 0.18. Symmetry and a zero diagonal do hold on the feature inventory and are tested. There is no float theory in this prover, so symmetry is not a goal.
- **Float alignment cost is zero exactly on an exact match.** The matrix is `Double`. Tests cover empty input, an exact plain read (cost 0), a substitution (cost > 0), and a restart that stays finite. The proved statement is the integer bucket and the falling rank, not the float sum.
- **Path monotonicity of the float backtrace.** Match, insert, and delete lower the cursor sum and are proved. A restart jumps to an earlier word on purpose, so the phone index is not monotone; the rank is. Tests check index bounds and that a plain exact path's cursor sum does not rise along the stored pairs.
- **Array-bounds proofs for the cost-matrix loops.** The loops live in `lib/align.mbt` over nested `Array[Array[Double]]`, which this prover does not index. Before allocating, the library refuses a side over 20,000 or a product over 250,000 and returns no pairs. The backtrace indexes go through the proved cursor steps.
- **g2p string invariants.** Phone *ids* emitted by `g2p_step` are proved to sit in the scheme inventory. Turning those ids into IPA strings, NFC, and mark order are outside the prover. Tests check that a non-empty Greek letter produces phones, that phones are in the feature table, and that composed and decomposed spellings (final sigma, iota subscript, breathings, diaeresis, mark order, punctuation, mixed script) agree.
- **Idempotence of Unicode normalization** as a proof. Tested by comparing `ipa` on those pairs. The normalizer is a generated table.

## Earlier branches

`cursor/formal-verification-704c` (ecff6f6) and `cursor/formal-verification-f14c` (967c056) both fork from `bb6c56a`, before the kernel split, the alignment proofs, and the distance table. Current `master` already has the successor of that work (the 208 goals above). Neither branch merges cleanly, and neither should be revived:

- 704c adds exhaustive tests and a CI job that treats `moon prove` as a gate. The gate conflicts with local-only checks. The tests are superseded by `tests/props_test.mbt` and the new unicode and metric tests.
- f14c adds `lib/verify.mbt`, a Python inventory cross-check, and `check_prove_report.py`, which fails below 183 goals. That is a hard ratchet. The inventory would be a second copy of `kernel/spec.mbtp`.

Both branches are safe to delete.

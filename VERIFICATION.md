# Verification

This document lists what is machine-checked for **greek-phonology** and how to run the checks locally. The library is implemented in MoonBit; there is no TypeScript runtime. Property tests play the role that tools like fast-check would in a JS codebase.

## Quick check

```sh
cd moonbit
moon test          # property + exhaustive tests (~2s)
moon prove         # SMT proofs in moonbit/kernel (needs Z3, CVC5, or Alt-Ergo on PATH)
```

CI runs both on every push to `master` and on pull requests (see `.github/workflows/verify.yml`).

## Formally proved (`moon prove`)

The `moonbit/kernel` package is `proof_enabled`. Goals are discharged with Why3 + an SMT solver (Z3 in CI). As of the last count, **183 of 184** proof obligations succeed; one VC for `share` (integer division in `normalize4`) times out on the default solver budget—runtime tests still exhaustively check `normalize4` on small weights.

| Area | What is proved |
|------|----------------|
| Syllables | One nucleus per syllable; pieces concatenate to the word; legal onset length |
| Law of limitation | `law_ok` matches the spec; recessive accent respects the rule |
| G2P (`g2p_step`, tables) | Every cluster consumed exactly once; step is pure; emitted phone ids ∈ scheme inventory (`in_inv` in `spec.mbtp`) |
| Attic length helper | `g_attic_long` stays in the Attic inventory |
| `contract_core` | Output never longer than input; tokens valid |
| `amalgamate_core` | Never lengthens; stop+σ → ψ/ξ/σ |
| Accent slots | Target picker, `render_marks` / `unrender_marks`, ordinary-word round trip |
| Phrase accents | `phrase_decision` invariants (grave, enclitic acute, ≤2 accents, decode round trip) |
| `detect` arithmetic | `normalize4`: non-negative shares summing to `s`; `tally_hit`: hits ≤ totals |
| Lookup | Stage ordering (exact → fold → bare) |

Logical specifications live in `moonbit/kernel/spec.mbtp`; implementations in `g2p_core.mbt` and `kernel.mbt`.

## Tested invariants (`moon test`)

### Randomised properties (`tests/props_test.mbt`)

- `softmax` / `detect`: probabilities are non-negative and sum to 1
- Syllabification: units concatenate; one vowel per syllable
- Recessive accent and `accentuate_verb`: law of limitation
- `amalgamate`, accent removal, `contract`, `without_accents` + `syllabify`: idempotence / monotonicity where expected
- G2P: determinism; phones stay within empirically built per-scheme inventories (random words)
- Phrase accents: ≤2 accents; second only before enclitics
- Golden IPA examples and scheme self-detection on a fixed verse

### Exhaustive / static checks (`tests/verify_test.mbt`)

- **Contract table**: every rule has `1 ≤ plen`, `rlen ≤ plen`, `rlen ≤ 2` (`contract_rules_satisfy_kernel`)
- **Detector LM tables**: every unigram/bigram phone ∈ `nl_vocab` (`verify_lm_phones_in_vocab`)
- **Phone inventories**: ids 1–47 have labels; runtime `in_scheme_inv` matches the spec (spot checks)
- **`normalize4`**: all non-negative quadruples with sum &gt; 0 and total `2^30` partition exactly (nested loops, small domain)
- **`fold`**: idempotent on a fixed phone list
- **G2P**: every single-letter and listed diphthong cluster; `g2p_step` on all Greek letters × four schemes; phones ∈ `in_scheme_inv`
- **Unicode**: NFC vs decomposed accent spellings give identical `ipa` for fixed word pairs

### Parity (optional, not in default CI)

After `moonbit/tools/build_pages.sh`:

```sh
node moonbit/tools/kl_parity.cjs
```

Compares the WASM/JS build to frozen outputs from the former TypeScript implementation.

## Runtime mirror of proof inventories

`kernel.in_scheme_inv(scheme, phone_id)` duplicates the `in_inv` predicates from `spec.mbtp` for tests and static validation. It is not used on the hot G2P path (the prover links the step function to the spec directly).

## Deliberately not verified

- Full Unicode/NFC string rendering of accents (no Unicode model in the prover)
- Attic geminate `Cː` and iota-subscript `i` in IPA strings (tested via examples and random G2P, not proved)
- `detect` alignment and edit-distance semantics (tested via distributions and self-detection)
- End-to-end correctness of historical phonology (see `docs/RESEARCH.md` for linguistic notes)

## Adding checks

Prefer extending `moonbit/kernel` with `proof_*` contracts when the property is finite-state or arithmetic. Use `tests/verify_test.mbt` for finite enumeration over tables and alphabets. Keep CI fast: no new runtime dependencies; solvers are CI-only.

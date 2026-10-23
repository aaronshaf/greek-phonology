# Verification

This library converts Greek text to IPA under four schemes (Modern, Koine, restored Attic, Erasmian). Verification is layered: machine-checked proofs on the finite kernel, fast property tests on the string layer, and small Python cross-checks on generated tables. Everything runs in CI (see `.github/workflows/verify.yml`).

## Machine-checked (`moon prove`)

The `moonbit/kernel` package is a finite-state core over code-point arrays. MoonBit’s proof mode (Z3 in CI) checks goals attached to functions in `g2p_core.mbt`, `kernel.mbt`, and predicates in `spec.mbtp`, including:

| Area | What is proved |
|------|----------------|
| Syllables | One nucleus per syllable; pieces rejoin the word; legal onsets |
| Law of limitation | Accent checker matches the spec; recessive accent stays legal |
| `ipa` (4 schemes) | Every input cluster consumed; pure step function; emitted phone ids ∈ scheme inventory |
| `contract` | Output never longer than input; tokens valid (including `[ει]`/`[ου]` markers) |
| Accent slots / phrase | Target vowel choice; grave / double acute / enclitic rules |
| `detect` | Non-negative probabilities summing to 1; evidence hits ≤ totals |
| `amalgamate` / accent stripping | Length and idempotence on the kernel model |

The Unicode string boundary (NFC/NFD, rendering accents into NFC strings) is **not** in the prover model; it is covered by tests below.

## Property tests (`moon test`)

`moonbit/tests/props_test.mbt` uses a deterministic LCG (no external PBT library) to stress invariants on the real API:

- **G2P:** determinism; NFC and NFD input give the same IPA; phones ⊆ declared inventory (`lib/verify.mbt`)
- **Syllables / accent:** concatenation; one nucleus per syllable; law of limitation for recessive and verbal accent
- **Phrase accents:** at most two accents; second only before an enclitic
- **`detect`:** probabilities form a distribution; evidence hits ≤ totals
- **Morphology:** `contract` never lengthens; accent removal idempotent; `without_accents` commutes with syllabify on test-generated words

`moonbit/tests/tables_test.mbt` adds **exhaustive** checks on finite data:

- Phone id table (47 phones + unused 0) and per-scheme inventories aligned with `kernel/spec.mbtp`
- All `contract` rules satisfy kernel preconditions (`contract_tables_ok`)
- NFC compose ∘ decompose on sample precomposed Greek letters
- Confusion-count rows sum to declared totals; `nl_vocab` covers every folded scheme phone
- Every atomic Greek unit in a fixed alphabet yields only declared phones (via `g2p_index`)

Parity with the legacy TypeScript implementation is still gated by `node moonbit/tools/kl_parity.cjs` and frozen goldens (not run in the default CI job).

## Table cross-check (`tools/verify_spec.py`)

Python reads `kernel/spec.mbtp`, `lib/g2p.mbt`, and `lib/verify.mbt` and asserts:

- `phone_names` length and non-empty ids 1–47 match the spec comment
- `common_ids` and `*_extra` arrays in `verify.mbt` match the kernel inventory predicates

## Helpers (`lib/verify.mbt`)

Public functions used by tests and documentation:

- `to_nfc` / `to_nfd` — round-trip hooks for normalization tests
- `scheme_inventory` / `phone_allowed` — string-level inventories (including Attic `Cː` geminates)
- `phone_table_ok`, `scheme_inventories_ok`, `confusion_tables_ok`, `detect_vocab_ok`, and `contract_tables_ok` (in `kl.mbt`) — boolean finite-table validators

## Local commands

```sh
curl -fsSL https://cli.moonbitlang.com/install/unix.sh | bash
sudo apt-get install -y z3   # or brew install z3
cd moonbit
python3 tools/verify_spec.py
moon test
moon prove || true
python3 tools/check_prove_report.py
```

`check_prove_report.py` requires zero invalid/failed goals and at least 183 proved goals. One solver timeout on the integer `share` helper (used by `normalize4`) is tolerated on the stock Ubuntu Z3 build; all other goals must verify.

## What we do not claim

- Correctness of pronunciation relative to historical phonology (see `docs/RESEARCH.md` for linguistic notes)
- Completeness of random testing or exhaustiveness over all Greek strings
- SMT proofs about JavaScript/WASM hosts or npm packaging

Behaviour changes only when verification exposes a real bug; otherwise checks are additive.

# Tools

Scripts that generate library tables, build the playground and the npm package, or check snapshots. None of them publish.

Run them from `moonbit/` unless a script says otherwise.

## Generators

| Script | Command | Output | Inputs in the repo? |
|---|---|---|---|
| `gen_nf.py` | `python3 tools/gen_nf.py lib/nf_gen.mbt` | `lib/nf_gen.mbt` | Yes. Uses Python `unicodedata` for Greek NFD/NFC. |
| `build_lexicon.py` | `python3 tools/build_lexicon.py SBLGNT.tsv LXX.csv` | `data/greek-phonology-lexicon.bin`, `data/word_counts.tsv.gz`, `lib/lex_alpha_gen.mbt` | No. Needs an SBLGNT word TSV (form in column 0, count in column 4) and Rahlfs `text_accented.csv`. |
| `gen_data.py` | `python3 tools/gen_data.py greek_decomp.tsv phone_bigrams.json lib/data_gen.mbt` | `lib/data_gen.mbt` | No. Neither `greek_decomp.tsv` nor `phone_bigrams.json` is in the repo. |
| `gen_conf.py` | `python3 tools/gen_conf.py data/conf_tables.json phone_bigrams.json lib/conf_gen.mbt` | `lib/conf_gen.mbt` | Partly. `data/conf_tables.json` is here. `phone_bigrams.json` is not, and it supplies `nl_vocab`. |

`gen_data.py` and `gen_conf.py` were not re-run. A regenerated `data_gen.mbt` would not be byte-identical without the original `phone_bigrams.json` (per-scheme phone unigram and bigram counts) and `greek_decomp.tsv`, so those files were left as they are. `gen_data.py` no longer emits `lm_vocab_size`; the library never read it. `gen_conf.py` writes an empty map as `Map([])`.

## Build

| Script | Command | Output |
|---|---|---|
| `build_pages.sh` | `./tools/build_pages.sh` | `docs/greek-phonology.wasm`, `docs/greek-phonology.js`, and a copy of the lexicon |
| `build_npm.sh` | `./tools/build_npm.sh` | `packages/npm/greek-phonology.{cjs,wasm}` and the lexicon next to `package.json`. Does not publish. |
| `prerender.py` | `python3 tools/prerender.py` | `docs/index.html` from `tools/index.template.html`. Needs Playwright and a built playground. |
| `regen_golden.sh` | `./tools/regen_golden.sh` | `tests/ipa_golden.tsv.gz` and `tests/ipa_golden_data.mbt` from the current `ipa()`. Run only when an output change is intentional. `node tools/regen_golden.cjs --check` compares the snapshot to a fresh `ipa()`. |

## Checks

| Script | Command | What it does |
|---|---|---|
| `check_artifacts.sh` | `./tools/check_artifacts.sh` | Release-builds wasm and JS and `cmp`s them with `docs/`. Exit 1 means the committed Pages files are stale. Not run by the pre-commit hook. |
| `precommit.sh` | `./tools/precommit.sh` | `moon check`, `moon test`, additive `.mbti`, and `moon prove` when z3 is on PATH. The git hook calls this. |
| `coverage.py` | `python3 tools/coverage.py` | Prints proved goals and public-function counts. See `docs/VERIFICATION.md`. |
| `check_mbti_additive.py` | `python3 tools/check_mbti_additive.py` | Fails if a public `.mbti` line disappeared relative to HEAD. |
| `verify_report.py` | `python3 tools/verify_report.py --proof _build/verif/kernel/kernel.proof.json` | Prints a local summary (MoonBit version, Z3 version, proof counts). |
| `kl_parity.cjs` | `node tools/kl_parity.cjs` | Compares the JS build with `tests/kl_golden.json.gz`. Needs `moon build --target js --release`. |
| `phrase_eval.py` | `python3 tools/phrase_eval.py MORPHGNT_DIR` | Scores `accentuate_phrase` against MorphGNT SBLGNT files. Those files are not in the repo. |
| `phrase_eval_lxx.cjs` | `node tools/phrase_eval_lxx.cjs text_accented.csv` | Scores phrase accents on Rahlfs running text. The CSV is not in the repo. Needs the JS build. |

`kl_parity.cjs`, `phrase_eval.py`, and `phrase_eval_lxx.cjs` are not run by the pre-commit hook.

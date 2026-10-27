# Bundled word list

`greek-phonology-lexicon.bin`: 56,760 Greek word forms (370 KB, 168 KB gzipped), front-coded.
Load it at runtime with `load_lexicon` (wasm: `run(3)` on the raw bytes). It is not compiled into
the wasm/JS. A release wasm build is 178,373 bytes (66,993 bytes gzipped) with moon 0.1.20261023.

- New Testament forms: SBL Greek New Testament, CC BY 4.0, https://www.sblgnt.com/license/
- Septuagint forms: Rahlfs 1935 (public domain), word list from https://github.com/eliranwong/LXX-Rahlfs-1935

`word_counts.tsv.gz` (form, NT count, LXX count) is the build input for the detector's phone-bigram
tables (`tools/gen_data.py`); it is not needed at runtime. Rebuild both with `tools/build_lexicon.py`.

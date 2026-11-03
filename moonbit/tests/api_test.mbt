// API baselines: every call_json name answers, and the wasm string commands do too.
// lookup stays null until a lexicon is loaded (no blob in this package).

///|
test "every call_json name returns JSON other than null for a sample word" {
  let arg = "λόγος"
  for name in call_names {
    let out = @lib.call_json(name, arg, call_arg2(name))
    if name == "lookup" {
      assert_eq(out, "null")
    } else {
      assert_false(out == "null", msg=name)
    }
    assert_false(has_raw_control(out), msg=name)
  }
}

///|
test "run_str commands 0, 1, 2, 4, 5 and 6" {
  let det = @api.run_str(0, "l o ɣ o s", "λόγος")
  assert_true(det.has_prefix("{\"mode\":"))
  assert_eq(@api.run_str(1, "θεός", "attic"), "tʰ e o s")
  assert_true(@api.run_str(2, "λόγος", "").has_prefix("{\"syllables\":"))
  assert_eq(@api.run_str(4, "λόγος", ""), "null")
  assert_eq(
    @api.run_str(5, "without_accents", "ἄνθρωπος"),
    "\"ανθρωπος\"",
  )
  assert_eq(@api.run_str(5, "ipa", "θεός\u{1}attic"), "\"tʰ e o s\"")
  // arg2 keeps every \u{1} piece. Dropping the tail would score this as gracious.
  assert_true(
    @api.run_str(5, "phone_distance", "ð\u{1}d\u{1}\u{1}strict").contains(
      "\"tier\":\"not-a-match\"",
    ),
  )
  assert_true(
    @api.run_str(5, "tolerance", "tʰ\u{1}attic\u{1}onset,").contains(
      "\"weight\":0.004",
    ),
  )
  assert_true(
    @api.run_str(5, "tolerance_word", "θεός\u{1}attic\u{1}x e o s").contains(
      "\"penalty\":0.004",
    ),
  )
  let g = @api.run_str(6, "θεός", "attic")
  assert_true(g.has_prefix("{\"v\":1,\"scheme\":\"attic\""))
  assert_true(g.contains("\"phones\":[\"tʰ\",\"e\",\"o\",\"s\"]"))
}

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
test "run_str commands 0, 1, 2, 4 and 5" {
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
}

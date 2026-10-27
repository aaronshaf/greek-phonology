// JSON escaping for call_json / word_json / lookup_json / Detection::to_json_string.
// Control characters in user text must not appear raw in the result.

///|
fn has_raw_control(s : String) -> Bool {
  for c in s {
    if c.to_int() < 0x20 {
      return true
    }
  }
  false
}

///|
let call_names : Array[String] = [
  "amalgamate", "contract", "remove_acutes", "remove_graves", "remove_circumflexes",
  "contains_circumflex", "add_acute", "add_circumflex", "without_accents", "accentuate_last_vowel",
  "is_long_syllable", "remove_punctuation", "remove_numbers", "extract_consonant_clusters",
  "accentuate_verb", "accentuate_phrase", "lexical_phrase", "check_phrase_accents",
  "is_enclitic", "is_proclitic", "verb_stem", "augmentize", "conjugate", "syllabify",
  "word", "ipa", "g2p_json", "phone_distance", "phone_credit", "dist_table",
  "hearing_credit", "unit_hearing_credit", "credit_level", "credit_bands",
  "optional_phones", "scheme_id",
  "align_phones", "lookup", "detect",
]

///|
fn call_arg2(name : String) -> String {
  if name == "ipa" || name == "g2p_json" {
    "koine"
  } else if name == "phone_distance" {
    "d\u{1}koine\u{1}gracious"
  } else if name == "phone_credit" {
    "koine\u{1}gracious\u{1}d=0.55,z=0.41"
  } else if name == "hearing_credit" {
    "koine\u{1}gracious\u{1}d=0.55,z=0.41"
  } else if name == "unit_hearing_credit" {
    "koine\u{1}gracious\u{1}[[\"v\",1]]\u{1}-1"
  } else if name == "credit_level" {
    ""
  } else if name == "conjugate" {
    "future-active-indicative"
  } else if name == "detect" {
    "λόγος"
  } else {
    ""
  }
}

///|
test "jstr escapes controls and leaves ordinary text unchanged" {
  assert_eq(
    @lib.call_json("without_accents", "ἄνθρωπος", ""),
    "\"ανθρωπος\"",
  )
  assert_eq(@lib.call_json("ipa", "θεός", "attic"), "\"tʰ e o s\"")
  assert_eq(@lib.call_json("without_accents", "a\tb", ""), "\"a\\tb\"")
  assert_eq(
    @lib.call_json("without_accents", "α\tβ\u{0001}", ""),
    "\"α\\tβ\\u0001\"",
  )
  assert_eq(@lib.call_json("without_accents", "\r", ""), "\"\\r\"")
  assert_eq(@lib.call_json("without_accents", "\n", ""), "\"\\n\"")
  assert_eq(@lib.call_json("without_accents", "\u{0008}", ""), "\"\\b\"")
  assert_eq(@lib.call_json("without_accents", "\u{000C}", ""), "\"\\f\"")
  assert_eq(@lib.call_json("without_accents", "\u{0000}", ""), "\"\\u0000\"")
  assert_eq(@lib.call_json("without_accents", "\u{2028}", ""), "\"\u{2028}\"")
  let q = "\""
  let bs = "\\"
  assert_eq(
    @lib.call_json("without_accents", q + bs, ""),
    q + bs + q + bs + bs + q,
  )
  for i in 0..<32 {
    let raw = Int32::unsafe_to_char(i).to_string()
    let out = @lib.call_json("remove_punctuation", raw, "")
    assert_false(has_raw_control(out), msg=out)
    let esc = if i == 8 {
      "\\b"
    } else if i == 9 {
      "\\t"
    } else if i == 10 {
      "\\n"
    } else if i == 12 {
      "\\f"
    } else if i == 13 {
      "\\r"
    } else {
      "\\u00" + hex_digit(i >> 4).to_string() + hex_digit(i & 0x0F).to_string()
    }
    assert_eq(out, "\"" + esc + "\"")
  }
}

///|
fn hex_digit(n : Int32) -> Char {
  if n < 10 {
    Int32::unsafe_to_char(48 + n)
  } else {
    Int32::unsafe_to_char(87 + n)
  }
}

///|
test "call_json, word_json, lookup_json and detect JSON contain no raw controls" {
  let nasty = "α\"\\\t\r\u{0001}\u{0008}\u{000C}\u{2028}β"
  assert_eq(call_names.length(), 39)
  for name in call_names {
    let out = @lib.call_json(name, nasty, call_arg2(name))
    assert_false(has_raw_control(out), msg=name + " => " + out)
  }
  assert_false(has_raw_control(@lib.word_json(nasty)))
  assert_false(has_raw_control(@lib.lookup_json(nasty)))
  assert_false(has_raw_control(@lib.syllabify_json(nasty)))
  let d = @lib.detect("a t", greek_text=nasty).to_json_string()
  assert_false(has_raw_control(d))
  assert_true(d.has_prefix("{\"mode\":"))
}

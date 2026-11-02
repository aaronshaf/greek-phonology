// English respelling. ipa() is not involved; the golden snapshot stays put.

///|
fn all_caps(s : String) -> Bool {
  let mut letter = false
  for c in s {
    if c >= 'a' && c <= 'z' {
      return false
    }
    if c >= 'A' && c <= 'Z' {
      letter = true
    }
  }
  letter
}

///|
fn any_caps(s : String) -> Bool {
  for c in s {
    if c >= 'A' && c <= 'Z' {
      return true
    }
  }
  false
}

///|
test "respell golden: twenty koine words and John 1:1" {
  let rows = [
    ("ἄρτος", "AR-tos"),
    ("λόγος", "LO-ghos"),
    ("θεός", "the-OS"),
    ("ἀγάπη", "a-GHA-pay"),
    ("ἄνθρωπος", "AN-thro-pos"),
    ("οὐρανός", "oo-ra-NOS"),
    ("κύριος", "KUE-ree-os"),
    ("υἱός", "ue-OS"),
    ("αὐτός", "af-TOS"),
    ("εὖ", "EV"),
    ("Χριστός", "khree-STOS"),
    ("πνεῦμα", "PNEV-ma"),
    ("καρδία", "kar-THEE-a"),
    ("θάλασσα", "THA-las-sa"),
    ("ἄγγελος", "ANG-ye-los"),
    ("Μωϋσῆς", "mo-ue-SAYS"),
    ("εἰρήνη", "ee-RAY-nay"),
    ("πατήρ", "pa-TAYR"),
    ("οὐρανοῦ", "oo-ra-NOO"),
    ("μαθητής", "ma-thay-TAYS"),
  ]
  for row in rows {
    let (w, exp) = row
    assert_eq(@lib.respell(w, "koine"), exp, msg=w)
  }
  let verse = "Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν, καὶ θεὸς ἦν ὁ λόγος."
  assert_eq(
    @lib.respell(verse, "koine"),
    "en ar-KHAY AYN o LO-ghos, KE o LO-ghos AYN PROS TON the-ON, KE the-OS AYN o LO-ghos.",
  )
  assert_eq(
    @lib.respell("Ἐν ἀρχῇ ἦν ὁ λόγος", "koine"),
    "en ar-KHAY AYN o LO-ghos",
  )
}

///|
test "the capital syllable is the accent word() reports" {
  let words = [
    "ἄρτος", "λόγος", "θεός", "ἀγάπη", "ἄνθρωπος",
    "εὖ", "τις", "ἐν", "θεὸς", "πνεῦμα", "μαθητής", "καὶ",
    "πρὸς",
  ]
  for w in words {
    let spelled = @lib.respell(w, "koine")
    let parts = spelled.split("-").map(fn(v) { v.to_owned() }).collect()
    let n = @lib.syllabify(w).length()
    assert_eq(parts.length(), n, msg=w + " " + spelled)
    match @lib.accent(w) {
      Some((pos, _)) => {
        let stress = n - pos
        for i, p in parts {
          if i == stress {
            assert_true(all_caps(p), msg=w + " " + spelled)
          } else {
            assert_false(any_caps(p), msg=w + " " + spelled)
          }
        }
      }
      None => assert_false(any_caps(spelled), msg=w + " " + spelled)
    }
  }
}

///|
test "punctuation, spaces, and unknown characters stay in place" {
  assert_eq(@lib.respell("ἄρτος,", "koine"), "AR-tos,")
  assert_eq(@lib.respell("(ἄρτος).", "koine"), "(AR-tos).")
  assert_eq(@lib.respell("ἄρτος;", "koine"), "AR-tos;")
  assert_eq(@lib.respell("ἄρτος·", "koine"), "AR-tos·")
  assert_eq(@lib.respell("ἄρτος\u{037E}", "koine"), "AR-tos\u{037E}")
  assert_eq(@lib.respell("ἄρτος\u{0387}", "koine"), "AR-tos\u{0387}")
  assert_eq(
    @lib.respell("ἄρτος, λόγος· θεός; ἀγάπη.", "koine"),
    "AR-tos, LO-ghos· the-OS; a-GHA-pay.",
  )
  assert_eq(@lib.respell("ἄρτος  λόγος", "koine"), "AR-tos  LO-ghos")
  assert_eq(@lib.respell("ἄρτος\nλόγος", "koine"), "AR-tos\nLO-ghos")
  assert_eq(
    @lib.respell("ἄρτος\r\nλόγος", "koine"),
    "AR-tos\r\nLO-ghos",
  )
  assert_eq(@lib.respell(" ἄρτος", "koine"), " AR-tos")
  assert_eq(@lib.respell("   ", "koine"), "   ")
  assert_eq(@lib.respell("", "koine"), "")
  assert_eq(@lib.respell("hello", "koine"), "hello")
  assert_eq(@lib.respell("ἄρτος 🙂", "koine"), "AR-tos 🙂")
  assert_eq(@lib.respell("ἄρτος!", "koine"), "AR-tos!")
  assert_eq(@lib.respell("123", "koine"), "123")
  assert_eq(@lib.respell("\u{0301}", "koine"), "\u{0301}")
  assert_eq(@lib.respell("ϟ", "koine"), "ϟ")
  assert_eq(@lib.respell("αa", "koine"), "aa")
  assert_eq(
    @lib.respell("α\u{0313}\u{0301}ρτος", "koine"),
    @lib.respell("ἄρτος", "koine"),
  )
  assert_eq(@lib.respell("Ἄρτος", "koine"), "AR-tos")
  let junk = [
    "\u{0000}", "αaβ", "ἄρτος\tλόγος", "δι' αὐτοῦ", "🙂ἄρτος",
  ]
  for s in @lib.schemes {
    for w in junk {
      ignore(@lib.respell(w, s))
    }
    ignore(@lib.respell("", s))
  }
  assert_eq(@lib.respell("ἄρτος", ""), "")
  assert_eq(@lib.respell("ἄρτος", "KOINE"), "")
  assert_eq(@lib.respell("ἄρτος", "attic-reconstructed"), "")
  assert_eq(@lib.respell("ἄρτος", "nope"), "")
}

///|
test "all four schemes respell, and they follow that scheme's phones" {
  let rows = [
    ("ἄρτος", "modern", "AR-tos"),
    ("ἄρτος", "koine", "AR-tos"),
    ("ἄρτος", "attic", "AR-tos"),
    ("ἄρτος", "erasmian", "AR-tos"),
    ("λόγος", "modern", "LO-ghos"),
    ("λόγος", "koine", "LO-ghos"),
    ("λόγος", "attic", "LO-gos"),
    ("λόγος", "erasmian", "LO-gos"),
    ("θεός", "modern", "thay-OS"),
    ("θεός", "koine", "the-OS"),
    ("θεός", "attic", "thay-OS"),
    ("θεός", "erasmian", "thay-OS"),
    ("αὐτός", "modern", "af-TOS"),
    ("αὐτός", "koine", "af-TOS"),
    ("αὐτός", "attic", "au-TOS"),
    ("αὐτός", "erasmian", "au-TOS"),
    ("εὖ", "modern", "AYF"),
    ("εὖ", "koine", "EV"),
    ("εὖ", "attic", "AYOO"),
    ("εὖ", "erasmian", "YOO"),
    ("ὁ", "koine", "o"),
    ("ὁ", "modern", "o"),
    ("ὁ", "attic", "ho"),
    ("ὁ", "erasmian", "ho"),
    ("θάλασσα", "koine", "THA-las-sa"),
    ("θάλασσα", "attic", "THA-las-sa"),
    ("λάμπα", "modern", "LAM-ba"),
    ("κόσμος", "modern", "KO-zmos"),
    ("τῇ", "attic", "TEI"),
    ("τῇ", "koine", "TAY"),
    ("ἡ", "erasmian", "hay"),
    ("εἰ", "koine", "ee"),
    ("εἰ", "erasmian", "ay"),
  ]
  for row in rows {
    let (w, s, exp) = row
    assert_eq(@lib.respell(w, s), exp, msg=w + " " + s)
    assert_true(@lib.ipa(w, s) != "", msg=w + " " + s)
  }
  assert_true(@lib.ipa("θάλασσα", "attic").contains("sː"))
  assert_false(@lib.ipa("θάλασσα", "koine").contains("ː"))
}

///|
test "respell is on call_json and the api export" {
  assert_eq(@lib.call_json("respell", "ἄρτος", "koine"), "\"AR-tos\"")
  assert_eq(@lib.call_json("respell", "ἄρτος", "nope"), "\"\"")
  assert_eq(@api.respell("λόγος", "koine"), "LO-ghos")
  assert_eq(
    @api.respell("Ἐν ἀρχῇ ἦν ὁ λόγος", "koine"),
    "en ar-KHAY AYN o LO-ghos",
  )
  let mut long = ""
  for _ in 0..<40 {
    long = long + "α"
  }
  let out = @lib.respell(long, "attic")
  assert_true(out.contains("a"))
  assert_false(out.contains("α"))
}

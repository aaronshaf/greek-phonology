// Unicode edges for g2p. These lock the current normalizer. They do not
// decide a new pronunciation.

///|
fn same_ipa(a : String, b : String) -> Bool {
  let mut ok = true
  for s in @lib.schemes {
    if @lib.ipa(a, s) != @lib.ipa(b, s) {
      ok = false
    }
  }
  ok
}

///|
test "empty, punctuation, and non-Greek input produce no phones" {
  for s in @lib.schemes {
    assert_eq(@lib.ipa("", s), "")
    assert_eq(@lib.ipa(".,;·", s), "")
    assert_eq(@lib.ipa("\u{0301}\u{0314}", s), "")
    assert_eq(@lib.ipa("hello", s), "")
    assert_true(@lib.ipa("α", s) != "")
  }
}

///|
test "normalization is idempotent across mark order, sigma, and composed letters" {
  let pairs = [
    ("λόγος", "λόγοσ"),
    ("αςα", "ασα"),
    ("λόγος,", "λόγος"),
    ("λόγος.", "λόγος"),
    ("(λόγος)", "λόγος"),
    ("λόγος hello", "λόγος"),
    ("ᾳ", "α\u{0345}"),
    ("ᾷ", "α\u{0345}\u{0342}"),
    ("ἁ", "α\u{0314}"),
    ("ἀ", "α\u{0313}"),
    ("ἅ", "α\u{0314}\u{0301}"),
    ("ἅ", "α\u{0301}\u{0314}"),
    ("ϊ", "ι\u{0308}"),
    ("τῇ", "τη\u{0342}\u{0345}"),
    ("τῇ", "τη\u{0345}\u{0342}"),
    ("λόγος", "λόγος"),
  ]
  for pair in pairs {
    let (a, b) = pair
    assert_true(same_ipa(a, b), msg=a + " vs " + b)
  }
  for s in @lib.schemes {
    let once = @lib.ipa("ἐν ἀρχῇ", s)
    assert_eq(@lib.ipa("ἐν ἀρχῇ", s), once)
    for p in @lib.tokenize(once) {
      if p != "|" {
        assert_true(@lib.phone_known(p), msg=s + " " + p)
      }
    }
  }
}

///|
test "diaeresis, breathing, and subscript change the phones where the scheme says so" {
  assert_true(@lib.ipa("αι", "modern") != @lib.ipa("αϊ", "modern"))
  assert_true(@lib.ipa("ἁ", "attic").contains("h"))
  assert_false(@lib.ipa("ἀ", "attic").contains("h"))
  assert_eq(@lib.ipa("τῇ", "attic"), "t ɛː i")
  assert_eq(@lib.ipa("τῇ", "koine") != "", true)
}

///|
test "a long Greek word stays inside the inventory" {
  let mut w = ""
  for _ in 0..<80 {
    w = w + "α"
  }
  for s in @lib.schemes {
    let out = @lib.ipa(w, s)
    assert_true(out != "")
    for p in @lib.tokenize(out) {
      assert_true(@lib.phone_known(p), msg=p)
    }
  }
}

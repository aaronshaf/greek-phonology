// Property tests for invariants that are not (yet) machine-proved; see README "Verification".

///|
fn lcg(seed : Ref[Int]) -> Int {
  seed.val = (seed.val * 1103515245 + 12345) & 0x7FFFFFFF
  seed.val
}

///|
let letters : Array[String] = [
  "α", "ε", "η", "ι", "ο", "υ", "ω", "ά", "έ", "ή", "ί", "ό", "ύ", "ώ", "ᾶ", "ῆ", "ῶ", "ᾳ", "ῃ", "ῳ",
  "ϊ", "ϋ", "ἁ", "ἐ", "ὁ", "αι", "ει", "οι", "ου", "αυ", "ευ", "υι", "β", "γ", "δ", "ζ", "θ", "κ",
  "λ", "μ", "ν", "ξ", "π", "ρ", "σ", "τ", "φ", "χ", "ψ", "στ", "πτ", "χθ", "στρ", "γγ", "μν",
]

///|
fn random_word(seed : Ref[Int]) -> String {
  let n = 1 + lcg(seed) % 7
  let sb = StringBuilder::new()
  for _ in 0..<n {
    sb.write_string(letters[lcg(seed) % letters.length()])
  }
  sb.to_string()
}

///|
fn vowel_unit(u : String) -> Bool {
  for c in u {
    return c == 'α' || c == 'ε' || c == 'η' || c == 'ι' || c == 'ο' || c == 'υ' || c == 'ω'
  }
  false
}

///|
test "softmax: probabilities are non-negative and sum to 1" {
  let seed = Ref(42)
  for _ in 0..<2000 {
    let ll = Array::makei(5, fn(_) { (lcg(seed) % 20000).to_double() / 100.0 - 100.0 })
    let t = 0.1 + (lcg(seed) % 3000).to_double() / 100.0
    let p = @lib.softmax(ll, t)
    let mut z = 0.0
    for x in p {
      assert_true(x >= 0.0)
      z += x
    }
    assert_true((z - 1.0).abs() < 1.0e-12)
  }
}

///|
test "detect: output probabilities are a distribution (aligned and free modes)" {
  let seed = Ref(7)
  for _ in 0..<300 {
    let w = random_word(seed) + " " + random_word(seed)
    let s = @lib.schemes[lcg(seed) % 5]
    for d in [@lib.detect(@lib.ipa(w, s), greek_text=w), @lib.detect(@lib.ipa(w, s))] {
      let mut z = 0.0
      for x in d.probs {
        assert_true(x >= 0.0)
        z += x
      }
      assert_true((z - 1.0).abs() < 1.0e-9)
    }
  }
}

///|
test "syllabify: concatenation gives back the word's units; one nucleus per syllable" {
  let seed = Ref(1)
  for _ in 0..<5000 {
    let w = random_word(seed)
    let us = @lib.units(w).map(fn(u) { u.u })
    let sy = @lib.syllabify(w)
    let flat : Array[String] = []
    for s in sy {
      for u in s {
        flat.push(u)
      }
    }
    assert_eq(flat, us)
    let has_vowel = us.iter().any(vowel_unit)
    if has_vowel {
      for s in sy {
        let n = s.filter(vowel_unit).length()
        assert_eq(n, 1)
      }
    }
  }
}

///|
test "recessive accent always obeys the law of limitation" {
  let seed = Ref(3)
  for _ in 0..<5000 {
    let w = random_word(seed)
    match @lib.recessive_accent(w) {
      Some((pos, kind)) => {
        let n = @lib.syllabify(w).length()
        assert_true(pos >= 1 && pos <= n && pos <= 3)
        if kind == "circumflex" {
          assert_true(pos <= 2)
        }
      }
      None => ()
    }
  }
}

///|
test "examples" {
  assert_eq(@lib.syllabify("ἀκηκόαμεν"), [["α"], ["κ", "η"], ["κ", "ο"], ["α"], ["μ", "ε", "ν"]])
  assert_eq(@lib.syllabify("Βηθσαϊδά"), [["β", "η", "θ"], ["σ", "α"], ["ι"], ["δ", "α"]])
  assert_eq(@lib.syllabify("στραφείς")[0], ["σ", "τ", "ρ", "α"])
  assert_eq(@lib.syllabify("γωνίᾳ"), [["γ", "ω"], ["ν", "ι"], ["α"]])
  assert_eq(@lib.accent("ἐχθροῦ"), Some((1, "circumflex")))
  assert_eq(@lib.accent_ok("ἀκηκόαμεν"), Some(true))
  assert_eq(@lib.accent_ok("λόγου") , Some(true))
  assert_eq(@lib.accent_ok("ἄνθρωπου"), Some(false))
  assert_eq(@lib.ipa("θεός", "attic"), "tʰ e o s")
  assert_eq(@lib.ipa("θεός", "modern"), "θ e o s")
  assert_eq(@lib.ipa("οἱ", "byzantine"), "y")
  assert_eq(@lib.ipa("αὐτός", "modern"), "a f t o s")
  let t = "Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν, οἱ υἱοὶ τῆς γῆς εὐαγγέλιον ἔχουσιν, δι αὐτοῦ πάντα ἐγένετο."
  for i, s in @lib.schemes {
    let d = @lib.detect(@lib.ipa(t, s), greek_text=t)
    let mut best = 0
    for j in 0..<5 {
      if d.probs[j] > d.probs[best] {
        best = j
      }
    }
    assert_eq(best, i)
  }
}

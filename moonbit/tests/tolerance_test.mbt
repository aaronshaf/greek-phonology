// Reliability weights. Opt-in: these tests never call ipa() for a score,
// and one test checks ipa() itself is unchanged.

///|
fn ctx(position : String, stress : String) -> @lib.TolContext {
  @lib.TolContext::of(position, stress)
}

///|
fn has(xs : Array[String], s : String) -> Bool {
  for x in xs {
    if x == s {
      return true
    }
  }
  false
}

///|
fn band_matches(weight : Double, band : String) -> Bool {
  if band == "lenient" {
    weight < 0.350
  } else if band == "mixed" {
    weight >= 0.350 - 1.0e-6 && weight < 0.600
  } else if band == "strict" {
    weight >= 0.600 - 1.0e-6
  } else {
    false
  }
}

///|
test "weights stay in 0..=1 and the band matches the weight" {
  let phones = [
    "", "a", "e", "i", "o", "u", "y", "ɛ", "ɔ", "ɪ", "ʊ", "aː", "eː", "iː",
    "oː", "uː", "yː", "ɛː", "ɔː", "p", "t", "k", "b", "d", "g", "pʰ", "tʰ",
    "kʰ", "f", "v", "θ", "ð", "s", "z", "x", "ɣ", "ç", "ʝ", "β", "ɸ", "h",
    "m", "n", "ŋ", "l", "r", "ɾ", "j", "w", "d͡z", "ai", "oi", "au", "eu", "sː",
    "lː", "qq", "∅",
  ]
  let positions = ["", "onset", "nucleus", "coda", "side"]
  let stresses = ["", "stressed", "unstressed", "tonic"]
  let schemes = [
    "modern", "koine", "attic", "erasmian", "", "nope", "grc-attic-restored", "grc-koine-reconstructed",
    "grc-erasmian-us", "grc-modern-style",
  ]
  for phone in phones {
    for position in positions {
      for stress in stresses {
        for scheme in schemes {
          let t = @lib.tolerance(phone, ctx(position, stress), scheme)
          assert_true(t.weight >= 0.0 && t.weight <= 1.0, msg=phone)
          assert_true(band_matches(t.weight, t.band), msg=phone + " " + t.band)
          assert_true(
            t.rung == "position" ||
            t.rung == "stress" ||
            t.rung == "position+stress" ||
            t.rung == "phone" ||
            t.rung == "class" ||
            t.rung == "default",
          )
          assert_true(t.accept.length() <= 6)
          assert_true(t.n >= 0)
        }
      }
    }
  }
}

///|
test "kernel weights stay in range and a short slice backs off" {
  let seed = Ref(11)
  for _ in 0..<400 {
    let n_pos = lcg(seed) % 120
    let n_stress = lcg(seed) % 120
    let n_phone = lcg(seed) % 400
    let n_class = lcg(seed) % 2000
    let w_pos = lcg(seed) % 1001
    let w_stress = lcg(seed) % 1001
    let w_phone = lcg(seed) % 1001
    let w_class = lcg(seed) % 1001
    let packed = @kernel.tol_decide(
      n_pos, w_pos, n_stress, w_stress, n_phone, w_phone, n_class, w_class,
    )
    let w = @kernel.tol_decided_weight(packed)
    let src = @kernel.tol_decided_source(packed)
    assert_true(w >= 0 && w <= 1000)
    assert_true(src >= 0 && src <= 5)
    if n_pos < 20 && n_stress < 20 {
      let phone = @kernel.tol_decide(
        0, 0, 0, 0, n_phone, w_phone, n_class, w_class,
      )
      assert_eq(packed, phone)
      assert_true(src >= 3)
    }
    if n_pos >= 20 && n_pos < n_phone && n_stress < 20 {
      assert_eq(src, 0)
    }
    if n_stress >= 20 && n_stress < n_phone && n_pos < 20 {
      assert_eq(src, 1)
    }
    if n_pos >= 20 && n_pos < n_phone && n_stress >= 20 && n_stress < n_phone {
      assert_eq(src, 2)
      let wp = @kernel.tol_decided_weight(
        @kernel.tol_decide(
          n_pos, w_pos, 0, 0, n_phone, w_phone, n_class, w_class,
        ),
      )
      let ws = @kernel.tol_decided_weight(
        @kernel.tol_decide(
          0, 0, n_stress, w_stress, n_phone, w_phone, n_class, w_class,
        ),
      )
      assert_true(w <= wp && w <= ws)
      assert_true(w == wp || w == ws)
    }
  }
  assert_true(@kernel.tol_defaults())
  assert_true(@kernel.tol_sparse_position_backs_off())
  assert_true(@kernel.tol_aspirate_onset_low())
  assert_eq(@kernel.tol_lenient_pick(true, 400, true, 200), 200)
  assert_eq(@kernel.tol_lenient_pick(true, 100, false, 900), 100)
  assert_true(@kernel.tol_length_miss_is_free(4))
  assert_eq(@kernel.tol_length_miss_milli(), 0)
  assert_eq(@kernel.tol_miss_milli(4, false, true), 0)
  assert_eq(@kernel.tol_miss_milli(4, false, false), 4)
}

///|
test "a one-token coda backs off to the phone, and a real onset does not" {
  let coda = @lib.tolerance("t", ctx("coda", ""), "attic")
  let bare = @lib.tolerance("t", @lib.TolContext::plain(), "attic")
  assert_eq(coda.rung, "phone")
  assert_eq(coda.weight, bare.weight)
  assert_eq(coda.n, 115)
  assert_eq(bare.set, "attic")
  let onset = @lib.tolerance("s", ctx("onset", ""), "attic")
  let s = @lib.tolerance("s", @lib.TolContext::plain(), "attic")
  assert_eq(onset.rung, "position")
  assert_true(onset.weight != s.weight)
  assert_eq(onset.n, 61)
  assert_true(onset.weight > s.weight)
  let both = @lib.tolerance("s", ctx("onset", "stressed"), "attic")
  let stress = @lib.tolerance("s", ctx("", "stressed"), "attic")
  assert_eq(both.rung, "position+stress")
  assert_true(both.weight <= onset.weight)
  assert_true(both.weight <= stress.weight)
}

///|
test "aspirates in the onset get a low weight" {
  for phone in ["tʰ", "pʰ", "kʰ"] {
    for scheme in ["attic", "koine", "erasmian", "grc-attic-restored"] {
      let t = @lib.tolerance(phone, ctx("onset", ""), scheme)
      assert_true(t.weight < 0.20, msg=phone + " " + scheme)
      assert_eq(t.band, "lenient")
      assert_eq(t.set, "attic")
      assert_true(
        t.weight < @lib.tolerance("p", ctx("onset", ""), scheme).weight,
      )
    }
  }
  let th = @lib.tolerance("tʰ", ctx("onset", ""), "attic")
  assert_eq(th.rung, "position")
  assert_eq(th.n, 23)
  assert_true(has(th.accept, "t"))
  assert_true(has(th.accept, "∅"))
  let koine = @lib.tolerance("tʰ", ctx("onset", ""), "koine")
  let erasmian = @lib.tolerance("tʰ", ctx("onset", ""), "erasmian")
  assert_eq(koine.weight, th.weight)
  assert_eq(erasmian.weight, th.weight)
  assert_eq(
    @lib.tolerance_json("tʰ", "onset,", "attic"),
    "{\"weight\":0.004,\"accept\":[\"∅\",\"t\"],\"rung\":\"position\",\"band\":\"lenient\",\"n\":23,\"set\":\"attic\",\"model\":\"ft-AC-20mb-lo\",\"sha256\":\"bd035d0c51ed2bb876891dff3490f4c2a9a28a5345b8aae63d49620b9e7002cd\",\"data\":\"reliability-v1\"}",
  )
}

///|
test "modern uses FLEURS and an unknown phone backs off by class" {
  let s = @lib.tolerance("s", ctx("onset", ""), "modern")
  assert_eq(s.set, "fleurs")
  assert_eq(s.rung, "position")
  assert_true(s.weight > 0.85)
  assert_eq(s.band, "strict")
  let v = @lib.tolerance("v", @lib.TolContext::plain(), "koine")
  let phi = @lib.tolerance("ɸ", @lib.TolContext::plain(), "attic")
  assert_eq(v.rung, "class")
  assert_eq(v.set, "attic")
  assert_eq(v.weight, phi.weight)
  assert_eq(v.n, 136)
  let iota = @lib.tolerance("ɪ", @lib.TolContext::plain(), "attic")
  assert_eq(iota.rung, "class")
  assert_true(iota.weight != v.weight)
  let missing = @lib.tolerance("qq", @lib.TolContext::plain(), "attic")
  assert_eq(missing.rung, "default")
  assert_eq(missing.weight, 0.5)
  let nope = @lib.tolerance("tʰ", ctx("onset", ""), "byzantine")
  assert_eq(nope.rung, "default")
  assert_eq(nope.set, "")
  assert_eq(nope.weight, 0.5)
  let meta = @lib.tolerance_meta_json()
  assert_true(
    meta.contains(
      "bd035d0c51ed2bb876891dff3490f4c2a9a28a5345b8aae63d49620b9e7002cd",
    ),
  )
  assert_true(meta.contains("reliability-v1"))
  assert_true(meta.contains("no held-out set"))
  assert_true(meta.contains("\"lib\":\"0.5.0\""))
}

///|
test "long-vowel length misses score nothing" {
  let omega = @lib.tolerance("ɔː", @lib.TolContext::plain(), "attic")
  assert_true(has(omega.accept, "ɔ"))
  assert_true(has(omega.accept, "o"))
  assert_eq(omega.rung, "phone")
  assert_true(omega.weight < 0.20)
  assert_eq(@lib.ipa("φῶς", "attic"), "pʰ ɔː s")
  assert_eq(@lib.ipa("θεός", "attic"), "tʰ e o s")
  let good = @lib.tolerance_word("φῶς", "attic", "pʰ o s")
  assert_eq(good[0].penalty, 0.0)
  assert_eq(good[0].scored, 3)
  let exact = @lib.tolerance_word(
    "φῶς",
    "attic",
    @lib.ipa("φῶς", "attic"),
  )
  assert_eq(exact[0].penalty, 0.0)
  let bad = @lib.tolerance_word("φῶς", "attic", "pʰ a s")
  assert_true(bad[0].penalty > 0.0 && bad[0].penalty < 0.20)
  let unaspirated = @lib.tolerance_word("θεός", "attic", "t e o s")
  assert_eq(unaspirated[0].penalty, 0.0)
  let other = @lib.tolerance_word("θεός", "attic", "x e o s")
  assert_true(other[0].penalty > 0.0 && other[0].penalty < 0.05)
}

///|
fn spots(text : String, scheme : String) -> String {
  let sb = StringBuilder()
  for w in @lib.tolerance_word(text, scheme, "") {
    for u in w.units {
      sb.write_string(u.t + "/" + u.band + " ")
      for p in u.phones {
        sb.write_string(p.phone + ":" + p.position + ":" + p.stress + " ")
      }
    }
  }
  sb.to_string()
}

///|
test "word helper places onset, nucleus, coda, and stress" {
  assert_eq(
    spots("θεός", "attic"),
    "θ/lenient tʰ:onset:unstressed ε/mixed e:nucleus:unstressed ό/mixed o:nucleus:stressed ς/strict s:coda:stressed ",
  )
  assert_eq(
    spots("λόγος", "attic"),
    "λ/strict l:onset:stressed ό/mixed o:nucleus:stressed γ/strict g:onset:unstressed ο/mixed o:nucleus:unstressed ς/strict s:coda:unstressed ",
  )
  let colour = @lib.tolerance_word("θεός", "attic", "")
  assert_eq(colour[0].penalty, -1.0)
  assert_eq(colour[0].scored, 0)
  assert_eq(colour[0].units[0].band, "lenient")
  assert_true(colour[0].units[0].weight < 0.20)
  let rough = @lib.tolerance_word("ἁ", "attic", "")
  assert_eq(rough[0].units[0].phones[0].phone, "h")
  assert_eq(rough[0].units[0].phones[0].position, "onset")
  assert_eq(rough[0].units[0].phones[1].position, "nucleus")
  let ai = @lib.tolerance_word("αἰ", "attic", "")
  assert_eq(ai[0].units[0].k, "diph")
  assert_eq(ai[0].units[0].group, "ai")
  assert_true(ai[0].units[0].group_weight >= 0.0)
  let koine = @lib.tolerance_word("αἰ", "koine", "")
  assert_eq(koine[0].units[0].group, "")
  let phrase_text = "θεὸς λόγος"
  let phrase = @lib.tolerance_word(
    phrase_text,
    "attic",
    @lib.ipa(phrase_text, "attic"),
  )
  assert_eq(phrase.length(), 2)
  assert_eq(phrase[0].penalty, 0.0)
  assert_eq(phrase[1].penalty, 0.0)
  assert_eq(@lib.ipa(phrase_text, "attic"), "tʰ e o s | l o g o s")
}

///|
test "sample outputs stay put" {
  assert_eq(
    @lib.tolerance_json("s", "onset,", "modern"),
    "{\"weight\":0.893,\"accept\":[],\"rung\":\"position\",\"band\":\"strict\",\"n\":1096,\"set\":\"fleurs\",\"model\":\"ft-AC-20mb-lo\",\"sha256\":\"bd035d0c51ed2bb876891dff3490f4c2a9a28a5345b8aae63d49620b9e7002cd\",\"data\":\"reliability-v1\"}",
  )
  assert_eq(
    @lib.tolerance_word_json("θεός", "attic", "x e o s"),
    "{\"v\":1,\"lib\":\"0.5.0\",\"data\":\"reliability-v1\",\"version\":1,\"generated\":\"2026-11-02T15:36:41-07:00\",\"model\":\"ft-AC-20mb-lo\",\"sha256\":\"bd035d0c51ed2bb876891dff3490f4c2a9a28a5345b8aae63d49620b9e7002cd\",\"scheme\":\"attic\",\"koine\":\"no held-out set; Attic rows are used where the phone matches\",\"words\":[{\"text\":\"θεός\",\"phones\":4,\"scored\":4,\"penalty\":0.004,\"units\":[{\"t\":\"θ\",\"k\":\"c\",\"from\":0,\"to\":1,\"weight\":0.004,\"band\":\"lenient\",\"phones\":[{\"phone\":\"tʰ\",\"position\":\"onset\",\"stress\":\"unstressed\",\"weight\":0.004,\"accept\":[\"∅\",\"t\"],\"rung\":\"position\",\"band\":\"lenient\",\"miss\":0.004}],\"group\":\"\",\"group_weight\":-1,\"group_accept\":[]},{\"t\":\"ε\",\"k\":\"v\",\"from\":1,\"to\":2,\"weight\":0.377,\"band\":\"mixed\",\"phones\":[{\"phone\":\"e\",\"position\":\"nucleus\",\"stress\":\"unstressed\",\"weight\":0.377,\"accept\":[\"∅\",\"ɛ\"],\"rung\":\"stress\",\"band\":\"mixed\",\"miss\":0.000}],\"group\":\"\",\"group_weight\":-1,\"group_accept\":[]},{\"t\":\"ό\",\"k\":\"v\",\"from\":2,\"to\":3,\"weight\":0.436,\"band\":\"mixed\",\"phones\":[{\"phone\":\"o\",\"position\":\"nucleus\",\"stress\":\"stressed\",\"weight\":0.436,\"accept\":[\"∅\",\"u\"],\"rung\":\"stress\",\"band\":\"mixed\",\"miss\":0.000}],\"group\":\"\",\"group_weight\":-1,\"group_accept\":[]},{\"t\":\"ς\",\"k\":\"c\",\"from\":3,\"to\":4,\"weight\":0.628,\"band\":\"strict\",\"phones\":[{\"phone\":\"s\",\"position\":\"coda\",\"stress\":\"stressed\",\"weight\":0.628,\"accept\":[],\"rung\":\"position+stress\",\"band\":\"strict\",\"miss\":0.000}],\"group\":\"\",\"group_weight\":-1,\"group_accept\":[]}]}]}",
  )
}

///|
test "a hearing of ipa() scores zero and does not change ipa()" {
  let words = [
    "θεός", "λόγος", "φῶς", "ἄνθρωπος", "ἐν",
  ]
  let schemes = ["attic", "koine", "erasmian", "modern"]
  for scheme in schemes {
    for word in words {
      let heard = @lib.ipa(word, scheme)
      let before = heard
      let scored = @lib.tolerance_word(word, scheme, heard)
      assert_eq(@lib.ipa(word, scheme), before)
      if scored.length() == 1 && scored[0].phones > 0 {
        assert_eq(scored[0].penalty, 0.0, msg=word + " " + scheme + " " + heard)
        assert_eq(scored[0].scored, scored[0].phones)
      }
    }
  }
}

// Port of the playground phondist.test.mjs 45-pair table, plus grapheme alternates.
// A learner goal may change tier and sim. It must not change d, note, or advice.

///|
let accurate : String = "accurate"

///|
let tolerated : String = "tolerated"

///|
let nomatch : String = "not-a-match"

///|
let tier_table : Array[(String, String, String, String)] = [
  ("koine", "ð", "ð", accurate),
  ("koine", "ð", "d", tolerated),
  ("koine", "ð", "z", tolerated),
  ("koine", "ð", "θ", tolerated),
  ("koine", "ð", "v", nomatch),
  ("koine", "ð", "k", nomatch),
  ("koine", "β", "v", tolerated),
  ("koine", "β", "b", tolerated),
  ("koine", "β", "f", nomatch),
  ("koine", "ɛ", "e", tolerated),
  ("koine", "o", "ɔ", accurate),
  ("koine", "y", "u", tolerated),
  ("koine", "y", "i", tolerated),
  ("koine", "kʰ", "k", tolerated),
  ("koine", "ɣ", "g", tolerated),
  ("modern", "ð", "d", tolerated),
  ("modern", "ð", "z", tolerated),
  ("modern", "θ", "s", tolerated),
  ("modern", "θ", "f", nomatch),
  ("modern", "v", "f", tolerated),
  ("modern", "v", "b", nomatch),
  ("modern", "o", "ɔ", accurate),
  ("modern", "o", "u", nomatch),
  ("modern", "e", "i", nomatch),
  ("modern", "ɣ", "x", tolerated),
  ("modern", "s", "z", tolerated),
  ("attic", "ɔː", "ɔ", accurate),
  ("attic", "ɔː", "o", tolerated),
  ("attic", "uː", "u", accurate),
  ("attic", "y", "u", tolerated),
  ("attic", "tʰ", "t", tolerated),
  ("attic", "e", "a", nomatch),
  ("attic", "a", "p", nomatch),
  ("erasmian", "ɪ", "i", tolerated),
  ("erasmian", "ɪ", "e", tolerated),
  ("erasmian", "ʊ", "u", tolerated),
  ("erasmian", "ʊ", "o", tolerated),
  ("erasmian", "o", "u", nomatch),
  ("erasmian", "θ", "t", tolerated),
  ("erasmian", "x", "k", tolerated),
  ("erasmian", "x", "ç", tolerated),
  ("erasmian", "j", "i", tolerated),
  ("erasmian", "w", "u", tolerated),
  ("erasmian", "n", "m", nomatch),
  ("erasmian", "l", "r", nomatch),
]

///|
let dist_phones : Array[String] = [
  "p", "b", "m", "ɸ", "β", "f", "v", "w", "t", "d", "n", "s", "z", "θ", "ð", "l",
  "r", "ɾ", "d͡z", "ç", "ʝ", "j", "k", "g", "x", "ɣ", "ŋ", "h", "a", "e", "ɛ", "i",
  "ɪ", "y", "o", "ɔ", "u", "ʊ", "pʰ", "tʰ", "kʰ",
]

///|
fn pd(target : String, heard : String, scheme : String, goal : String) -> @lib.PhoneDistance {
  @lib.phone_distance(target, heard, scheme, goal)
}

///|
fn near(a : Double, b : Double) -> Bool {
  let d = if a > b { a - b } else { b - a }
  d < 0.000000001
}

///|
test "tier table at the gracious goal" {
  assert_eq(tier_table.length(), 45)
  for row in tier_table {
    let (sc, t, h, want) = row
    let r = pd(t, h, sc, "gracious")
    assert_eq(r.tier, want)
  }
}

///|
test "distance shape, ranges, and reference values" {
  for row in tier_table {
    let (sc, t, h, _) = row
    let r = pd(t, h, sc, "")
    assert_true(r.d >= 0.0 && r.d <= 1.0)
    assert_true(r.sim >= 0.0 && r.sim <= 1.0)
    if r.tier == nomatch {
      assert_eq(r.sim, 0.0)
    }
  }
  assert_true(near(pd("ð", "z", "koine", "").d, 0.2))
  assert_true(near(pd("ð", "z", "koine", "").sim, 0.445))
  assert_true(near(pd("ð", "θ", "koine", "").d, 0.28))
  assert_true(near(pd("ð", "θ", "koine", "").sim, 0.28))
  assert_true(near(pd("ð", "d", "koine", "").d, 0.3))
  assert_true(near(pd("ð", "d", "koine", "").sim, 0.181))
  assert_true(near(pd("ð", "v", "koine", "").d, 0.38))
  assert_true(near(pd("ð", "k", "koine", "").d, 0.92))
  assert_true(near(pd("ɔ", "o", "", "").d, 0.16))
  assert_true(near(pd("ɔ", "o", "", "").sim, 0.531))
  assert_true(near(pd("ɛ", "e", "", "").d, 0.16))
  assert_true(near(pd("β", "v", "", "").d, 0.12))
  assert_true(near(pd("β", "v", "", "").sim, 0.62))
  assert_true(near(pd("kʰ", "k", "", "").d, 0.12))
  assert_true(near(pd("y", "u", "", "").d, 0.3))
  assert_true(near(pd("y", "u", "", "").sim, 0.181))
  assert_true(near(pd("o", "u", "", "").d, 0.4))
  assert_true(near(pd("e", "a", "", "").d, 0.55))
  assert_true(near(pd("j", "i", "", "").d, 0.18))
  assert_true(near(pd("j", "i", "", "").sim, 0.488))
  assert_true(near(pd("w", "u", "", "").d, 0.18))
  assert_true(near(pd("a", "p", "", "").d, 1.0))
  assert_true(near(pd("v", "f", "", "").d, 0.28))
  assert_true(near(pd("v", "b", "", "").d, 0.34))
  assert_true(near(pd("ɔː", "ɔ", "", "").d, 0.02))
  assert_eq(pd("ɔː", "ɔ", "", "").sim, 1.0)
  assert_eq(pd("ɔː", "ɔ", "", "").tier, accurate)
}

///|
test "identity is zero, distance is symmetric, length is a tiny cost" {
  for p in dist_phones {
    assert_true(@lib.phone_known(p))
    assert_eq(pd(p, p, "", "").d, 0.0)
    assert_eq(pd(p, p, "", "").note, "That is the target sound.")
  }
  assert_false(@lib.phone_known("ɥ"))
  assert_eq(pd("zzz", "a", "", "").d, 1.0)
  assert_eq(pd("zzz", "a", "", "").note, "No comparison available for this sound.")
  for row in tier_table {
    let (_, t, h, _) = row
    assert_eq(pd(t, h, "", "").d, pd(h, t, "", "").d)
  }
  assert_true(pd("ɔː", "ɔ", "", "").d <= 0.02)
  let g = pd("ɡ", "g", "", "")
  assert_eq(g.d, 0.0)
  assert_eq(g.tier, accurate)
}

///|
test "sane ordering of distances" {
  fn d(a : String, b : String) -> Double {
    pd(a, b, "", "").d
  }
  assert_true(d("ð", "z") < d("ð", "d"))
  assert_true(d("ð", "d") < d("ð", "k"))
  assert_true(d("kʰ", "k") < d("k", "g"))
  assert_true(d("ɛ", "e") < d("ɛ", "i"))
  assert_true(d("β", "v") < d("β", "b"))
  assert_true(d("o", "ɔ") < d("o", "u"))
  assert_true(d("y", "i") < d("y", "a"))
  assert_true(d("ð", "θ") < d("ð", "s") + 0.2)
  assert_eq(d("a", "p"), 1.0)
  assert_true(d("j", "i") < 0.25 && d("w", "u") < 0.25)
  assert_true(d("j", "a") >= 0.5)
}

///|
test "scheme equivalence and long scheme names" {
  assert_eq(pd("o", "ɔ", "grc-koine-reconstructed", "").tier, accurate)
  assert_eq(pd("o", "ɔ", "grc-modern-style", "").tier, accurate)
  assert_eq(pd("o", "ɔ", "grc-attic-restored", "").tier, tolerated)
  assert_eq(pd("o", "ɔ", "grc-erasmian-us", "").tier, tolerated)
  assert_eq(pd("o", "ɔ", "koine", "").note, "Either sound is correct in this reading.")
  assert_eq(pd("o", "ɔ", "koine", "").d, 0.0)
  assert_eq(pd("o", "ɔ", "attic", "").note != pd("o", "ɔ", "koine", "").note, true)
}

///|
fn has_forbidden(s : String) -> Bool {
  let bad = "ðɣɔɛʊɪʝçʰː"
  for c in s {
    if bad.contains_char(c) {
      return true
    }
  }
  false
}

///|
fn has_two_letters(s : String) -> Bool {
  let mut prev = false
  for c in s {
    let letter = c >= 'a' && c <= 'z'
    if letter && prev {
      return true
    }
    prev = letter
  }
  false
}

///|
test "learner goal changes acceptance and credit only" {
  for row in tier_table {
    let (sc, t, h, _) = row
    let s = pd(t, h, sc, "strict")
    let g = pd(t, h, sc, "gracious")
    let l = pd(t, h, sc, "lenient")
    assert_eq(s.note, g.note)
    assert_eq(g.note, l.note)
    assert_eq(s.advice, g.advice)
    assert_eq(g.advice, l.advice)
    assert_eq(s.d, g.d)
    assert_eq(g.d, l.d)
    assert_true(s.sim <= g.sim + 0.000000001)
    assert_true(g.sim <= l.sim + 0.000000001)
    if g.tier != accurate {
      let text = g.note + g.advice
      assert_true(has_two_letters(g.note))
      assert_false(has_forbidden(text))
    }
  }
  assert_eq(pd("ð", "d", "", "strict").tier, nomatch)
  assert_eq(pd("ð", "d", "", "lenient").tier, tolerated)
  assert_eq(pd("ɛ", "e", "", "strict").tier, tolerated)
  assert_eq(pd("ð", "d", "", "").tier, pd("ð", "d", "", "gracious").tier)
  let strict_c = @lib.phone_credit("ð", ["d"], [1.0], "", "strict")
  let lenient_c = @lib.phone_credit("ð", ["d"], [1.0], "", "lenient")
  assert_eq(strict_c.combined, 0.0)
  assert_true(lenient_c.combined > 0.2)
  let said = pd("ð", "d", "grc-koine-reconstructed", "gracious")
  assert_eq(
    said.note,
    "You said “d” (as in dog), a stop. The target “th” (as in this) is a soft, voiced sound with air flowing.",
  )
  assert_eq(
    said.advice,
    "In Koine reading δ is a soft “th” as in this, air flowing. To be exact: let the air keep flowing instead of stopping it, then put the tongue tip lightly against the teeth.",
  )
  assert_true(said.note.contains("You said “d”"))
  assert_true(said.note.contains("target “th”"))
  assert_true(said.advice.contains("air keep flowing"))
}

///|
test "credit keeps an exact hit strongest and ignores anything outside the tier" {
  let aaron = @lib.phone_credit(
    "ð",
    ["d", "z", "ð"],
    [0.55, 0.41, 0.0],
    "koine",
    "gracious",
  )
  assert_eq(aaron.exact, 0.0)
  assert_true(aaron.near > 0.15 && aaron.near < 0.4)
  assert_eq(aaron.best.unwrap().phone, "z")
  let ex = @lib.phone_credit("ð", ["ð", "d"], [0.8, 0.2], "", "")
  assert_eq(ex.exact, 0.8)
  assert_true(ex.combined > 0.8)
  let exact_only = @lib.phone_credit("ð", ["ð"], [0.5], "", "")
  let near_only = @lib.phone_credit("ð", ["z"], [1.0], "", "")
  assert_true(exact_only.combined > near_only.combined)
  assert_eq(
    @lib.phone_credit("ð", ["k", "∅"], [0.9, 0.1], "", "").combined,
    0.0,
  )
  assert_true(
    @lib.phone_credit("ð", ["ð", "d"], [0.6, 0.6], "", "").combined <= 1.0,
  )
  let modern = @lib.phone_credit(
    "o",
    ["ɔ", "o"],
    [0.82, 0.11],
    "grc-modern-style",
    "",
  )
  assert_true(near((modern.exact * 100.0).round(), 93.0))
  assert_eq(@lib.phone_credit("zzz", ["a"], [1.0], "", "").combined, 0.0)
  let js = @lib.phone_credit_json("ð", "koine", "gracious", "d=0.55,z=0.41")
  assert_true(js.contains("\"best\":{\"phone\":\"z\""))
  let table = @lib.dist_table_json("grc-koine-reconstructed")
  assert_true(table.contains("\"scheme\":\"koine\""))
  assert_true(table.contains("more accurate"))
  assert_false(has_raw_control(table))
}

///|
fn heard_is(a : @lib.G2pAlt, phones : Array[String]) -> Bool {
  if a.heard.length() != phones.length() {
    return false
  }
  for i, p in phones {
    if a.heard[i] != p {
      return false
    }
  }
  true
}

///|
fn find_alt(alts : Array[@lib.G2pAlt], phones : Array[String]) -> @lib.G2pAlt? {
  for a in alts {
    if heard_is(a, phones) {
      return Some(a)
    }
  }
  None
}

///|
test "grapheme alternates are opt-in and do not repeat the target" {
  let plain = @lib.g2p_words("εὖ", "koine")[0]
  assert_eq(plain.units[0].alts.length(), 0)
  let opts = @lib.G2pOpts::with_alts()
  let end = @lib.g2p_words_opts("εὖ", "koine", opts)[0]
  assert_eq(end.units[0].ph, ["ɛ", "v"])
  let f = find_alt(end.units[0].alts, ["ɛ", "f"]).unwrap()
  assert_eq(f.tier, tolerated)
  assert_true(f.note.contains("more accurate"))
  assert_true(f.d > 0.0 && f.d < 0.33)
  let beta = find_alt(end.units[0].alts, ["ɛ", "β"]).unwrap()
  assert_eq(beta.tier, tolerated)
  assert_true(beta.note.contains("same sound"))
  assert_true(beta.note.contains("Nothing needs fixing"))
  for a in end.units[0].alts {
    assert_false(heard_is(a, end.units[0].ph))
  }
  let medial = @lib.g2p_words_opts("εὐαγγέλιον", "koine", opts)[0]
  assert_true(find_alt(medial.units[0].alts, ["ɛ", "f"]) is None)
  let yi = @lib.g2p_words_opts("υι", "erasmian", opts)[0]
  assert_eq(yi.units[0].ph, ["w", "i"])
  let yalt = find_alt(yi.units[0].alts, ["y", "i"]).unwrap()
  assert_eq(yalt.tier, tolerated)
  assert_true(yalt.note.contains("as in we"))
  assert_true(yalt.note.contains("reconstructed"))
  assert_false(yalt.note.contains("y i"))
  for a in yi.units[0].alts {
    assert_false(heard_is(a, yi.units[0].ph))
  }
  let flagged = @api.g2p_json_flags("εὖ", "koine", "alts")
  assert_true(flagged.contains("more accurate"))
  assert_false(has_raw_control(flagged))
  let away = @api.phone_distance_json("ð", "d", "koine", "strict")
  assert_true(away.contains("\"tier\":\"not-a-match\""))
  assert_false(has_raw_control(away))
}

///|
fn starts_at(cs : Array[Char], i : Int, nd : Array[Char]) -> Bool {
  if i + nd.length() > cs.length() {
    return false
  }
  for k in 0..<nd.length() {
    if cs[i + k] != nd[k] {
      return false
    }
  }
  true
}

///|
fn json_strings_for_key(s : String, key : String) -> Array[String] {
  let needle = "\"" + key + "\":\""
  let cs = s.to_array()
  let nd = needle.to_array()
  let out : Array[String] = []
  let mut i = 0
  while i < cs.length() {
    if starts_at(cs, i, nd) {
      let mut j = i + nd.length()
      let mut acc = ""
      while j < cs.length() && cs[j] != '"' {
        if cs[j] == '\\' && j + 1 < cs.length() {
          acc = acc + cs[j + 1].to_string()
          j += 2
        } else {
          acc = acc + cs[j].to_string()
          j += 1
        }
      }
      out.push(acc)
      i = j
    } else {
      i += 1
    }
  }
  out
}

///|
fn jargon_hit(s : String) -> String {
  let low = s.to_lower()
  let words = [
    "library", "target here", "bilabial", "fricative", "beta-type", "affricate",
    "phone",
  ]
  for w in words {
    if low.contains(w) {
      return w
    }
  }
  ""
}

///|
test "learner notes avoid library jargon and bare phone symbols" {
  let schemes = ["koine", "attic", "erasmian", "modern"]
  for sc in schemes {
    let table = @lib.dist_table_json(sc)
    let notes = json_strings_for_key(table, "note")
    if sc == "koine" || sc == "erasmian" {
      assert_true(notes.length() > 0)
    }
    for note in notes {
      let hit = jargon_hit(note)
      assert_eq(hit, "", msg=note)
      assert_true(note.contains("as in"), msg=note)
    }
  }
  for sc in schemes {
    for t in dist_phones {
      for h in dist_phones {
        let r = pd(t, h, sc, "gracious")
        let hit = jargon_hit(r.note)
        assert_eq(hit, "", msg=r.note)
        let adv = jargon_hit(r.advice)
        assert_eq(adv, "", msg=r.advice)
        if r.tier != accurate {
          assert_true(r.note.contains("as in") || r.note.contains("No comparison"), msg=r.note)
        }
      }
    }
  }
}

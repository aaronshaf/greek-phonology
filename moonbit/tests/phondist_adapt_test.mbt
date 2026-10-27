// Posterior adaptation, display levels, and scheme-id aliases.
// The credit numbers must match phone_credit. Notes may name a curated alternate.

///|
fn same_hit(a : @lib.CreditHit?, b : @lib.CreditHit?) -> Bool {
  match (a, b) {
    (None, None) => true
    (Some(x), Some(y)) =>
      x.phone == y.phone && x.p == y.p && x.sim == y.sim && x.d == y.d && x.tier == y.tier
    _ => false
  }
}

///|
fn same_credit(h : @lib.HearingCredit, c : @lib.PhoneCredit) -> Bool {
  h.exact == c.exact &&
  h.near == c.near &&
  h.combined == c.combined &&
  same_hit(h.best, c.best)
}

///|
test "candidate list and phone=weight string score the same credit" {
  let cands : Array[(String, Double)] = [("d", 0.55), ("z", 0.41), ("∅", 0.0)]
  let typed = @lib.hearing_credit("ð", cands, "koine", "gracious")
  let text = @lib.hearing_credit_posterior(
    "ð",
    "d=0.55,z=0.41,∅=0",
    "koine",
    "gracious",
  )
  let objects = @lib.hearing_credit_posterior(
    "ð",
    "[{\"phone\":\"d\",\"p\":0.55},{\"phone\":\"z\",\"probability\":0.41}]",
    "koine",
    "gracious",
  )
  let pairs = @lib.hearing_credit_posterior(
    "ð",
    "[[\"d\",0.55],[\"z\",0.41]]",
    "koine",
    "gracious",
  )
  let base = @lib.phone_credit(
    "ð",
    ["d", "z", "∅"],
    [0.55, 0.41, 0.0],
    "koine",
    "gracious",
  )
  assert_true(same_credit(typed, base))
  assert_true(same_credit(text, base))
  assert_true(same_credit(objects, base))
  assert_true(same_credit(pairs, base))
  assert_eq(typed.best.unwrap().phone, "z")
  assert_true(typed.note.contains("You said"))
  assert_eq(typed.note, text.note)
  assert_eq(objects.note, pairs.note)
  let exact = @lib.hearing_credit("ð", [("ð", 1.0)], "koine", "")
  assert_eq(exact.note, "That is the target sound.")
  assert_true(exact.best is None)
  let either = @lib.hearing_credit("o", [("ɔ", 1.0)], "koine", "")
  assert_eq(either.exact, 1.0)
  assert_eq(either.note, "Either sound is correct in this reading.")
  let blank = @lib.hearing_credit("ð", [], "", "")
  assert_eq(blank.combined, 0.0)
  assert_eq(blank.note, "")
  let bad = @lib.hearing_credit_posterior("ð", "[not json", "koine", "")
  assert_eq(bad.combined, 0.0)
  let js = @lib.hearing_credit_json("ð", "d=0.55,z=0.41", "koine", "gracious")
  assert_true(js.contains("\"note\":"))
  assert_true(js.contains("You said"))
  assert_false(has_raw_control(js))
}

///|
test "a grapheme unit prefers the curated alternate note" {
  let opts = @lib.G2pOpts::with_alts()
  let unit = @lib.g2p_words_opts("εὖ", "koine", opts)[0].units[0]
  let cands : Array[(String, Double)] = [("β", 1.0)]
  let h = @lib.unit_hearing_credit(unit, cands, "koine", "gracious", -1)
  let v = @lib.phone_credit("v", ["β"], [1.0], "koine", "gracious")
  assert_true(same_credit(h, v))
  assert_true(h.note.contains("Nothing needs fixing"))
  assert_true(h.note.contains("as in van"))
  let at_v = @lib.unit_hearing_credit(unit, cands, "koine", "gracious", 1)
  assert_eq(at_v.note, h.note)
  assert_eq(at_v.combined, h.combined)
  let at_e = @lib.unit_hearing_credit(unit, cands, "koine", "gracious", 0)
  let e = @lib.phone_credit("ɛ", ["β"], [1.0], "koine", "gracious")
  assert_true(same_credit(at_e, e))
  assert_eq(at_e.note, "")
  let mixed : Array[(String, Double)] = [("ɛ", 0.9), ("β", 0.1)]
  let both = @lib.unit_hearing_credit(unit, mixed, "koine", "", -1)
  assert_true(both.combined > 0.5)
  assert_eq(both.note, "That is the target sound.")
  let ujson = "{\"ph\":[\"v\"],\"alts\":[{\"heard\":[\"β\"],\"note\":\"same sound here\"}]}"
  let out = @lib.unit_hearing_credit_json(
    ujson,
    "[[\"β\",1]]",
    "koine",
    "gracious",
    "-1",
  )
  assert_true(out.contains("same sound here"))
  assert_false(has_raw_control(out))
  let via = @lib.call_json(
    "hearing_credit",
    "ð",
    "koine\u{1}gracious\u{1}d=0.55,z=0.41",
  )
  assert_true(via.contains("\"phone\":\"z\""))
  assert_eq(@lib.call_json("scheme_id", "attic-reconstructed", ""), "\"attic\"")
}

///|
test "credit levels use the percent cutoffs and a caller can override them" {
  assert_eq(@lib.credit_level_close, 8.0)
  assert_eq(@lib.credit_level_light, 30.0)
  assert_eq(@lib.credit_level_medium, 60.0)
  assert_eq(@lib.credit_level_clear, 85.0)
  assert_eq(@lib.credit_level_deepest, 95.0)
  let scale = @lib.CreditScale::standard()
  assert_eq(scale.close, 8.0)
  assert_eq(@lib.credit_level(0.0, scale), "none")
  assert_eq(@lib.credit_level(0.07, scale), "none")
  assert_eq(@lib.credit_level(0.08, scale), "close tint")
  assert_eq(@lib.credit_level(0.299, scale), "close tint")
  assert_eq(@lib.credit_level(0.30, scale), "light")
  assert_eq(@lib.credit_level(0.599, scale), "light")
  assert_eq(@lib.credit_level(0.60, scale), "medium")
  assert_eq(@lib.credit_level(0.849, scale), "medium")
  assert_eq(@lib.credit_level(0.85, scale), "clear")
  assert_eq(@lib.credit_level(0.949, scale), "clear")
  assert_eq(@lib.credit_level(0.95, scale), "deepest")
  assert_eq(@lib.credit_level(1.0, scale), "deepest")
  let tight : @lib.CreditScale = {
    close: 50.0,
    light: 60.0,
    medium: 70.0,
    clear: 80.0,
    deepest: 90.0,
  }
  assert_eq(@lib.credit_level(0.40, tight), "none")
  assert_eq(@lib.credit_level(0.55, tight), "close tint")
  assert_eq(
    @lib.credit_scale_json(),
    "{\"close\":8,\"light\":30,\"medium\":60,\"clear\":85,\"deepest\":95}",
  )
  assert_eq(@lib.credit_level_json(0.95, ""), "\"deepest\"")
  assert_eq(@lib.credit_level_json(0.5, "10,20,40,80,99"), "\"medium\"")
}

///|
test "scheme ids from the page and the long names share one short id" {
  // docs/index.html radios: koine, attic, erasmian, modern.
  assert_eq(@lib.scheme_id("koine"), "koine")
  assert_eq(@lib.scheme_id("attic"), "attic")
  assert_eq(@lib.scheme_id("erasmian"), "erasmian")
  assert_eq(@lib.scheme_id("modern"), "modern")
  assert_eq(@lib.scheme_id("KOINE"), "koine")
  assert_eq(@lib.scheme_id("ERASMIAN"), "erasmian")
  assert_eq(@lib.scheme_id("grc-koine-reconstructed"), "koine")
  assert_eq(@lib.scheme_id("grc-attic-restored"), "attic")
  assert_eq(@lib.scheme_id("grc-modern-style"), "modern")
  assert_eq(@lib.scheme_id("grc-erasmian-us"), "erasmian")
  assert_eq(@lib.scheme_id("attic-reconstructed"), "attic")
  assert_eq(@lib.scheme_id("koine-reconstructed"), "koine")
  assert_eq(@lib.scheme_id("modern-style"), "modern")
  assert_eq(@lib.scheme_id("erasmian-us"), "erasmian")
  assert_eq(@lib.scheme_id("nope"), "")
  assert_eq(@lib.scheme_id(""), "")
  assert_eq(@lib.ipa("αι", "attic-reconstructed"), "")
  assert_eq(
    @lib.ipa("αι", @lib.scheme_id("attic-reconstructed")),
    @lib.ipa("αι", "attic"),
  )
  assert_eq(@lib.ipa("θεός", "attic"), "tʰ e o s")
}

///|
test "Erasmian chi as k and Attic ou as o stay on the feature table" {
  // Gracious already tolerates x/k (distance 0.22). Strict does not.
  // The sim is the ordinary feature-table value, not a separate high-credit band.
  let gk = pd("x", "k", "erasmian", "gracious")
  assert_eq(gk.tier, tolerated)
  assert_true(gk.d > 0.20 && gk.d <= 0.33)
  assert_true(gk.sim > 0.0 && gk.sim < 1.0)
  let sk = pd("x", "k", "erasmian", "strict")
  assert_eq(sk.tier, nomatch)
  assert_eq(sk.sim, 0.0)
  // Attic ου is uː. Heard as o, the distance is above even the lenient tolerance.
  let ou = @lib.g2p_words("ου", "attic")[0]
  assert_eq(ou.units[0].ph, ["uː"])
  let far = pd("uː", "o", "attic", "lenient")
  assert_eq(far.tier, nomatch)
  assert_eq(far.sim, 0.0)
  assert_true(far.d > 0.42)
  assert_eq(pd("uː", "o", "attic", "gracious").tier, nomatch)
}

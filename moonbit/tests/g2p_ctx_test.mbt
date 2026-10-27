// Cross-word αυ/ευ/ηυ voicing. Default off: ipa() and g2p stay on the isolated-word
// target. Flag `ctx` on: Koine and Modern word-final αυ/ευ/ηυ become f before a
// voiceless letter and v before a vowel or a voiced letter. Phrase-final keeps
// the isolated target (Koine v, Modern f). Attic and Erasmian do not change.

///|
fn phrase(text : String, scheme : String, opts : @lib.G2pOpts) -> String {
  let sb = StringBuilder()
  for i, w in @lib.g2p_words_opts(text, scheme, opts) {
    if i > 0 {
      sb.write_string(" | ")
    }
    sb.write_string(w.phones.join(" "))
  }
  sb.to_string()
}

///|
let ctx_phrases : Array[String] = [
  "εὖ ὁ",
  "εὖ τοῦ",
  "εὖ δὲ",
  "αὐτός",
  "εὖ",
  "εὖ αὐτός",
  "λόγος εὖ",
  "εὖ, τοῦ",
  "εὐαγγέλιον τοῦ",
]

///|
let ctx_schemes : Array[String] = ["modern", "koine", "attic", "erasmian"]

///|
let ctx_on : Array[String] = [
  "modern\tεὖ ὁ\te v | o",
  "modern\tεὖ τοῦ\te f | t u",
  "modern\tεὖ δὲ\te v | ð e",
  "modern\tαὐτός\ta f t o s",
  "modern\tεὖ\te f",
  "modern\tεὖ αὐτός\te v | a f t o s",
  "modern\tλόγος εὖ\tl o ɣ o s | e f",
  "modern\tεὖ, τοῦ\te f | t u",
  "modern\tεὐαγγέλιον τοῦ\te v a ŋ ʝ e l i o n | t u",
  "koine\tεὖ ὁ\tɛ v | o",
  "koine\tεὖ τοῦ\tɛ f | t u",
  "koine\tεὖ δὲ\tɛ v | ð ɛ",
  "koine\tαὐτός\ta f t o s",
  "koine\tεὖ\tɛ v",
  "koine\tεὖ αὐτός\tɛ v | a f t o s",
  "koine\tλόγος εὖ\tl o ɣ o s | ɛ v",
  "koine\tεὖ, τοῦ\tɛ f | t u",
  "koine\tεὐαγγέλιον τοῦ\tɛ β a ŋ ʝ ɛ l i o n | t u",
]

///|
test "cross-word flag is off by default and ipa stays isolated" {
  for text in ctx_phrases {
    for scheme in ctx_schemes {
      assert_eq(phrase(text, scheme, @lib.G2pOpts::plain()), @lib.ipa(text, scheme))
      let words = @lib.g2p_words(text, scheme)
      for w in words {
        assert_eq(w.phones.join(" "), @lib.ipa(w.text, scheme))
        let mut tiled = ""
        for u in w.units {
          tiled = tiled + u.t
        }
        if w.units.length() > 0 {
          assert_eq(tiled, w.text)
        }
      }
    }
  }
  assert_eq(@lib.ipa("εὖ τοῦ", "koine"), "ɛ v | t u")
  assert_eq(@lib.ipa("εὖ τοῦ", "modern"), "e f | t u")
  assert_false(@lib.g2p_json("εὖ τοῦ", "koine").contains("\"phones\":[\"ɛ\",\"f\"]"))
}

///|
test "cross-word golden snapshot" {
  let opts = @lib.G2pOpts::contextual()
  assert_eq(ctx_on.length(), 18)
  let mut i = 0
  for scheme in ["modern", "koine"] {
    for text in ctx_phrases {
      let got = scheme + "\t" + text + "\t" + phrase(text, scheme, opts)
      assert_eq(got, ctx_on[i])
      i = i + 1
    }
  }
  for scheme in ["attic", "erasmian"] {
    for text in ctx_phrases {
      assert_eq(
        phrase(text, scheme, opts),
        phrase(text, scheme, @lib.G2pOpts::plain()),
      )
    }
  }
  let flagged = @api.g2p_json_flags("εὖ τοῦ", "koine", "ctx")
  assert_true(flagged.contains("\"phones\":[\"ɛ\",\"f\"]"))
  let both = @api.g2p_json_flags("εὖ τοῦ", "koine", "alts,ctx")
  assert_false(both.contains("more accurate"))
  let vowel = @api.g2p_json_flags("εὖ ὁ", "koine", "alts,ctx")
  assert_true(vowel.contains("more accurate"))
  assert_true(vowel.contains("\"phones\":[\"ɛ\",\"v\"]"))
}

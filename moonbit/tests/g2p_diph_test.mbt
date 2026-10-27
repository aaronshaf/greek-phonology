// Per-scheme diphthong targets. Only Koine word-final αυ/ευ/ηυ changes ipa():
// the coda is v (beta-type), where it used to be β. f stays the target before
// a voiceless consonant. Medial β before a vowel or a voiced consonant stays.

///|
test "diphthong targets per scheme" {
  // Modern
  assert_eq(@lib.ipa("αι", "modern"), "e")
  assert_eq(@lib.ipa("ει", "modern"), "i")
  assert_eq(@lib.ipa("οι", "modern"), "i")
  assert_eq(@lib.ipa("υι", "modern"), "i")
  assert_eq(@lib.ipa("ου", "modern"), "u")
  assert_eq(@lib.ipa("αὐτός", "modern"), "a f t o s")
  assert_eq(@lib.ipa("εὐαγγέλιον", "modern"), "e v a ŋ ʝ e l i o n")
  assert_eq(@lib.ipa("εὖ", "modern"), "e f")
  assert_eq(@lib.ipa("ηὖ", "modern"), "i f")
  assert_eq(@lib.ipa("ηὗρον", "modern"), "i v r o n")
  assert_eq(@lib.ipa("ᾳ", "modern"), "a")
  assert_eq(@lib.ipa("τῇ", "modern"), "t i")
  assert_eq(@lib.ipa("ῳ", "modern"), "o")
  // Koine. Word-final αυ/ευ/ηυ is v; before voiceless f; elsewhere β.
  assert_eq(@lib.ipa("αι", "koine"), "ɛ")
  assert_eq(@lib.ipa("ει", "koine"), "i")
  assert_eq(@lib.ipa("οι", "koine"), "y")
  assert_eq(@lib.ipa("υι", "koine"), "y")
  assert_eq(@lib.ipa("ου", "koine"), "u")
  assert_eq(@lib.ipa("αὐτός", "koine"), "a f t o s")
  assert_eq(@lib.ipa("εὐαγγέλιον", "koine"), "ɛ β a ŋ ʝ ɛ l i o n")
  assert_eq(@lib.ipa("εὖ", "koine"), "ɛ v")
  assert_eq(@lib.ipa("ηὖ", "koine"), "e v")
  assert_eq(@lib.ipa("ηὗρον", "koine"), "e β r o n")
  assert_eq(@lib.ipa("ηὗτος", "koine"), "e f t o s")
  assert_eq(@lib.ipa("ᾳ", "koine"), "a")
  assert_eq(@lib.ipa("τῇ", "koine"), "t e")
  assert_eq(@lib.ipa("ῳ", "koine"), "o")
  // Attic
  assert_eq(@lib.ipa("αι", "attic"), "a i")
  assert_eq(@lib.ipa("ει", "attic"), "eː")
  assert_eq(@lib.ipa("οι", "attic"), "o i")
  assert_eq(@lib.ipa("υι", "attic"), "y i")
  assert_eq(@lib.ipa("ου", "attic"), "uː")
  assert_eq(@lib.ipa("αὐτός", "attic"), "a u t o s")
  assert_eq(@lib.ipa("εὖ", "attic"), "e u")
  assert_eq(@lib.ipa("ηὖ", "attic"), "ɛː u")
  assert_eq(@lib.ipa("ᾳ", "attic"), "aː i")
  assert_eq(@lib.ipa("τῇ", "attic"), "t ɛː i")
  assert_eq(@lib.ipa("ῳ", "attic"), "ɔː i")
  assert_eq(@lib.ipa("υἱός", "attic"), "h y i o s")
  // Erasmian. υι stays w i.
  assert_eq(@lib.ipa("αι", "erasmian"), "a ɪ")
  assert_eq(@lib.ipa("ει", "erasmian"), "e ɪ")
  assert_eq(@lib.ipa("οι", "erasmian"), "ɔ ɪ")
  assert_eq(@lib.ipa("υι", "erasmian"), "w i")
  assert_eq(@lib.ipa("ου", "erasmian"), "u")
  assert_eq(@lib.ipa("αὐτός", "erasmian"), "a ʊ t o s")
  assert_eq(@lib.ipa("εὐαγγέλιον", "erasmian"), "j u a ŋ g e l i o n")
  assert_eq(@lib.ipa("εὖ", "erasmian"), "j u")
  assert_eq(@lib.ipa("ηὖ", "erasmian"), "e ɪ u")
  assert_eq(@lib.ipa("ᾳ", "erasmian"), "a")
  assert_eq(@lib.ipa("τῇ", "erasmian"), "t e ɪ")
  assert_eq(@lib.ipa("ῳ", "erasmian"), "o ʊ")
  assert_eq(@lib.ipa("υἱός", "erasmian"), "h w i o s")
  // ωυ is not a diphthong in any scheme.
  assert_eq(@lib.ipa("ωυ", "modern"), "o i")
  assert_eq(@lib.ipa("ωυ", "koine"), "o y")
  assert_eq(@lib.ipa("ωυ", "attic"), "ɔː y")
  assert_eq(@lib.ipa("ωυ", "erasmian"), "o ʊ u")
  let wy = @lib.g2p_words("ωυ", "koine")[0]
  assert_eq(wy.units.length(), 2)
  let end = @lib.g2p_words("εὖ", "koine")[0]
  assert_eq(end.units[0].k, "diph")
  assert_eq(end.units[0].ph, ["ɛ", "v"])
  assert_eq(end.units[0].ctx, "word-end")
}

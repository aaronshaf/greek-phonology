// Integer models behind the float distance table. The float path is tested
// against these codes where the rounding is exact.

///|
test "goal bounds, tiers, credit, and display rank stay ordered" {
  assert_true(@kernel.goal_bounds_ordered())
  assert_true(@kernel.goal_tol_milli(0) <= @kernel.goal_tol_milli(1))
  assert_true(@kernel.goal_tol_milli(1) <= @kernel.goal_tol_milli(2))
  assert_true(@kernel.goal_cap_milli(0) <= @kernel.goal_cap_milli(1))
  assert_true(@kernel.goal_cap_milli(1) <= @kernel.goal_cap_milli(2))
  assert_eq(@kernel.tier_code(0, 330), 0)
  assert_eq(@kernel.tier_code(20, 330), 0)
  assert_eq(@kernel.tier_code(21, 330), 1)
  assert_eq(@kernel.tier_code(330, 330), 1)
  assert_eq(@kernel.tier_code(331, 330), 2)
  assert_true(@kernel.tier_worsens(10, 400, 330))
  assert_eq(@kernel.near_credit_milli(750, 0), 0)
  assert_eq(@kernel.near_credit_milli(750, 1000), 750)
  assert_true(@kernel.near_credit_milli(600, 500) <= @kernel.near_credit_milli(750, 500))
  assert_true(@kernel.near_credit_milli(750, 500) <= @kernel.near_credit_milli(900, 500))
  assert_true(@kernel.near_credit_milli(750, 100) <= @kernel.near_credit_milli(750, 900))
  assert_eq(@kernel.align_sub_bucket(true, false, false), 0)
  assert_eq(@kernel.align_sub_bucket(false, true, false), 0)
  assert_eq(@kernel.align_sub_bucket(false, false, true), 1)
  assert_eq(@kernel.align_sub_bucket(false, false, false), 2)
  let cuts = (80, 300, 600, 850, 950)
  assert_eq(@kernel.credit_level_rank(0, 80, 300, 600, 850, 950), 0)
  assert_eq(@kernel.credit_level_rank(80, 80, 300, 600, 850, 950), 1)
  assert_eq(@kernel.credit_level_rank(950, 80, 300, 600, 850, 950), 5)
  let mut prev = 0
  for pct in [0, 79, 80, 299, 300, 599, 600, 849, 850, 949, 950, 1000] {
    let rank = @kernel.credit_level_rank(pct, 80, 300, 600, 850, 950)
    assert_true(rank >= prev)
    prev = rank
  }
  ignore(cuts)
}

///|
test "feature distance is symmetric and is not a triangle metric" {
  let phones = [
    "p", "b", "m", "ɸ", "β", "f", "v", "w", "t", "d", "n", "s", "z", "θ", "ð",
    "l", "r", "ɾ", "d͡z", "ç", "ʝ", "j", "k", "g", "x", "ɣ", "ŋ", "h", "a", "e",
    "ɛ", "i", "ɪ", "y", "o", "ɔ", "u", "ʊ", "pʰ", "tʰ", "kʰ",
  ]
  for a in phones {
    assert_eq(@lib.phone_distance(a, a, "", "").d, 0.0)
    for b in phones {
      let ab = @lib.phone_distance(a, b, "", "").d
      let ba = @lib.phone_distance(b, a, "", "").d
      assert_eq(ab, ba)
      assert_true(ab >= 0.0 && ab <= 1.0)
    }
  }
  // Glides are scored against a stand-in vowel plus 0.18, so the table is not
  // a metric. w–e is farther than w–j plus j–e. Triangle inequality is not a
  // proof goal. See docs/VERIFICATION.md.
  let wj = @lib.phone_distance("w", "j", "", "").d
  let je = @lib.phone_distance("j", "e", "", "").d
  let we = @lib.phone_distance("w", "e", "", "").d
  assert_true(we > wj + je)
}

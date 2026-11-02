// Decisions respell uses. The string walk is tested; these integer choices are proved.
// A syllable is capitalized exactly when its accent flag is set (0, 1, or 2 flags
// under the phrase rules). A non-Greek character outside a word is copied unchanged.

///|
/// Capitalize this syllable exactly when `flag` is not 0.
pub fn syllable_caps(flag : Int32) -> Bool where {
  proof_ensure: result => flag != 0 || result == false,
  proof_ensure: result => flag == 0 || result == true,
} {
  flag != 0
}

///|
/// Hyphens used to join `n` non-empty syllables. Zero when there is at most one.
pub fn syllable_hyphens(n : Int32) -> Int32 where {
  proof_require: 0 <= n,
  proof_ensure: result => 0 <= result,
  proof_ensure: result => n > 1 || result == 0,
  proof_ensure: result => n <= 1 || result == n - 1,
} {
  if n <= 1 {
    0
  } else {
    n - 1
  }
}

///|
/// Take this code point into the Greek word, instead of copying it.
/// Proved: a Greek letter is never copied; outside a word, only a Greek letter is taken,
/// so spaces, punctuation, and unknown characters are copied.
pub fn respell_take(in_word : Bool, greek : Bool, comb : Bool) -> Bool where {
  proof_ensure: result => result == respell_take_spec(in_word, greek, comb),
  proof_ensure: result => greek == false || result == true,
  proof_ensure: result => in_word == true || greek == true || result == false,
} {
  if greek {
    true
  } else if in_word {
    comb
  } else {
    false
  }
}

///|
/// A copied code point is unchanged. Proved: the result is the input.
pub fn copy_code(cp : Int32) -> Int32 where {
  proof_ensure: result => result == cp,
} {
  cp
}

///|
test "respell decisions: caps, hyphens, copy, and totality" {
  assert_true(syllable_caps(1))
  assert_false(syllable_caps(0))
  assert_eq(syllable_hyphens(0), 0)
  assert_eq(syllable_hyphens(1), 0)
  assert_eq(syllable_hyphens(2), 1)
  assert_eq(syllable_hyphens(3), 2)
  assert_false(respell_take(false, false, false))
  assert_false(respell_take(false, false, true))
  assert_true(respell_take(false, true, false))
  assert_true(respell_take(true, true, false))
  assert_true(respell_take(true, false, true))
  assert_false(respell_take(true, false, false))
  assert_eq(copy_code(32), 32)
  assert_eq(copy_code(44), 44)
  assert_eq(copy_code(0x1F600), 0x1F600)
  let mut cp : Int32 = 0
  while cp < 128 {
    assert_eq(copy_code(cp), cp)
    ignore(respell_take(false, false, false))
    cp = cp + 1
  }
}

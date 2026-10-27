// Syllable onset cut.

///|
/// Start of the syllable that holds nucleus `b`, given the previous nucleus `a`
/// (all units strictly between are consonants) and the length `onset` of the
/// longest consonant run that may begin a syllable. Proved: a < result <= b.
pub fn syllable_cut(
  kinds : FixedArray[Int32],
  a : Int32,
  b : Int32,
  onset : Int32,
) -> Int32 where {
  proof_require: 0 <= a && a < b && b < kinds.length(),
  proof_require: 0 <= onset,
  proof_ensure: result => a < result && result <= b,
  proof_ensure: result => b - result <= onset,
  proof_ensure: result => b - result <= b - a - 1,
} {
  let ncons = b - a - 1
  let o = if onset > ncons { ncons } else { onset }
  b - o
}

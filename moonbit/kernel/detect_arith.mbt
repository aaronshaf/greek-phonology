// Detector arithmetic: shares, argmax, normalization, alignment.

///|
/// Integer share w*s/t. Proved: 0 <= result <= s and result*t <= w*s (rounds down).
pub fn share(
  w : Int64,
  s : Int64,
  t : Int64,
) -> Int64 where {
  proof_require: 0L <= w,
  proof_require: w <= t,
  proof_require: 0L < t,
  proof_require: 0L < s,
  proof_ensure: result => 0L <= result && result <= s,
  proof_ensure: result => result * t <= w * s,
} {
  w * s / t
}

///|
/// Index of the largest of four weights (first one wins ties).
/// Proved: in range and no weight is larger.
pub fn argmax4(
  w0 : Int64,
  w1 : Int64,
  w2 : Int64,
  w3 : Int64,
) -> Int32 where {
  proof_ensure: result => 0 <= result && result <= 3,
  proof_ensure: result => result != 0 || (w0 >= w1 && w0 >= w2 && w0 >= w3),
  proof_ensure: result => result != 1 || (w1 >= w0 && w1 >= w2 && w1 >= w3),
  proof_ensure: result => result != 2 || (w2 >= w0 && w2 >= w1 && w2 >= w3),
  proof_ensure: result => result != 3 || (w3 >= w0 && w3 >= w1 && w3 >= w2),
} {
  let mut b = 0
  let mut bw = w0
  if w1 > bw {
    b = 1
    bw = w1
  }
  if w2 > bw {
    b = 2
    bw = w2
  }
  if w3 > bw {
    b = 3
  }
  b
}

///|
/// Turn four non-negative scheme weights into integer probabilities out of `s`
/// (the rounding remainder goes to the strongest scheme).
/// Proved: every entry is >= 0 and the entries sum to exactly s.
pub fn normalize4(
  w0 : Int64,
  w1 : Int64,
  w2 : Int64,
  w3 : Int64,
  s : Int64,
) -> FixedArray[Int64] where {
  proof_require: 0L <= w0 && 0L <= w1 && 0L <= w2 && 0L <= w3,
  proof_require: 0L < w0 + w1 + w2 + w3,
  proof_require: 0L < s,
  proof_ensure: result => result.length() == 4,
  proof_ensure: result => {
    0L <= result[0] && 0L <= result[1] && 0L <= result[2] && 0L <= result[3]
  },
  proof_ensure: result => result[0] + result[1] + result[2] + result[3] == s,
} {
  let t = w0 + w1 + w2 + w3
  let q0 = share(w0, s, t)
  let q1 = share(w1, s, t)
  let q2 = share(w2, s, t)
  let q3 = share(w3, s, t)
  proof_assert (q0 + q1 + q2 + q3) * t <= s * t
  let rem = s - (q0 + q1 + q2 + q3)
  proof_assert 0L <= rem
  let top = argmax4(w0, w1, w2, w3)
  let r0 = if top == 0 { q0 + rem } else { q0 }
  let r1 = if top == 1 { q1 + rem } else { q1 }
  let r2 = if top == 2 { q2 + rem } else { q2 }
  let r3 = if top == 3 { q3 + rem } else { q3 }
  [r0, r1, r2, r3]
}

///|
/// One piece of detector evidence: the total always goes up by one, the hit count only on a match.
/// Proved: hits stay between 0 and the new total.
pub fn tally_hit(
  hits : Int32,
  total : Int32,
  hit : Bool,
) -> Int32 where {
  proof_require: 0 <= hits && hits <= total,
  proof_ensure: result => 0 <= result && result <= total + 1,
  proof_ensure: result => result == hits || (hit == true && result == hits + 1),
} {
  if hit {
    hits + 1
  } else {
    hits
  }
}

// ---------------------------------------------------------------- amalgamate core

///|
/// Does one of the alternatives (alts = consecutive blocks of plen tokens) match cs at i?
pub fn alt_match(
  cs : FixedArray[Int32],
  i : Int32,
  alts : FixedArray[Int32],
  plen : Int32,
) -> Bool where {
  proof_require: 1 <= plen,
  proof_require: 0 <= i,
  proof_ensure: result => result == false || i + plen <= cs.length(),
} {
  let mut found = false
  if i + plen <= cs.length() {
    for b = 0; b < alts.length() - plen + 1; b = b + 1 {
      let mut same = b % plen == 0
      for t = 0; t < plen; t = t + 1 {
        if cs[i + t] != alts[b + t] {
          same = false
        }
      } where {
        proof_invariant: 0 <= t && t <= plen,
      }
      if same {
        found = true
      }
    } where {
      proof_invariant: 0 <= b,
      proof_invariant: 1 <= plen,
    }
  }
  found
}

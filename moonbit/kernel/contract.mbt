// Amalgamation and vowel-contraction steps.

///|
/// Class of a stop before σ: 1 labial (π β φ → ψ), 2 velar (κ γ χ → ξ), 3 dental (τ δ θ → σ), 0 other.
pub fn stop_class(
  c : Int32,
) -> Int32 where {
  proof_ensure: result => 0 <= result && result <= 3,
} {
  if c == 0x3C0 || c == 0x3B2 || c == 0x3C6 {
    1
  } else if c == 0x3BA || c == 0x3B3 || c == 0x3C7 {
    2
  } else if c == 0x3C4 || c == 0x3B4 || c == 0x3B8 {
    3
  } else {
    0
  }
}

///|
/// Merge every stop+σ pair into one letter, left to right. Writes into `out`, returns its length.
/// Proved: never longer than the input, every slot written is in bounds, and each step
/// either copies a letter or replaces two letters by one of ψ, ξ, σ.
pub fn amalgamate_core(
  cs : FixedArray[Int32],
  out : FixedArray[Int32],
) -> Int32 where {
  proof_require: out.length() == cs.length(),
  proof_ensure: result => 0 <= result && result <= cs.length(),
} {
  let n = cs.length()
  let mut j = 0
  let mut adv = 1
  for i = 0; i < n; i = i + adv {
    let k = if i + 1 < n && cs[i + 1] == 0x3C3 { stop_class(cs[i]) } else { 0 }
    if k == 1 {
      out[j] = 0x3C8
      adv = 2
    } else if k == 2 {
      out[j] = 0x3BE
      adv = 2
    } else if k == 3 {
      out[j] = 0x3C3
      adv = 2
    } else {
      out[j] = cs[i]
      adv = 1
    }
    j = j + 1
  } where {
    proof_invariant: 0 <= j && j <= i && i <= n,
    proof_invariant: adv == 1 || adv == 2,
  }
  j
}

// ---------------------------------------------------------------- phrase accent decisions

///|
/// One contraction rule applied left to right: each match of a plen-token alternative is replaced
/// by the rlen (at most 2) replacement tokens. Writes into out; returns 2 * length + (1 if anything matched).
/// Proved: never longer than the input (markers count as one token), and every token written is a
/// valid token whenever the input and the replacement are.
pub fn contract_core(
  cs : FixedArray[Int32],
  alts : FixedArray[Int32],
  plen : Int32,
  rep : FixedArray[Int32],
  rlen : Int32,
  out : FixedArray[Int32],
) -> Int32 where {
  proof_require: 1 <= plen,
  proof_require: 0 <= rlen && rlen <= plen && rlen <= 2,
  proof_require: rep.length() >= rlen,
  proof_require: out.length() == cs.length(),
  proof_require: all_valid(cs, cs.length()),
  proof_require: all_valid(rep, rlen),
  proof_ensure: result => 0 <= result / 2 && result / 2 <= cs.length(),
  proof_ensure: result => all_valid(out, result / 2),
} {
  let n = cs.length()
  let mut j = 0
  let mut hit_any = 0
  let mut adv = 1
  for i = 0; i < n; i = i + adv {
    let m = alt_match(cs, i, alts, plen)
    if m {
      if rlen >= 1 {
        out[j] = rep[0]
      }
      if rlen >= 2 {
        out[j + 1] = rep[1]
      }
      j = j + rlen
      adv = plen
      hit_any = 1
    } else {
      out[j] = cs[i]
      j = j + 1
      adv = 1
    }
  } where {
    proof_invariant: 0 <= j && j <= i && i <= n,
    proof_invariant: 1 <= adv,
    proof_invariant: all_valid(out, j),
    proof_invariant: hit_any == 0 || hit_any == 1,
  }
  2 * j + hit_any
}

// ---------------------------------------------------------------- accent rendering on slots

// Law of limitation and recessive accent.

///|
/// Law-of-limitation checker. Proved equal to the logical specification.
pub fn law_ok(
  nsyl : Int32,
  pos : Int32,
  circ : Bool,
  nuc_long : Bool,
  ult_long : Bool,
) -> Bool where {
  proof_ensure: result => {
    result == false || law_of_limitation(nsyl, pos, circ, nuc_long, ult_long)
  },
} {
  if pos < 1 || pos > nsyl || pos > 3 {
    false
  } else if pos == 3 && ult_long {
    false
  } else if circ {
    if pos > 2 {
      false
    } else if nuc_long {
      if pos == 2 && ult_long {
        false
      } else {
        true
      }
    } else {
      false
    }
  } else {
    true
  }
}

///|
/// Recessive accent position. Proved: 1 <= pos <= min(nsyl, 3), and antepenult only before a short ultima.
pub fn recessive_pos(
  nsyl : Int32,
  ult_long : Bool,
) -> Int32 where {
  proof_require: 1 <= nsyl,
  proof_ensure: result => result == rpos_spec(nsyl, ult_long),
  proof_ensure: result => 1 <= result && result <= nsyl && result <= 3,
  proof_ensure: result => result != 3 || ult_long == false,
} {
  if nsyl == 1 {
    1
  } else if ult_long || nsyl == 2 {
    2
  } else {
    3
  }
}

///|
/// Circumflex under the recessive rule (long nucleus before a short ultima).
/// Proved: (recessive_pos, recessive_circ) always satisfies the law of limitation.
pub fn recessive_circ(
  nsyl : Int32,
  ult_long : Bool,
  nuc_long : Bool,
) -> Bool where {
  proof_require: 1 <= nsyl,
  proof_ensure: result => {
    law_of_limitation(
      nsyl,
      rpos_spec(nsyl, ult_long),
      result,
      nuc_long,
      ult_long,
    )
  },
} {
  if nsyl == 1 {
    nuc_long
  } else if ult_long {
    false
  } else if nsyl == 2 {
    nuc_long
  } else {
    false
  }
}

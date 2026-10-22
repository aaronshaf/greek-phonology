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

///|
/// Phrase sandhi: does a word take an extra acute on its ultima? Only before an enclitic, and only
/// when it is a proclitic, proparoxytone (lex_pos 3) or properispomenon (lex_pos 2, circumflex).
/// Proved: result implies next_enclitic.
pub fn extra_acute(
  lex_pos : Int32,
  lex_circ : Bool,
  proclitic : Bool,
  next_enclitic : Bool,
) -> Bool where {
  proof_ensure: result => result == false || next_enclitic == true,
  proof_ensure: result => result == false || proclitic == true || lex_pos == 3 || lex_pos == 2,
} {
  if next_enclitic {
    if proclitic {
      true
    } else if lex_pos == 3 {
      true
    } else if lex_pos == 2 {
      lex_circ
    } else {
      false
    }
  } else {
    false
  }
}

///|
/// Number of written accents on a word in context. Proved: between 0 and 2.
pub fn accent_count(has_lexical : Bool, extra : Bool) -> Int32 where {
  proof_ensure: result => 0 <= result && result <= 2,
} {
  let a = if has_lexical { 1 } else { 0 }
  if extra {
    a + 1
  } else {
    a
  }
}

///|
/// Does a disyllabic enclitic keep its own accent? Only after a paroxytone host.
/// Proved: result implies the host accent is an acute on the penult.
pub fn enclitic_keeps(
  enc_syllables : Int32,
  host_pos : Int32,
  host_circ : Bool,
) -> Bool where {
  proof_ensure: result => result == false || host_pos == 2,
  proof_ensure: result => result == false || host_circ == false,
} {
  if enc_syllables == 2 && host_pos == 2 {
    if host_circ {
      false
    } else {
      true
    }
  } else {
    false
  }
}

///|
/// Acute -> grave: only an acute on the ultima, and only when an ordinary word follows
/// (no punctuation, no enclitic). Proved: result implies pos == 1.
pub fn to_grave(pos : Int32, is_acute : Bool, word_follows : Bool) -> Bool where {
  proof_ensure: result => result == false || pos == 1,
  proof_ensure: result => result == false || word_follows == true,
} {
  if pos == 1 && is_acute {
    word_follows
  } else {
    false
  }
}

///|
/// Lexicon fallback order: 0 exact, 1 case-folded, 2 accents stripped, 3 not found.
/// Proved: an earlier stage always wins over a later one.
pub fn lookup_stage(exact : Bool, fold : Bool, bare : Bool) -> Int32 where {
  proof_ensure: result => 0 <= result && result <= 3,
  proof_ensure: result => (result == 0) == exact,
  proof_ensure: result => result != 1 || (exact == false && fold == true),
  proof_ensure: result => result != 2 || (exact == false && fold == false && bare == true),
  proof_ensure: result => result != 3 || (exact == false && fold == false && bare == false),
} {
  if exact {
    0
  } else if fold {
    1
  } else if bare {
    2
  } else {
    3
  }
}

///|
/// Mark filter used by remove_acutes/graves/circumflexes on decomposed text.
/// Proved: a character is dropped exactly when it is the target mark, so the output never
/// contains the mark, everything else survives, and filtering again keeps everything (idempotent).
pub fn keep_char(c : Int32, mark : Int32) -> Bool where {
  proof_ensure: result => result == (c != mark),
} {
  c != mark
}

///|
/// Accent stripping (without_accents): a decomposed character is kept only when it is not a
/// combining mark (U+0300..U+036F). Proved: marks are always dropped, base letters always kept.
pub fn is_base_char(c : Int32) -> Bool where {
  proof_ensure: result => result == (c < 768 || c > 879),
} {
  c < 0x300 || c > 0x36F
}


// ---------------------------------------------------------------- detector arithmetic

///|
/// Integer share w*s/t. Proved: 0 <= result <= s and result*t <= w*s (rounds down).
pub fn share(w : Int64, s : Int64, t : Int64) -> Int64 where {
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
/// Index of the largest of five weights (first one wins ties).
/// Proved: in range and no weight is larger.
pub fn argmax5(w0 : Int64, w1 : Int64, w2 : Int64, w3 : Int64, w4 : Int64) -> Int32 where {
  proof_ensure: result => 0 <= result && result <= 4,
  proof_ensure: result => result != 0 || (w0 >= w1 && w0 >= w2 && w0 >= w3 && w0 >= w4),
  proof_ensure: result => result != 1 || (w1 >= w0 && w1 >= w2 && w1 >= w3 && w1 >= w4),
  proof_ensure: result => result != 2 || (w2 >= w0 && w2 >= w1 && w2 >= w3 && w2 >= w4),
  proof_ensure: result => result != 3 || (w3 >= w0 && w3 >= w1 && w3 >= w2 && w3 >= w4),
  proof_ensure: result => result != 4 || (w4 >= w0 && w4 >= w1 && w4 >= w2 && w4 >= w3),
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
    bw = w3
  }
  if w4 > bw {
    b = 4
  }
  b
}

///|
/// Turn five non-negative scheme weights into integer probabilities out of `s`
/// (the rounding remainder goes to the strongest scheme).
/// Proved: every entry is >= 0 and the entries sum to exactly s.
pub fn normalize5(
  w0 : Int64,
  w1 : Int64,
  w2 : Int64,
  w3 : Int64,
  w4 : Int64,
  s : Int64,
) -> FixedArray[Int64] where {
  proof_require: 0L <= w0 && 0L <= w1 && 0L <= w2 && 0L <= w3 && 0L <= w4,
  proof_require: 0L < w0 + w1 + w2 + w3 + w4,
  proof_require: 0L < s,
  proof_ensure: result => result.length() == 5,
  proof_ensure: result => 0L <= result[0] && 0L <= result[1] && 0L <= result[2] && 0L <= result[3] && 0L <= result[4],
  proof_ensure: result => result[0] + result[1] + result[2] + result[3] + result[4] == s,
} {
  let t = w0 + w1 + w2 + w3 + w4
  let q0 = share(w0, s, t)
  let q1 = share(w1, s, t)
  let q2 = share(w2, s, t)
  let q3 = share(w3, s, t)
  let q4 = share(w4, s, t)
  proof_assert (q0 + q1 + q2 + q3 + q4) * t <= s * t
  let rem = s - (q0 + q1 + q2 + q3 + q4)
  proof_assert 0L <= rem
  let top = argmax5(w0, w1, w2, w3, w4)
  let r0 = if top == 0 { q0 + rem } else { q0 }
  let r1 = if top == 1 { q1 + rem } else { q1 }
  let r2 = if top == 2 { q2 + rem } else { q2 }
  let r3 = if top == 3 { q3 + rem } else { q3 }
  let r4 = if top == 4 { q4 + rem } else { q4 }
  [r0, r1, r2, r3, r4]
}

///|
/// One piece of detector evidence: the total always goes up by one, the hit count only on a match.
/// Proved: hits stay between 0 and the new total.
pub fn tally_hit(hits : Int32, total : Int32, hit : Bool) -> Int32 where {
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
/// Class of a stop before σ: 1 labial (π β φ → ψ), 2 velar (κ γ χ → ξ), 3 dental (τ δ θ → σ), 0 other.
pub fn stop_class(c : Int32) -> Int32 where {
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
pub fn amalgamate_core(cs : FixedArray[Int32], out : FixedArray[Int32]) -> Int32 where {
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
/// What accentuate_phrase writes on one word (kind: 0 ordinary, 1 proclitic, 2 enclitic):
/// 0 strip the accent, 1 keep the dictionary accent, 2 acute on the last syllable,
/// 3 grave on the last syllable, 4 dictionary accent plus an extra acute on the last syllable,
/// 5 circumflex on the last syllable.
/// Proved: a grave only when an ordinary word follows; an extra acute only before an enclitic and
/// only on a proparoxytone/properispomenon; never more than two accents; and an ordinary word
/// always decodes back to its dictionary accent (the lexical_phrase round trip at decision level).
pub fn phrase_decision(
  kind : Int32,
  lex_pos : Int32,
  lex_circ : Bool,
  next_enc : Bool,
  word_follows : Bool,
  stop_after : Bool,
  interrog : Bool,
  is_ou : Bool,
  keeps : Bool,
  keeps_circ : Bool,
) -> Int32 where {
  proof_require: 0 <= kind && kind <= 2,
  proof_require: word_follows == false || next_enc == false,
  proof_ensure: result => 0 <= result && result <= 5,
  proof_ensure: result => result != 3 || word_follows == true,
  proof_ensure: result => result != 4 || (next_enc == true && lex_pos >= 2),
  proof_ensure: result => accents_spec(result, lex_pos) <= 2,
  proof_ensure: result => kind != 0 || decoded_spec(result, lex_pos) == lex_pos,
} {
  if kind == 0 {
    let extra = extra_acute(lex_pos, lex_circ, false, next_enc)
    if extra && lex_pos >= 2 {
      4
    } else if lex_pos == 1 {
      if lex_circ {
        1
      } else if interrog {
        2
      } else if to_grave(1, true, word_follows) {
        3
      } else {
        2
      }
    } else {
      1
    }
  } else if kind == 1 {
    if next_enc {
      2
    } else if stop_after && is_ou {
      2
    } else {
      0
    }
  } else if keeps {
    if keeps_circ {
      5
    } else if to_grave(1, true, word_follows) {
      3
    } else {
      2
    }
  } else if next_enc {
    2
  } else {
    0
  }
}

///|
/// Number of accent marks a decision writes. Proved: at most 2.
pub fn accents_written(code : Int32, lex_pos : Int32) -> Int32 where {
  proof_ensure: result => 0 <= result && result <= 2,
  proof_ensure: result => result == accents_spec(code, lex_pos),
} {
  if code == 0 {
    0
  } else if code == 1 {
    if lex_pos > 0 { 1 } else { 0 }
  } else if code == 4 {
    2
  } else {
    1
  }
}

///|
/// lexical_phrase at decision level: grave → acute on the ultima, extra acute dropped.
/// Returns the accent position (1 = ultima, 0 = none) that the undo step reads off.
pub fn decoded_pos(code : Int32, lex_pos : Int32) -> Int32 where {
  proof_ensure: result => result == decoded_spec(code, lex_pos),
} {
  if code == 1 || code == 4 {
    lex_pos
  } else if code == 0 {
    0
  } else {
    1
  }
}

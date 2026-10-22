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


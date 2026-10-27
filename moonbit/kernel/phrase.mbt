// Phrase accent decisions and accent-slot rendering.

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
  proof_ensure: result => {
    result == false || proclitic == true || lex_pos == 3 || lex_pos == 2
  },
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
pub fn accent_count(
  has_lexical : Bool,
  extra : Bool,
) -> Int32 where {
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
pub fn to_grave(
  pos : Int32,
  is_acute : Bool,
  word_follows : Bool,
) -> Bool where {
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
pub fn lookup_stage(
  exact : Bool,
  fold : Bool,
  bare : Bool,
) -> Int32 where {
  proof_ensure: result => 0 <= result && result <= 3,
  proof_ensure: result => (result == 0) == exact,
  proof_ensure: result => result != 1 || (exact == false && fold == true),
  proof_ensure: result => {
    result != 2 || (exact == false && fold == false && bare == true)
  },
  proof_ensure: result => {
    result != 3 || (exact == false && fold == false && bare == false)
  },
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
pub fn keep_char(
  c : Int32,
  mark : Int32,
) -> Bool where {
  proof_ensure: result => result == (c != mark),
} {
  c != mark
}

///|
/// Accent stripping (without_accents): a decomposed character is kept only when it is not a
/// combining mark (U+0300..U+036F). Proved: marks are always dropped, base letters always kept.
pub fn is_base_char(
  c : Int32,
) -> Bool where {
  proof_ensure: result => result == (c < 768 || c > 879),
} {
  c < 0x300 || c > 0x36F
}

// ---------------------------------------------------------------- detector arithmetic

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
pub fn accents_written(
  code : Int32,
  lex_pos : Int32,
) -> Int32 where {
  proof_ensure: result => 0 <= result && result <= 2,
  proof_ensure: result => result == accents_spec(code, lex_pos),
} {
  if code == 0 {
    0
  } else if code == 1 {
    if lex_pos > 0 {
      1
    } else {
      0
    }
  } else if code == 4 {
    2
  } else {
    1
  }
}

///|
/// lexical_phrase at decision level: grave → acute on the ultima, extra acute dropped.
/// Returns the accent position (1 = ultima, 0 = none) that the undo step reads off.
pub fn decoded_pos(
  code : Int32,
  lex_pos : Int32,
) -> Int32 where {
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

// ---------------------------------------------------------------- contract core

///|
/// Slot that carries the accent of syllable pos: the last vowel letter in it (so a diphthong
/// takes the mark on its second vowel), or -1 if the syllable has no vowel.
/// Proved: the slot is a vowel of syllable pos and no later slot is.
pub fn accent_target(
  syl : FixedArray[Int32],
  vow : FixedArray[Int32],
  pos : Int32,
) -> Int32 where {
  proof_require: vow.length() == syl.length(),
  proof_ensure: result => found_ok(syl, vow, pos, result, syl.length()),
  proof_ensure: result => not_target_after(syl, vow, pos, result, syl.length()),
} {
  let n = syl.length()
  let mut r = -1
  for k = 0; k < n; k = k + 1 {
    if syl[k] == pos && vow[k] == 1 {
      r = k
    }
  } where {
    proof_invariant: 0 <= k && k <= n,
    proof_invariant: found_ok(syl, vow, pos, r, n),
    proof_invariant: r < k,
    proof_invariant: not_target_after(syl, vow, pos, r, k),
  }
  r
}

///|
/// Write a phrase_decision code onto the slot marks of a word. ult is the ultima's accent slot
/// (accent_target(.., 1)) or -1. Proved: code 1 keeps every mark; code 4 keeps every mark and
/// puts an acute on the ultima; codes 0, 2, 3, 5 clear every mark except the ultima, which gets
/// nothing / acute / grave / circumflex. So no other syllable is ever touched.
pub fn render_marks(
  marks : FixedArray[Int32],
  ult : Int32,
  code : Int32,
  out : FixedArray[Int32],
) -> Int32 where {
  proof_require: out.length() == marks.length(),
  proof_require: -1 <= ult && ult < marks.length(),
  proof_ensure: _result => code != 1 || same_all(out, marks, marks.length()),
  proof_ensure: _result => {
    code != 4 || same_except(out, marks, ult, marks.length())
  },
  proof_ensure: _result => code != 4 || ult < 0 || out[ult] == 1,
  proof_ensure: _result => {
    code == 1 || code == 4 || zero_except(out, ult, marks.length())
  },
  proof_ensure: _result => code != 2 || ult < 0 || out[ult] == 1,
  proof_ensure: _result => code != 3 || ult < 0 || out[ult] == 2,
  proof_ensure: _result => code != 5 || ult < 0 || out[ult] == 3,
  proof_ensure: _result => code != 0 || ult < 0 || out[ult] == 0,
} {
  let n = marks.length()
  let keep = code == 1 || code == 4
  for k = 0; k < n; k = k + 1 {
    out[k] = if keep { marks[k] } else { 0 }
  } where {
    proof_invariant: 0 <= k && k <= n,
    proof_invariant: keep == false || same_all(out, marks, k),
    proof_invariant: keep == true || zero_except(out, -1, k),
  }
  if ult >= 0 {
    if code == 2 || code == 4 {
      out[ult] = 1
    } else if code == 3 {
      out[ult] = 2
    } else if code == 5 {
      out[ult] = 3
    }
  }
  0
}

///|
/// lexical_phrase on slot marks: a grave on the ultima becomes an acute, and when the word carries
/// two accents (an extra acute from an enclitic) the ultima's mark is dropped.
pub fn unrender_marks(
  out : FixedArray[Int32],
  ult : Int32,
  two : Bool,
  res : FixedArray[Int32],
) -> Int32 where {
  proof_require: res.length() == out.length(),
  proof_require: -1 <= ult && ult < out.length(),
  proof_ensure: _result => same_except(res, out, ult, out.length()),
  proof_ensure: _result => ult < 0 || two == false || res[ult] == 0,
  proof_ensure: _result => {
    ult < 0 || two == true || out[ult] != 2 || res[ult] == 1
  },
  proof_ensure: _result => {
    ult < 0 || two == true || out[ult] == 2 || res[ult] == out[ult]
  },
} {
  let n = out.length()
  for k = 0; k < n; k = k + 1 {
    res[k] = out[k]
  } where {
    proof_invariant: 0 <= k && k <= n,
    proof_invariant: same_all(res, out, k),
  }
  if ult >= 0 {
    if two {
      res[ult] = 0
    } else if out[ult] == 2 {
      res[ult] = 1
    }
  }
  0
}

///|
/// Round trip on the slot representation for an ordinary word: its dictionary marks are a single
/// accent at slot lex (none elsewhere), on the ultima exactly when lex_pos == 1. Rendering any
/// decision for it and undoing gives the dictionary marks back.
/// Proved: res == marks at every slot.
pub fn round_trip_ordinary(
  marks : FixedArray[Int32],
  lex : Int32,
  ult : Int32,
  code : Int32,
  out : FixedArray[Int32],
  res : FixedArray[Int32],
) -> Int32 where {
  proof_require: out.length() == marks.length() &&
  res.length() == marks.length(),
  proof_require: 0 <= ult && ult < marks.length(),
  proof_require: 0 <= lex && lex < marks.length(),
  proof_require: zero_except(marks, lex, marks.length()),
  proof_require: code == 1 || code == 2 || code == 3 || code == 4,
  proof_require: code == 1 || code == 4 || (lex == ult && marks[lex] == 1),
  proof_require: code != 4 || lex != ult,
  proof_require: code != 1 || lex != ult || marks[ult] != 2,
  proof_ensure: _result => same_all(res, marks, marks.length()),
} {
  let a = render_marks(marks, ult, code, out)
  let b = unrender_marks(out, ult, code == 4, res)
  a + b
}

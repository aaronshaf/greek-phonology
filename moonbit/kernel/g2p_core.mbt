// G2P core over code-point arrays: finite tables plus one proved step function.
// Input is one word as letter clusters: bs[i] = folded base letter (U+03B1..U+03C9),
// rf[i] = 1 if it carries a rough breathing, dd[i] = 1 if it carries a diaeresis.
// Phones are small integer ids (see spec.mbtp); a packed sequence is p1 + 64*p2 + 4096*p3.
// Schemes: 0 modern, 1 koine, 2 attic, 3 erasmian.

///|
pub fn g_vowel(
  c : Int32,
) -> Bool where {
  proof_ensure: result => result == true || result == false,
} {
  c == 0x3B1 ||
  c == 0x3B5 ||
  c == 0x3B7 ||
  c == 0x3B9 ||
  c == 0x3BF ||
  c == 0x3C5 ||
  c == 0x3C9
}

///|
pub fn g_diph(
  a : Int32,
  b : Int32,
) -> Bool where {
  proof_ensure: result => result == true || result == false,
} {
  if b == 0x3B9 {
    a == 0x3B1 || a == 0x3B5 || a == 0x3BF || a == 0x3C5
  } else if b == 0x3C5 {
    a == 0x3B1 || a == 0x3B5 || a == 0x3BF || a == 0x3B7
  } else {
    false
  }
}

///|
fn g_voiceless(
  c : Int32,
) -> Bool where {
  proof_ensure: result => result == true || result == false,
} {
  c == 0x3C0 ||
  c == 0x3BA ||
  c == 0x3C4 ||
  c == 0x3C6 ||
  c == 0x3B8 ||
  c == 0x3C7 ||
  c == 0x3C3 ||
  c == 0x3BE ||
  c == 0x3C8 ||
  c == 0x3C2
}

///|
/// β γ δ μ ν λ ρ: voiced consonants that voice a preceding σ in Modern Greek.
fn g_voiced_cons(
  c : Int32,
) -> Bool where {
  proof_ensure: result => result == true || result == false,
} {
  c == 0x3B2 ||
  c == 0x3B3 ||
  c == 0x3B4 ||
  c == 0x3BC ||
  c == 0x3BD ||
  c == 0x3BB ||
  c == 0x3C1
}

///|
fn g_velar(
  c : Int32,
) -> Bool where {
  proof_ensure: result => result == true || result == false,
} {
  c == 0x3BA || c == 0x3B3 || c == 0x3C7 || c == 0x3BE
}

///|
/// Is the sound at j a front vowel (or a front-gliding diphthong)?
fn g_front(
  bs : FixedArray[Int32],
  dd : FixedArray[Int32],
  j : Int32,
) -> Bool where {
  proof_require: 0 <= j,
  proof_require: bs.length() == dd.length(),
} {
  if j >= bs.length() {
    false
  } else if g_vowel(bs[j]) {
    if j + 1 < bs.length() && dd[j + 1] == 0 && g_diph(bs[j], bs[j + 1]) {
      let a = bs[j]
      let b = bs[j + 1]
      b == 0x3B9 || (b == 0x3C5 && (a == 0x3B5 || a == 0x3B7))
    } else {
      let c = bs[j]
      c == 0x3B5 || c == 0x3B7 || c == 0x3B9 || c == 0x3C5
    }
  } else {
    false
  }
}

///|
/// Modern αυ ευ ηυ: f before a voiceless consonant or at the end, else v.
fn g_modern_vl(
  bs : FixedArray[Int32],
  f : Int32,
) -> Bool where {
  proof_require: 0 <= f,
} {
  if f >= bs.length() {
    true
  } else if g_vowel(bs[f]) {
    false
  } else {
    g_voiceless(bs[f])
  }
}

///|
/// Single vowel. Proved: only phones of scheme s.
pub fn g_vowel_seq(
  s : Int32,
  c : Int32,
) -> Int32 where {
  proof_require: 0 <= s && s <= 3,
  proof_ensure: result => seq_ok(s, result),
} {
  if c == 0x3B1 {
    1
  } else if c == 0x3B9 {
    3
  } else if c == 0x3BF {
    4
  } else if c == 0x3B5 {
    if s == 1 {
      7
    } else {
      2
    }
  } else if c == 0x3B7 {
    if s == 0 {
      3
    } else if s == 1 {
      2
    } else if s == 2 {
      8
    } else {
      2 + 64 * 12
    }
  } else if c == 0x3C5 {
    if s == 0 {
      3
    } else if s == 3 {
      5
    } else {
      6
    }
  } else if c == 0x3C9 {
    if s == 2 {
      9
    } else if s == 3 {
      4 + 64 * 13
    } else {
      4
    }
  } else {
    0
  }
}

///|
/// Diphthong a+b starting at i (b at i+1). Proved: only phones of scheme s.
pub fn g_diph_seq(
  s : Int32,
  bs : FixedArray[Int32],
  i : Int32,
) -> Int32 where {
  proof_require: 0 <= s && s <= 3,
  proof_require: 0 <= i && i + 1 < bs.length(),
  proof_ensure: result => seq_ok(s, result),
  proof_ensure: result =>
    koine_word_final_v(s, bs.length(), i, bs[i], bs[i + 1], result),
} {
  let a = bs[i]
  let b = bs[i + 1]
  let ai = a == 0x3B1 && b == 0x3B9
  let ei = a == 0x3B5 && b == 0x3B9
  let oi = a == 0x3BF && b == 0x3B9
  let yi = a == 0x3C5 && b == 0x3B9
  let ou = a == 0x3BF && b == 0x3C5
  let au = a == 0x3B1 && b == 0x3C5
  let eu = a == 0x3B5 && b == 0x3C5
  if s == 2 {
    if ai {
      1 + 64 * 3
    } else if ei {
      10
    } else if oi {
      4 + 64 * 3
    } else if yi {
      6 + 64 * 3
    } else if ou {
      44
    } else if au {
      1 + 64 * 5
    } else if eu {
      2 + 64 * 5
    } else {
      8 + 64 * 5
    }
  } else if s == 3 {
    if ai {
      1 + 64 * 12
    } else if ei {
      2 + 64 * 12
    } else if oi {
      14 + 64 * 12
    } else if yi {
      15 + 64 * 3
    } else if ou {
      5
    } else if au {
      1 + 64 * 13
    } else if eu {
      16 + 64 * 5
    } else {
      2 + 64 * 12 + 4096 * 5
    }
  } else if s == 0 {
    if ai {
      2
    } else if ei {
      3
    } else if oi || yi {
      3
    } else if ou {
      5
    } else {
      let head = if a == 0x3B1 { 1 } else if a == 0x3B5 { 2 } else { 3 }
      head + 64 * (if g_modern_vl(bs, i + 2) { 18 } else { 19 })
    }
  } else if ai {
    7
  } else if ei {
    3
  } else if oi || yi {
    6
  } else if ou {
    5
  } else {
    let head = if a == 0x3B1 { 1 } else if a == 0x3B5 { 7 } else { 2 }
    // Word-final αυ/ευ/ηυ is v, the beta-type fricative the letter β already uses.
    // f is a tolerated hearing, not the target. Before a voiceless consonant: f.
    // Before a vowel or a voiced consonant: β (unchanged; word-final is the
    // only position Aaron settled, 2026-10-27).
    let at_end = i + 2 >= bs.length()
    let vl = !at_end && g_voiceless(bs[i + 2])
    let coda = if vl {
      18
    } else if at_end {
      19
    } else {
      20
    }
    head + 64 * coda
  }
}

///|
fn g_simple(
  c : Int32,
) -> Int32 where {
  proof_ensure: result => {
    result == 0 || common_inv(result) || result == 21 || result == 22
  },
  proof_ensure: result => result != 21 || c == 0x3B2,
  proof_ensure: result => result != 22 || c == 0x3B4,
} {
  if c == 0x3B2 {
    21
  } else if c == 0x3B4 {
    22
  } else if c == 0x3BA {
    34
  } else if c == 0x3BB {
    37
  } else if c == 0x3BC {
    24
  } else if c == 0x3BD {
    25
  } else if c == 0x3C0 {
    36
  } else if c == 0x3C1 {
    38
  } else if c == 0x3C3 || c == 0x3C2 {
    35
  } else if c == 0x3C4 {
    39
  } else {
    0
  }
}

///|
/// Single consonant at i. Proved: only phones of scheme s.
pub fn g_cons_seq(
  s : Int32,
  bs : FixedArray[Int32],
  dd : FixedArray[Int32],
  i : Int32,
) -> Int32 where {
  proof_require: 0 <= s && s <= 3,
  proof_require: 0 <= i && i < bs.length(),
  proof_require: bs.length() == dd.length(),
  proof_ensure: result => seq_ok(s, result),
} {
  let c = bs[i]
  let nas = i + 1 < bs.length() && g_velar(bs[i + 1])
  if c == 0x3BE {
    34 + 64 * 35
  } else if c == 0x3C8 {
    36 + 64 * 35
  } else if s == 0 {
    if c == 0x3B3 {
      if nas {
        26
      } else if g_front(bs, dd, i + 1) {
        27
      } else {
        28
      }
    } else if c == 0x3C7 {
      if g_front(bs, dd, i + 1) {
        29
      } else {
        30
      }
    } else if c == 0x3B2 {
      19
    } else if c == 0x3B4 {
      32
    } else if c == 0x3B6 {
      31
    } else if c == 0x3B8 {
      33
    } else if c == 0x3C6 {
      18
    } else if s == 0 &&
      (c == 0x3C3 || c == 0x3C2) &&
      i + 1 < bs.length() &&
      g_voiced_cons(bs[i + 1]) {
      31
    } else {
      g_simple(c)
    }
  } else if s == 3 {
    if c == 0x3B3 {
      if nas {
        26
      } else {
        23
      }
    } else if c == 0x3B6 {
      40
    } else if c == 0x3B8 {
      33
    } else if c == 0x3C6 {
      18
    } else if c == 0x3C7 {
      30
    } else {
      g_simple(c)
    }
  } else {
    let koine = s == 1
    if c == 0x3B3 {
      if nas {
        26
      } else if koine {
        if g_front(bs, dd, i + 1) {
          27
        } else {
          28
        }
      } else {
        23
      }
    } else if c == 0x3B2 {
      if koine {
        19
      } else {
        21
      }
    } else if c == 0x3B4 {
      if koine {
        32
      } else {
        22
      }
    } else if c == 0x3B6 {
      if koine {
        31
      } else {
        31 + 64 * 22
      }
    } else if c == 0x3B8 {
      41
    } else if c == 0x3C6 {
      42
    } else if c == 0x3C7 {
      43
    } else {
      g_simple(c)
    }
  }
}

///|
/// Append a packed sequence. Proved: keeps out[0..k) inside the inventory.
fn g_put(
  s : Int32,
  out : FixedArray[Int32],
  k : Int32,
  q : Int32,
) -> Int32 where {
  proof_require: 0 <= s && s <= 3,
  proof_require: 0 <= k && k <= 4,
  proof_require: out.length() >= 8,
  proof_require: seq_ok(s, q),
  proof_require: all_in(s, out, k),
  proof_ensure: result => k <= result && result <= k + 3,
  proof_ensure: result => all_in(s, out, result),
} {
  let p1 = q % 64
  let p2 = q / 64 % 64
  let p3 = q / 4096
  let mut j = k
  if p1 != 0 {
    out[j] = p1
    j = j + 1
  }
  proof_assert all_in(s, out, j)
  if p2 != 0 {
    out[j] = p2
    j = j + 1
  }
  proof_assert all_in(s, out, j)
  if p3 != 0 {
    out[j] = p3
    j = j + 1
  }
  j
}

///|
/// Size of the G2P unit starting at cluster i: 2 for a diphthong (or, in Modern, the
/// digraphs μπ ντ γκ), else 1. Proved: 1 or 2, and the unit stays inside the word.
pub fn g2p_adv(
  s : Int32,
  bs : FixedArray[Int32],
  dd : FixedArray[Int32],
  i : Int32,
) -> Int32 where {
  proof_require: 0 <= i && i < bs.length(),
  proof_require: dd.length() == bs.length(),
  proof_ensure: result => 1 <= result && result <= 2,
  proof_ensure: result => i + result <= bs.length(),
} {
  if i + 1 < bs.length() {
    let c = bs[i]
    let d = bs[i + 1]
    if g_vowel(c) && g_vowel(d) && dd[i + 1] == 0 && g_diph(c, d) {
      2
    } else if s == 0 &&
      (
        (c == 0x3BC && d == 0x3C0) ||
        (c == 0x3BD && d == 0x3C4) ||
        (c == 0x3B3 && d == 0x3BA)
      ) {
      2
    } else {
      1
    }
  } else {
    1
  }
}

///|
/// One G2P step at cluster i: writes the phones for the unit starting at i into out and returns
/// count + 8 * advance. Proved: the unit is 1 or 2 clusters and stays inside the word (so a loop of
/// steps consumes every cluster exactly once), at most 7 phones, all from scheme s's inventory.
pub fn g2p_step(
  s : Int32,
  bs : FixedArray[Int32],
  rf : FixedArray[Int32],
  dd : FixedArray[Int32],
  i : Int32,
  out : FixedArray[Int32],
) -> Int32 where {
  proof_require: 0 <= s && s <= 3,
  proof_require: 0 <= i && i < bs.length(),
  proof_require: rf.length() == bs.length() && dd.length() == bs.length(),
  proof_require: out.length() >= 8,
  proof_ensure: result => 1 <= result / 8 && result / 8 <= 2,
  proof_ensure: result => i + result / 8 <= bs.length(),
  proof_ensure: result => 0 <= result % 8 && result % 8 <= 7,
  proof_ensure: result => all_in(s, out, result % 8),
} {
  let n = bs.length()
  let c = bs[i]
  let has_nxt = i + 1 < n
  let att = s == 2 || s == 3
  let is_d = has_nxt &&
    g_vowel(c) &&
    g_vowel(bs[i + 1]) &&
    dd[i + 1] == 0 &&
    g_diph(c, bs[i + 1])
  let rough = if is_d {
    att && (rf[i] != 0 || rf[i + 1] != 0)
  } else if g_vowel(c) {
    att && rf[i] != 0
  } else {
    att && c == 0x3C1 && rf[i] != 0
  }
  let mut k = 0
  if rough {
    out[0] = 17
    k = 1
  }
  let mp = s == 0 && has_nxt && c == 0x3BC && bs[i + 1] == 0x3C0
  let nt = s == 0 && has_nxt && c == 0x3BD && bs[i + 1] == 0x3C4
  let gk = s == 0 && has_nxt && c == 0x3B3 && bs[i + 1] == 0x3BA
  if is_d {
    k = g_put(s, out, k, g_diph_seq(s, bs, i))
    k + 8 * g2p_adv(s, bs, dd, i)
  } else if g_vowel(c) {
    k = g_put(s, out, k, g_vowel_seq(s, c))
    k + 8 * g2p_adv(s, bs, dd, i)
  } else if mp || nt || gk {
    let q = if i == 0 {
      if mp {
        21
      } else if nt {
        22
      } else {
        23
      }
    } else if mp {
      24 + 64 * 21
    } else if nt {
      25 + 64 * 22
    } else {
      26 + 64 * 23
    }
    k = g_put(s, out, k, q)
    k + 8 * g2p_adv(s, bs, dd, i)
  } else {
    k = g_put(s, out, k, g_cons_seq(s, bs, dd, i))
    k + 8 * g2p_adv(s, bs, dd, i)
  }
}

///|
/// Segment a whole word into G2P units. Writes each unit's first cluster to starts and returns
/// the number of units. Proved: units start at 0, move forward by 1 or 2, stay inside the word,
/// and the last one ends exactly at the end, so every cluster (every input code point that the
/// boundary keeps) is consumed exactly once.
pub fn g2p_units(
  s : Int32,
  bs : FixedArray[Int32],
  rf : FixedArray[Int32],
  dd : FixedArray[Int32],
  starts : FixedArray[Int32],
) -> Int32 where {
  proof_require: 0 <= s && s <= 3,
  proof_require: rf.length() == bs.length() && dd.length() == bs.length(),
  proof_require: starts.length() == bs.length() + 1,
  proof_ensure: result => 0 <= result && result <= bs.length(),
  proof_ensure: result => starts_ok(starts, result, bs.length()),
  proof_ensure: result => starts[result] == bs.length(),
} {
  let n = bs.length()
  let mut k = 0
  let mut adv = 1
  let mut pos = 0
  for i = 0; i < n; i = i + adv {
    starts[k] = i
    adv = g2p_adv(s, bs, dd, i)
    pos = i + adv
    k = k + 1
  } where {
    proof_invariant: 0 <= i && i <= n,
    proof_invariant: 0 <= k && k <= i,
    proof_invariant: k == 0 || pos == i,
    proof_invariant: k != 0 || i == 0,
    proof_invariant: 1 <= adv && adv <= 2,
    proof_invariant: starts_ok(starts, k, n),
  }
  if n == 0 {
    pos = 0
  }
  starts[k] = pos
  k
}

///|
/// Restored Attic vowel length: a, i, y become aː, iː, yː when the spelling shows the vowel is long
/// (circumflex, macron, iota subscript). Proved: stays inside the Attic inventory.
pub fn g_attic_long(
  id : Int32,
) -> Int32 where {
  proof_require: in_inv(2, id),
  proof_ensure: result => in_inv(2, result),
} {
  if id == 1 {
    45
  } else if id == 3 {
    46
  } else if id == 6 {
    47
  } else {
    id
  }
}

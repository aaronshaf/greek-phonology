// Bounds for the restart-tolerant alignment backtrace.
// The floating-point cost matrix stays in the library: this prover has no
// useful theory of Double, so monotonicity is proved on the integer choices
// the library actually makes (score, end index, skip length).

///|
pub(all) struct AlignCursor {
  ci : Int32
  cj : Int32
  att : Int32
  rank : Int32
}

///|
/// Rank of a backtrace state. Jumps raise `att`, so the rank falls even when
/// the phone cursor moves forward.
pub fn align_rank(
  ci : Int32,
  cj : Int32,
  att : Int32,
  span : Int32,
) -> Int32 where {
  proof_require: ci >= 0 && cj >= 0 && att >= 0 && span >= 1,
  proof_ensure: result => result <= ci + cj,
  proof_ensure: result => result == ci + cj - att * (span + span),
} {
  ci + cj - att * (span + span)
}

///|
/// Match: consume one heard token and one target phone.
/// Proved: both cursors stay non-negative and their sum strictly falls.
pub fn align_bt_match(
  ci : Int32,
  cj : Int32,
  att : Int32,
  span : Int32,
) -> AlignCursor where {
  proof_require: ci >= 1 && cj >= 1 && att >= 0 && span >= 1,
  proof_ensure: result => result.ci == ci - 1 && result.cj == cj - 1,
  proof_ensure: result => result.att == att,
  proof_ensure: result => result.ci >= 0 && result.cj >= 0,
  proof_ensure: result => result.ci + result.cj < ci + cj,
  proof_ensure: result => result.rank < ci + cj - att * (span + span),
  proof_ensure: result => result.rank == result.ci + result.cj - result.att * (span + span),
} {
  let nci = ci - 1
  let ncj = cj - 1
  let rank = nci + ncj - att * (span + span)
  { ci: nci, cj: ncj, att, rank }
}

///|
/// Insertion: a stray heard token, target cursor unchanged.
/// Proved: the heard cursor falls by one and the rank falls.
pub fn align_bt_insert(
  ci : Int32,
  cj : Int32,
  att : Int32,
  span : Int32,
) -> AlignCursor where {
  proof_require: ci >= 1 && cj >= 0 && att >= 0 && span >= 1,
  proof_ensure: result => result.ci == ci - 1 && result.cj == cj,
  proof_ensure: result => result.att == att,
  proof_ensure: result => result.ci >= 0 && result.cj >= 0,
  proof_ensure: result => result.ci + result.cj < ci + cj,
  proof_ensure: result => result.rank < ci + cj - att * (span + span),
} {
  let nci = ci - 1
  let rank = nci + cj - att * (span + span)
  { ci: nci, cj, att, rank }
}

///|
/// Deletion: an unmatched target phone, heard cursor unchanged.
/// Proved: the phone cursor falls by one and the rank falls.
pub fn align_bt_delete(
  ci : Int32,
  cj : Int32,
  att : Int32,
  span : Int32,
) -> AlignCursor where {
  proof_require: ci >= 0 && cj >= 1 && att >= 0 && span >= 1,
  proof_ensure: result => result.ci == ci && result.cj == cj - 1,
  proof_ensure: result => result.att == att,
  proof_ensure: result => result.ci >= 0 && result.cj >= 0,
  proof_ensure: result => result.ci + result.cj < ci + cj,
  proof_ensure: result => result.rank < ci + cj - att * (span + span),
} {
  let ncj = cj - 1
  let rank = ci + ncj - att * (span + span)
  { ci, cj: ncj, att, rank }
}

///|
/// Restart or skip: stay on the same heard token, move the phone cursor to
/// `src` (an index strictly inside `0 .. span`), and count one more attempt.
/// Proved: `src` is in range, `att` grows by one, and the rank falls, so a
/// jump cannot cycle.
pub fn align_bt_jump(
  ci : Int32,
  cj : Int32,
  att : Int32,
  src : Int32,
  span : Int32,
) -> AlignCursor where {
  proof_require: ci >= 0 && cj >= 0 && att >= 0 && span >= 1,
  proof_require: src >= 0 && src < span,
  proof_ensure: result => result.ci == ci && result.cj == src,
  proof_ensure: result => result.att == att + 1,
  proof_ensure: result => result.cj >= 0 && result.cj < span,
  proof_ensure: result => result.rank < ci + cj - att * (span + span),
  proof_ensure: result => result.rank == ci + src - (att + 1) * (span + span),
} {
  let natt = att + 1
  proof_assert src - (span + span) < 0
  let rank = ci + src - natt * (span + span)
  { ci, cj: src, att: natt, rank }
}

///|
/// A match may be recorded only when both cursors still point at a real item.
/// Proved: a true result means the emitted indexes are inside the two lengths.
pub fn align_emit_ok(
  ci : Int32,
  cj : Int32,
  heard_n : Int32,
  phone_n : Int32,
) -> Bool where {
  proof_require: heard_n >= 0 && phone_n >= 0,
  proof_ensure: result => result == false || ci >= 1,
  proof_ensure: result => result == false || cj >= 1,
  proof_ensure: result => result == false || ci <= heard_n,
  proof_ensure: result => result == false || cj <= phone_n,
} {
  ci >= 1 && cj >= 1 && ci <= heard_n && cj <= phone_n
}

///|
/// End of the alignment. A strictly cheaper column wins; a near tie keeps the
/// longer reading (`j` is only offered when it is to the right of `k`).
/// Proved: the chosen index stays between the two arguments.
pub fn align_pick_end(
  k : Int32,
  j : Int32,
  cheaper : Bool,
  near : Bool,
) -> Int32 where {
  proof_require: 0 <= k && k <= j,
  proof_ensure: result => k <= result && result <= j,
  proof_ensure: result => result == k || result == j,
  proof_ensure: result => cheaper == false || result == j,
} {
  if cheaper || (near && j > k) {
    j
  } else {
    k
  }
}

///|
/// Integer relaxation. Proved: the result is one of the two costs and no larger
/// than either, so a cell's cost never rises.
pub fn align_min_cost(cur : Int32, cand : Int32) -> Int32 where {
  proof_ensure: result => result <= cur && result <= cand,
  proof_ensure: result => result == cur || result == cand,
} {
  if cand < cur {
    cand
  } else {
    cur
  }
}

///|
/// Best attempt score. Proved: the result is one of the two scores and no smaller
/// than either.
pub fn align_max_score(cur : Int32, cand : Int32) -> Int32 where {
  proof_ensure: result => result >= cur && result >= cand,
  proof_ensure: result => result == cur || result == cand,
} {
  if cand > cur {
    cand
  } else {
    cur
  }
}

///|
/// Which integer to keep. `take_cand` is decided by the caller (a float compare
/// the prover does not see). Proved: the result is exactly the chosen input.
pub fn align_pick_cost(
  cur : Int32,
  cand : Int32,
  take_cand : Bool,
) -> Int32 where {
  proof_ensure: result => take_cand == false || result == cand,
  proof_ensure: result => take_cand == true || result == cur,
  proof_ensure: result => result == cur || result == cand,
} {
  if take_cand {
    cand
  } else {
    cur
  }
}

///|
/// Words skipped by a forward jump from the end of `earlier` to the start of
/// `later`. Proved: at least one word, and the count is `later - earlier - 1`.
pub fn align_skip_n(later : Int32, earlier : Int32) -> Int32 where {
  proof_require: 0 <= earlier && earlier <= later - 2,
  proof_ensure: result => result >= 1,
  proof_ensure: result => result == later - earlier - 1,
} {
  later - earlier - 1
}

///|
/// A restart may land on this word only when it is the current word or at most
/// `back` words later. Proved: a true result stays inside that window.
pub fn align_in_back(
  b2 : Int32,
  ww : Int32,
  back : Int32,
  words : Int32,
) -> Bool where {
  proof_require: 0 <= b2 && b2 < words && back >= 0,
  proof_ensure: result => result == false || ww >= b2,
  proof_ensure: result => result == false || ww <= b2 + back,
  proof_ensure: result => result == false || ww < words,
} {
  ww >= b2 && ww <= b2 + back && ww < words
}

///|
/// How many phones a word must credit before the attempt counts.
/// One phone needs that phone. A longer word needs at least `minc` and at least
/// half its phones, rounded up. `min_frac` other than 1/2 stays in the library.
pub fn align_phones_needed(n : Int32, minc : Int32) -> Int32 where {
  proof_require: n >= 0 && minc >= 1,
  proof_ensure: result => result >= 1,
  proof_ensure: result => n > 1 || result == 1,
  proof_ensure: result => n <= 1 || result >= minc,
  proof_ensure: result => n <= 1 || result * 2 >= n,
} {
  if n <= 1 {
    1
  } else {
    let half = (n + 1) / 2
    if half > minc {
      half
    } else {
      minc
    }
  }
}

///|
/// Phone, word, and overall scores are percentages.
/// Proved: the result is inside 0..=100.
pub fn align_clamp_score(score : Int32) -> Int32 where {
  proof_ensure: result => 0 <= result && result <= 100,
} {
  if score < 0 {
    0
  } else if score > 100 {
    100
  } else {
    score
  }
}

///|
/// Runtime fuse for the backtrace loop, the same 1_000_000 the reference uses.
/// Termination itself is the falling rank on every step (`align_bt_match`,
/// `align_bt_insert`, `align_bt_delete`, `align_bt_jump`); this fuse only stops
/// a buggy table from running without bound. Proved: the fuse is exactly
/// 1_000_000 for every non-negative length.
pub fn align_step_cap(heard_n : Int32, phone_n : Int32) -> Int32 where {
  proof_require: heard_n >= 0 && phone_n >= 0,
  proof_ensure: result => result == 1000000,
} {
  if heard_n + phone_n >= 0 {
    1000000
  } else {
    1000000
  }
}

// Integer models of learner-goal bounds, distance tiers, near-miss credit,
// and the alignment substitution bucket. The float table stays in the library.
// These functions are what the library calls for the decisions the prover can see.

///|
/// Cell budget for one alignment matrix. Three arrays of this many cells is
/// the most `align_tokens` will allocate. Proved: the cap is 250_000.
pub fn align_cell_cap() -> Int where {
  proof_ensure: result => result == 250000,
} {
  250000
}

///|
/// True when the matrix `(heard + 1) * (phones + 1)` would pass the cap.
/// The caller also refuses a side longer than 20_000, which keeps this
/// product inside a 32-bit int. Proved: the boolean matches the comparison.
pub fn align_over_cap(heard : Int, phones : Int) -> Bool where {
  proof_require: heard >= 0 && phones >= 0 && heard <= 20000 && phones <= 20000,
  proof_ensure: result => result == false || (heard + 1) * (phones + 1) > 250000,
  proof_ensure: result => result == true || (heard + 1) * (phones + 1) <= 250000,
} {
  (heard + 1) * (phones + 1) > 250000
}

///|
/// Substitution bucket. 0 is free (same phone, or accurate for the scheme),
/// 1 is the half-cost tolerated band, 2 is a full substitution.
/// Proved: the bucket is 0, 1, or 2, and it is 0 exactly when the pair is
/// the same phone or scheme-accurate.
pub fn align_sub_bucket(same : Bool, accurate : Bool, tolerated : Bool) -> Int where {
  proof_ensure: result => result == 0 || result == 1 || result == 2,
  proof_ensure: result => result != 0 || same || accurate,
  proof_ensure: result => (same || accurate) == false || result == 0,
  proof_ensure: result => result != 1 || tolerated,
  proof_ensure: result => result >= 0,
} {
  if same || accurate {
    0
  } else if tolerated {
    1
  } else {
    2
  }
}

///|
/// Tolerance in thousandths. 0 strict (0.20), 2 lenient (0.42), anything else
/// gracious (0.33). Proved: only those three values, and the index selects one.
pub fn goal_tol_milli(which : Int) -> Int where {
  proof_ensure: result => result == 200 || result == 330 || result == 420,
  proof_ensure: result => which != 0 || result == 200,
  proof_ensure: result => which != 2 || result == 420,
  proof_ensure: result => which == 0 || which == 2 || result == 330,
} {
  if which == 0 {
    200
  } else if which == 2 {
    420
  } else {
    330
  }
}

///|
/// Near-miss credit cap in thousandths. 0 strict (0.60), 2 lenient (0.90),
/// anything else gracious (0.75). Proved: only those three values.
pub fn goal_cap_milli(which : Int) -> Int where {
  proof_ensure: result => result == 600 || result == 750 || result == 900,
  proof_ensure: result => which != 0 || result == 600,
  proof_ensure: result => which != 2 || result == 900,
  proof_ensure: result => which == 0 || which == 2 || result == 750,
} {
  if which == 0 {
    600
  } else if which == 2 {
    900
  } else {
    750
  }
}

///|
/// Strict is the tightest goal and lenient is the loosest, on both the
/// tolerance and the credit cap. Proved: the two chains hold.
pub fn goal_bounds_ordered() -> Bool where {
  proof_ensure: result => result == true,
} {
  goal_tol_milli(0) <= goal_tol_milli(1) &&
  goal_tol_milli(1) <= goal_tol_milli(2) &&
  goal_cap_milli(0) <= goal_cap_milli(1) &&
  goal_cap_milli(1) <= goal_cap_milli(2)
}

///|
/// Tier from a distance in thousandths. 0 accurate at or under 0.020,
/// 1 tolerated at or under `tol_milli`, 2 otherwise.
/// Proved: the code matches those two thresholds.
pub fn tier_code(d_milli : Int, tol_milli : Int) -> Int where {
  proof_require: d_milli >= 0 && tol_milli >= 0,
  proof_ensure: result => result == 0 || result == 1 || result == 2,
  proof_ensure: result => d_milli > 20 || result == 0,
  proof_ensure: result => d_milli <= 20 || result != 0,
  proof_ensure: result => result != 1 || d_milli <= tol_milli,
  proof_ensure: result => result != 2 || d_milli > tol_milli,
} {
  if d_milli <= 20 {
    0
  } else if d_milli <= tol_milli {
    1
  } else {
    2
  }
}

///|
/// A larger distance never improves the tier. Proved for the integer table.
pub fn tier_worsens(d0 : Int, d1 : Int, tol_milli : Int) -> Bool where {
  proof_require: 0 <= d0 && d0 <= d1 && tol_milli >= 0,
  proof_ensure: result => result == true,
} {
  tier_code(d0, tol_milli) <= tier_code(d1, tol_milli)
}

///|
/// Near-miss credit in thousandths, `cap * sim / 1000`, with `sim` in 0..=1000.
/// Proved: the result stays inside 0..=cap and equals that product.
pub fn near_credit_milli(cap_milli : Int, sim_milli : Int) -> Int where {
  proof_require: cap_milli >= 0 &&
    cap_milli <= 1000 &&
    sim_milli >= 0 &&
    sim_milli <= 1000,
  proof_ensure: result => result >= 0 && result <= cap_milli,
  proof_ensure: result => result == cap_milli * sim_milli / 1000,
} {
  cap_milli * sim_milli / 1000
}

///|
/// Display rank for a credit in tenths of a percent (`8%` is 80).
/// 0 none, 1 close tint, 2 light, 3 medium, 4 clear, 5 deepest.
/// Cuts must be non-decreasing. Proved: the rank stays in 0..=5 and it
/// reaches a band only when the percent has reached that band's cutoff.
pub fn credit_level_rank(
  pct10 : Int,
  close : Int,
  light : Int,
  medium : Int,
  clear : Int,
  deepest : Int,
) -> Int where {
  proof_require: close <= light && light <= medium && medium <= clear && clear <= deepest,
  proof_ensure: result => result >= 0 && result <= 5,
  proof_ensure: result => result == 0 || pct10 >= close,
  proof_ensure: result => result <= 1 || pct10 >= light,
  proof_ensure: result => result <= 2 || pct10 >= medium,
  proof_ensure: result => result <= 3 || pct10 >= clear,
  proof_ensure: result => result <= 4 || pct10 >= deepest,
} {
  if pct10 < close {
    0
  } else if pct10 < light {
    1
  } else if pct10 < medium {
    2
  } else if pct10 < clear {
    3
  } else if pct10 < deepest {
    4
  } else {
    5
  }
}

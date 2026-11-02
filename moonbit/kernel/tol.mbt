// Integer model of the reliability weight. The float table stays in the library.
// A weight is thousandths of "how much a miss counts": 1000 trusts a miss fully,
// 0 drops it. Sparse slices back off. These functions are what the library calls.

///|
/// A position or stress slice is used only with at least 20 observations,
/// and only when it is a proper subset of the phone count. Otherwise the
/// phone (or its class) is the estimate.
pub fn tol_min_slice() -> Int32 where { proof_ensure: result => result == 20, } {
  20
}

///|
/// A phone or a class pool is used only with at least 8 observations.
/// Fewer than that, the next rung is the parent.
pub fn tol_min_phone() -> Int32 where { proof_ensure: result => result == 8, } {
  8
}

///|
/// Pseudo-counts of the parent mixed into a used estimate.
pub fn tol_shrink_k() -> Int32 where { proof_ensure: result => result == 8, } {
  8
}

///|
/// Neutral weight when nothing is known: half trust, 0.500.
pub fn tol_default_milli() -> Int32 where {
  proof_ensure: result => result == 500,
} {
  500
}

///|
/// A pure length miss counts as nothing. The model rarely writes a length mark.
pub fn tol_length_miss_milli() -> Int32 where {
  proof_ensure: result => result == 0,
} {
  0
}

///|
/// Lenient band is below this weight, in thousandths (0.350).
pub fn tol_band_lenient() -> Int32 where {
  proof_ensure: result => result == 350,
} {
  350
}

///|
/// Strict band starts at this weight, in thousandths (0.600).
pub fn tol_band_strict() -> Int32 where {
  proof_ensure: result => result == 600,
} {
  600
}

///|
/// Clamp a weight to 0..=1000.
pub fn tol_clamp(
  w : Int32,
) -> Int32 where {
  proof_ensure: result => result >= 0 && result <= 1000,
  proof_ensure: result => w < 0 || w > 1000 || result == w,
} {
  if w < 0 {
    0
  } else if w > 1000 {
    1000
  } else {
    w
  }
}

///|
/// `(n * slice + k * parent) / (n + k)`. `n <= 0` returns the parent.
/// Proved: the result stays in 0..=1000, and a positive count uses that mix.
pub fn tol_shrink(
  n : Int32,
  slice : Int32,
  parent : Int32,
  k : Int32,
) -> Int32 where {
  proof_require: n >= 0 && n <= 100000,
  proof_require: slice >= 0 && slice <= 1000,
  proof_require: parent >= 0 && parent <= 1000,
  proof_require: k >= 0 && k <= 1000,
  proof_ensure: result => result >= 0 && result <= 1000,
  proof_ensure: result => n > 0 || result == parent,
  proof_ensure: result => {
    n == 0 || k == 0 || result == (n * slice + k * parent) / (n + k)
  },
} {
  if n <= 0 {
    tol_clamp(parent)
  } else {
    let den = n + k
    if den <= 0 {
      tol_clamp(parent)
    } else {
      tol_clamp((n * slice + k * parent) / den)
    }
  }
}

///|
/// True when a position or stress slice is evidence of its own.
/// Proved: that is exactly `n >= 20` and `n` is below the phone count.
pub fn tol_use_slice(
  n_slice : Int32,
  n_phone : Int32,
) -> Bool where {
  proof_require: n_slice >= 0 && n_phone >= 0,
  proof_ensure: result => result == false || n_slice >= 20,
  proof_ensure: result => result == false || n_slice < n_phone,
  proof_ensure: result => result == true || n_slice < 20 || n_slice >= n_phone,
} {
  n_slice >= tol_min_slice() && n_slice < n_phone
}

///|
/// True when a phone or class count is large enough to use.
/// Proved: that is exactly `n >= 8`.
pub fn tol_use_phone(
  n : Int32,
) -> Bool where {
  proof_ensure: result => result == false || n >= 8,
  proof_ensure: result => result == true || n < 8,
} {
  n >= tol_min_phone()
}

///|
/// The lower of two context weights when both are used, else the one that is used.
/// Proved: both contexts yield a result at or under each of them.
pub fn tol_lenient_pick(
  use_pos : Bool,
  pos_w : Int32,
  use_stress : Bool,
  stress_w : Int32,
) -> Int32 where {
  proof_require: pos_w >= 0 &&
  pos_w <= 1000 &&
  stress_w >= 0 &&
  stress_w <= 1000,
  proof_ensure: result => result >= 0 && result <= 1000,
  proof_ensure: result => {
    use_pos == false || use_stress == false || result <= pos_w
  },
  proof_ensure: result => {
    use_pos == false || use_stress == false || result <= stress_w
  },
  proof_ensure: result => {
    use_pos == false || use_stress == true || result == pos_w
  },
  proof_ensure: result => {
    use_stress == false || use_pos == true || result == stress_w
  },
} {
  if use_pos && use_stress {
    if pos_w <= stress_w {
      pos_w
    } else {
      stress_w
    }
  } else if use_pos {
    pos_w
  } else if use_stress {
    stress_w
  } else {
    0
  }
}

///|
/// Colour band. 0 lenient (below 0.350), 1 mixed, 2 strict (at or above 0.600).
pub fn tol_band(
  weight : Int32,
) -> Int32 where {
  proof_require: weight >= 0 && weight <= 1000,
  proof_ensure: result => result == 0 || result == 1 || result == 2,
  proof_ensure: result => weight >= 350 || result == 0,
  proof_ensure: result => weight < 350 || result != 0,
  proof_ensure: result => result != 1 || weight >= 350,
  proof_ensure: result => result != 1 || weight < 600,
  proof_ensure: result => result != 2 || weight >= 600,
} {
  if weight < tol_band_lenient() {
    0
  } else if weight < tol_band_strict() {
    1
  } else {
    2
  }
}

///|
/// Miss cost in thousandths. An accepted confusion or a length miss is 0.
/// Anything else is the weight. Proved: those two cases are free, and the
/// result stays in 0..=1000.
pub fn tol_miss_milli(
  weight : Int32,
  accepted : Bool,
  length_miss : Bool,
) -> Int32 where {
  proof_require: weight >= 0 && weight <= 1000,
  proof_ensure: result => result >= 0 && result <= 1000,
  proof_ensure: result => accepted == false || result == 0,
  proof_ensure: result => length_miss == false || result == 0,
  proof_ensure: result => {
    accepted == true || length_miss == true || result == weight
  },
} {
  if accepted || length_miss {
    tol_length_miss_milli()
  } else {
    tol_clamp(weight)
  }
}

///|
/// Weight in thousandths from one packed `tol_decide` result.
pub fn tol_decided_weight(
  packed : Int32,
) -> Int32 where {
  proof_require: packed >= 0 && packed <= 5 * 1001 + 1000,
  proof_ensure: result => result >= 0 && result <= 1000,
  proof_ensure: result => result == packed % 1001,
} {
  packed % 1001
}

///|
/// Rung code from one packed `tol_decide` result.
/// 0 position, 1 stress, 2 both, 3 phone, 4 class, 5 default.
pub fn tol_decided_source(
  packed : Int32,
) -> Int32 where {
  proof_require: packed >= 0 && packed <= 5 * 1001 + 1000,
  proof_ensure: result => result >= 0 && result <= 5,
  proof_ensure: result => result == packed / 1001,
} {
  packed / 1001
}

///|
/// One decision. Counts are observations. Weights are Wilson lower bounds
/// in thousandths, already chosen by the library (a long phone passes the
/// length-ignoring bound and zeros the slices).
///
/// The pack is `source * 1001 + weight`. Source 0 position, 1 stress,
/// 2 position and stress, 3 phone, 4 class, 5 the neutral 0.500.
pub fn tol_decide(
  n_pos : Int32,
  w_pos : Int32,
  n_stress : Int32,
  w_stress : Int32,
  n_phone : Int32,
  w_phone : Int32,
  n_class : Int32,
  w_class : Int32,
) -> Int32 where {
  proof_require: n_pos >= 0 && n_pos <= 100000,
  proof_require: n_stress >= 0 && n_stress <= 100000,
  proof_require: n_phone >= 0 && n_phone <= 100000,
  proof_require: n_class >= 0 && n_class <= 100000,
  proof_require: w_pos >= 0 && w_pos <= 1000,
  proof_require: w_stress >= 0 && w_stress <= 1000,
  proof_require: w_phone >= 0 && w_phone <= 1000,
  proof_require: w_class >= 0 && w_class <= 1000,
  proof_ensure: result => result >= 0 && result <= 5 * 1001 + 1000,
  proof_ensure: result => result / 1001 <= 5,
  proof_ensure: result => result % 1001 <= 1000,
} {
  let k = tol_shrink_k()
  let neutral = tol_default_milli()
  let class_w = if tol_use_phone(n_class) {
    tol_shrink(n_class, w_class, neutral, k)
  } else {
    neutral
  }
  let phone_w = if tol_use_phone(n_phone) {
    tol_shrink(n_phone, w_phone, class_w, k)
  } else {
    class_w
  }
  let use_pos = tol_use_slice(n_pos, n_phone)
  let use_stress = tol_use_slice(n_stress, n_phone)
  let pos_w = if use_pos {
    tol_shrink(n_pos, w_pos, phone_w, k)
  } else {
    phone_w
  }
  let stress_w = if use_stress {
    tol_shrink(n_stress, w_stress, phone_w, k)
  } else {
    phone_w
  }
  let slice_w = tol_lenient_pick(use_pos, pos_w, use_stress, stress_w)
  let w = if use_pos || use_stress {
    slice_w
  } else if tol_use_phone(n_phone) {
    phone_w
  } else if tol_use_phone(n_class) {
    class_w
  } else {
    neutral
  }
  let src = if use_pos && use_stress {
    2
  } else if use_pos {
    0
  } else if use_stress {
    1
  } else if tol_use_phone(n_phone) {
    3
  } else if tol_use_phone(n_class) {
    4
  } else {
    5
  }
  src * 1001 + w
}

///|
/// The neutral weight is half trust, and a length miss is free.
pub fn tol_defaults() -> Bool where { proof_ensure: result => result == true, } {
  tol_default_milli() == 500 &&
  tol_length_miss_milli() == 0 &&
  tol_min_slice() == 20 &&
  tol_min_phone() == 8 &&
  tol_shrink_k() == 8
}

///|
/// A slice under 20 observations is not used. A slice that is the whole phone
/// is not a second estimate. A phone under 8 observations is not used.
pub fn tol_sparse_position_backs_off() -> Bool where {
  proof_ensure: result => result == true,
} {
  if tol_use_slice(0, 115) {
    false
  } else if tol_use_slice(1, 115) {
    false
  } else if tol_use_slice(19, 115) {
    false
  } else if tol_use_slice(115, 115) {
    false
  } else if tol_use_phone(7) {
    false
  } else if tol_use_slice(20, 115) {
    if tol_use_slice(114, 115) {
      tol_use_phone(8)
    } else {
      false
    }
  } else {
    false
  }
}

///|
/// Attic aspirates were missed every time. Shrinking 0/41, then 0/25, then
/// the onset 0/23 toward the neutral 0.500 stays under 0.200 (the onset
/// weight is 0.004). `tol_decide` uses this same mix.
pub fn tol_aspirate_onset_low() -> Bool where {
  proof_ensure: result => result == true,
} {
  let class_w = tol_shrink(41, 0, tol_default_milli(), tol_shrink_k())
  let phone_w = tol_shrink(25, 0, class_w, tol_shrink_k())
  let onset_w = tol_shrink(23, 0, phone_w, tol_shrink_k())
  class_w == 81 && phone_w == 19 && onset_w == 4 && onset_w < 200
}

///|
/// A length miss is free at every weight, and so is an accepted confusion.
pub fn tol_length_miss_is_free(
  weight : Int32,
) -> Bool where {
  proof_require: weight >= 0 && weight <= 1000,
  proof_ensure: result => result == true,
} {
  tol_miss_milli(weight, false, true) == tol_length_miss_milli() &&
  tol_miss_milli(weight, true, false) == 0
}

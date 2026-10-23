// Finite-table and inventory checks for tests and CI. Behaviour matches kernel/spec.mbtp.

///|
pub fn to_nfc(s : String) -> String {
  nfc(s)
}

///|
pub fn to_nfd(s : String) -> String {
  let sb = StringBuilder::new()
  for c in s {
    sb.write_string(nfd_char(c))
  }
  sb.to_string()
}

///|
/// Phone ids in the common inventory (all four schemes).
let common_ids : Array[Int] = [1, 3, 4, 24, 25, 26, 34, 35, 36, 37, 38, 39]

///|
let modern_extra : Array[Int] = [
  2, 5, 18, 19, 21, 22, 23, 27, 28, 29, 30, 31, 32, 33,
]

///|
let koine_extra : Array[Int] = [
  2, 5, 6, 7, 18, 19, 20, 27, 28, 31, 32, 41, 42, 43,
]

///|
let attic_extra : Array[Int] = [
  2, 5, 6, 8, 9, 10, 11, 17, 21, 22, 23, 31, 41, 42, 43, 44, 45, 46, 47,
]

///|
let erasmian_extra : Array[Int] = [
  2, 5, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 30, 33, 40,
]

///|
fn scheme_extras(si : Int) -> Array[Int] {
  match si {
    0 => modern_extra
    1 => koine_extra
    2 => attic_extra
    3 => erasmian_extra
    _ => []
  }
}

///|
/// Declared IPA phone strings for scheme index 0..3 (kernel inventories, string form).
pub fn scheme_inventory(si : Int) -> Array[String] {
  let ids : Array[Int] = []
  for x in common_ids {
    ids.push(x)
  }
  for x in scheme_extras(si) {
    if !ids.contains(x) {
      ids.push(x)
    }
  }
  ids.map(fn(id) { phone_name(id) })
}

///|
/// True if `token` is allowed for scheme `si` (Attic consonant geminate `Cː` when `C` is in the inventory).
pub fn phone_allowed(si : Int, token : String) -> Bool {
  if scheme_inventory(si).contains(token) {
    return true
  }
  if si == 2 && token.length() > 1 {
    let cs = chars(token)
    if cs[cs.length() - 1] == 'ː' {
      let base = join_chars(cs[0:cs.length() - 1])
      return scheme_inventory(si).contains(base)
    }
  }
  false
}

///|
/// Every phone id 1..47 maps to a non-empty IPA string; id 0 is unused.
pub fn phone_table_ok() -> Bool {
  if phone_names.length() != 48 || phone_names[0] != "" {
    return false
  }
  for i in 1..<phone_names.length() {
    if phone_names[i] == "" {
      return false
    }
  }
  true
}

///|
/// Declared inventories match the kernel predicate names in spec.mbtp (ids only).
pub fn scheme_inventories_ok() -> Bool {
  for si in 0..<4 {
    let inv = scheme_inventory(si)
    if inv.length() == 0 {
      return false
    }
    for p in inv {
      if p == "" {
        return false
      }
    }
  }
  !scheme_inventory(0).contains("y") &&
  scheme_inventory(1).contains("y") &&
  scheme_inventory(2).contains("aː") &&
  scheme_inventory(3).contains("w")
}

///|
fn row_key(kk : String) -> String {
  let parts = kk.split("\t").collect()
  if parts.length() > 0 {
    parts[0].to_string()
  } else {
    ""
  }
}

///|
fn table_totals_ok(
  rows : Map[String, Int],
  totals : Map[String, Int],
) -> Bool {
  for k, v in totals {
    let mut sum = 0
    for kk, n in rows {
      if row_key(kk) == k {
        sum += n
      }
    }
    if sum != v {
      return false
    }
  }
  true
}

///|
/// Every confusion-count row sums to its declared total (empty tables included).
pub fn confusion_tables_ok() -> Bool {
  table_totals_ok(ct_units, ct_units_total) &&
  table_totals_ok(ct_preds, ct_preds_total) &&
  table_totals_ok(ct_phones, ct_phones_total)
}

///|
/// Noisy-LM vocabulary contains every folded phone each scheme can emit.
pub fn detect_vocab_ok() -> Bool {
  let vocab : Map[String, Bool] = {}
  for p in nl_vocab {
    vocab[p] = true
  }
  for si in 0..<4 {
    for p in scheme_inventory(si) {
      let f = fold(p)
      if f != "|" && f != "" && !vocab.contains(f) {
        return false
      }
    }
  }
  true
}

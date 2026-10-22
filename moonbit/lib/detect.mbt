// IPA in -> per-scheme probabilities out. No audio or model dependencies.

///|
let t_aligned : Double = 1.161

///|
let t_free : Double = 0.872

///|
let hit : Double = 0.8

///|
let edit_w : Double = 2.0

///|
fn fold_map(p : String) -> String {
  match p {
    "ɛ" | "ə" => "e"
    "ɪ" | "j" => "i"
    "ʊ" | "w" => "u"
    "ɔ" => "o"
    "ʏ" | "ø" => "y"
    "β" | "ʋ" => "v"
    "ʝ" => "ɣ"
    "ç" | "χ" => "x"
    "ɡ" => "g"
    "ɾ" => "r"
    "ɐ" | "ɑ" => "a"
    "ŋ" => "n"
    "d͡z" => "z"
    _ => p
  }
}

///|
/// Recognizer-tolerant phone folding: drops length and aspiration, merges near-identical symbols.
pub fn fold(p : String) -> String {
  if p == "|" || p == "" {
    return p
  }
  let cs : Array[Char] = []
  for c in p {
    if c != 'ː' {
      cs.push(c)
    }
  }
  while cs.length() > 0 && cs[cs.length() - 1] == 'ʰ' {
    ignore(cs.pop())
  }
  fold_map(String::from_array(cs))
}

///|
fn is_base(c : Char) -> Bool {
  let i = c.to_int()
  (c >= 'a' && c <= 'z') ||
  (c >= 'A' && c <= 'Z') ||
  (i >= 0x250 && i <= 0x2AF) ||
  c == 'β' ||
  c == 'θ' ||
  c == 'ç' ||
  c == 'ð' ||
  c == 'ŋ' ||
  c == 'ɣ' ||
  c == 'χ' ||
  c == 'ø' ||
  c == 'ɛ' ||
  c == 'ɔ' ||
  c == 'ɪ' ||
  c == 'ʊ' ||
  c == 'ʏ'
}

///|
/// IPA string -> phones. "|" marks word boundaries; whitespace, stress and combining marks (except the tie bar) are ignored.
pub fn tokenize(s : String) -> Array[String] {
  let cs : Array[Char] = []
  for c in s {
    if !(is_comb(c) && c != '\u{0361}') && c != 'ˈ' && c != 'ˌ' && c != '.' {
      cs.push(c)
    }
  }
  let out : Array[String] = []
  let cur : Array[String] = []
  let flush = fn() {
    if out.length() > 0 && cur.length() > 0 {
      out.push("|")
    }
    for t in cur {
      out.push(t)
    }
    cur.clear()
  }
  let mut i = 0
  while i < cs.length() {
    let c = cs[i]
    if c == '|' {
      flush()
      i += 1
      continue
    }
    if !is_base(c) {
      i += 1
      continue
    }
    let sb = StringBuilder::new()
    sb.write_char(c)
    i += 1
    if i + 1 < cs.length() &&
      cs[i] == '\u{0361}' &&
      (
        (cs[i + 1] >= 'a' && cs[i + 1] <= 'z') ||
        cs[i + 1] == 'ʒ' ||
        cs[i + 1] == 'ʑ'
      ) {
      sb.write_char(cs[i])
      sb.write_char(cs[i + 1])
      i += 2
    }
    if i < cs.length() && (cs[i] == 'ʰ' || cs[i] == 'ʲ' || cs[i] == 'ʷ') {
      sb.write_char(cs[i])
      i += 1
    }
    if i < cs.length() && cs[i] == 'ː' {
      sb.write_char(cs[i])
      i += 1
    }
    cur.push(sb.to_string())
  }
  flush()
  out
}

///|
fn vow(p : String) -> Bool {
  p == "a" || p == "e" || p == "i" || p == "o" || p == "u" || p == "y"
}

///|
fn sub_cost(a : String, b : String) -> Double {
  if a == b {
    0.0
  } else if vow(a) && vow(b) {
    0.5
  } else {
    1.0
  }
}

///|
/// Levenshtein alignment; returns (pairs (obs index or -1, exp index or -1), cost).
fn align(
  obs : Array[String],
  exp : Array[String],
) -> (Array[(Int32, Int32)], Double) {
  let n = obs.length()
  let m = exp.length()
  let d : Array[Array[Double]] = Array::makei(n + 1, fn(_) {
    Array::make(m + 1, 0.0)
  })
  for i in 1..<=n {
    d[i][0] = i.to_double()
  }
  for j in 1..<=m {
    d[0][j] = j.to_double()
  }
  for i in 1..<=n {
    for j in 1..<=m {
      let a = d[i - 1][j - 1] + sub_cost(obs[i - 1], exp[j - 1])
      let b = d[i - 1][j] + 1.0
      let c = d[i][j - 1] + 1.0
      let mut v = a
      if b < v {
        v = b
      }
      if c < v {
        v = c
      }
      d[i][j] = v
    }
  }
  let path : Array[(Int32, Int32)] = []
  let mut i = n
  let mut j = m
  while i > 0 || j > 0 {
    if i > 0 &&
      j > 0 &&
      d[i][j] == d[i - 1][j - 1] + sub_cost(obs[i - 1], exp[j - 1]) {
      path.push((i - 1, j - 1))
      i -= 1
      j -= 1
    } else if i > 0 && d[i][j] == d[i - 1][j] + 1.0 {
      path.push((i - 1, -1))
      i -= 1
    } else {
      path.push((-1, j - 1))
      j -= 1
    }
  }
  path.rev_inplace()
  (path, d[n][m])
}

///|
/// Per-scheme probabilities with evidence.
pub(all) struct Detection {
  mode : String
  probs : Array[Double]
  loglik : Array[Double]
  evidence_tags : Array[Array[String]]
  evidence_hits : Array[Array[Int32]]
  evidence_total : Array[Array[Int32]]
  phones : Int32
}

///|
/// Softmax at temperature t. The exponentials are turned into integer weights (2^26 for the
/// strongest scheme) and normalised by the proved kernel (`@kernel.normalize5`): every p >= 0 and
/// the integer shares sum to exactly 2^30, so sum(p) == 1 exactly. Rounding moves p by < 1e-7.
pub fn softmax(ll : Array[Double], t : Double) -> Array[Double] {
  let mut m = ll[0]
  for x in ll {
    if x > m {
      m = x
    }
  }
  let e = ll.map(fn(x) { @math.exp((x - m) / t) })
  if e.length() == 5 {
    let w = e.map(fn(x) { (x * 67108864.0).round().to_int64() })
    let s = 1073741824L
    let q = @kernel.normalize5(w[0], w[1], w[2], w[3], w[4], s)
    return [q[0], q[1], q[2], q[3], q[4]].map(fn(v) { v.to_double() / 1073741824.0 })
  }
  let mut z = 0.0
  for x in e {
    z += x
  }
  e.map(fn(x) { x / z })
}

///|
fn is_diag(tag : String) -> Bool {
  match tag {
    "η"
    | "υ"
    | "β"
    | "γ"
    | "δ"
    | "φ"
    | "θ"
    | "χ"
    | "αι"
    | "ει"
    | "οι"
    | "ου"
    | "υι"
    | "ω"
    | "ζ"
    | "h"
    | "αυ"
    | "ευ" => true
    _ => false
  }
}

///|
fn uid_key(w : Int32, u : Int32) -> Int32 {
  w * 100000 + (u + 1)
}

///|
/// Aligned mode: compare the observed phones with each scheme's transcription of `text`.
pub fn detect_text(ipa_s : String, text : String) -> Detection {
  let obs : Array[String] = []
  for p in tokenize(ipa_s) {
    if p != "|" {
      obs.push(fold(p))
    }
  }
  let ns = schemes.length()
  let exp : Array[Array[Phone]] = []
  for s in 0..<ns {
    exp.push(g2p_index(text, s).filter(fn(x) { x.p != "|" }))
  }
  let segs : Array[Map[Int32, Array[String]]] = []
  let costs : Array[Double] = []
  for s in 0..<ns {
    let (path, cost) = align(obs, exp[s].map(fn(x) { fold(x.p) }))
    let seg : Map[Int32, Array[String]] = {}
    for pr in path {
      let (io, je) = pr
      if io >= 0 && je >= 0 {
        match seg.get(je) {
          Some(a) => a.push(obs[io])
          None => seg[je] = [obs[io]]
        }
      }
    }
    segs.push(seg)
    costs.push(cost)
  }
  let mut rf = 0
  for s in 0..<ns {
    if costs[s] < costs[rf] {
      rf = s
    }
  }
  // units per scheme: uid -> (tag, phone indices)
  let us : Array[Map[Int32, (String, Array[Int32])]] = []
  let all : Array[Int32] = []
  for s in 0..<ns {
    let d : Map[Int32, (String, Array[Int32])] = {}
    for k, x in exp[s] {
      if x.tag != "" {
        let key = uid_key(x.w, x.u)
        match d.get(key) {
          Some(v) => v.1.push(k)
          None => {
            d[key] = (x.tag, [k])
            if !all.contains(key) {
              all.push(key)
            }
          }
        }
      }
    }
    us.push(d)
  }
  all.sort()
  let tags : Array[Array[String]] = Array::makei(ns, fn(_) { [] })
  let hits : Array[Array[Int32]] = Array::makei(ns, fn(_) { [] })
  let tots : Array[Array[Int32]] = Array::makei(ns, fn(_) { [] })
  let ll : Array[Double] = Array::make(ns, 0.0)
  for key in all {
    let mut tag = ""
    for s in 0..<ns {
      if tag == "" {
        match us[s].get(key) {
          Some(v) => tag = v.0
          None => ()
        }
      }
    }
    if !is_diag(tag) {
      continue
    }
    let hb = StringBuilder::new()
    match us[rf].get(key) {
      Some(v) =>
        for k in v.1 {
          match segs[rf].get(k) {
            Some(a) =>
              for p in a {
                hb.write_string(p)
              }
            None => ()
          }
        }
      None => ()
    }
    let heard0 = hb.to_string()
    let heard = if heard0 == "" { "∅" } else { heard0 }
    let preds : Array[String] = []
    for s in 0..<ns {
      match us[s].get(key) {
        Some(v) => {
          let pb = StringBuilder::new()
          for k in v.1 {
            pb.write_string(fold(exp[s][k].p))
          }
          preds.push(pb.to_string())
        }
        None => preds.push("∅")
      }
    }
    let mut same = true
    for p in preds {
      if p != preds[0] {
        same = false
      }
    }
    if same {
      continue
    }
    let stop = fn(x : String) { x == "p" || x == "t" || x == "k" }
    for s in 0..<ns {
      let ok = heard == preds[s] ||
        (
          (tag == "φ" || tag == "θ" || tag == "χ") &&
          stop(preds[s]) &&
          stop(heard)
        )
      let mut idx = -1
      for i, t in tags[s] {
        if t == tag {
          idx = i
        }
      }
      if idx < 0 {
        tags[s].push(tag)
        hits[s].push(0)
        tots[s].push(0)
        idx = tags[s].length() - 1
      }
      hits[s][idx] = @kernel.tally_hit(hits[s][idx], tots[s][idx], ok) // proved: hits <= totals
      tots[s][idx] += 1
      ll[s] += @math.ln(p_heard(tag, preds[s], heard))
    }
  }
  for s in 0..<ns {
    let len = if exp[s].length() > 1 { exp[s].length() } else { 1 }
    ll[s] -= edit_w * costs[s] / len.to_double()
  }
  {
    mode: "aligned",
    probs: softmax(ll, t_aligned),
    loglik: ll,
    evidence_tags: tags,
    evidence_hits: hits,
    evidence_total: tots,
    phones: obs.length(),
  }
}

///|
/// P(recognizer hears `heard` | unit `tag` should sound `pred`): counts (
/// conf_gen.mbt) with back-off tag+pred -> pred -> flat model.
fn p_heard(tag : String, pred : String, heard : String) -> Double {
  let a1 = 2.0
  let a2 = 4.0
  let p0 = if heard == pred { hit } else { (1.0 - hit) / 30.0 }
  let pb = match ct_preds_total.get(pred) {
    Some(n) =>
      (ct_preds.get(pred + "\t" + heard).unwrap_or(0).to_double() + a2 * p0) / (n.to_double() + a2)
    None => p0
  }
  let k = tag + "\t" + pred
  match ct_units_total.get(k) {
    Some(n) => (ct_units.get(k + "\t" + heard).unwrap_or(0).to_double() + a1 * pb) / (n.to_double() + a1)
    None => pb
  }
}

///|
let nl_cache : Array[(Map[String, Double], Map[String, Double])] = []

///|
/// Scheme bigram tables pushed through the learned phone confusions (what the recognizer would output).
fn noisy_lm(s : Int32) -> (Map[String, Double], Map[String, Double]) {
  if nl_cache.length() == 0 {
    let hit_lm = 0.7
    let a = 5.0
    let v = nl_vocab.length().to_double()
    let cf : Map[String, Array[(String, Double)]] = {}
    for e in nl_vocab {
      let n = ct_phones_total.get(e).unwrap_or(0).to_double()
      let d : Array[(String, Double)] = []
      for h in nl_vocab {
        let base = if h == e { hit_lm } else { (1.0 - hit_lm) / v }
        let x = (ct_phones.get(e + "\t" + h).unwrap_or(0).to_double() + a * base) / (n + a)
        if x > 1.0e-4 {
          d.push((h, x))
        }
      }
      cf[e] = d
    }
    for si in 0..<schemes.length() {
      let (big0, _) = lm_tables(si)
      let big : Map[String, Double] = {}
      let uni : Map[String, Double] = {}
      for k, c in big0 {
        let parts = split_spaces(k)
        let e1 = parts[0]
        let e2 = parts[1]
        let c1 = cf.get(e1).unwrap_or([(e1, 1.0)])
        let c2 = cf.get(e2).unwrap_or([(e2, 1.0)])
        for x1 in c1 {
          for x2 in c2 {
            let x = c.to_double() * x1.1 * x2.1
            let key = x1.0 + " " + x2.0
            big[key] = big.get(key).unwrap_or(0.0) + x
            uni[x1.0] = uni.get(x1.0).unwrap_or(0.0) + x
          }
        }
      }
      nl_cache.push((big, uni))
    }
  }
  nl_cache[s]
}

///|
fn lm_tables(s : Int32) -> (Map[String, Int32], Map[String, Int32]) {
  match s {
    0 => (lm_bigram_0, lm_unigram_0)
    1 => (lm_bigram_1, lm_unigram_1)
    2 => (lm_bigram_2, lm_unigram_2)
    3 => (lm_bigram_3, lm_unigram_3)
    _ => (lm_bigram_4, lm_unigram_4)
  }
}

///|
/// Free mode (no text): phone-bigram likelihood under each scheme's recognizer-noisy bigram model.
pub fn detect_free(ipa_s : String) -> Detection {
  let obs : Array[String] = []
  for p in tokenize(ipa_s) {
    if p != "|" {
      obs.push(fold(p))
    }
  }
  let ns = schemes.length()
  let ll : Array[Double] = Array::make(ns, 0.0)
  let vs = nl_vocab.length().to_double()
  for s in 0..<ns {
    let (big, uni) = noisy_lm(s)
    let mut tot = 0.0
    for i in 0..<(obs.length() - 1) {
      let cab = big.get(obs[i] + " " + obs[i + 1]).unwrap_or(0.0)
      let ca = uni.get(obs[i]).unwrap_or(0.0)
      tot += @math.ln((cab + 0.5) / (ca + 0.5 * vs))
    }
    let n = if obs.length() - 1 > 1 { obs.length() - 1 } else { 1 }
    ll[s] = tot / n.to_double() * 20.0
  }
  {
    mode: "free",
    probs: softmax(ll, t_free),
    loglik: ll,
    evidence_tags: [],
    evidence_hits: [],
    evidence_total: [],
    phones: obs.length(),
  }
}

///|
/// Main API: IPA phones (and optionally the Greek text that was read) -> per-scheme probabilities + evidence.
pub fn detect(ipa_s : String, greek_text~ : String = "") -> Detection {
  if split_ws(greek_text).length() > 0 {
    detect_text(ipa_s, greek_text)
  } else {
    detect_free(ipa_s)
  }
}

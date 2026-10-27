// Restart/skip-tolerant alignment of a recognizer's heard phones against
// target grapheme units. Opt-in: ipa(), g2p, and detect never call it.
//
// Substitution cost comes from phone_distance at the gracious goal: accurate 0,
// tolerated 0.5, otherwise 1. The deploy-122 CLASS table is not a second price.
// CLASS priced e/i and r/l at 0.5. This table does not tolerate those pairs
// (e/i is a full step of vowel height; r and l differ in manner), so they
// cost 1. A learner goal changes near-miss credit later, not this cost, so
// the alignment path stays put when a page changes how generously it tints.
//
// The backtrace calls the proved kernel for cursor motion, index checks,
// the end column, skip length, the restart window, the phone-count floor,
// and the 0..=100 score clamp. The cost matrix is f64, which the prover
// does not reason about; cell updates use a strict `<`, matching the
// reference, and the proved integer min/max cover attempt scores.

///|
pub(all) struct AlignParams {
  tau : Double
  ins : Double
  qpk : Double
  inslo : Double
  sublo : Double
  rs : Double
  sk : Double
  back : Int
  floor : Double
  min_frac : Double
  minc : Int
  merge_gap : Int
  win : Double
  hop : Double
  edge : Double
  plain : Bool
  scheme : String
  goal : String
}

///|
pub(all) struct AlignLane {
  tgt : Array[String]
  phones : Array[String]
  ids : Array[Int]
  alts : Array[Array[Int]]
  opt : Array[Bool]
  start : Array[Int]
  wlen : Array[Int]
  w_of : Array[Int]
}

///|
pub(all) struct AlignPost {
  lp : Array[Double]
  frames : Int
  width : Int
  spf : Double
}

///|
pub(all) struct AlignWindow {
  start : Double
  frames : Int
  width : Int
  data : Array[Double]
  spf : Double
}

///|
pub(all) struct HeardToken {
  id : Int
  p : String
  t0 : Int
  t1 : Int
  pk : Double
  fr : Array[Int]
}

///|
pub(all) struct AlignPair {
  h : Int
  j : Int
  att : Int
  shared : Bool
}

///|
pub(all) struct TokenAlign {
  pairs : Array[AlignPair]
  k : Int
  cost : Double
  atts : Int
  heard_n : Int
}

///|
pub(all) struct PhoneHit {
  target : String
  score : Int
  absent : Bool
  optional : Bool
  heard : String
  has_heard : Bool
  h : Int
  t0 : Int
  t1 : Int
  has_span : Bool
  shared : Bool
}

///|
pub(all) struct WordScore {
  i : Int
  score : Int
  attempts : Int
  evidence : Bool
  ph : Array[PhoneHit]
  has_ph : Bool
  lo : Int
  hi : Int
  t0 : Double
  t1 : Double
  has_time : Bool
}

///|
pub(all) struct TakeScore {
  words : Array[WordScore]
  overall : Int
  cursor_word : Int
  last_phone : Int
  attempts : Int
  tokens : Array[HeardToken]
  cost : Double
  align : TokenAlign
}

///|
priv struct AttemptAcc {
  w : Int
  att : Int
  ph : Array[AlignPair?]
}

///|
priv struct AttemptRow {
  w : Int
  att : Int
  ph : Array[PhoneHit]
  credited : Int
  score : Int
  lo : Int
  hi : Int
  t0 : Double
  t1 : Double
  has_time : Bool
}

///|
pub fn align_params_default() -> AlignParams {
  {
    tau: 0.10,
    ins: 0.8,
    qpk: 0.5,
    inslo: 0.55,
    sublo: 0.3,
    rs: 0.9,
    sk: 1.0,
    back: 3,
    floor: 0.03,
    min_frac: 0.5,
    minc: 2,
    merge_gap: 3,
    win: 5.0,
    hop: 2.5,
    edge: 0.5,
    plain: false,
    scheme: "",
    goal: "",
  }
}

///|
pub fn AlignParams::with_plain(self : AlignParams, plain : Bool) -> AlignParams {
  {
    tau: self.tau,
    ins: self.ins,
    qpk: self.qpk,
    inslo: self.inslo,
    sublo: self.sublo,
    rs: self.rs,
    sk: self.sk,
    back: self.back,
    floor: self.floor,
    min_frac: self.min_frac,
    minc: self.minc,
    merge_gap: self.merge_gap,
    win: self.win,
    hop: self.hop,
    edge: self.edge,
    plain,
    scheme: self.scheme,
    goal: self.goal,
  }
}

///|
pub fn AlignParams::with_back(self : AlignParams, back : Int) -> AlignParams {
  {
    tau: self.tau,
    ins: self.ins,
    qpk: self.qpk,
    inslo: self.inslo,
    sublo: self.sublo,
    rs: self.rs,
    sk: self.sk,
    back,
    floor: self.floor,
    min_frac: self.min_frac,
    minc: self.minc,
    merge_gap: self.merge_gap,
    win: self.win,
    hop: self.hop,
    edge: self.edge,
    plain: self.plain,
    scheme: self.scheme,
    goal: self.goal,
  }
}

///|
pub fn AlignParams::with_scheme(self : AlignParams, scheme : String) -> AlignParams {
  {
    tau: self.tau,
    ins: self.ins,
    qpk: self.qpk,
    inslo: self.inslo,
    sublo: self.sublo,
    rs: self.rs,
    sk: self.sk,
    back: self.back,
    floor: self.floor,
    min_frac: self.min_frac,
    minc: self.minc,
    merge_gap: self.merge_gap,
    win: self.win,
    hop: self.hop,
    edge: self.edge,
    plain: self.plain,
    scheme,
    goal: self.goal,
  }
}

///|
pub fn AlignParams::with_goal(self : AlignParams, goal : String) -> AlignParams {
  {
    tau: self.tau,
    ins: self.ins,
    qpk: self.qpk,
    inslo: self.inslo,
    sublo: self.sublo,
    rs: self.rs,
    sk: self.sk,
    back: self.back,
    floor: self.floor,
    min_frac: self.min_frac,
    minc: self.minc,
    merge_gap: self.merge_gap,
    win: self.win,
    hop: self.hop,
    edge: self.edge,
    plain: self.plain,
    scheme: self.scheme,
    goal,
  }
}

///|
fn blank_align() -> TokenAlign {
  { pairs: [], k: 0, cost: 0.0, atts: 0, heard_n: 0 }
}

///|
fn bare_phone(p : String) -> String {
  let mut s = ""
  for c in p {
    if c != 'ː' && c != 'ˑ' {
      s = s + c.to_string()
    }
  }
  s
}

///|
fn is_shared_phone(p : String) -> Bool {
  let b = bare_phone(p)
  b == "a" ||
  b == "e" ||
  b == "i" ||
  b == "o" ||
  b == "u" ||
  b == "y" ||
  b == "ɛ" ||
  b == "ɔ" ||
  b == "ɪ" ||
  b == "ʊ" ||
  b == "s" ||
  b == "z" ||
  b == "n" ||
  b == "m" ||
  b == "l" ||
  b == "r" ||
  b == "ɾ"
}

///|
fn js_round(x : Double) -> Int {
  x.round().to_int()
}

///|
fn clamp_score(score : Int) -> Int {
  @kernel.align_clamp_score(score)
}

///|
fn take_lower(cur : Double, cand : Double) -> Bool {
  @kernel.align_pick_cost(0, 1, cand < cur) == 1
}

///|
/// Substitution cost from `phone_distance` at the gracious goal.
/// The same string is 0, including a phone the feature table does not know.
/// Accurate (including the same phone, ignoring length) is 0.
/// Tolerated is 0.5. Anything else, including e/i and r/l, is 1.
/// A learner goal is not consulted: alignment must not move when the page
/// changes how generously it tints a near miss.
pub fn align_sub_cost(heard : String, target : String, scheme : String) -> Double {
  if heard == target {
    ignore(@kernel.align_sub_bucket(true, false, false))
    return 0.0
  }
  let dist = phone_distance(target, heard, scheme, "gracious")
  let bucket = @kernel.align_sub_bucket(
    false,
    dist.tier == "accurate",
    dist.tier == "tolerated",
  )
  if bucket == 0 {
    0.0
  } else if bucket == 1 {
    0.5
  } else {
    1.0
  }
}

///|
/// Rough breathing [h] is the one phone a page may mark optional.
/// A missing [h] is a cheap deletion; producing it still matches.
/// Aspiration stays inside the phone (`pʰ`), and length is not its own phone.
/// This is an acceptance rule for a learner page. It does not change `ipa()`.
pub fn phone_is_optional(phone : String) -> Bool {
  bare_phone(phone) == "h"
}

///|
/// Default optional flags for a target phone list. See `phone_is_optional`.
pub fn optional_flags(phones : Array[String]) -> Array[Bool] {
  let out = Array::make(phones.length(), false)
  for i in 0..<phones.length() {
    out[i] = phone_is_optional(phones[i])
  }
  out
}

///|
/// Comma-separated phones to a JSON bool array. See `phone_is_optional`.
pub fn optional_phones_json(list : String) -> String {
  let parts = if list == "" {
    []
  } else {
    list.split(",").map(fn(v) { v.to_owned() }).collect()
  }
  let flags = optional_flags(parts)
  let sb = StringBuilder()
  sb.write_char('[')
  for i, flag in flags {
    if i > 0 {
      sb.write_char(',')
    }
    sb.write_string(if flag { "true" } else { "false" })
  }
  sb.write_char(']')
  sb.to_string()
}

///|
fn align_matrix_refused(heard : Int, phones : Int) -> Bool {
  if heard > 20000 || phones > 20000 {
    true
  } else {
    @kernel.align_over_cap(heard, phones)
  }
}

///|
fn phone_name(lane : AlignLane, j : Int) -> String {
  if j >= 0 && j < lane.phones.length() {
    lane.phones[j]
  } else if j >= 0 && j < lane.tgt.length() {
    lane.tgt[j]
  } else {
    ""
  }
}

///|
fn word_of(lane : AlignLane, j : Int) -> Int {
  if j >= 0 && j < lane.w_of.length() {
    lane.w_of[j]
  } else {
    0
  }
}

///|
fn lane_ready(lane : AlignLane) -> AlignLane {
  let n = lane.tgt.length()
  let phones = if lane.phones.length() == n { lane.phones } else { lane.tgt }
  let opt = Array::make(n, false)
  for i in 0..<n {
    if i < lane.opt.length() {
      opt[i] = lane.opt[i]
    }
  }
  let ids = Array::make(n, 0)
  for i in 0..<n {
    if i < lane.ids.length() {
      ids[i] = lane.ids[i]
    }
  }
  let alts : Array[Array[Int]] = []
  for i in 0..<n {
    if i < lane.alts.length() {
      alts.push(lane.alts[i])
    } else {
      alts.push([])
    }
  }
  let w_of = Array::make(n, 0)
  if lane.w_of.length() == n {
    for i in 0..<n {
      w_of[i] = lane.w_of[i]
    }
  } else {
    for w in 0..<lane.start.length() {
      let s = lane.start[w]
      let len = if w < lane.wlen.length() { lane.wlen[w] } else { 0 }
      for k in 0..<len {
        let j = s + k
        if j >= 0 && j < n {
          w_of[j] = w
        }
      }
    }
  }
  let wlen = if lane.wlen.length() == lane.start.length() {
    lane.wlen
  } else {
    let xs = Array::make(lane.start.length(), 0)
    for w in 0..<lane.start.length() {
      if w < lane.wlen.length() {
        xs[w] = lane.wlen[w]
      }
    }
    xs
  }
  { tgt: lane.tgt, phones, ids, alts, opt, start: lane.start, wlen, w_of }
}

///|
/// Build a lane. `w_of` is derived from `start` and `wlen`. Missing `phones`
/// copy `tgt`. Missing `opt` is false. Missing ids are 0.
pub fn align_lane(
  tgt : Array[String],
  phones : Array[String],
  ids : Array[Int],
  alts : Array[Array[Int]],
  opt : Array[Bool],
  start : Array[Int],
  wlen : Array[Int],
) -> AlignLane {
  lane_ready({ tgt, phones, ids, alts, opt, start, wlen, w_of: [] })
}

///|
/// Overlapping windows into one log-posterior matrix. For each frame the
/// window whose centre is nearest wins. The outer `edge` seconds of every
/// window are dropped, except the take's first left edge and last right edge.
/// Uncovered frames are blank (log 0, other columns -30).
pub fn stitch(
  wins : Array[AlignWindow],
  total_sec : Double,
  prm : AlignParams,
) -> AlignPost {
  if wins.length() == 0 || wins[0].spf <= 0.0 || wins[0].width <= 0 {
    return { lp: [], frames: 0, width: 0, spf: 0.0 }
  }
  let width = wins[0].width
  let spf = wins[0].spf
  let mut frames = (total_sec / spf).ceil().to_int() + 2
  if frames < 1 {
    frames = 1
  }
  let lp = Array::make(frames * width, 0.0)
  let has = Array::make(frames, false)
  let dist = Array::make(frames, 1.0e30)
  let last = wins.length() - 1
  for k in 0..<wins.length() {
    let w = wins[k]
    if w.spf <= 0.0 || w.width <= 0 {
      continue
    }
    let dur = w.frames.to_double() * w.spf
    let left = if k == 0 { 0.0 } else { prm.edge }
    let right = if k == last { 0.0 } else { prm.edge }
    for t in 0..<w.frames {
      let tt = t.to_double() * w.spf
      let g = ((w.start + tt) / spf).round().to_int()
      if g >= frames {
        break
      }
      if g < 0 || tt < left || tt >= dur - right {
        continue
      }
      let mid = dur / 2.0
      let d = if tt >= mid { tt - mid } else { mid - tt }
      if d < dist[g] {
        let base = t * w.width
        if base >= 0 && base + w.width <= w.data.length() {
          dist[g] = d
          has[g] = true
          let cols = if w.width < width { w.width } else { width }
          for v in 0..<cols {
            lp[g * width + v] = w.data[base + v]
          }
        }
      }
    }
  }
  for t in 0..<frames {
    if !has[t] {
      for v in 0..<width {
        lp[t * width + v] = if v == 0 { 0.0 } else { -30.0 }
      }
    }
  }
  { lp, frames, width, spf }
}

///|
fn vocab_at(vocab : Array[String], k : Int) -> String {
  if k >= 0 && k < vocab.length() {
    vocab[k]
  } else {
    ""
  }
}

///|
/// Soft decode. A frame is active when its best non-blank phone beats blank
/// or its probability is at least TAU, so a quiet peak still becomes a token.
/// The same phone within MERGE_GAP frames is one token.
pub fn soft_tokens(
  post : AlignPost,
  vocab : Array[String],
  prm : AlignParams,
) -> Array[HeardToken] {
  let out : Array[HeardToken] = []
  let width = post.width
  if width <= 1 || post.frames <= 0 {
    return out
  }
  for t in 0..<post.frames {
    let o = t * width
    if o < 0 || o + width > post.lp.length() {
      break
    }
    let mut k = 0
    let mut m = -1.0e30
    for v in 1..<width {
      let x = post.lp[o + v]
      if x > m {
        m = x
        k = v
      }
    }
    let pk = @math.exp(m)
    let pb = @math.exp(post.lp[o])
    if !(pk >= pb || pk >= prm.tau) {
      continue
    }
    if out.length() > 0 {
      let last_i = out.length() - 1
      let last = out[last_i]
      if last.id == k && t - last.t1 <= prm.merge_gap {
        last.fr.push(t)
        let pk2 = if pk > last.pk { pk } else { last.pk }
        out[last_i] = {
          id: last.id,
          p: last.p,
          t0: last.t0,
          t1: t,
          pk: pk2,
          fr: last.fr,
        }
        continue
      }
    }
    out.push({ id: k, p: vocab_at(vocab, k), t0: t, t1: t, pk, fr: [t] })
  }
  out
}

///|
/// Word-level edit alignment. Moves: match or substitute, delete a target
/// phone, insert a stray token, restart back at most BACK words (RS), and
/// skip whole words (SK each). `plain` turns the restart and skip moves off.
pub fn align_tokens(
  heard : Array[HeardToken],
  lane0 : AlignLane,
  prm : AlignParams,
) -> TokenAlign {
  let lane = lane_ready(lane0)
  let n = lane.tgt.length()
  let h = heard.length()
  let w = lane.start.length()
  let inf = 1.0e9
  // (heard + 1) * (phones + 1) cells, three arrays. Past the cap, or a side
  // over 20_000, return no pairs and the sentinel cost instead of allocating.
  if align_matrix_refused(h, n) {
    return { pairs: [], k: 0, cost: inf, atts: 0, heard_n: h }
  }
  let del = Array::make(n, 1.0)
  for jj in 0..<n {
    if lane.opt[jj] {
      del[jj] = 0.3
    } else {
      let mut q = jj - 1
      while q >= 0 && lane.opt[q] {
        q = q - 1
      }
      if q >= 0 &&
        word_of(lane, q) != word_of(lane, jj) &&
        bare_phone(phone_name(lane, q)) == bare_phone(phone_name(lane, jj)) &&
        is_shared_phone(phone_name(lane, jj)) {
        del[jj] = 0.2
      } else {
        del[jj] = 1.0
      }
    }
  }
  let qf = Array::make(h, 1.0)
  for i in 0..<h {
    let q = if prm.qpk <= 0.0 { 1.0 } else { heard[i].pk / prm.qpk }
    qf[i] = if q < 1.0 { q } else { 1.0 }
  }
  let cache_h : Array[String] = []
  let cache_t : Array[String] = []
  let cache_c : Array[Double] = []
  fn sub_of(hp : String, tp : String) -> Double {
    for i in 0..<cache_h.length() {
      if cache_h[i] == hp && cache_t[i] == tp {
        return cache_c[i]
      }
    }
    let c = align_sub_cost(hp, tp, prm.scheme)
    cache_h.push(hp)
    cache_t.push(tp)
    cache_c.push(c)
    c
  }
  fn sc(hi : Int, jj : Int) -> Double {
    let tp = if jj - 1 >= 0 && jj - 1 < lane.tgt.length() {
      lane.tgt[jj - 1]
    } else {
      ""
    }
    let mut c = sub_of(heard[hi].p, tp)
    if jj - 1 >= 0 && jj - 1 < del.length() && del[jj - 1] < 1.0 && c > 0.0 {
      c = if c < 1.0 { 1.2 } else { 1.5 }
    }
    if c > 0.0 {
      c + prm.sublo * (1.0 - qf[hi])
    } else {
      0.0
    }
  }
  fn ic(hi : Int) -> Double {
    prm.ins * (prm.inslo + (1.0 - prm.inslo) * qf[hi])
  }
  let ws = lane.start
  let we = Array::make(w, 0)
  for i in 0..<w {
    we[i] = ws[i] + lane.wlen[i]
  }
  let d : Array[Array[Double]] = Array::makei(h + 1, fn(_) {
    Array::make(n + 1, inf)
  })
  let bt : Array[Array[Int]] = Array::makei(h + 1, fn(_) { Array::make(n + 1, 0) })
  let srcm : Array[Array[Int]] = Array::makei(h + 1, fn(_) {
    Array::make(n + 1, 0)
  })
  fn chain(ii : Int) -> Unit {
    for jj in 1..<=n {
      let cand = d[ii][jj - 1] + del[jj - 1]
      if take_lower(d[ii][jj], cand) {
        d[ii][jj] = cand
        bt[ii][jj] = 2
      }
    }
  }
  fn jumps(ii : Int) -> Unit {
    for b2 in 0..<w {
      let at = ws[b2]
      if at < 0 || at > n {
        continue
      }
      let mut b = d[ii][at]
      let mut btk = bt[ii][at]
      let mut src = srcm[ii][at]
      if prm.back >= 0 {
        let mut ww = b2
        while @kernel.align_in_back(b2, ww, prm.back, w) {
          let mut jj = ws[ww] + 1
          let hi = we[ww]
          while jj <= hi {
            if jj != at && jj >= 0 && jj <= n {
              let v = d[ii][jj] + prm.rs
              if take_lower(b, v) {
                b = v
                btk = 3
                src = jj
              }
            }
            jj = jj + 1
          }
          ww = ww + 1
        }
      }
      let mut earlier = 0
      while earlier <= b2 - 2 {
        let nskip = @kernel.align_skip_n(b2, earlier)
        let endp = we[earlier]
        if endp >= 0 && endp <= n {
          let v = d[ii][endp] + prm.sk * nskip.to_double()
          if take_lower(b, v) {
            b = v
            btk = 3
            src = endp
          }
        }
        earlier = earlier + 1
      }
      if take_lower(d[ii][at], b) {
        d[ii][at] = b
        bt[ii][at] = btk
        srcm[ii][at] = src
      }
    }
  }
  if n >= 0 {
    d[0][0] = 0.0
  }
  for j in 1..<=n {
    d[0][j] = d[0][j - 1] + del[j - 1]
    bt[0][j] = 2
  }
  if !prm.plain {
    for wi in 1..<w {
      let at = ws[wi]
      let cost = prm.sk * wi.to_double()
      if at >= 0 && at <= n && take_lower(d[0][at], cost) {
        d[0][at] = cost
        bt[0][at] = 4
      }
    }
    chain(0)
  }
  for i in 1..<=h {
    for j in 0..<=n {
      let mut b = d[i - 1][j] + ic(i - 1)
      let mut btk = 1
      if j > 0 {
        let v = d[i - 1][j - 1] + sc(i - 1, j)
        if take_lower(b, v) {
          b = v
          btk = 0
        }
      }
      d[i][j] = b
      bt[i][j] = btk
    }
    chain(i)
    if !prm.plain {
      jumps(i)
      chain(i)
    }
  }
  let mut k = 0
  for j in 1..<=n {
    let cheaper = d[h][j] < d[h][k]
    k = @kernel.align_pick_end(k, j, cheaper, false)
  }
  let m = d[h][k]
  for j in (k + 1)..<=n {
    let near = d[h][j] <= m + 0.5
    k = @kernel.align_pick_end(k, j, false, near)
  }
  let span = if n + 1 >= 1 { n + 1 } else { 1 }
  let mut ci = h
  let mut cj = k
  let mut att = 0
  let mut left = @kernel.align_step_cap(h, n)
  let pairs : Array[AlignPair] = []
  while (ci > 0 || cj > 0) && left > 0 {
    left = left - 1
    if ci < 0 || cj < 0 || ci > h || cj > n {
      break
    }
    let kind = bt[ci][cj]
    if ci == 0 {
      if kind == 4 || cj < 1 {
        break
      }
      let step = @kernel.align_bt_delete(ci, cj, att, span)
      ci = step.ci
      cj = step.cj
      att = step.att
    } else if kind == 0 && @kernel.align_emit_ok(ci, cj, h, n) {
      pairs.push({ h: ci - 1, j: cj - 1, att, shared: false })
      let step = @kernel.align_bt_match(ci, cj, att, span)
      ci = step.ci
      cj = step.cj
      att = step.att
    } else if kind == 1 && ci >= 1 {
      let step = @kernel.align_bt_insert(ci, cj, att, span)
      ci = step.ci
      cj = step.cj
      att = step.att
    } else if kind == 2 && cj >= 1 {
      let step = @kernel.align_bt_delete(ci, cj, att, span)
      ci = step.ci
      cj = step.cj
      att = step.att
    } else if kind == 3 {
      let src = srcm[ci][cj]
      if src >= 0 && src < span {
        let step = @kernel.align_bt_jump(ci, cj, att, src, span)
        ci = step.ci
        cj = step.cj
        att = step.att
      } else {
        break
      }
    } else {
      break
    }
  }
  let by : Array[Array[AlignPair?]] = []
  for p in pairs {
    if p.att < 0 || p.j < 0 || p.j >= n {
      continue
    }
    while by.length() <= p.att {
      by.push(Array::make(n, None))
    }
    by[p.att][p.j] = Some(p)
  }
  let extra : Array[AlignPair] = []
  for p in pairs {
    if p.att < 0 || p.att >= by.length() {
      continue
    }
    let row = by[p.att]
    let mut claimed = false
    let dirs = [-1, 1]
    for di in 0..<2 {
      if claimed {
        break
      }
      let dir = dirs[di]
      let mut q = p.j + dir
      while q >= 0 && q < n && lane.opt[q] {
        let free = match row[q] {
          None => true
          Some(_) => false
        }
        if !free {
          break
        }
        q = q + dir
      }
      if q < 0 || q >= n {
        continue
      }
      let occupied = match row[q] {
        None => false
        Some(_) => true
      }
      if occupied || word_of(lane, q) == word_of(lane, p.j) {
        continue
      }
      if bare_phone(phone_name(lane, q)) != bare_phone(phone_name(lane, p.j)) ||
        !is_shared_phone(phone_name(lane, q)) {
        continue
      }
      let mut dup = false
      for x in pairs {
        if x.att == p.att && x.h == p.h && x.j != p.j {
          dup = true
          break
        }
      }
      if dup {
        continue
      }
      let np : AlignPair = { h: p.h, j: q, att: p.att, shared: true }
      row[q] = Some(np)
      extra.push(np)
      claimed = true
    }
  }
  for e in extra {
    pairs.push(e)
  }
  { pairs, k, cost: m, atts: att + 1, heard_n: h }
}

///|
fn unmatched_hit(target : String, opt : Bool) -> PhoneHit {
  if opt {
    {
      target,
      score: 0,
      absent: true,
      optional: true,
      heard: "",
      has_heard: false,
      h: -1,
      t0: 0,
      t1: 0,
      has_span: false,
      shared: false,
    }
  } else {
    {
      target,
      score: 0,
      absent: false,
      optional: false,
      heard: "",
      has_heard: false,
      h: -1,
      t0: 0,
      t1: 0,
      has_span: false,
      shared: false,
    }
  }
}

///|
fn log_at(post : AlignPost, o : Int, v : Int) -> Double {
  if v >= 0 && v < post.width && o + v >= 0 && o + v < post.lp.length() {
    post.lp[o + v]
  } else {
    -30.0
  }
}

///|
fn phone_score_of(
  post : AlignPost,
  lane : AlignLane,
  vocab : Array[String],
  prm : AlignParams,
  g : HeardToken,
  j : Int,
) -> (Int, String) {
  let mut bestp = 0.0
  let mut mass = 0.0
  let mut hv = 0
  let mut hm = -1.0
  let ids : Array[Int] = []
  if j >= 0 && j < lane.ids.length() {
    ids.push(lane.ids[j])
  }
  if j >= 0 && j < lane.alts.length() {
    for a in lane.alts[j] {
      ids.push(a)
    }
  }
  let t0 = if g.t0 < 0 { 0 } else { g.t0 }
  let mut t1 = g.t1
  if t1 >= post.frames {
    t1 = post.frames - 1
  }
  if post.width > 1 && t1 >= t0 {
    for t in t0..<=t1 {
      let o = t * post.width
      let mut pt = 0.0
      for id in ids {
        let x = @math.exp(log_at(post, o, id))
        if x > pt {
          pt = x
        }
      }
      if pt > bestp {
        bestp = pt
      }
      let nb = 1.0 - @math.exp(log_at(post, o, 0))
      if nb > mass {
        mass = nb
      }
      for v in 1..<post.width {
        let p = @math.exp(log_at(post, o, v))
        if p > hm {
          hm = p
          hv = v
        }
      }
    }
  }
  let raw = if bestp < prm.floor || mass < 1.0e-6 {
    0
  } else {
    let ratio = bestp / mass
    let capped = if ratio > 1.0 { 1.0 } else { ratio }
    js_round(capped * 100.0)
  }
  let heard_name = vocab_at(vocab, hv)
  let mut same_id = false
  if j >= 0 && j < lane.ids.length() && hv == lane.ids[j] {
    same_id = true
  }
  if j >= 0 && j < lane.alts.length() {
    for a in lane.alts[j] {
      if hv == a {
        same_id = true
      }
    }
  }
  // Exact or lane-alternate mass keeps the posterior score. A different phone
  // below that floor takes hearing_credit, so a tolerated near miss is not a 0.
  // The goal changes that credit. It does not change align_sub_cost.
  let score = if raw > 0 || same_id || heard_name == "" {
    raw
  } else {
    let w = if hm < 0.0 { g.pk } else { hm }
    near_miss_score(phone_name(lane, j), heard_name, w, prm.scheme, prm.goal)
  }
  (clamp_score(score), heard_name)
}

///|
fn near_miss_score(
  target : String,
  heard : String,
  weight : Double,
  scheme : String,
  goal : String,
) -> Int {
  if target == "" || heard == "" {
    return 0
  }
  let w = if weight < 0.0 {
    0.0
  } else if weight > 1.0 {
    1.0
  } else {
    weight
  }
  let credit = hearing_credit(target, [(heard, w)], scheme, goal)
  if credit.combined <= 0.0 {
    0
  } else {
    clamp_score(js_round(credit.combined * 100.0))
  }
}

///|
fn phones_needed(n : Int, prm : AlignParams) -> Int {
  if prm.min_frac == 0.5 && prm.minc >= 1 {
    @kernel.align_phones_needed(n, prm.minc)
  } else if n <= 1 {
    1
  } else {
    let c = (prm.min_frac * n.to_double()).ceil().to_int()
    if c > prm.minc { c } else { prm.minc }
  }
}

///|
/// Credit each word from its best coherent attempt. A phone scores
/// round(100 * min(1, best posterior / non-blank mass)) when the target
/// (or a lane alternate) reaches FLOOR inside the token. Otherwise a different
/// heard phone scores round(100 * hearing_credit) at `params.goal` (empty goal
/// is gracious). An abstaining phone that was not heard is left out of the mean.
/// `overall` is the mean of the word scores. Pass either number divided by 100
/// to `credit_level` for the tint. The alignment path does not use the goal.
pub fn score_words(
  post : AlignPost,
  lane0 : AlignLane,
  al : TokenAlign,
  heard : Array[HeardToken],
  vocab : Array[String],
  prm : AlignParams,
) -> TakeScore {
  let lane = lane_ready(lane0)
  let n = lane.tgt.length()
  let wcount = lane.start.length()
  let accs : Array[AttemptAcc] = []
  for pr in al.pairs {
    if pr.j < 0 || pr.j >= n {
      continue
    }
    let w = word_of(lane, pr.j)
    let mut found = -1
    for i in 0..<accs.length() {
      if accs[i].w == w && accs[i].att == pr.att {
        found = i
        break
      }
    }
    if found < 0 {
      let ph : Array[AlignPair?] = Array::make(n, None)
      ph[pr.j] = Some(pr)
      accs.push({ w, att: pr.att, ph })
    } else {
      accs[found].ph[pr.j] = Some(pr)
    }
  }
  let attempts : Array[AttemptRow] = []
  for a in accs {
    let w = a.w
    if w < 0 || w >= wcount {
      continue
    }
    let wlen = lane.wlen[w]
    let ph : Array[PhoneHit] = []
    let hs : Array[Int] = []
    for kk in 0..<wlen {
      let j = lane.start[w] + kk
      let target = phone_name(lane, j)
      let opt = j >= 0 && j < lane.opt.length() && lane.opt[j]
      if j < 0 || j >= n {
        ph.push(unmatched_hit(target, opt))
        continue
      }
      match a.ph[j] {
        None => ph.push(unmatched_hit(target, opt))
        Some(pr) =>
          if pr.h < 0 || pr.h >= heard.length() {
            ph.push(unmatched_hit(target, opt))
          } else {
            let (score, heard_name) = phone_score_of(
              post,
              lane,
              vocab,
              prm,
              heard[pr.h],
              j,
            )
            hs.push(pr.h)
            ph.push({
              target,
              score,
              absent: false,
              optional: false,
              heard: heard_name,
              has_heard: true,
              h: pr.h,
              t0: heard[pr.h].t0,
              t1: heard[pr.h].t1,
              has_span: true,
              shared: pr.shared,
            })
          }
      }
    }
    let mut sum = 0
    let mut nph = 0
    let mut credited = 0
    for p in ph {
      if p.absent && p.optional {
        continue
      }
      sum = sum + p.score
      nph = nph + 1
      if p.score > 0 {
        credited = credited + 1
      }
    }
    let denom = if nph < 1 { 1 } else { nph }
    let mean = sum.to_double() / denom.to_double()
    let need = phones_needed(nph, prm)
    let raw = if credited >= need { js_round(mean) } else { 0 }
    let mut lo = -1
    let mut hi = -1
    for x in hs {
      if lo < 0 || x < lo {
        lo = x
      }
      if x > hi {
        hi = x
      }
    }
    let mut ft0 = 0
    let mut ft1 = 0
    let mut has_time = false
    for p in ph {
      if p.has_span {
        if !has_time || p.t0 < ft0 {
          ft0 = p.t0
        }
        if !has_time || p.t1 > ft1 {
          ft1 = p.t1
        }
        has_time = true
      }
    }
    attempts.push({
      w,
      att: a.att,
      ph,
      credited,
      score: clamp_score(raw),
      lo,
      hi,
      t0: if has_time { ft0.to_double() * post.spf } else { 0.0 },
      t1: if has_time { (ft1 + 1).to_double() * post.spf } else { 0.0 },
      has_time,
    })
  }
  let mut cursor_word = -1
  let mut last_phone = -1
  for p in al.pairs {
    if p.j > last_phone {
      last_phone = p.j
    }
    let ww = word_of(lane, p.j)
    if ww > cursor_word {
      cursor_word = ww
    }
  }
  let words : Array[WordScore] = []
  for w in 0..<wcount {
    let mut best = -1
    let mut best_score = 0
    let mut natt = 0
    for i in 0..<attempts.length() {
      if attempts[i].w != w {
        continue
      }
      natt = natt + 1
      if best < 0 {
        best = i
        best_score = attempts[i].score
      } else {
        let chosen = @kernel.align_max_score(best_score, attempts[i].score)
        let better = attempts[i].score > best_score ||
          (attempts[i].score == best_score && attempts[i].att < attempts[best].att)
        if attempts[i].score == chosen && better {
          best = i
          best_score = chosen
        } else {
          best_score = chosen
        }
      }
    }
    if best >= 0 {
      let b = attempts[best]
      words.push({
        i: w,
        score: clamp_score(b.score),
        attempts: natt,
        evidence: b.credited > 0,
        ph: b.ph,
        has_ph: true,
        lo: b.lo,
        hi: b.hi,
        t0: b.t0,
        t1: b.t1,
        has_time: b.has_time,
      })
    } else {
      words.push({
        i: w,
        score: 0,
        attempts: 0,
        evidence: false,
        ph: [],
        has_ph: false,
        lo: -1,
        hi: -1,
        t0: 0.0,
        t1: 0.0,
        has_time: false,
      })
    }
  }
  let mut sum = 0
  for w in words {
    sum = sum + w.score
  }
  let denom = if words.length() < 1 { 1 } else { words.length() }
  let overall = clamp_score(js_round(sum.to_double() / denom.to_double()))
  {
    words,
    overall,
    cursor_word,
    last_phone,
    attempts: attempts.length(),
    tokens: [],
    cost: al.cost,
    align: al,
  }
}

///|
/// Soft-decode, align, and score one take.
pub fn score_take(
  post : AlignPost,
  lane : AlignLane,
  vocab : Array[String],
  prm : AlignParams,
) -> TakeScore {
  let tokens = soft_tokens(post, vocab, prm)
  let al = align_tokens(tokens, lane, prm)
  let r = score_words(post, lane, al, tokens, vocab, prm)
  {
    words: r.words,
    overall: r.overall,
    cursor_word: r.cursor_word,
    last_phone: r.last_phone,
    attempts: r.attempts,
    tokens,
    cost: al.cost,
    align: al,
  }
}

///|
fn empty_take() -> TakeScore {
  {
    words: [],
    overall: 0,
    cursor_word: -1,
    last_phone: -1,
    attempts: 0,
    tokens: [],
    cost: 0.0,
    align: blank_align(),
  }
}


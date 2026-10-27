// Restart/skip-tolerant alignment of a recognizer's heard phones against
// target grapheme units. Opt-in: ipa(), g2p, and detect never call it.
//
// Substitution cost comes from phone_distance at the gracious goal: accurate 0,
// tolerated 0.5, otherwise 1. The deploy-122 CLASS table is not a second price.
// CLASS priced e/i and r/l at 0.5. This table does not tolerate those pairs
// (e/i is a full step of vowel height; r and l differ in manner), so they
// cost 1. `params.sub` can replace that price for a pair; the default table
// stays. A learner goal changes near-miss credit later, not this cost, so
// the alignment path stays put when a page changes how generously it tints.
// `near_miss: false` or `goal: "exact"` turns that credit off.
//
// The backtrace calls the proved kernel for cursor motion, index checks,
// the end column, skip length, the restart window, the phone-count floor,
// and the 0..=100 score clamp. The cost matrix is f64, which the prover
// does not reason about; cell updates use a strict `<`, matching the
// reference, and the proved integer min/max cover attempt scores.

///|
/// One substitution-price override. `a` and `b` match in either order.
/// An identical phone string stays 0 and is not overridden.
pub(all) struct SubOverride {
  a : String
  b : String
  cost : Double
}

///|
pub(all) struct AlignParams {
  tau : Double
  ins : Double
  qpk : Double
  inslo : Double
  sublo : Double
  rs : Double
  sk : Double
  back : Int32
  floor : Double
  min_frac : Double
  minc : Int32
  merge_gap : Int32
  win : Double
  hop : Double
  edge : Double
  plain : Bool
  scheme : String
  goal : String
  near_miss : Bool
  sub : Array[SubOverride]
}

///|
pub(all) struct AlignLane {
  tgt : Array[String]
  phones : Array[String]
  ids : Array[Int32]
  alts : Array[Array[Int32]]
  opt : Array[Bool]
  start : Array[Int32]
  wlen : Array[Int32]
  w_of : Array[Int32]
}

///|
pub(all) struct AlignPost {
  lp : Array[Double]
  frames : Int32
  width : Int32
  spf : Double
}

///|
pub(all) struct AlignWindow {
  start : Double
  frames : Int32
  width : Int32
  data : Array[Double]
  spf : Double
}

///|
pub(all) struct HeardToken {
  id : Int32
  p : String
  t0 : Int32
  t1 : Int32
  pk : Double
  fr : Array[Int32]
}

///|
pub(all) struct AlignPair {
  h : Int32
  j : Int32
  att : Int32
  shared : Bool
}

///|
pub(all) struct TokenAlign {
  pairs : Array[AlignPair]
  k : Int32
  cost : Double
  atts : Int32
  heard_n : Int32
}

///|
pub(all) struct PhoneHit {
  target : String
  score : Int32
  absent : Bool
  optional : Bool
  heard : String
  has_heard : Bool
  h : Int32
  t0 : Int32
  t1 : Int32
  has_span : Bool
  shared : Bool
}

///|
pub(all) struct WordScore {
  i : Int32
  score : Int32
  attempts : Int32
  evidence : Bool
  ph : Array[PhoneHit]
  has_ph : Bool
  lo : Int32
  hi : Int32
  t0 : Double
  t1 : Double
  has_time : Bool
}

///|
pub(all) struct TakeScore {
  words : Array[WordScore]
  overall : Int32
  cursor_word : Int32
  last_phone : Int32
  attempts : Int32
  tokens : Array[HeardToken]
  cost : Double
  align : TokenAlign
  attempt_credit : Array[AttemptCredit]
}

///|
/// One coherent attempt already scored inside `score_words`.
/// `w` is the word, `att` the attempt index, `credited` how many phones
/// cleared 0, and `score` the attempt's word score.
pub(all) struct AttemptCredit {
  w : Int32
  att : Int32
  credited : Int32
  score : Int32
}

///|
/// One posterior, soft-decoded once, then aligned to several lanes.
pub(all) struct LaneBatch {
  tokens : Array[HeardToken]
  takes : Array[TakeScore]
}

///|
priv struct AttemptAcc {
  w : Int32
  att : Int32
  ph : Array[AlignPair?]
}

///|
priv struct AttemptRow {
  w : Int32
  att : Int32
  ph : Array[PhoneHit]
  credited : Int32
  score : Int32
  lo : Int32
  hi : Int32
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
    near_miss: true,
    sub: [],
  }
}

///|
pub fn AlignParams::with_plain(self : AlignParams, plain : Bool) -> AlignParams {
  { ..self, plain, }
}

///|
pub fn AlignParams::with_back(self : AlignParams, back : Int32) -> AlignParams {
  { ..self, back, }
}

///|
pub fn AlignParams::with_scheme(
  self : AlignParams,
  scheme : String,
) -> AlignParams {
  { ..self, scheme, }
}

///|
pub fn AlignParams::with_goal(self : AlignParams, goal : String) -> AlignParams {
  { ..self, goal, }
}

///|
/// `false` keeps only the posterior share on the target or a lane alternate.
pub fn AlignParams::with_near_miss(
  self : AlignParams,
  near_miss : Bool,
) -> AlignParams {
  { ..self, near_miss, }
}

///|
/// Replace the table price for the listed pairs. See `align_sub_cost_with`.
pub fn AlignParams::with_sub(
  self : AlignParams,
  sub : Array[SubOverride],
) -> AlignParams {
  { ..self, sub, }
}

///|
fn blank_align() -> TokenAlign {
  { pairs: [], k: 0, cost: 0.0, atts: 0, heard_n: 0, }
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
fn js_round(x : Double) -> Int32 {
  x.round().to_int()
}

///|
fn clamp_score(score : Int32) -> Int32 {
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
pub fn align_sub_cost(
  heard : String,
  target : String,
  scheme : String,
) -> Double {
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
/// Same as `align_sub_cost`, unless `over` names the pair.
/// The two phone strings match in either order. The same string stays 0:
/// an override cannot charge for an identical phone. The default table still
/// prices e/i and r/l at 1; a page that wants the old 0.5 passes that pair.
pub fn align_sub_cost_with(
  heard : String,
  target : String,
  scheme : String,
  over : Array[SubOverride],
) -> Double {
  if heard == target {
    ignore(@kernel.align_sub_bucket(true, false, false))
    ignore(@kernel.align_pick_price(false, 0, 0))
    return 0.0
  }
  let mut found = false
  let mut price = 0.0
  for row in over {
    if (row.a == heard && row.b == target) ||
      (row.a == target && row.b == heard) {
      found = true
      price = row.cost
      break
    }
  }
  if @kernel.align_pick_price(found, 1, 0) == 1 {
    price
  } else {
    align_sub_cost(heard, target, scheme)
  }
}

///|
fn goal_is_exact(goal : String) -> Bool {
  goal == "exact"
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
fn align_matrix_refused(heard : Int32, phones : Int32) -> Bool {
  if heard > 20000 || phones > 20000 {
    true
  } else {
    @kernel.align_over_cap(heard, phones)
  }
}

///|
fn phone_name(lane : AlignLane, j : Int32) -> String {
  if j >= 0 && j < lane.phones.length() {
    lane.phones[j]
  } else if j >= 0 && j < lane.tgt.length() {
    lane.tgt[j]
  } else {
    ""
  }
}

///|
fn word_of(lane : AlignLane, j : Int32) -> Int32 {
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
  let alts : Array[Array[Int32]] = []
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
  { tgt: lane.tgt, phones, ids, alts, opt, start: lane.start, wlen, w_of, }
}

///|
/// Build a lane. `w_of` is derived from `start` and `wlen`. Missing `phones`
/// copy `tgt`. Missing `opt` is false. Missing ids are 0.
pub fn align_lane(
  tgt : Array[String],
  phones : Array[String],
  ids : Array[Int32],
  alts : Array[Array[Int32]],
  opt : Array[Bool],
  start : Array[Int32],
  wlen : Array[Int32],
) -> AlignLane {
  lane_ready({ tgt, phones, ids, alts, opt, start, wlen, w_of: [], })
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
    return { lp: [], frames: 0, width: 0, spf: 0.0, }
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
  { lp, frames, width, spf, }
}

///|
fn vocab_at(vocab : Array[String], k : Int32) -> String {
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
    out.push({ id: k, p: vocab_at(vocab, k), t0: t, t1: t, pk, fr: [t], })
  }
  out
}

///|
fn target_post_milli(post : AlignPost?, tok : HeardToken, id : Int32) -> Int32 {
  match post {
    None => js_round(tok.pk * 1000.0)
    Some(p) => {
      if id <= 0 || p.width <= 1 {
        return js_round(tok.pk * 1000.0)
      }
      let mut best = 0.0
      let t0 = if tok.t0 < 0 { 0 } else { tok.t0 }
      let mut t1 = tok.t1
      if t1 >= p.frames {
        t1 = p.frames - 1
      }
      if t1 >= t0 {
        for t in t0..<=t1 {
          let o = t * p.width
          let x = @math.exp(log_at(p, o, id))
          if x > best {
            best = x
          }
        }
      }
      js_round(best * 1000.0)
    }
  }
}

///|
/// Prefer `cand_h` over `cur_h` for target phone `j` when the path costs match.
fn better_token(
  heard : Array[HeardToken],
  post : AlignPost?,
  lane : AlignLane,
  cand_h : Int32,
  cur_h : Int32,
  j : Int32,
) -> Bool {
  if cand_h < 0 ||
    cur_h < 0 ||
    cand_h >= heard.length() ||
    cur_h >= heard.length() {
    return false
  }
  let target = if j >= 0 && j < lane.tgt.length() { lane.tgt[j] } else { "" }
  let id = if j >= 0 && j < lane.ids.length() { lane.ids[j] } else { 0 }
  @kernel.align_tie_take(
    heard[cur_h].p == target,
    heard[cand_h].p == target,
    target_post_milli(post, heard[cur_h], id),
    target_post_milli(post, heard[cand_h], id),
  )
}

///|
/// Word-level edit alignment. Moves: match or substitute, delete a target
/// phone, insert a stray token, restart back at most BACK words (RS), and
/// skip whole words (SK each). `plain` turns the restart and skip moves off.
/// When two heard tokens can take the same target at the same cost, the
/// identical string wins, then the higher posterior on that target.
pub fn align_tokens(
  heard : Array[HeardToken],
  lane0 : AlignLane,
  prm : AlignParams,
) -> TokenAlign {
  align_tokens_at(heard, lane0, prm, None)
}

///|
fn align_tokens_at(
  heard : Array[HeardToken],
  lane0 : AlignLane,
  prm : AlignParams,
  post : AlignPost?,
) -> TokenAlign {
  let lane = lane_ready(lane0)
  let n = lane.tgt.length()
  let h = heard.length()
  let w = lane.start.length()
  let inf = 1.0e9
  // (heard + 1) * (phones + 1) cells, three arrays. Past the cap, or a side
  // over 20_000, return no pairs and the sentinel cost instead of allocating.
  if align_matrix_refused(h, n) {
    return { pairs: [], k: 0, cost: inf, atts: 0, heard_n: h, }
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
    let c = align_sub_cost_with(hp, tp, prm.scheme, prm.sub)
    cache_h.push(hp)
    cache_t.push(tp)
    cache_c.push(c)
    c
  }
  fn sc(hi : Int32, jj : Int32) -> Double {
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
  fn ic(hi : Int32) -> Double {
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
  let bt : Array[Array[Int32]] = Array::makei(h + 1, fn(_) {
    Array::make(n + 1, 0)
  })
  let srcm : Array[Array[Int32]] = Array::makei(h + 1, fn(_) {
    Array::make(n + 1, 0)
  })
  // Heard index matched to phone j - 1, or -1 when that phone was not matched.
  // 0 is a real token, so the fill value has to be -1.
  let mh : Array[Array[Int32]] = Array::makei(h + 1, fn(_) {
    Array::make(n + 1, -1)
  })
  fn chain(ii : Int32) -> Unit {
    for jj in 1..<=n {
      let cand = d[ii][jj - 1] + del[jj - 1]
      if take_lower(d[ii][jj], cand) {
        d[ii][jj] = cand
        bt[ii][jj] = 2
        mh[ii][jj] = -1
      }
    }
  }
  fn jumps(ii : Int32) -> Unit {
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
        mh[ii][at] = -1
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
      let mut bm = if j == 0 { -1 } else { mh[i - 1][j] }
      if j > 0 {
        let v = d[i - 1][j - 1] + sc(i - 1, j)
        let cand_h = i - 1
        if take_lower(b, v) {
          b = v
          btk = 0
          bm = cand_h
        } else if v == b &&
          bm >= 0 &&
          cand_h != bm &&
          better_token(heard, post, lane, cand_h, bm, j - 1) {
          btk = 0
          bm = cand_h
        }
      }
      d[i][j] = b
      bt[i][j] = btk
      mh[i][j] = bm
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
      pairs.push({ h: ci - 1, j: cj - 1, att, shared: false, })
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
      let np : AlignPair = { h: p.h, j: q, att: p.att, shared: true, }
      row[q] = Some(np)
      extra.push(np)
      claimed = true
    }
  }
  for e in extra {
    pairs.push(e)
  }
  { pairs, k, cost: m, atts: att + 1, heard_n: h, }
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
fn log_at(post : AlignPost, o : Int32, v : Int32) -> Double {
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
  j : Int32,
) -> (Int32, String) {
  let mut bestp = 0.0
  let mut mass = 0.0
  let mut hv = 0
  let mut hm = -1.0
  let ids : Array[Int32] = []
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
  // below that floor takes hearing_credit, unless near-miss credit is off
  // (`near_miss: false` or `goal: "exact"`). The goal does not change the path.
  let use_near = @kernel.align_near_miss_on(
    prm.near_miss,
    goal_is_exact(prm.goal),
  )
  let score = if use_near == false {
    raw
  } else if raw > 0 || same_id || heard_name == "" {
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
) -> Int32 {
  if target == "" || heard == "" {
    return 0
  }
  let w = if weight < 0.0 { 0.0 } else if weight > 1.0 { 1.0 } else { weight }
  let credit = hearing_credit(target, [(heard, w)], scheme, goal)
  if credit.combined <= 0.0 {
    0
  } else {
    clamp_score(js_round(credit.combined * 100.0))
  }
}

///|
fn phones_needed(n : Int32, prm : AlignParams) -> Int32 {
  if prm.min_frac == 0.5 && prm.minc >= 1 {
    @kernel.align_phones_needed(n, prm.minc)
  } else if n <= 1 {
    1
  } else {
    let c = (prm.min_frac * n.to_double()).ceil().to_int()
    if c > prm.minc {
      c
    } else {
      prm.minc
    }
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
      accs.push({ w, att: pr.att, ph, })
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
    let hs : Array[Int32] = []
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
      t0: if has_time {
        ft0.to_double() * post.spf
      } else {
        0.0
      },
      t1: if has_time {
        (ft1 + 1).to_double() * post.spf
      } else {
        0.0
      },
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
          (
            attempts[i].score == best_score &&
            attempts[i].att < attempts[best].att
          )
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
  let attempt_credit : Array[AttemptCredit] = []
  for a in attempts {
    attempt_credit.push({
      w: a.w,
      att: a.att,
      credited: a.credited,
      score: a.score,
    })
  }
  {
    words,
    overall,
    cursor_word,
    last_phone,
    attempts: attempts.length(),
    tokens: [],
    cost: al.cost,
    align: al,
    attempt_credit,
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
  let al = align_tokens_at(tokens, lane, prm, Some(post))
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
    attempt_credit: r.attempt_credit,
  }
}

///|
/// Soft-decode once, then align and score each lane. Tokenisation uses `prm`
/// (`TAU`, `MERGE_GAP`). Each lane uses `lane_prm` when that slot is present,
/// otherwise `prm`, so scheme, goal, near-miss, and substitution overrides can
/// differ while the heard tokens stay shared.
pub fn score_lanes(
  post : AlignPost,
  lanes : Array[AlignLane],
  vocab : Array[String],
  prm : AlignParams,
  lane_prm : Array[AlignParams],
) -> LaneBatch {
  let tokens = soft_tokens(post, vocab, prm)
  let takes : Array[TakeScore] = []
  for i, lane in lanes {
    let one = if i < lane_prm.length() { lane_prm[i] } else { prm }
    let al = align_tokens_at(tokens, lane, one, Some(post))
    let r = score_words(post, lane, al, tokens, vocab, one)
    takes.push({
      words: r.words,
      overall: r.overall,
      cursor_word: r.cursor_word,
      last_phone: r.last_phone,
      attempts: r.attempts,
      tokens: [],
      cost: al.cost,
      align: al,
      attempt_credit: r.attempt_credit,
    })
  }
  { tokens, takes, }
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
    attempt_credit: [],
  }
}

///|
priv struct PostSlot {
  mut lp : Array[Double]
  mut frames : Int32
  mut width : Int32
  mut spf : Double
  mut ready : Bool
}

///|
let post_slot : PostSlot = {
  lp: [],
  frames: 0,
  width: 0,
  spf: 0.0,
  ready: false,
}

///|
/// Remember one log-posterior matrix. Later `align_phones_json` calls with
/// `postRef: true` read it and do not parse `lp`. The array is kept by
/// reference. A Float32Array from JavaScript is accepted.
pub fn align_set_post(
  lp : Array[Double],
  frames : Int32,
  width : Int32,
  spf : Double,
) -> Unit {
  post_slot.lp = lp
  post_slot.frames = frames
  post_slot.width = width
  post_slot.spf = spf
  post_slot.ready = true
}

///|
pub fn align_clear_post() -> Unit {
  post_slot.lp = []
  post_slot.frames = 0
  post_slot.width = 0
  post_slot.spf = 0.0
  post_slot.ready = false
}

///|
pub fn align_stored_post() -> AlignPost? {
  if post_slot.ready {
    Some({
      lp: post_slot.lp,
      frames: post_slot.frames,
      width: post_slot.width,
      spf: post_slot.spf,
    })
  } else {
    None
  }
}

///|
fn b64_digit(c : Char) -> Int32 {
  if c >= 'A' && c <= 'Z' {
    c.to_int() - 'A'.to_int()
  } else if c >= 'a' && c <= 'z' {
    c.to_int() - 'a'.to_int() + 26
  } else if c >= '0' && c <= '9' {
    c.to_int() - '0'.to_int() + 52
  } else if c == '+' || c == '-' {
    62
  } else if c == '/' || c == '_' {
    63
  } else {
    -1
  }
}

///|
/// Little-endian float32 values packed as base64. Whitespace is ignored.
/// A bad character stops the decode and returns the floats already accepted.
pub fn align_f32le_b64(s : String) -> Array[Double] {
  let cs = s.to_array()
  let packed : Array[Char] = []
  for c in cs {
    if c != ' ' && c != '\n' && c != '\r' && c != '\t' {
      packed.push(c)
    }
  }
  let bytes : Array[Int32] = []
  let mut i = 0
  while i + 4 <= packed.length() {
    let c0 = b64_digit(packed[i])
    let c1 = b64_digit(packed[i + 1])
    let pad2 = packed[i + 2] == '='
    let pad3 = packed[i + 3] == '='
    let c2 = if pad2 { 0 } else { b64_digit(packed[i + 2]) }
    let c3 = if pad3 { 0 } else { b64_digit(packed[i + 3]) }
    if c0 < 0 || c1 < 0 || c2 < 0 || c3 < 0 {
      break
    }
    let n = (c0 << 18) | (c1 << 12) | (c2 << 6) | c3
    bytes.push((n >> 16) & 255)
    if !pad2 {
      bytes.push((n >> 8) & 255)
    }
    if !pad3 {
      bytes.push(n & 255)
    }
    i = i + 4
  }
  let nfloat = bytes.length() / 4
  let out = Array::make(nfloat, 0.0)
  for k in 0..<nfloat {
    let b0 = bytes[k * 4]
    let b1 = bytes[k * 4 + 1]
    let b2 = bytes[k * 4 + 2]
    let b3 = bytes[k * 4 + 3]
    let bits = b0 | (b1 << 8) | (b2 << 16) | (b3 << 24)
    out[k] = Float::reinterpret_from_uint(bits.reinterpret_as_uint()).to_double()
  }
  out
}

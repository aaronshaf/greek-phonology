// Port of the restart-tolerant alignment cases. Posteriors are synthetic.
// Scores follow the reference: a clean phone at confidence 0.8 is at least 80,
// a skipped word is 0, and one phone of a two-phone word is not enough.

///|
let john : String = "ἐν ἀρχῇ ἦν ὁ λόγος"

///|
fn close_d(a : Double, b : Double) -> Bool {
  let d = if a > b { a - b } else { b - a }
  d < 0.000000001
}

///|
fn bare(p : String) -> String {
  let mut s = ""
  for c in p {
    if c != 'ː' && c != 'ˑ' {
      s = s + c.to_string()
    }
  }
  s
}

///|
fn index_of(vocab : Array[String], p : String) -> Int {
  for i in 0..<vocab.length() {
    if vocab[i] == p {
      return i
    }
  }
  0
}

///|
fn push_unique(vocab : Array[String], p : String) -> Unit {
  if p == "" || p == "_" {
    return
  }
  for x in vocab {
    if x == p {
      return
    }
  }
  vocab.push(p)
}

///|
fn vocab_with(phones : Array[String], extra : Array[String]) -> Array[String] {
  let vocab : Array[String] = [""]
  for p in phones {
    push_unique(vocab, p)
  }
  for p in extra {
    push_unique(vocab, p)
  }
  vocab
}

///|
let extra_phones : Array[String] = [
  "a", "e", "ɛ", "i", "o", "u", "n", "r", "l", "s", "k", "kʰ", "ɣ", "m", "ɸ", "p",
  "t", "b", "d",
]

///|
fn lane_phrase() -> @lib.AlignLane {
  let ws = @lib.g2p_words(john, "koine")
  let tgt : Array[String] = []
  let start : Array[Int] = []
  let wlen : Array[Int] = []
  for w in ws {
    if w.phones.length() == 0 {
      continue
    }
    start.push(tgt.length())
    wlen.push(w.phones.length())
    for p in w.phones {
      tgt.push(bare(p))
    }
  }
  let vocab = vocab_with(tgt, extra_phones)
  let ids = tgt.map(fn(p) { index_of(vocab, p) })
  let alts : Array[Array[Int]] = []
  let opt : Array[Bool] = []
  for _ in tgt {
    alts.push([])
    opt.push(false)
  }
  @lib.align_lane(tgt, tgt, ids, alts, opt, start, wlen)
}

///|
fn phrase_vocab(lane : @lib.AlignLane) -> Array[String] {
  vocab_with(lane.tgt, extra_phones)
}

///|
fn lane_custom(words : Array[Array[String]], opt_at : Array[Int]) -> @lib.AlignLane {
  let tgt : Array[String] = []
  let opt : Array[Bool] = []
  let start : Array[Int] = []
  let wlen : Array[Int] = []
  for w in words {
    start.push(tgt.length())
    wlen.push(w.length())
    for p in w {
      let j = tgt.length()
      tgt.push(p)
      let mut is_opt = false
      for a in opt_at {
        if a == j {
          is_opt = true
        }
      }
      opt.push(is_opt)
    }
  }
  let vocab = vocab_with(tgt, extra_phones)
  let ids = tgt.map(fn(p) { index_of(vocab, p) })
  let alts : Array[Array[Int]] = []
  for _ in tgt {
    alts.push([])
  }
  @lib.align_lane(tgt, tgt, ids, alts, opt, start, wlen)
}

///|
fn blank_row(vocab : Array[String]) -> Array[Double] {
  let v = vocab.length()
  let rest = @math.ln(0.01 / (v - 1).to_double())
  let r = Array::make(v, rest)
  r[0] = @math.ln(0.99)
  r
}

///|
fn peak_row(vocab : Array[String], p : String, conf : Double) -> Array[Double] {
  let v = vocab.length()
  let rest = @math.ln((1.0 - conf) / (v - 1).to_double())
  let r = Array::make(v, rest)
  r[index_of(vocab, p)] = @math.ln(conf)
  r
}

///|
fn post_of(
  vocab : Array[String],
  tokens : Array[String],
  conf : Double,
) -> @lib.AlignPost {
  let rows : Array[Array[Double]] = []
  for t in tokens {
    if t == "_" {
      for _ in 0..<5 {
        rows.push(blank_row(vocab))
      }
    } else {
      rows.push(peak_row(vocab, t, conf))
      rows.push(blank_row(vocab))
      rows.push(blank_row(vocab))
    }
  }
  let v = vocab.length()
  let lp = Array::make(rows.length() * v, 0.0)
  for i, r in rows {
    for j in 0..<v {
      lp[i * v + j] = r[j]
    }
  }
  { lp, frames: rows.length(), width: v, spf: 0.02 }
}

///|
fn quiet_row(vocab : Array[String], p : String) -> Array[Double] {
  let v = vocab.length()
  let rest = 0.05 / (v - 2).to_double()
  let r = Array::make(v, @math.ln(rest))
  r[0] = @math.ln(0.60)
  r[index_of(vocab, p)] = @math.ln(0.35)
  r
}

///|
fn post_quiet(vocab : Array[String], tokens : Array[String]) -> @lib.AlignPost {
  let rows : Array[Array[Double]] = []
  for t in tokens {
    if t == "_" {
      for _ in 0..<5 {
        rows.push(blank_row(vocab))
      }
    } else {
      rows.push(quiet_row(vocab, t))
      rows.push(blank_row(vocab))
      rows.push(blank_row(vocab))
    }
  }
  let v = vocab.length()
  let lp = Array::make(rows.length() * v, 0.0)
  for i, r in rows {
    for j in 0..<v {
      lp[i * v + j] = r[j]
    }
  }
  { lp, frames: rows.length(), width: v, spf: 0.02 }
}

///|
fn seq_of(lane : @lib.AlignLane, idxs : Array[Int]) -> Array[String] {
  let out : Array[String] = []
  for i in idxs {
    let s = lane.start[i]
    for k in 0..<lane.wlen[i] {
      out.push(lane.phones[s + k])
    }
    out.push("_")
  }
  out
}

///|
fn cat(a : Array[String], b : Array[String]) -> Array[String] {
  let out : Array[String] = []
  for x in a {
    out.push(x)
  }
  for x in b {
    out.push(x)
  }
  out
}

///|
fn take_of(
  lane : @lib.AlignLane,
  tokens : Array[String],
  prm : @lib.AlignParams,
) -> @lib.TakeScore {
  let vocab = vocab_with(lane.tgt, extra_phones)
  @lib.score_take(post_of(vocab, tokens, 0.8), lane, vocab, prm)
}

///|
fn scores_of(tokens : Array[String], prm : @lib.AlignParams) -> Array[Int] {
  let lane = lane_phrase()
  let r = take_of(lane, tokens, prm)
  r.words.map(fn(w) { w.score })
}

///|
fn sum_of(xs : Array[Int]) -> Int {
  let mut s = 0
  for x in xs {
    s = s + x
  }
  s
}

///|
fn all_ge(xs : Array[Int], n : Int) -> Bool {
  for x in xs {
    if x < n {
      return false
    }
  }
  true
}

///|
fn show(xs : Array[Int]) -> String {
  let sb = StringBuilder()
  for i, x in xs {
    if i > 0 {
      sb.write_char(',')
    }
    sb.write_string(x.to_string())
  }
  sb.to_string()
}

///|
fn prm() -> @lib.AlignParams {
  @lib.align_params_default()
}

///|
test "substitution cost follows the distance table" {
  assert_true(close_d(@lib.align_sub_cost("e", "e", ""), 0.0))
  assert_true(close_d(@lib.align_sub_cost("e", "eː", ""), 0.0))
  assert_true(close_d(@lib.align_sub_cost("ɛ", "e", ""), 0.5))
  assert_true(close_d(@lib.align_sub_cost("k", "kʰ", ""), 0.5))
  assert_true(close_d(@lib.align_sub_cost("a", "p", ""), 1.0))
  assert_true(close_d(@lib.align_sub_cost("c", "c", ""), 0.0))
  assert_true(close_d(@lib.align_sub_cost("ɔ", "o", ""), 0.5))
  assert_true(close_d(@lib.align_sub_cost("ɔ", "o", "koine"), 0.0))
  assert_true(close_d(@lib.align_sub_cost("r", "l", ""), 1.0))
  assert_true(close_d(@lib.align_sub_cost("l", "r", ""), 1.0))
  assert_true(close_d(@lib.align_sub_cost("e", "i", ""), 1.0))
  assert_true(close_d(@lib.align_sub_cost("i", "e", "koine"), 1.0))
  // Koine β and v are one sound, so the path treats them as a match.
  // With no scheme they stay in the tolerated band (feature distance 0.12).
  assert_true(close_d(@lib.align_sub_cost("β", "v", "koine"), 0.0))
  assert_true(close_d(@lib.align_sub_cost("v", "β", "koine"), 0.0))
  assert_true(close_d(@lib.align_sub_cost("β", "v", ""), 0.5))
  assert_true(close_d(@lib.align_sub_cost("v", "f", "koine"), 0.5))
}

///|
test "clean read: every word credited" {
  let lane = lane_phrase()
  assert_eq(lane.start.length(), 5)
  let s = scores_of(seq_of(lane, [0, 1, 2, 3, 4]), prm())
  assert_true(all_ge(s, 80), msg=show(s))
}

///|
test "single-word verse" {
  let lane = lane_custom([["a", "e"]], [])
  let r = take_of(lane, ["a", "_", "e", "_"], prm())
  assert_eq(r.words.length(), 1)
  assert_true(r.words[0].score >= 80)
  assert_eq(r.overall, r.words[0].score)
  assert_true(r.cost < 0.000001)
}

///|
test "word of one phone, and one of two phones is not enough" {
  let one = take_of(lane_custom([["o"]], []), ["o", "_"], prm())
  assert_true(one.words[0].score >= 80)
  assert_true(one.words[0].evidence)
  let two = take_of(lane_custom([["a", "e"]], []), ["a", "_"], prm())
  assert_eq(two.words[0].score, 0)
  assert_true(two.words[0].evidence)
  assert_eq(two.words[0].ph.length(), 2)
  assert_true(two.words[0].ph[0].score > 0)
  assert_eq(two.words[0].ph[1].score, 0)
}

///|
test "optional phone only, and an abstaining phone beside a real one" {
  let only = take_of(lane_custom([["e"]], [0]), [], prm())
  assert_eq(only.words[0].score, 0)
  assert_false(only.words[0].evidence)
  assert_false(only.words[0].has_ph)
  let beside = take_of(lane_custom([["e", "a"]], [0]), ["a", "_"], prm())
  assert_true(beside.words[0].score >= 80, msg=beside.words[0].score.to_string())
  assert_true(beside.words[0].ph[0].absent)
  assert_true(beside.words[0].ph[0].optional)
  assert_true(beside.words[0].ph[1].score >= 80)
}

///|
test "empty take and pure silence score nothing and do not throw" {
  let lane = lane_phrase()
  let vocab = phrase_vocab(lane)
  let empty = @lib.AlignPost::{ lp: [], frames: 0, width: vocab.length(), spf: 0.02 }
  let r0 = @lib.score_take(empty, lane, vocab, prm())
  assert_eq(r0.words.length(), 5)
  for w in r0.words {
    assert_eq(w.score, 0)
    assert_false(w.evidence)
  }
  let rows : Array[Array[Double]] = []
  for _ in 0..<8 {
    rows.push(blank_row(vocab))
  }
  let v = vocab.length()
  let lp = Array::make(rows.length() * v, 0.0)
  for i, row in rows {
    for j in 0..<v {
      lp[i * v + j] = row[j]
    }
  }
  let silent = @lib.score_take(
    { lp, frames: rows.length(), width: v, spf: 0.02 },
    lane,
    vocab,
    prm(),
  )
  assert_eq(silent.tokens.length(), 0)
  for w in silent.words {
    assert_eq(w.score, 0)
    assert_false(w.evidence)
  }
}

///|
test "one token only credits part of the first word" {
  let lane = lane_phrase()
  let r = take_of(lane, [lane.phones[0], "_"], prm())
  assert_eq(r.words[0].score, 0)
  assert_true(r.words[0].evidence)
  assert_eq(r.words[1].score, 0)
  assert_false(r.words[1].evidence)
  assert_false(r.words[4].evidence)
}

///|
test "repeated word: same credit, no penalty" {
  let lane = lane_phrase()
  let s = scores_of(seq_of(lane, [0, 1, 1, 2, 3, 4]), prm())
  assert_true(all_ge(s, 80), msg=show(s))
}

///|
test "false start of a word, then the word" {
  let lane = lane_phrase()
  let mut t = seq_of(lane, [0])
  let s1 = lane.start[1]
  t.push(lane.phones[s1])
  t.push(lane.phones[s1 + 1])
  t.push("_")
  t = cat(t, seq_of(lane, [1, 2, 3, 4]))
  let s = scores_of(t, prm())
  assert_true(all_ge(s, 80), msg=show(s))
}

///|
test "restart back 1, 2 and 3 words keeps the words" {
  let lane = lane_phrase()
  let back1 = scores_of(cat(seq_of(lane, [0, 1, 2]), seq_of(lane, [1, 2, 3, 4])), prm())
  let back2 = scores_of(cat(seq_of(lane, [0, 1, 2, 3]), seq_of(lane, [1, 2, 3, 4])), prm())
  let back3 = scores_of(cat(seq_of(lane, [0, 1, 2, 3]), seq_of(lane, [0, 1, 2, 3, 4])), prm())
  assert_true(all_ge(back1, 80), msg="1 " + show(back1))
  assert_true(all_ge(back2, 80), msg="2 " + show(back2))
  assert_true(all_ge(back3, 80), msg="3 " + show(back3))
}

///|
test "restart from the top of the phrase" {
  let lane = lane_phrase()
  let s = scores_of(cat(seq_of(lane, [0, 1]), seq_of(lane, [0, 1, 2, 3, 4])), prm())
  assert_true(all_ge(s, 80), msg=show(s))
}

///|
test "a restart four words back is not free" {
  let lane = lane_custom([["a"], ["b"], ["c"], ["d"], ["e"]], [])
  let heard = [
    "a", "_", "b", "_", "c", "_", "d", "_", "e", "_", "a", "_", "b", "_", "c",
    "_", "d", "_", "e", "_",
  ]
  let c3 = take_of(lane, heard, prm().with_back(3))
  let c4 = take_of(lane, heard, prm().with_back(4))
  assert_true(all_ge(c4.words.map(fn(w) { w.score }), 80), msg=show(c4.words.map(fn(w) { w.score })))
  assert_true(c4.cost < c3.cost, msg=c4.cost.to_string() + " vs " + c3.cost.to_string())
}

///|
test "skipped word gets no credit, neighbours keep theirs" {
  let lane = lane_phrase()
  let r = take_of(lane, seq_of(lane, [0, 1, 3, 4]), prm())
  let s = r.words.map(fn(w) { w.score })
  assert_eq(s[2], 0)
  assert_true(s[0] >= 80 && s[1] >= 80 && s[3] >= 80 && s[4] >= 80, msg=show(s))
  let distinct = lane_custom([["a"], ["p"], ["s"]], [])
  let skipped = take_of(distinct, ["a", "_", "s", "_"], prm())
  assert_eq(skipped.words[1].score, 0)
  assert_false(skipped.words[1].evidence)
  assert_true(
    skipped.words[0].score >= 80 && skipped.words[2].score >= 80,
    msg=show(skipped.words.map(fn(w) { w.score })),
  )
}

///|
test "read past the end does not penalise the verse" {
  let lane = lane_phrase()
  let s = scores_of(cat(seq_of(lane, [0, 1, 2, 3, 4]), ["m", "ɸ", "_"]), prm())
  assert_true(all_ge(s, 80), msg=show(s))
}

///|
test "stopping early: unread words score 0" {
  let lane = lane_phrase()
  let r = take_of(lane, seq_of(lane, [0, 1, 2]), prm())
  assert_true(r.words[0].score >= 80)
  assert_eq(r.words[3].score, 0)
  assert_eq(r.words[4].score, 0)
  assert_false(r.words[3].evidence)
  assert_false(r.words[4].evidence)
}

///|
test "a different verse earns nothing" {
  let s = scores_of(
    ["k", "a", "i", "_", "p", "a", "n", "t", "a", "_", "u", "m", "o", "n"],
    prm(),
  )
  assert_true(s.filter(fn(x) { x > 30 }).length() == 0, msg=show(s))
}

///|
test "noise tokens between words are ignored" {
  let lane = lane_phrase()
  let s = scores_of(cat(cat(seq_of(lane, [0, 1]), ["m", "ɸ", "_"]), seq_of(lane, [2, 3, 4])), prm())
  assert_true(all_ge(s, 80), msg=show(s))
}

///|
test "plain mode (no restart moves) does not beat the tolerant score" {
  let lane = lane_phrase()
  let t = cat(seq_of(lane, [0, 1]), seq_of(lane, [0, 1, 2, 3, 4]))
  let a = sum_of(scores_of(t, prm().with_plain(true)))
  let b = sum_of(scores_of(t, prm()))
  assert_true(b >= a, msg=b.to_string() + " vs " + a.to_string())
}

///|
test "same vowel and sigma across a word boundary credit both words" {
  let vowel = take_of(lane_custom([["a", "e"], ["e", "n"]], []), ["a", "_", "e", "_", "n", "_"], prm())
  assert_true(vowel.words[0].score >= 80, msg=vowel.words[0].score.to_string())
  assert_true(vowel.words[1].score >= 80, msg=vowel.words[1].score.to_string())
  let mut shared_v = false
  for p in vowel.words[1].ph {
    if p.shared && p.target == "e" && p.score > 0 {
      shared_v = true
    }
  }
  assert_true(shared_v)
  let sigma = take_of(lane_custom([["a", "s"], ["s", "a"]], []), ["a", "_", "s", "_", "a", "_"], prm())
  assert_true(sigma.words[0].score >= 80, msg=sigma.words[0].score.to_string())
  assert_true(sigma.words[1].score >= 80, msg=sigma.words[1].score.to_string())
  let mut shared_s = false
  for p in sigma.words[1].ph {
    if p.shared && p.target == "s" && p.score > 0 {
      shared_s = true
    }
  }
  assert_true(shared_s)
}

///|
test "a quiet take still scores, and a peak under the floor does not" {
  let lane = lane_phrase()
  let vocab = phrase_vocab(lane)
  let tokens = seq_of(lane, [0, 1, 2, 3, 4])
  let quiet = @lib.score_take(post_quiet(vocab, tokens), lane, vocab, prm())
  let qs = quiet.words.map(fn(w) { w.score })
  assert_true(all_ge(qs, 80), msg=show(qs))
  let v = vocab.length()
  let rest = 0.08 / (v - 2).to_double()
  let row = Array::make(v, @math.ln(rest))
  row[0] = @math.ln(0.90)
  row[index_of(vocab, lane.phones[0])] = @math.ln(0.02)
  let lp = Array::make(v, 0.0)
  for j in 0..<v {
    lp[j] = row[j]
  }
  let low = @lib.score_take(
    { lp, frames: 1, width: v, spf: 0.02 },
    lane,
    vocab,
    prm().with_back(3),
  )
  let soft = @lib.align_params_default()
  let _ = soft
  let tuned = @lib.AlignParams::{
    tau: 0.01,
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
  let floored = @lib.score_take({ lp, frames: 1, width: v, spf: 0.02 }, lane, vocab, tuned)
  assert_true(floored.tokens.length() >= 1)
  assert_eq(floored.words[0].score, 0)
  let _ = low
}

///|
test "the same input scores the same way twice" {
  let lane = lane_phrase()
  let tokens = seq_of(lane, [0, 1, 3, 4])
  let a = take_of(lane, tokens, prm())
  let b = take_of(lane, tokens, prm())
  assert_eq(a.overall, b.overall)
  assert_eq(a.words.map(fn(w) { w.score }), b.words.map(fn(w) { w.score }))
  assert_true(close_d(a.cost, b.cost))
  assert_eq(a.align.pairs.length(), b.align.pairs.length())
  assert_eq(a.tokens.length(), b.tokens.length())
}

///|
test "pair indexes stay in range and scores stay in 0..=100" {
  let lane = lane_phrase()
  let r = take_of(lane, cat(seq_of(lane, [0, 1]), seq_of(lane, [0, 1, 2, 3, 4])), prm())
  assert_true(r.cost >= 0.0)
  assert_true(r.overall >= 0 && r.overall <= 100)
  for p in r.align.pairs {
    assert_true(p.h >= 0 && p.h < r.tokens.length())
    assert_true(p.j >= 0 && p.j < lane.tgt.length())
    assert_true(p.att >= 0)
  }
  for w in r.words {
    assert_true(w.score >= 0 && w.score <= 100)
    if w.has_ph {
      for p in w.ph {
        assert_true(p.score >= 0 && p.score <= 100)
      }
    }
  }
  let clean = take_of(lane, seq_of(lane, [0, 1, 2, 3, 4]), prm())
  let noisy = take_of(lane, cat(seq_of(lane, [0, 1, 2, 3, 4]), ["m", "_"]), prm())
  assert_true(clean.cost <= noisy.cost + 0.000001)
  assert_true(clean.cost < 0.000001)
}

///|
test "stitch keeps the nearer window centre and blanks a gap" {
  let data = [0.0, -1.0, 0.0, -2.0]
  let w : @lib.AlignWindow = { start: 0.0, frames: 2, width: 2, data, spf: 1.0 }
  let post = @lib.stitch([w], 3.0, prm())
  assert_eq(post.frames, 5)
  assert_eq(post.width, 2)
  assert_true(close_d(post.lp[0], 0.0))
  assert_true(close_d(post.lp[1], -1.0))
  assert_true(close_d(post.lp[2], 0.0))
  assert_true(close_d(post.lp[3], -2.0))
  assert_true(close_d(post.lp[4], 0.0))
  assert_true(close_d(post.lp[5], -30.0))
  let edge = prm()
  let left = Array::make(4, 0.0)
  left[0] = 0.0
  left[1] = -4.0
  left[2] = 0.0
  left[3] = -5.0
  let right = Array::make(4, 0.0)
  right[0] = 0.0
  right[1] = -6.0
  right[2] = 0.0
  right[3] = -7.0
  let w0 : @lib.AlignWindow = { start: 0.0, frames: 2, width: 2, data: left, spf: 1.0 }
  let w1 : @lib.AlignWindow = { start: 1.0, frames: 2, width: 2, data: right, spf: 1.0 }
  let both = @lib.stitch([w0, w1], 2.0, edge)
  assert_true(both.frames >= 3)
  assert_true(close_d(both.lp[1], -4.0))
}

///|
test "align_phones_json agrees with score_take and bad input is empty" {
  let lp0 = @math.ln(0.2)
  let lp1 = @math.ln(0.8)
  let spec = "{\"vocab\":[\"\",\"a\"],\"spf\":0.02,\"T\":1,\"V\":2,\"lp\":[" +
    lp0.to_string() +
    "," +
    lp1.to_string() +
    "],\"lane\":{\"tgt\":[\"a\"],\"phones\":[\"a\"],\"start\":[0],\"wlen\":[1]}}"
  let js = @lib.align_phones_json(spec)
  let via = @lib.call_json("align_phones", spec, "")
  assert_eq(via, js)
  let lane = @lib.align_lane(["a"], ["a"], [1], [[]], [false], [0], [1])
  let direct = @lib.score_take(
    { lp: [lp0, lp1], frames: 1, width: 2, spf: 0.02 },
    lane,
    ["", "a"],
    prm(),
  )
  assert_true(js.contains("\"overall\":" + direct.overall.to_string()))
  assert_true(js.contains("\"score\":" + direct.words[0].score.to_string()))
  assert_true(direct.words[0].score >= 80)
  let bad = @lib.align_phones_json("{")
  assert_true(bad.contains("\"words\":[]"))
  assert_true(bad.contains("\"overall\":0"))
  let api = @api.align_phones_json(spec)
  assert_eq(api, js)
  assert_true(js.contains("\"level\":"))
  assert_true(js.contains("\"overallLevel\":"))
}

///|
fn take_more(
  lane : @lib.AlignLane,
  tokens : Array[String],
  prm : @lib.AlignParams,
  more : Array[String],
) -> @lib.TakeScore {
  let vocab = vocab_with(lane.tgt, extra_phones)
  for p in more {
    push_unique(vocab, p)
  }
  @lib.score_take(post_of(vocab, tokens, 0.8), lane, vocab, prm)
}

///|
test "near-miss credit changes the score and not the alignment cost" {
  let open_e = lane_custom([["ɛ"]], [])
  let gracious = take_of(open_e, ["e", "_"], prm())
  assert_true(gracious.words[0].score > 0, msg=gracious.words[0].score.to_string())
  assert_true(gracious.words[0].score < 80)
  assert_true(gracious.words[0].evidence)
  assert_eq(gracious.overall, gracious.words[0].score)
  let strict_e = take_of(open_e, ["e", "_"], prm().with_goal("strict"))
  assert_true(close_d(strict_e.cost, gracious.cost))
  assert_true(strict_e.words[0].score > 0)
  let wrong = take_of(lane_custom([["a"]], []), ["p", "_"], prm())
  assert_eq(wrong.words[0].score, 0)
  assert_true(wrong.cost > 0.4)
  let koine = prm().with_scheme("koine")
  let soft = take_more(lane_custom([["v"]], []), ["f", "_"], koine, ["f", "β"])
  let hard = take_more(
    lane_custom([["v"]], []),
    ["f", "_"],
    koine.with_goal("strict"),
    ["f", "β"],
  )
  assert_true(soft.words[0].score > 0, msg=soft.words[0].score.to_string())
  assert_eq(hard.words[0].score, 0)
  assert_true(close_d(soft.cost, hard.cost))
  let same = take_more(lane_custom([["v"]], []), ["β", "_"], koine, ["f", "β"])
  assert_true(same.words[0].score >= 80)
  assert_true(same.cost < 0.000001)
}

///|
test "rough breathing is the optional phone" {
  assert_false(@lib.phone_is_optional("a"))
  assert_true(@lib.phone_is_optional("h"))
  assert_true(@lib.phone_is_optional("hː"))
  assert_false(@lib.phone_is_optional("pʰ"))
  let flags = @lib.optional_flags(["a", "h", "pʰ"])
  assert_eq(flags.length(), 3)
  assert_false(flags[0])
  assert_true(flags[1])
  assert_false(flags[2])
  assert_eq(@lib.optional_phones_json("a,h,pʰ"), "[false,true,false]")
  assert_eq(@lib.call_json("optional_phones", "h,a", ""), "[true,false]")
  let required = take_of(lane_custom([["a", "h"]], []), ["a", "_"], prm())
  assert_eq(required.words[0].score, 0)
  let optional = take_of(lane_custom([["a", "h"]], [1]), ["a", "_"], prm())
  assert_true(optional.words[0].score >= 80)
  assert_true(optional.words[0].ph[1].optional)
}

///|
test "alignment cost is non-negative, zero on an exact plain read, and bounded" {
  let empty = @lib.align_lane([], [], [], [], [], [], [])
  let none = @lib.align_tokens([], empty, prm())
  assert_eq(none.pairs.length(), 0)
  assert_true(none.cost < 0.000001)
  let exact = take_of(lane_custom([["a", "e"]], []), ["a", "e", "_"], prm().with_plain(true))
  assert_true(exact.cost < 0.000001)
  assert_true(exact.words[0].score >= 80)
  let mut prev = 1000000
  for p in exact.align.pairs {
    assert_true(p.h >= 0 && p.h < exact.tokens.length())
    assert_true(p.j >= 0 && p.j < 2)
    if !p.shared {
      assert_true(p.h + p.j <= prev)
      prev = p.h + p.j
    }
  }
  let swapped = take_of(lane_custom([["a"]], []), ["p", "_"], prm().with_plain(true))
  assert_true(swapped.cost > 0.4)
  let lane = lane_phrase()
  let restarted = take_of(lane, cat(seq_of(lane, [0, 1]), seq_of(lane, [0, 1, 2, 3, 4])), prm())
  assert_true(restarted.cost >= 0.0 && restarted.cost < 1.0e8)
  assert_true(restarted.attempts < 30)
  let again = take_of(lane, cat(seq_of(lane, [0, 1]), seq_of(lane, [0, 1, 2, 3, 4])), prm())
  assert_true(close_d(again.cost, restarted.cost))
  assert_eq(again.overall, restarted.overall)
}

///|
test "a long alignment is refused instead of allocating the matrix" {
  let n = 600
  let tgt = Array::make(n, "a")
  let ids = Array::make(n, 1)
  let opt = Array::make(n, false)
  let alts : Array[Array[Int]] = []
  for _ in 0..<n {
    alts.push([])
  }
  let lane = @lib.align_lane(tgt, tgt, ids, alts, opt, [0], [n])
  let heard : Array[@lib.HeardToken] = []
  for i in 0..<n {
    heard.push({ id: 1, p: "a", t0: i, t1: i, pk: 0.9, fr: [i] })
  }
  let al = @lib.align_tokens(heard, lane, prm())
  assert_eq(al.pairs.length(), 0)
  assert_true(al.cost > 1.0e8)
  assert_eq(@kernel.align_cell_cap(), 250000)
  assert_true(@kernel.align_over_cap(600, 600))
  assert_false(@kernel.align_over_cap(100, 100))
}

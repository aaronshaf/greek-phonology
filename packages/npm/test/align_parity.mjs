// Same fixtures through alignPhonesJson and the deploy-122 reference.
// Exact phone matches must agree. A substitution the distance table rejects
// and the reference CLASS table accepts may differ; that case is named below.
import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { alignPhonesJson, g2p } from "../index.js";

const require = createRequire(import.meta.url);
const ref = require("./align_ref.cjs");

const PHRASE = "ἐν ἀρχῇ ἦν ὁ λόγος";
const EXTRA = ["a", "e", "ɛ", "i", "o", "u", "n", "r", "l", "s", "k", "kʰ", "ɣ", "m", "ɸ", "p", "t", "b", "d"];

function bare(p) {
  return p.replace(/[ːˑ]/g, "");
}

function laneOf(text, scheme) {
  const words = g2p(text, scheme).words.filter((w) => w.phones.length > 0);
  const tgt = [];
  const start = [];
  const wlen = [];
  const wOf = [];
  for (const w of words) {
    start.push(tgt.length);
    const phones = w.phones.map(bare);
    wlen.push(phones.length);
    for (const p of phones) {
      wOf.push(wOf.length ? start.length - 1 : 0);
      tgt.push(p);
    }
  }
  for (let i = 0; i < tgt.length; i++) wOf[i] = 0;
  for (let w = 0; w < start.length; w++) {
    for (let k = 0; k < wlen[w]; k++) wOf[start[w] + k] = w;
  }
  const vocab = [""];
  for (const p of tgt.concat(EXTRA)) {
    if (p && !vocab.includes(p)) vocab.push(p);
  }
  const ids = tgt.map((p) => vocab.indexOf(p));
  const lane = {
    tgt,
    phones: tgt.slice(),
    ids,
    alts: tgt.map(() => []),
    opt: tgt.map(() => false),
    start,
    wlen,
    wOf,
  };
  return { vocab, lane };
}

function customLane(words, optAt = []) {
  const tgt = [];
  const start = [];
  const wlen = [];
  const opt = [];
  for (const w of words) {
    start.push(tgt.length);
    wlen.push(w.length);
    for (const p of w) {
      opt.push(optAt.includes(tgt.length));
      tgt.push(p);
    }
  }
  const wOf = tgt.map(() => 0);
  for (let w = 0; w < start.length; w++) {
    for (let k = 0; k < wlen[w]; k++) wOf[start[w] + k] = w;
  }
  const vocab = [""];
  for (const p of tgt.concat(EXTRA)) {
    if (p && !vocab.includes(p)) vocab.push(p);
  }
  const ids = tgt.map((p) => vocab.indexOf(p));
  return {
    vocab,
    lane: {
      tgt,
      phones: tgt.slice(),
      ids,
      alts: tgt.map(() => []),
      opt,
      start,
      wlen,
      wOf,
    },
  };
}

function postOf(vocab, tokens, conf = 0.8) {
  const V = vocab.length;
  const blank = () => {
    const r = Array(V).fill(Math.log(0.01 / (V - 1)));
    r[0] = Math.log(0.99);
    return r;
  };
  const rows = [];
  for (const t of tokens) {
    if (t === "_") {
      for (let i = 0; i < 5; i++) rows.push(blank());
      continue;
    }
    const r = Array(V).fill(Math.log((1 - conf) / (V - 1)));
    const id = vocab.indexOf(t);
    if (id < 0) throw new Error("missing vocab " + t);
    r[id] = Math.log(conf);
    rows.push(r, blank(), blank());
  }
  return { lp: rows.flat(), T: rows.length, V, spf: 0.02 };
}

function seq(lane, idxs) {
  const out = [];
  for (const i of idxs) {
    for (let k = 0; k < lane.wlen[i]; k++) out.push(lane.phones[lane.start[i] + k]);
    out.push("_");
  }
  return out;
}

function scores(take) {
  return take.words.map((w) => w.score);
}

function pairs(take) {
  return take.align.pairs.map((p) => [p.h, p.j, p.att, !!p.shared]);
}

function both(vocab, lane, tokens, params) {
  const post = postOf(vocab, tokens);
  const moon = alignPhonesJson({ vocab, lane, ...post, params, scheme: params && params.scheme });
  const js = ref.scoreTake(post, lane, vocab, params || {});
  return { moon, js };
}

function assertSame(label, vocab, lane, tokens, params) {
  const { moon, js } = both(vocab, lane, tokens, params);
  const ms = scores(moon);
  const jsScores = scores(js);
  assert.deepEqual(ms, jsScores, label + " scores moon " + ms + " js " + jsScores);
  assert.deepEqual(pairs(moon), pairs(js), label + " pairs");
  assert.ok(Math.abs(moon.cost - js.cost) < 1e-6, label + " cost " + moon.cost + " vs " + js.cost);
  assert.equal(moon.overall, js.overall, label + " overall");
  assert.equal(moon.tokens.length, js.tokens.length, label + " tokens");
}

const phrase = laneOf(PHRASE, "koine");

test("clean, restart, skip, and silence match the reference", () => {
  assert.equal(phrase.lane.start.length, 5);
  const all = [0, 1, 2, 3, 4];
  assertSame("clean", phrase.vocab, phrase.lane, seq(phrase.lane, all));
  assertSame("repeat", phrase.vocab, phrase.lane, seq(phrase.lane, [0, 1, 1, 2, 3, 4]));
  const falseStart = seq(phrase.lane, [0]).concat(
    phrase.lane.phones.slice(phrase.lane.start[1], phrase.lane.start[1] + 2),
    ["_"],
    seq(phrase.lane, [1, 2, 3, 4]),
  );
  assertSame("false start", phrase.vocab, phrase.lane, falseStart);
  assertSame("restart", phrase.vocab, phrase.lane, seq(phrase.lane, [0, 1]).concat(seq(phrase.lane, all)));
  assertSame("skip", phrase.vocab, phrase.lane, seq(phrase.lane, [0, 1, 3, 4]));
  assertSame("stop early", phrase.vocab, phrase.lane, seq(phrase.lane, [0, 1, 2]));
  assertSame("read past", phrase.vocab, phrase.lane, seq(phrase.lane, all).concat(["m", "ɸ", "_"]));
  assertSame("noise", phrase.vocab, phrase.lane, seq(phrase.lane, [0, 1]).concat(["m", "ɸ", "_"], seq(phrase.lane, [2, 3, 4])));
  assertSame("empty", phrase.vocab, phrase.lane, []);
  assertSame("silence", phrase.vocab, phrase.lane, ["_", "_"]);
  assertSame("one token", phrase.vocab, phrase.lane, [phrase.lane.phones[0], "_"]);
  assertSame("plain", phrase.vocab, phrase.lane, seq(phrase.lane, [0, 1]).concat(seq(phrase.lane, all)), { mode: "plain" });
});

test("shared vowel and sigma, one phone, and an optional phone match", () => {
  const vowel = customLane([["a", "e"], ["e", "n"]]);
  assertSame("shared e", vowel.vocab, vowel.lane, ["a", "_", "e", "_", "n", "_"]);
  const sigma = customLane([["a", "s"], ["s", "a"]]);
  assertSame("shared s", sigma.vocab, sigma.lane, ["a", "_", "s", "_", "a", "_"]);
  const one = customLane([["a"]]);
  assertSame("one phone", one.vocab, one.lane, ["a", "_"]);
  const half = customLane([["a", "p"]]);
  assertSame("one of two", half.vocab, half.lane, ["a", "_"]);
  const opt = customLane([["e"]], [0]);
  assertSame("optional only", opt.vocab, opt.lane, ["_"]);
});

test("a quiet take matches, and a peak under the floor scores 0 on both", () => {
  const tokens = seq(phrase.lane, [0, 1, 2, 3, 4]);
  const V = phrase.vocab.length;
  const rows = [];
  for (const t of tokens) {
    if (t === "_") {
      for (let i = 0; i < 5; i++) {
        const b = Array(V).fill(Math.log(0.01 / (V - 1)));
        b[0] = Math.log(0.99);
        rows.push(b);
      }
      continue;
    }
    const rest = 0.05 / (V - 2);
    const r = Array(V).fill(Math.log(rest));
    r[0] = Math.log(0.6);
    r[phrase.vocab.indexOf(t)] = Math.log(0.35);
    rows.push(r);
    for (let i = 0; i < 2; i++) {
      const b = Array(V).fill(Math.log(0.01 / (V - 1)));
      b[0] = Math.log(0.99);
      rows.push(b);
    }
  }
  const post = { lp: rows.flat(), T: rows.length, V, spf: 0.02 };
  const params = {};
  const moon = alignPhonesJson({ vocab: phrase.vocab, lane: phrase.lane, ...post, scheme: "koine" });
  const js = ref.scoreTake(post, phrase.lane, phrase.vocab, params);
  assert.deepEqual(scores(moon), scores(js), "quiet " + scores(moon) + " vs " + scores(js));
  assert.ok(scores(moon).every((s) => s >= 80));

  const low = Array(V).fill(Math.log(0.08 / (V - 2)));
  low[0] = Math.log(0.9);
  low[phrase.vocab.indexOf(phrase.lane.phones[0])] = Math.log(0.02);
  const floorPost = { lp: low, T: 1, V, spf: 0.02 };
  const floorParams = { TAU: 0.01 };
  const moonFloor = alignPhonesJson({
    vocab: phrase.vocab,
    lane: phrase.lane,
    ...floorPost,
    params: floorParams,
    scheme: "koine",
  });
  const jsFloor = ref.scoreTake(floorPost, phrase.lane, phrase.vocab, floorParams);
  assert.deepEqual(scores(moonFloor), scores(jsFloor));
  assert.equal(moonFloor.words[0].score, 0);
});

test("stitch agrees on the nearer window centre", () => {
  const windows = [
    { start: 0, T: 2, V: 2, spf: 1, data: [0, -4, 0, -5] },
    { start: 1, T: 2, V: 2, spf: 1, data: [0, -6, 0, -7] },
  ];
  const js = ref.stitch(windows, 2, {});
  const moon = alignPhonesJson({ windows, totalSec: 2 });
  assert.equal(moon.V, js.V);
  assert.equal(moon.spf, js.spf);
  assert.ok(moon.T >= 3);
  for (let i = 0; i < Math.min(moon.lp.length, js.lp.length); i++) {
    assert.ok(Math.abs(moon.lp[i] - js.lp[i]) < 1e-5, "lp " + i + " " + moon.lp[i] + " vs " + js.lp[i]);
  }
});

test("e heard as i is not the reference's half-cost class", () => {
  // CLASS puts e with i (cost 0.5). phone_distance does not tolerate that pair (cost 1).
  // The end slack still pairs a one-phone word either way, so the score matches and the cost does not.
  const lane = customLane([["e"]]);
  const V = lane.vocab.length;
  const r = Array(V).fill(Math.log(0.05 / (V - 3)));
  r[0] = Math.log(0.1);
  r[lane.vocab.indexOf("i")] = Math.log(0.5);
  r[lane.vocab.indexOf("e")] = Math.log(0.35);
  const blank = Array(V).fill(Math.log(0.01 / (V - 1)));
  blank[0] = Math.log(0.99);
  const post = { lp: r.concat(blank), T: 2, V, spf: 0.02 };
  const moon = alignPhonesJson({ vocab: lane.vocab, lane: lane.lane, ...post, scheme: "" });
  const js = ref.scoreTake(post, lane.lane, lane.vocab, {});
  assert.equal(moon.words[0].score, js.words[0].score);
  assert.ok(moon.words[0].score > 0);
  assert.ok(Math.abs(moon.cost - js.cost) > 0.2, "costs " + moon.cost + " vs " + js.cost);
});

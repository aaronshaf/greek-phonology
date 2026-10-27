// Fast posterior input and one call for every lane.
// The JSON number-list path stays available. These checks compare it to the
// direct array, and time a 16.4 s matrix with four lanes. The bound is loose
// so a busy machine still passes; the acceptance target is 20 ms.
import test from "node:test";
import assert from "node:assert/strict";
import { alignClearPost, alignPhonesJson, alignSetPost } from "../index.js";

const T = 820;
const V = 48;
const SPF = 0.02;

function vocabOf(n) {
  const phones = [
    "", "a", "e", "ɛ", "i", "o", "ɔ", "u", "y", "n", "m", "r", "l", "s", "z", "k",
    "kʰ", "p", "pʰ", "t", "tʰ", "b", "d", "g", "ɣ", "β", "v", "f", "θ", "ð", "x",
    "h", "j", "w", "ŋ", "ɾ", "ɪ", "ʊ", "c", "ɟ", "ç", "ʝ", "q", "ɸ", "ʁ", "ʔ", "ə",
  ];
  const vocab = phones.slice(0, n);
  while (vocab.length < n) vocab.push("p" + vocab.length);
  return vocab;
}

function lane(phones, vocab, scheme) {
  return {
    tgt: phones,
    phones: phones.slice(),
    ids: phones.map((p) => vocab.indexOf(p)),
    alts: phones.map(() => []),
    opt: phones.map(() => false),
    start: [0],
    wlen: [phones.length],
    scheme,
  };
}

function fill(lp, vocab) {
  const blank = Math.log(0.97);
  const rest = Math.log(0.03 / (vocab.length - 1));
  for (let t = 0; t < T; t++) {
    const o = t * V;
    lp[o] = blank;
    for (let v = 1; v < V; v++) lp[o + v] = rest;
    if (t % 8 === 0) {
      const id = 1 + Math.floor(t / 8) % (V - 1);
      lp[o] = Math.log(0.12);
      lp[o + id] = Math.log(0.82);
    }
  }
}

function view(take) {
  return {
    overall: take.overall,
    cost: take.cost,
    words: take.words.map((w) => ({
      i: w.i,
      score: w.score,
      attempts: w.attempts,
      evidence: w.evidence,
      heard: (w.ph || []).map((p) => p.heard ?? null),
    })),
    pairs: take.align.pairs.map((p) => [p.h, p.j, p.att, !!p.shared]),
    attemptCredit: take.attemptCredit,
  };
}

function median(xs) {
  const s = xs.slice().sort((a, b) => a - b);
  return s[Math.floor(s.length / 2)];
}

test("a 16.4s four-lane take stays under a loose bound", () => {
  const vocab = vocabOf(V);
  const lp = new Float32Array(T * V);
  fill(lp, vocab);
  const phones = [
    ["e", "n", "a", "r", "kʰ", "e", "e", "n", "o", "l", "o", "ɣ", "o", "s"],
    ["ɛ", "n", "a", "r", "x", "i", "ɛ", "n", "ɔ", "l", "ɔ", "ɣ", "ɔ", "s"],
    ["e", "n", "a", "r", "k", "eː", "eː", "n", "o", "l", "o", "g", "o", "s"],
    ["e", "n", "a", "r", "k", "i", "e", "n", "o", "l", "o", "ɣ", "o", "s"],
  ];
  const schemes = ["koine", "modern", "attic", "erasmian"];
  const lanes = phones.map((ps, i) => lane(ps.filter((p) => vocab.includes(p)), vocab, schemes[i]));
  const spec = { lp, T, V, spf: SPF, vocab, lanes, params: { goal: "gracious" } };
  const warm = alignPhonesJson(spec);
  assert.equal(warm.takes.length, 4);
  assert.ok(warm.tokens.length > 20);
  const samples = [];
  let last = warm;
  for (let i = 0; i < 7; i++) {
    const t0 = performance.now();
    last = alignPhonesJson(spec);
    samples.push(performance.now() - t0);
  }
  const med = median(samples);
  console.log("align 16.4s x 4 lanes ms", samples.map((x) => x.toFixed(2)).join(", "), "median", med.toFixed(2));
  assert.ok(med < 200, "median " + med + " ms");
  assert.equal(last.takes.length, 4);
  for (const take of last.takes) assert.equal(take.tokens.length, 0);
});

test("direct arrays, base64, postRef, and lanes match the JSON number list", () => {
  const vocab = ["", "a", "e", "i", "o", "ɔ"];
  const V0 = vocab.length;
  const frames = 12;
  const lp = new Float32Array(frames * V0);
  const rest = Math.log(0.02 / (V0 - 1));
  for (let t = 0; t < frames; t++) {
    lp[t * V0] = Math.log(0.98);
    for (let v = 1; v < V0; v++) lp[t * V0 + v] = rest;
  }
  const peaks = [
    [1, 0, "a"],
    [1, 4, "e"],
    [2, 8, "o"],
  ];
  for (const [id, t] of peaks) {
    lp[t * V0] = Math.log(0.15);
    lp[t * V0 + id] = Math.log(0.8);
  }
  const numbers = Array.from(lp);
  const lane = {
    tgt: ["a", "e", "o"],
    phones: ["a", "e", "o"],
    ids: [1, 2, 5],
    alts: [[], [], []],
    opt: [false, false, false],
    start: [0],
    wlen: [3],
  };
  const common = { vocab, T: frames, V: V0, spf: 0.02, lane, params: { scheme: "koine" } };
  const fromString = alignPhonesJson(JSON.stringify({ ...common, lp: numbers }));
  const fromArray = alignPhonesJson({ ...common, lp: numbers });
  const fromF32 = alignPhonesJson({ ...common, lp });
  const b64 = Buffer.from(lp.buffer, lp.byteOffset, lp.byteLength).toString("base64");
  const fromB64 = alignPhonesJson({ ...common, lp: b64 });
  alignSetPost(lp, frames, V0, 0.02);
  const fromRef = alignPhonesJson({ ...common, postRef: true });
  alignClearPost();
  for (const other of [fromArray, fromF32, fromB64, fromRef]) {
    assert.deepEqual(view(other), view(fromString));
    assert.deepEqual(other.tokens.map((t) => t.p), fromString.tokens.map((t) => t.p));
  }
  const lanes = [
    { ...lane, scheme: "koine" },
    { ...lane, tgt: ["a", "e", "ɔ"], phones: ["a", "e", "ɔ"], ids: [1, 2, 5], scheme: "modern" },
  ];
  const batch = alignPhonesJson({ vocab, T: frames, V: V0, spf: 0.02, lp, lanes });
  const batchString = alignPhonesJson(JSON.stringify({
    vocab, T: frames, V: V0, spf: 0.02, lp: numbers, lanes,
  }));
  assert.deepEqual(batch.takes.map(view), batchString.takes.map(view));
  assert.deepEqual(batch.tokens.map((t) => [t.p, t.t0, t.t1]), fromString.tokens.map((t) => [t.p, t.t0, t.t1]));
  for (let i = 0; i < lanes.length; i++) {
    const one = alignPhonesJson({
      vocab, T: frames, V: V0, spf: 0.02, lp, lane: lanes[i], params: { scheme: lanes[i].scheme },
    });
    assert.deepEqual(view(batch.takes[i]), view(one));
  }
});

test("exact credit and subCost do not change a clean read, and they do change a near miss", () => {
  const vocab = ["", "ɛ", "e", "i"];
  const V0 = vocab.length;
  const rest = Math.log(0.05 / (V0 - 1));
  const row = [Math.log(0.15), rest, Math.log(0.8), rest];
  const blank = [Math.log(0.99), rest, rest, rest];
  const lp = row.concat(blank);
  const lane = {
    tgt: ["ɛ"], phones: ["ɛ"], ids: [1], alts: [[]], opt: [false], start: [0], wlen: [1],
  };
  const base = { vocab, T: 2, V: V0, spf: 0.02, lp, lane };
  const gracious = alignPhonesJson({ ...base, params: { goal: "gracious" } });
  const exact = alignPhonesJson({ ...base, params: { goal: "exact" } });
  const off = alignPhonesJson({ ...base, params: { nearMiss: false, goal: "strict" } });
  assert.ok(gracious.words[0].score > 0);
  assert.equal(exact.words[0].score, 0);
  assert.equal(off.words[0].score, 0);
  assert.equal(exact.cost, gracious.cost);
  assert.equal(off.cost, gracious.cost);
  assert.deepEqual(exact.align.pairs, gracious.align.pairs);
  const cleanLane = {
    tgt: ["e"], phones: ["e"], ids: [2], alts: [[]], opt: [false], start: [0], wlen: [1],
  };
  const clean = alignPhonesJson({
    ...base,
    lane: cleanLane,
    params: { nearMiss: false },
  });
  assert.ok(clean.words[0].score >= 80);
  const heardI = [Math.log(0.1), rest, Math.log(0.35), Math.log(0.5)].concat(blank);
  const targetE = {
    tgt: ["e"], phones: ["e"], ids: [2], alts: [[]], opt: [false], start: [0], wlen: [1],
  };
  const priced = alignPhonesJson({
    vocab, T: 2, V: V0, spf: 0.02, lp: heardI, lane: targetE, params: {},
  });
  const half = alignPhonesJson({
    vocab, T: 2, V: V0, spf: 0.02, lp: heardI, lane: targetE,
    params: { subCost: [["e", "i", 0.5], ["r", "l", 0.5]] },
  });
  assert.ok(half.cost < priced.cost);
  assert.ok(priced.cost > 0.7);
  assert.ok(half.cost < 0.7);
});

/* Deploy-122 reference (CLASS substitution costs). Test fixture only: not part of the published package. */
/* IPAAlign (deploy 122): pure alignment + credit of recognised phones against target words. No DOM, no model, no page state.
 * Written to move into the greek-phonology library later (spec: ALIGN_LIBRARY_SPEC.md). Everything is plain arrays in, plain objects out.
 *
 *   stitch(windows, totalSec)               -> {lp, T, V, spf}      overlapping model windows -> one posterior matrix for the whole take
 *   softTokens(lp, T, V, vocab, prm)        -> tokens[{id,p,t0,t1,pk,fr}]   quiet phones still produce tokens (best phone, or p >= TAU)
 *   alignTokens(tokens, lane, prm)          -> {pairs[{h,j,att,shared?}], k, cost, atts}   restart/skip-tolerant word-level edit alignment
 *   scoreWords(lp, V, spf, lane, al, tokens, vocab, prm) -> {words[], overall, cursorWord, lastPhone, attempts}   best coherent attempt per word, evidence floor
 *   scoreTake(post, lane, vocab, prm)       -> same as scoreWords plus .tokens .cost   (soft decode + align + score in one call)
 *
 * lane = { tgt:[vocab name of each target phone], phones:[display names], ids:[vocab ids], alts:[[vocab ids that count as the same sound]], opt:[bool abstaining phone],
 *          start:[first phone index of each word], wlen:[phones per word], wOf:[word index of each phone] }
 * Log-probs are natural log, row-major T x V, column 0 = CTC blank.
 */
(function (root) {
  "use strict";
  var PRM = { TAU: 0.10, INS: 0.8, QPK: 0.5, INSLO: 0.55, SUBLO: 0.3, RS: 0.9, SK: 1.0, BACK: 3, FLOOR: 0.03, MIN_FRAC: 0.5, MINC: 2, MERGE_GAP: 3, WIN: 5.0, HOP: 2.5, EDGE: 0.5 };
  var CLASS = [["e", "ɛ", "ɪ", "i"], ["o", "ɔ"], ["u", "ʊ"], ["k", "kʰ", "x"], ["g", "ɣ"], ["d", "ð"], ["b", "β", "v"], ["t", "tʰ", "θ"], ["p", "pʰ", "ɸ", "f"], ["r", "ɾ", "l"], ["i", "j", "ʝ"], ["y", "i"], ["s", "z"], ["h", "x", "ç"]];
  function subCost(a, b) { if (a === b) return 0; for (var i = 0; i < CLASS.length; i++) if (CLASS[i].indexOf(a) >= 0 && CLASS[i].indexOf(b) >= 0) return 0.5; return 1; }
  function bph(p) { return p.replace(/[ːˑ]/g, ""); }
  function isVowel(p) { return /^[aeiouyɛɔɪʊ]$/.test(bph(p)); }
  // sounds that run together when the same one ends a word and starts the next (a long vowel, ς σ, ν ν): one token credits both
  function isShared(p) { return /^[aeiouyɛɔɪʊsznmlrɾ]$/.test(bph(p)); }
  function mk(prm) { var o = {}, k; for (k in PRM) o[k] = PRM[k]; if (prm) for (k in prm) o[k] = prm[k]; return o; }

  // Overlapping windows -> one matrix. windows: [{start (s), T, V, data (log-probs), spf}] in order. Per frame the window whose centre is nearest wins; the outer 0.5 s of a window
  // (where the model has no context) is skipped, except at the very start and end of the take. Gaps become blank.
  function stitch(wins, totalSec, prm) {
    prm = mk(prm); var V = wins[0].V, spf = wins[0].spf, T = Math.ceil(totalSec / spf) + 2, out = new Float32Array(T * V), has = new Uint8Array(T), dist = new Float64Array(T).fill(1e30), k, t, v;
    for (k = 0; k < wins.length; k++) {
      var w = wins[k], dur = w.T * w.spf, left = k === 0 ? 0 : prm.EDGE, right = k === wins.length - 1 ? 0 : prm.EDGE;
      for (t = 0; t < w.T; t++) {
        var tt = t * w.spf, g = Math.round((w.start + tt) / spf); if (g >= T) break;
        if (tt < left || tt >= dur - right) continue;
        var d = Math.abs(tt - dur / 2); if (d < dist[g]) { dist[g] = d; has[g] = 1; for (v = 0; v < V; v++) out[g * V + v] = w.data[t * V + v]; }
      }
    }
    for (t = 0; t < T; t++) if (!has[t]) for (v = 0; v < V; v++) out[t * V + v] = v === 0 ? 0 : -30;
    return { lp: out, T: T, V: V, spf: spf };
  }

  // Soft decode. A frame yields a token when its best non-blank phone is the argmax, or its probability is >= TAU: quiet speech has peaks of only 0.2-0.5
  // and loses to blank under greedy decode. Same phone within MERGE_GAP frames is one token.
  function softTokens(lp, T, V, vocab, prm) {
    prm = mk(prm); var out = [], t, v;
    for (t = 0; t < T; t++) {
      var o = t * V, k = 0, m = -1e30; for (v = 1; v < V; v++) if (lp[o + v] > m) { m = lp[o + v]; k = v; }
      var pk = Math.exp(m), pb = Math.exp(lp[o]);
      if (!(pk >= pb || pk >= prm.TAU)) continue;
      var last = out[out.length - 1];
      if (last && last.id === k && t - last.t1 <= prm.MERGE_GAP) { last.t1 = t; last.fr.push(t); if (pk > last.pk) last.pk = pk; } else out.push({ id: k, p: vocab[k], t0: t, t1: t, pk: pk, fr: [t] }); // fr = the frames where this phone was active (the blank frames between them are not part of the sound)
    }
    return out;
  }

  // Word-level edit alignment of the heard tokens onto the target phones. Moves: match/substitute, delete a target phone, insert a stray token (INS),
  // restart (jump back to the start of a word up to BACK words earlier, RS), skip (jump forward over whole words, SK per word). tolerant:false = plain monotonic.
  function alignTokens(heard, L, prm) {
    prm = mk(prm); var tol = !(prm && prm.mode === "plain"), tgt = L.tgt, N = tgt.length, H = heard.length, W = L.start.length, INF = 1e9, i, j, w, w2;
    var del = L.opt.map(function (o, jj) {
      if (o) return 0.3; var q = jj - 1; while (q >= 0 && L.opt[q]) q--;
      return q >= 0 && L.wOf[q] !== L.wOf[jj] && bph(L.phones[q]) === bph(L.phones[jj]) && isShared(L.phones[jj]) ? 0.2 : 1;
    });
    function dc(jj) { return del[jj - 1]; }
    // an abstaining phone (or a repeated vowel) is skipped rather than matched to a merely similar token (sub cost >= 1.2 vs skip + insert 1.1)
    // a low-confidence token (peak well under QPK) is probably noise: cheaper to leave unmatched (INSLO..1 x INS), dearer to force onto a wrong target (+SUBLO); a right phone costs 0 whatever its peak
    var qf = heard.map(function (x) { return Math.min(1, (x.pk === undefined ? 1 : x.pk) / prm.QPK); });
    function sc(hi, jj) { var c = subCost(heard[hi].p, tgt[jj - 1]); if (del[jj - 1] < 1 && c > 0) c = c < 1 ? 1.2 : 1.5; return c > 0 ? c + prm.SUBLO * (1 - qf[hi]) : 0; }
    function ic(hi) { return prm.INS * (prm.INSLO + (1 - prm.INSLO) * qf[hi]); }
    var wS = L.start, wE = L.start.map(function (s, ii) { return s + L.wlen[ii]; });
    var D = [], BT = [], SRC = [];
    for (i = 0; i <= H; i++) { D.push(new Float64Array(N + 1).fill(INF)); BT.push(new Uint8Array(N + 1)); SRC.push(new Int16Array(N + 1)); }
    function chain(ii, from) { for (var jj = Math.max(1, from); jj <= N; jj++) if (D[ii][jj - 1] + dc(jj) < D[ii][jj]) { D[ii][jj] = D[ii][jj - 1] + dc(jj); BT[ii][jj] = 2; } }
    function jumps(ii) {
      for (var b2 = 0; b2 < W; b2++) {
        var b = D[ii][wS[b2]], bt = BT[ii][wS[b2]], src = SRC[ii][wS[b2]], ww, jj, v;
        for (ww = b2; ww < W && ww <= b2 + prm.BACK; ww++) for (jj = wS[ww] + 1; jj <= wE[ww]; jj++) { if (jj === wS[b2]) continue; v = D[ii][jj] + prm.RS; if (v < b) { b = v; bt = 3; src = jj; } }
        for (ww = 0; ww <= b2 - 2; ww++) { v = D[ii][wE[ww]] + prm.SK * (b2 - ww - 1); if (v < b) { b = v; bt = 3; src = wE[ww]; } }
        if (b < D[ii][wS[b2]]) { D[ii][wS[b2]] = b; BT[ii][wS[b2]] = bt; SRC[ii][wS[b2]] = src; }
      }
    }
    D[0][0] = 0; for (j = 1; j <= N; j++) { D[0][j] = D[0][j - 1] + dc(j); BT[0][j] = 2; }
    if (tol) { for (w = 1; w < W; w++) if (prm.SK * w < D[0][wS[w]]) { D[0][wS[w]] = prm.SK * w; BT[0][wS[w]] = 4; } chain(0, 1); }
    for (i = 1; i <= H; i++) {
      for (j = 0; j <= N; j++) { var b = D[i - 1][j] + ic(i - 1), bt = 1; if (j > 0) { var v = D[i - 1][j - 1] + sc(i - 1, j); if (v < b) { b = v; bt = 0; } } D[i][j] = b; BT[i][j] = bt; }
      chain(i, 1);
      if (tol) { jumps(i); chain(i, 1); }
    }
    var k = 0; for (j = 1; j <= N; j++) if (D[H][j] < D[H][k]) k = j;
    var m = D[H][k]; for (j = k + 1; j <= N; j++) if (D[H][j] <= m + 0.5) k = j; // a near-tie takes the longer reading
    var pairs = [], ci = H, cj = k, att = 0, guard = 0;
    while ((ci > 0 || cj > 0) && guard++ < 1000000) {
      var t = BT[ci][cj];
      if (ci === 0) { if (t === 4) break; cj--; continue; }
      if (t === 0) { pairs.push({ h: ci - 1, j: cj - 1, att: att }); ci--; cj--; }
      else if (t === 1) ci--; else if (t === 2) cj--;
      else if (t === 3) { cj = SRC[ci][cj]; att++; } else break;
    }
    // one long vowel across a word boundary (ἀρχῇ ἦν -> [.. x e: n]) is a single token: it credits both identical target vowels (an abstaining offglide between them is skipped)
    var byAtt = {}; pairs.forEach(function (p) { (byAtt[p.att] = byAtt[p.att] || {})[p.j] = p; });
    var extra = [];
    pairs.forEach(function (p) {
      var A = byAtt[p.att];
      for (var d = -1; d <= 1; d += 2) {
        var q = p.j + d; while (q >= 0 && q < N && L.opt[q] && !A[q]) q += d;
        if (q < 0 || q >= N || A[q] || L.wOf[q] === L.wOf[p.j] || bph(L.phones[q]) !== bph(L.phones[p.j]) || !isShared(L.phones[q])) continue;
        if (pairs.some(function (x) { return x.att === p.att && x.h === p.h && x.j !== p.j; })) continue;
        var np = { h: p.h, j: q, att: p.att, shared: true }; A[q] = np; extra.push(np); break;
      }
    });
    return { pairs: pairs.concat(extra), k: k, cost: m, atts: att + 1, heardN: H };
  }

  // Credit. Per word: every attempt (a contiguous run of aligned phones) is scored on real posterior evidence; the best coherent attempt counts. A phone needs a posterior
  // of >= FLOOR on the target (or an equivalent sound) inside its token; a word needs >= MIN_FRAC of its phones credited (min 2, or the single phone).
  function scoreWords(lp, V, spf, L, al, heard, vocab, prm) {
    prm = mk(prm); var W = L.start.length;
    function phoneScore(g, j) {
      var bestp = 0, mass = 0, hv = 0, hm = -1, ids = [L.ids[j]].concat(L.alts[j] || []), t, v, a;
      for (t = g.t0; t <= g.t1; t++) {
        var o = t * V, pt = 0; for (a = 0; a < ids.length; a++) { var x = Math.exp(lp[o + ids[a]]); if (x > pt) pt = x; }
        if (pt > bestp) bestp = pt; var nb = 1 - Math.exp(lp[o]); if (nb > mass) mass = nb;
        for (v = 1; v < V; v++) { var p = Math.exp(lp[o + v]); if (p > hm) { hm = p; hv = v; } }
      }
      return { score: bestp < prm.FLOOR || mass < 1e-6 ? 0 : Math.round(Math.min(1, bestp / mass) * 100), heard: vocab[hv], id: hv };
    }
    var byKey = {}, keys = [];
    al.pairs.forEach(function (pr) { var w = L.wOf[pr.j], key = pr.att * 1000 + w, a = byKey[key]; if (!a) { a = byKey[key] = { w: w, att: pr.att, ph: {} }; keys.push(key); } a.ph[pr.j] = pr; });
    var attempts = keys.map(function (key) {
      var a = byKey[key], w = a.w, hs = [];
      var ph = []; for (var kk = 0; kk < L.wlen[w]; kk++) {
        var j = L.start[w] + kk, pr = a.ph[j];
        if (!pr) { ph.push(L.opt[j] ? { target: L.phones[j], score: null, optional: true } : { target: L.phones[j], score: 0, heard: null }); continue; }
        var r = phoneScore(heard[pr.h], j); hs.push(pr.h);
        ph.push({ target: L.phones[j], score: r.score, heard: r.heard, h: pr.h, t0: heard[pr.h].t0, t1: heard[pr.h].t1, shared: !!pr.shared });
      }
      var vals = ph.filter(function (x) { return !x.optional; }).map(function (x) { return x.score; }), n = vals.length, credited = vals.filter(function (v) { return v > 0; }).length;
      var mean = vals.reduce(function (s, v) { return s + v; }, 0) / Math.max(1, n), need = n <= 1 ? 1 : Math.max(prm.MINC, Math.ceil(prm.MIN_FRAC * n));
      var ts = ph.filter(function (x) { return x.t0 != null; });
      return { w: w, att: a.att, ph: ph, credited: credited, score: credited >= need ? Math.round(mean) : 0,
        lo: hs.length ? Math.min.apply(null, hs) : -1, hi: hs.length ? Math.max.apply(null, hs) : -1,
        t0: ts.length ? Math.min.apply(null, ts.map(function (x) { return x.t0; })) * spf : null, t1: ts.length ? (Math.max.apply(null, ts.map(function (x) { return x.t1; })) + 1) * spf : null };
    });
    var words = [], cursorWord = -1, lastPhone = -1;
    al.pairs.forEach(function (p) { if (L.wOf[p.j] > cursorWord) cursorWord = L.wOf[p.j]; if (p.j > lastPhone) lastPhone = p.j; });
    for (var w = 0; w < W; w++) {
      var A = attempts.filter(function (x) { return x.w === w; }), b = null;
      A.forEach(function (x) { if (!b || x.score > b.score || (x.score === b.score && x.att < b.att)) b = x; }); // ties: the later attempt (smaller att)
      words.push(b ? { i: w, score: b.score, attempts: A.length, evidence: b.credited > 0, ph: b.ph, lo: b.lo, hi: b.hi, t0: b.t0, t1: b.t1 }
        : { i: w, score: 0, attempts: 0, evidence: false, ph: null, lo: -1, hi: -1, t0: null, t1: null });
    }
    return { words: words, overall: Math.round(words.reduce(function (s, x) { return s + x.score; }, 0) / Math.max(1, W)), cursorWord: cursorWord, lastPhone: lastPhone, attempts: attempts.length };
  }

  function scoreTake(post, L, vocab, prm) {
    var tokens = softTokens(post.lp, post.T, post.V, vocab, prm), al = alignTokens(tokens, L, prm), r = scoreWords(post.lp, post.V, post.spf, L, al, tokens, vocab, prm);
    r.tokens = tokens; r.cost = al.cost; r.align = al; return r;
  }

  var api = { PARAMS: PRM, stitch: stitch, softTokens: softTokens, alignTokens: alignTokens, scoreWords: scoreWords, scoreTake: scoreTake, subCost: subCost };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.IPAAlign = api;
})(typeof self !== "undefined" ? self : this);

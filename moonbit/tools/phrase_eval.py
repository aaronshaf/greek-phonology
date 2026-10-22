#!/usr/bin/env python3
"""Validate accentuate_phrase on accented running text (MorphGNT SBLGNT).
Input per word = its lexical form (MorphGNT 'normalized' column, with the word's own letters/case and
punctuation); prediction is compared with the printed SBLGNT word. Reports accuracy and error classes.
usage: phrase_eval.py <dir with NN-Bk-morphgnt.txt files>"""
import sys, os, glob, json, subprocess, unicodedata as u, collections, re
D = sys.argv[1]; HERE = os.path.dirname(os.path.abspath(__file__))
ACC = "\u0301\u0300\u0342"
def strip(s): return u.normalize("NFC", "".join(c for c in u.normalize("NFD", s) if c not in ACC))
def low(s): return u.normalize("NFC", u.normalize("NFD", s).lower())
def resolve(norm, word):
    m = re.match(r"^(.*)\((.)\)$", norm)
    if m: norm = m.group(1) + (m.group(2) if strip(word).endswith(m.group(2)) else "")
    if low(strip(norm)) == low(strip(word)):
        if word[:1] != low(word[:1]):  # restore capital
            d = u.normalize("NFD", norm); norm = u.normalize("NFC", d[0].upper() + d[1:])
        return norm
    if word.endswith(("’", "'")):   # elision: keep the full form's accent if it falls on a remaining letter
        bw = low(strip(word))[:-1]; d = u.normalize("NFD", norm); out = ""; seen = 0
        if low(strip(norm)).startswith(bw):
            for c in d:
                if u.category(c) != "Mn":
                    if seen == len(u.normalize("NFD", bw).replace("\u0313", "").replace("\u0314", "")) : break
                    seen += 1
                if u.category(c) != "Mn" or seen <= len(bw): out += c
            cand = u.normalize("NFC", out) + word[-1]
            if low(strip(cand)) == low(strip(word)):
                if word[:1] != low(word[:1]): cand = u.normalize("NFC", u.normalize("NFD", cand)[0].upper() + u.normalize("NFD", cand)[1:])
                return cand
    return strip(word)
chapters = collections.OrderedDict()
for f in sorted(glob.glob(os.path.join(D, "*-morphgnt.txt"))):
    for line in open(f, encoding="utf-8"):
        ref, pos, parse, text, word, norm, lemma = line.split()
        text = "".join(c for c in text if c not in "⸀⸁⸂⸃⸄⸅")
        i = text.find(word); pre, post = (text[:i], text[i + len(word):]) if i >= 0 else ("", "")
        chapters.setdefault(f + ref[:4], []).append((pre + resolve(norm, word) + post, word, pos, text))
keys = list(chapters)
inp = [" ".join(t[0] for t in chapters[k]) for k in keys]
js = ("const m=require(%r);const a=JSON.parse(require('fs').readFileSync(0));"
      "console.log(JSON.stringify(a.map(s=>JSON.parse(m.call('accentuate_phrase',s,'')))))") % os.path.join(HERE, "../_build/js/release/build/api/api.js")
out = json.loads(subprocess.run(["node", "-e", js], input=json.dumps(inp), capture_output=True, text=True, check=True).stdout)
def core(s): return "".join(c for c in s if u.category(c)[0] in "LM" or c in "’'")
tot = ok = changed = changed_ok = base_ok = 0; errs = collections.Counter(); ex = collections.defaultdict(list)
def sig(w): return "".join({"\u0301": "/", "\u0300": "\\", "\u0342": "~"}.get(c, "") for c in u.normalize("NFD", w))
for k, pred in zip(keys, out):
    ps = pred.split(" ")
    rows = chapters[k]
    for j, ((lex, word, pos, _t), p) in enumerate(zip(rows, ps)):
        a, b, l = low(core(word)), low(core(p)), low(core(lex))
        tot += 1; ok += a == b; base_ok += a == l
        if a != l: changed += 1; changed_ok += a == b
        if a != b:
            cls = f"{sig(word) or '-'} expected, got {sig(p) or '-'} ({pos})"
            errs[cls] += 1
            ctx = " ".join(r[1] for r in rows[max(0, j - 2):j + 3]) if os.environ.get("CTX") else ""
            if len(ex[cls]) < 3: ex[cls].append(f"{word} (pred {p}){' [' + ctx + ']' if ctx else ''}")
print(f"words: {tot}; correct {ok} ({ok/tot:.2%}); lexical form alone already right: {base_ok/tot:.2%}")
print(f"words whose accent changes in context: {changed}; predicted correctly {changed_ok} ({changed_ok/max(1,changed):.2%})")
for cls, n in errs.most_common(12): print(f"  {n:5d}  {cls}  e.g. {'; '.join(ex[cls])}")


# round trip on the printed text: check_phrase_accents = accentuate_phrase(lexical_phrase(text))
pr = [" ".join(t[3] for t in chapters[k]) for k in keys]
js2 = js.replace("accentuate_phrase',s,'')", "check_phrase_accents',s,'')")
res = json.loads(subprocess.run(["node", "-e", js2], input=json.dumps(pr), capture_output=True, text=True, check=True).stdout)
n = sum(len(r) for r in res); good = sum(x["ok"] for r in res for x in r)
print(f"round trip on printed SBLGNT (check_phrase_accents): {good}/{n} words consistent ({good/n:.2%})")
if os.environ.get("CTX"):
    c = collections.Counter(); exs = {}
    for r in res:
        for x in r:
            if not x["ok"]:
                key = (sig(core(x["word"])) or "-") + " -> " + (sig(core(x["expected"])) or "-"); c[key] += 1; exs.setdefault(key, []).append(x["word"] + "/" + x["expected"])
    for k2, v in c.most_common(8): print(v, k2, exs[k2][:4])

#!/usr/bin/env python3
"""Prerender the playground's initial state into docs/index.html, so the page shows its final first
screen before the Wasm and the word list load (no flicker or layout shift once they arrive).
Run after build_pages.sh whenever app.js, the template or the library output changes.
Needs: pip install playwright (and a Chromium; CHROME=/path/to/chrome to use an existing one)."""
import html, json, os, socketserver, threading, http.server, functools
from playwright.sync_api import sync_playwright
root = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..")
docs, tpl = os.path.join(root, "docs"), open(os.path.join(os.path.dirname(__file__), "index.template.html"), encoding="utf-8").read()
KEYS = ["ipaview", "probs", "mode", "words", "fn", "fnout"]
def fill(vals):
    s = tpl
    for k in KEYS + ["ipa", "fndesc", "fnarg", "json"]:
        s = s.replace(f"<!--pre:{k}-->", vals.get(k, "{}" if k == "json" else ""))
    open(os.path.join(docs, "index.html"), "w", encoding="utf-8").write(s)
fill({})
h = functools.partial(http.server.SimpleHTTPRequestHandler, directory=docs)
srv = socketserver.TCPServer(("127.0.0.1", 0), h); threading.Thread(target=srv.serve_forever, daemon=True).start()
with sync_playwright() as p:
    b = p.chromium.launch(**({"executable_path": os.environ["CHROME"]} if os.environ.get("CHROME") else {}))
    pg = b.new_page(); pg.goto(f"http://127.0.0.1:{srv.server_address[1]}/")
    pg.wait_for_function("document.documentElement.dataset.ready === '1'", timeout=60000)
    pg.wait_for_timeout(1000)
    pg.evaluate("window.__render()")
    H = pg.evaluate("window.__H")
    ipa = pg.evaluate("document.getElementById('ipa').value")
    desc = pg.evaluate("document.getElementById('fndesc').textContent")
    arg = pg.evaluate("document.getElementById('fnarg').value")
    b.close()
srv.shutdown()
vals = {k: H[k] for k in KEYS}
vals.update(ipa=html.escape(ipa), fndesc=html.escape(desc, quote=False), fnarg=html.escape(arg),
            json=json.dumps(H, ensure_ascii=False).replace("</", "<\\/"))
fill(vals)
print("prerendered", ", ".join(KEYS))

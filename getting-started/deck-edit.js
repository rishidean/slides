/* deck-edit.js — the host the rail has been waiting for.
 *
 * deck-stage already ships the whole authoring rail: drag a thumbnail to
 * reorder, right-click for Skip / Move up / Move down / Duplicate / Delete,
 * shift-click for a range, Delete for the selection. None of it runs here.
 *
 * The reason is one line in deck-stage.js. When `window.__dcUpdate` exists the
 * component assumes an editor host owns the light DOM, so instead of moving
 * anything it emits a `dc-op` event, locks the rail, and waits for
 * `{__dc_op_ack: true, applied}`. This page loads support.js, so `__dcUpdate`
 * exists, so every gesture emits an op that nobody answers. Drag, move, delete
 * and duplicate are all silently dead.
 *
 * This file is that host, and it does three things the editor host does:
 *   apply the op to the light DOM, ack it so the rail unlocks, and remember the
 *   arrangement across reloads. It adds an export, because the deck has no build
 *   step: the order you end with is a new index.html, ready to commit.
 *
 * Load it after deck-stage.js. Nothing here touches presentation: with the
 * export bar hidden the deck behaves exactly as before.
 */
(() => {
  'use strict';

  const ORDER_KEY = 'deck-edit.order';
  const BAR_KEY = 'deck-edit.barHidden';

  const deck = () => document.querySelector('deck-stage');
  /* Slides are the component's section children. Read them from the DOM rather
     than from the component's own list, which is what we are keeping honest. */
  const slides = () => deck() ? [...deck().children].filter((e) => e.tagName === 'SECTION') : [];
  const label = (el) => el && el.getAttribute('data-label');
  const order = () => slides().map(label);

  /* ── Applying an op ────────────────────────────────────────────────────
     Mirrors deck-stage's own DOM work exactly, including the move reference,
     so a host-applied move lands where a self-mutated move would have. */
  function apply(op) {
    const s = slides();
    if (!s.length || !op) return false;
    const at = op.at;

    switch (op.op) {
      case 'move': {
        const el = s[at];
        const to = op.to;
        if (!el || typeof to !== 'number' || to < 0 || to >= s.length || to === at) return false;
        const ref = to < at ? s[to] : s[to].nextSibling;
        deck().insertBefore(el, ref);
        return true;
      }
      case 'remove': {
        if (!s[at] || s.length <= 1) return false;
        s[at].remove();
        return true;
      }
      case 'removeMany': {
        const idx = [...new Set(op.indices || [])].filter((i) => s[i]).sort((a, b) => b - a);
        if (!idx.length || idx.length >= s.length) return false;
        idx.forEach((i) => s[i].remove());
        return true;
      }
      case 'duplicate': {
        if (!s[at]) return false;
        s[at].after(s[at].cloneNode(true));
        return true;
      }
      case 'setAttr': {
        if (!s[at]) return false;
        s[at].setAttribute(op.attr, op.value == null ? '' : op.value);
        return true;
      }
      case 'removeAttr': {
        if (!s[at]) return false;
        s[at].removeAttribute(op.attr);
        return true;
      }
      default:
        return false;
    }
  }

  /* ── The host loop: listen, apply, remember, ack ────────────────────────
     The component dispatches `dc-op` with `bubbles` and `composed`, so binding
     on document catches it whether or not the element existed when we loaded. */
  document.addEventListener('dc-op', (e) => {
    const op = e.detail || {};
    let ok = false;
    try {
      ok = apply(op);
    } catch (err) {
      ok = false;
      console.warn('deck-edit: op failed', op, err);
    }
    if (ok) save();
    /* The ack is what unlocks the rail. Without it the next gesture is refused
       and the deck looks frozen. */
    window.postMessage({ __dc_op_ack: true, applied: ok }, '*');
    if (ok) refreshBar();
  });

  /* ── Remembering ───────────────────────────────────────────────────────
     Stored as a label list, which is stable across reloads and readable in
     devtools. Applied only when the label set still matches the file, so an
     edit to index.html elsewhere cannot silently reshuffle what you see. */
  function save() {
    try {
      localStorage.setItem(ORDER_KEY, JSON.stringify(order()));
    } catch (e) {}
  }

  function restore() {
    let want;
    try { want = JSON.parse(localStorage.getItem(ORDER_KEY) || 'null'); } catch (e) { want = null; }
    if (!Array.isArray(want) || !want.length) return false;
    const d = deck();
    if (!d) return false;
    const s = slides();
    const have = s.map(label);
    const sameSet = have.length === want.length && have.slice().sort().join('\u0000') === want.slice().sort().join('\u0000');
    if (!sameSet) return false;
    if (have.join('\u0000') === want.join('\u0000')) return false;
    const byLabel = new Map(s.map((el) => [label(el), el]));
    want.forEach((l) => { const el = byLabel.get(l); if (el) d.appendChild(el); });
    return true;
  }

  /* ── Export ────────────────────────────────────────────────────────────
     The reordered source, built from the file rather than from the live DOM.
     Serializing the DOM would bake in everything the runtime tags slides with
     on mount; reordering the file's own section blocks changes the order and
     nothing else. Labels are unique in this deck, which is what makes it exact. */
  const SECTION_RE = /<section\b[\s\S]*?<\/section>/g;

  /* The file writes some labels with entities — `now let&#39;s take it further`,
     `K&aacute;rm&aacute;n line` — while getAttribute hands back the decoded
     string. Compare like with like, or those slides read as missing. */
  function decode(s) {
    const t = document.createElement('textarea');
    t.innerHTML = s;
    return t.value;
  }

  async function buildFile() {
    /* Resolve against the directory, not the document, so this works whether the
       deck is opened as /getting-started/ or /getting-started/index.html. */
    const src = location.origin + location.pathname.replace(/[^/]*$/, '') + 'index.html';
    const res = await fetch(src, { cache: 'no-store' });
    if (!res.ok) throw new Error('index.html returned ' + res.status);
    const file = await res.text();
    const blocks = file.match(SECTION_RE) || [];
    if (!blocks.length) throw new Error('no section blocks found in index.html');

    const byLabelFile = new Map();
    blocks.forEach((b) => {
      const m = /data-label="([^"]*)"/.exec(b);
      const l = m ? decode(m[1]) : null;
      if (l && !byLabelFile.has(l)) byLabelFile.set(l, b);
    });

    const want = order();
    const missing = want.filter((l) => !byLabelFile.has(l));
    if (missing.length) throw new Error('these slides are not in index.html: ' + missing.slice(0, 3).join(', '));

    const first = blocks[0];
    const last = blocks[blocks.length - 1];
    const head = file.slice(0, file.indexOf(first));
    const tail = file.slice(file.lastIndexOf(last) + last.length);
    return head + want.map((l) => byLabelFile.get(l)).join('\n') + tail;
  }

  function download(text) {
    const url = URL.createObjectURL(new Blob([text], { type: 'text/html' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  }

  /* ── The export bar ───────────────────────────────────────────────────
     Authoring chrome, so it lives and dies with the rail. Add ?author=1 to the
     URL to see it, and Hide to keep it out of the way. */
  let bar = null;

  function refreshBar() {
    if (!bar) return;
    const count = bar.querySelector('[data-count]');
    if (count) count.textContent = String(slides().length);
  }

  function notice(text, ms) {
    if (!bar) return;
    const n = bar.querySelector('[data-notice]');
    if (!n) return;
    n.textContent = text;
    n.style.opacity = '1';
    clearTimeout(notice._t);
    notice._t = setTimeout(() => { n.style.opacity = '0'; }, ms || 3200);
  }

  function buildBar() {
    if (bar || !new URLSearchParams(location.search).has('author')) return;
    let hidden = false;
    try { hidden = localStorage.getItem(BAR_KEY) === '1'; } catch (e) {}
    if (hidden) return;

    bar = document.createElement('div');
    bar.className = 'export-hidden';
    bar.style.cssText =
      'position:fixed;right:18px;bottom:18px;z-index:2147483645;display:flex;align-items:center;gap:14px;' +
      'background:rgba(22,22,22,.94);color:#fff;font:500 12px/1.3 system-ui,-apple-system,sans-serif;' +
      'padding:10px 12px;border-radius:10px;box-shadow:0 6px 22px rgba(0,0,0,.35)';
    bar.innerHTML =
      '<span style="opacity:.72"><span data-count>0</span> slides</span>' +
      '<button data-a="file" style="' + BTN + '">Download index.html</button>' +
      '<button data-a="order" style="' + BTN + '">Copy order</button>' +
      '<button data-a="reset" style="' + BTN + '">Reset</button>' +
      '<button data-a="hide" style="' + BTN + ';opacity:.6">Hide</button>' +
      '<span data-notice style="opacity:0;transition:opacity .2s ease;max-width:340px;overflow:hidden;' +
      'text-overflow:ellipsis;white-space:nowrap"></span>';
    document.body.appendChild(bar);
    refreshBar();

    bar.addEventListener('click', async (e) => {
      const a = e.target.closest('button');
      if (!a) return;
      const act = a.getAttribute('data-a');
      if (act === 'hide') {
        try { localStorage.setItem(BAR_KEY, '1'); } catch (err) {}
        bar.remove();
        bar = null;
        return;
      }
      if (act === 'reset') {
        try { localStorage.removeItem(ORDER_KEY); } catch (err) {}
        location.reload();
        return;
      }
      if (act === 'order') {
        const text = order().join('\n');
        try {
          await navigator.clipboard.writeText(text);
          notice('Order copied, ' + slides().length + ' labels.');
        } catch (err) {
          notice('Clipboard blocked. Order is in the console.');
          console.log(text);
        }
        return;
      }
      if (act === 'file') {
        try {
          notice('Building index.html...');
          const text = await buildFile();
          download(text);
          notice('Downloaded. Commit it to publish.');
        } catch (err) {
          notice('Could not build: ' + err.message, 6000);
        }
      }
    });
  }

  const BTN =
    'background:rgba(255,255,255,.12);color:#fff;border:0;border-radius:7px;padding:6px 10px;' +
    'font:600 12px/1 system-ui,-apple-system,sans-serif;cursor:pointer';

  /* ── Boot ──────────────────────────────────────────────────────────────
     Restore after the component has mounted, so its own slotchange catches the
     rail up, then build the bar. */
  function boot() {
    if (!deck()) { requestAnimationFrame(boot); return; }
    if (restore()) {
      setTimeout(() => { if (deck()) deck()._collectSlides && deck()._collectSlides(); }, 60);
    }
    buildBar();
  }

  /* A small console surface, for the clipboard-blocked path and for checking the
     export before it ships: deckEdit.order(), deckEdit.buildFile(). */
  window.deckEdit = { order, buildFile, apply, save, restore };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();

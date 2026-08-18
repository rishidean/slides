# Escape Velocity Intro — Canon source

The Canon v1 project for this deck. `../index.html` stays the authoritative
source; this directory is generated from it, so edit the HTML deck and re-import
rather than hand-editing what is here.

- `canon.yaml` — deck manifest, slide order, declared authored files
- `slides/` — one YAML file per slide (`html-full` template + speaker notes)
- `html/` — one inert HTML fragment per slide, class-only, no scripts
- `themes/velocity.json` — the public `velocity` theme plus the 757 generated
  `authored-html-css` rules this deck's markup needs
- `assets/` — the nine images the slides reference, flattened from `../uploads/`
  and `../kormo-images/`

## Regenerating

From a checkout of the Canon repo, with this deck checked out alongside it:

```bash
node scripts/capture-authored-deck.mjs ../slides/getting-started /tmp/captured.html
node scripts/import-section-html-deck.mjs /tmp/captured.html ../slides/getting-started/canon \
  --deck-id=escape-velocity-intro --deck-slug=escape-velocity-intro \
  --deck-title="Escape Velocity Intro" --asset-dirs=uploads,kormo-images \
  --asset-root=../slides/getting-started
```

The capture step loads the deck in a real browser, lets its runtime finish
(footer numbers, the 1.5× Breaking Atmosphere fit, the slide 48 diagram), folds
the head stylesheet back onto the elements it styles, and materializes
`::before`/`::after` bars as real elements. The import step turns those inline
declarations into theme-owned classes and drops the source class names.

Then build and preview:

```bash
node packages/cli/dist/cli.js validate ../slides/getting-started/canon
node packages/cli/dist/cli.js build ../slides/getting-started/canon -o /tmp/escape-velocity-intro.canon
node packages/cli/dist/cli.js export /tmp/escape-velocity-intro.canon --target static -o /tmp/static
```

## What changes in the Canon copy

Canon's authored-HTML profile is inert composition, not a browser runtime, so
three behaviours of the live deck do not travel:

- **Slide 48, the loop-grows diagram**, is frozen at its first stage. The source
  deck advances it on click through four stages; the Canon slide shows stage one
  and its "click to advance" affordance does nothing. Splitting it into four
  static slides is the obvious fix if the walkthrough matters.
- **`P` to toggle the thumbnail rail** belongs to the source runtime. Canon's
  Viewer has its own navigation.
- **The two flex animations on slide 14** are baked to their finished state.

Speaker notes travel as structured source and are stripped from the rendered
audience document; Presenter View reads them from the mutable source.

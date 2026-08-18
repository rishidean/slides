# Reaching Escape Velocity

*How to use agentic engineering to go from 10% to 10X more productive.*

One 90-minute working session, assembled from three existing decks rather than
written fresh. 74 slides.

- Live: https://slides.rishidean.com/getting-started/
- Speaker track lives in `notes.py` in the build, keyed by slide number, and
  is applied last so it can never move a slide. The pulled slides shipped with
  notes written for their original decks (a keynote, a Session 2, a sequel);
  those are replaced.
- Speaker notes travel with each slide (`data-speaker-notes`), where the
  runtime picks them up for a presenter view. This static build has no in-deck
  notes panel, so there is no notes key.
- `P` toggles the thumbnail rail, so the slide runs edge to edge for a room.
  The choice sticks across reloads (per browser). Keys the runtime already
  owns: `←`/`→`/`↑`/`↓`/space to page, `Home`/`End`, `R` to restart, `1`–`9`
  to jump.

## Running order

| Slides | Chapter | Source |
| --- | --- | --- |
| 1–2 | Title and agenda | new |
| 3–16 | The argument: paradox, doom loop, the continuum, why it is organizational | `../intro/` |
| 17–28 | Getting airborne: the burden shift, the double loop, the files | `../airborne/` |
| 29–37 | The documents: how the roadmap steers the loop, and the hierarchy of intent | `../roadmaps/` |
| 38–46 | The actors, the demo, the debrief | `../airborne/` |
| 47 | Helicopter to jet divider | new |
| 48 | The loop grows into a graph (interactive) | new |
| 49 | The capability ladder | `../airborne/` |
| 50 | Kármán line divider (Atmosphere's copy, real photo) | new |
| 51–60 | Breaking atmosphere: the harness recap, the jet-fuel divider, Dhaka, the diagnosis, the cost curve, back to the continuum | `../atmosphere/` |
| 61 | The model, in one picture (progressive determinism flowchart) | new |
| 62–70 | What it needs, the three inventions, the orbit loop, and the frontier (incl. spawn) | `../atmosphere/` |
| 71–74 | The invitation and the close | new |

Only nine slides are new: title, agenda, the "this is organizational, not
personal" statement, the helicopter-to-jet divider, the loop-grows diagram, the
progressive-determinism flowchart, the invitation, the Go divider, and the two
close slides. Everything else is a source slide pulled intact, with its
original speaker notes.

## Slide 48 is interactive

Click the slide to walk the diagram through four stages: the loop, insert a node,
fan out and reduce, add a conditional edge. Arrow keys are deliberately left to
the deck, so nothing fights over them.

Restyled from a standalone prototype onto this palette. The prototype used four
hues for its node kinds; this system allows one accent, so magenta marks the two
nodes that guess (Plan, Build, Review) and the one edge that fails, the ink ramp
carries everything deterministic, and gates are told apart by a dashed diamond
rather than a fifth colour.

The current stage lives in `data-lg-stage` on the root, and the script rebuilds
any root that is not live. That matters because the runtime clones sections for
its thumbnail rail, and a clone inherits the markup but none of the handlers.

## How the sources were combined

**intro, airborne, and roadmaps** share this deck's architecture, so their
sections are copied verbatim. Only the footer changes: the left label is normalised and the
slide number is blanked so the stamper owns it.

**Six slides were React-templated** (`{{ }}` bindings fed by each deck's
`text/x-dc` script): intro 13, 14, 16 and airborne 19, 32. Two `x-dc` scripts
cannot coexist in one document, so those six were rendered in a headless browser
and inlined as static HTML. They look identical and no longer need a runtime.

**atmosphere** was authored on a 1280×720 canvas with a class-based stylesheet
rather than inline styles. Instead of redrawing those slides, each one is wrapped
in `.at-wrap` and scaled onto this deck's 1920×1080 stage. Atmosphere's own
stylesheet is inlined in the head, every selector scoped under `.at-wrap` so it
cannot leak. A small `fitAtmos()` in the head scales each wrapper: 1.5× for the
slides that fit, backing off on the one or two that run taller than 720 so
nothing clips.

## Accent bars

Every magenta rule sits 14px under its eyebrow (16px on dividers), matching the
Sponsored Moments reference deck, so the rule reads as an underline rather than a
floating dash. The source decks ran 28–56px, and the React-rendered slides used a
different CSS dialect again, so all 45 were measured in a headless browser and
normalised. If you paste in a new slide from an older deck, check that gap.

## Files

Static deck. `index.html` loads these by relative path, so keep them together:

- `deck-stage.js`, `support.js`, `image-slot.js` — the runtime
- `vendor/` — React, React DOM, Babel, vendored so the deck presents with no
  network. `window.__resources` in the head maps the CDN URLs to these copies.
- `fonts.css` + `fonts/` — vendored Manrope and JetBrains Mono, same reason
- `uploads/` — the F1 cockpit photo and the Kármán line earth-limb shot
- `kormo-images/` — the Dhaka set the atmosphere slides reference

`.nojekyll` stops GitHub Pages from running Jekyll over the files.

## Editing

No build step; edit `index.html` directly. Footer numbers stamp themselves from
each section's position, so inserting or deleting a slide never leaves a stale
number. To re-pull a slide from a source deck, copy its `<section>` across and
swap the footer's left-hand label.

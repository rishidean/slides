# Reaching Escape Velocity

*How to use agentic engineering to go from 10% to 10X more productive.*

Assembled from three existing decks rather than written fresh, and now carrying the hands-on part as
well. 111 slides in three contiguous modules.

| Module | Slides | Opens on |
| --- | --- | --- |
| The talk | 1–59 | the title |
| The practice | 60–88 | the practice divider, then the pre-work (61–65), then the frame, ground rules, the stages, and the capstone |
| The follow-ups | 89–111 | the Kármán line divider |

Nothing in the deck states a duration, a session count, or a count of parts. The parts are named rather
than numbered, so the deck runs in a tight container and a generous one without an edit, and the times
are voiced. Keep it that way: if you need to add or drop a stage, the copy around it should not need to
change.

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

## Where the slides came from

Historical, and it numbers the original assembly before the workshop build. The insertions below shifted
every number after them, and the later module pass moved the pre-work and the Kármán block, so treat this
table as provenance rather than as positions.

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

## The practice build

Two additions, neither of which touches the talk's argument. Every new slide carries `data-speaker-notes`
like the rest of the deck.

**Twelve slides of depth**, inserted after an anchor slide so the surrounding order is unchanged:

| Inserted after | What they add |
| --- | --- |
| Inside a Feature Spec | The cost of each blank field, the five-question readiness gate, the ways a spec fails, and how a draft is revised under critique |
| The Inner Loop | Separation of duties, the anatomy of a subagent, the anatomy of a skill, and why the two only work as a pair |
| What Just Happened | The orchestrator's decisions, the shapes it can arrange, and the failures that return success |
| Progressive determinism | Where a spec runs out, and why the measurement and the threshold are different jobs |


**The frame**, at 43–45: what the shape is, the product on screen, and what each person leaves with.

**The stages**, in Your Turn and in Appendices. A divider, ground rules, four stages at four slides each,
and a two-slide capstone. Every stage runs four beats: the idea, the contrast, the exercise, then the
artifact and the check, which share a slide. The stages are spec rigor, agents and skills, topology, and
judgment. Each carries an exercise, an artifact the participant commits, and a check they run on their own
work; the capstone turns the room onto their own projects.

**The pre-work**, in Appendices. A divider, the pieces, the loop run in detail, the project and the first
spec, and where the material lives. It is written to be sent before the first part, so the room does not
arrive cold.

The deck marks six sections, named only, with the internal subsection dividers given a lighter treatment
so they read as subordinate to the sections. Everything else is a source slide pulled intact, with its
original speaker notes.

## The loop-grows slide is interactive

Click the slide to walk the diagram through its stages: the loop, insert a node, fan out and reduce, add a
conditional edge. Arrow keys are deliberately left to the deck, so nothing fights over them.

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
- `deck-edit.js` — the rail's host, and the reorder bar (see Editing)
- `vendor/` — React, React DOM, Babel, vendored so the deck presents with no
  network. `window.__resources` in the head maps the CDN URLs to these copies.
- `fonts.css` + `fonts/` — vendored Manrope and JetBrains Mono, same reason
- `uploads/` — the F1 cockpit photo and the Kármán line earth-limb shot
- `kormo-images/` — the Dhaka set the atmosphere slides reference

`.nojekyll` stops GitHub Pages from running Jekyll over the files.

## Editing

No build step; edit `index.html` directly. Footer numbers stamp themselves from
each section's position, so inserting or deleting a slide never leaves a stale
number. `data-label` is what the rail displays, so keep it descriptive. To re-pull
a slide from a source deck, copy its `<section>` across and swap the footer's
left-hand label.

## Reordering from the rail
`deck-stage.js` ships the whole authoring rail: drag a thumbnail to reorder,
right-click for Move up / Move down / Duplicate / Delete / Skip, shift-click for a
range. None of it ran here, and the reason was one line in the runtime.

When `window.__dcUpdate` exists, the component assumes an editor host owns the
light DOM, so it emits a `dc-op` event, locks the rail, and waits for a
`{__dc_op_ack, applied}` reply. This page loads `support.js`, so `__dcUpdate`
exists, so every gesture emitted an op that nobody answered. Drag, move, delete
and duplicate were all silently dead.

`deck-edit.js` is that host. It applies the op to the light DOM, acks so the rail
unlocks, and keeps the arrangement in `localStorage` so a reload does not lose it.

Add `?author=1` to the URL for the export bar:
- **Download index.html** writes the reordered source, ready to commit. It is
  built from the file rather than the live DOM, so the runtime's mount-time
  attributes never reach disk: same bytes, new order, nothing else.
- **Copy order** puts the label list on the clipboard, for handing the order over.
- **Reset** drops the stored arrangement and returns to the file's order.

Without `?author=1` the bar is not built. Presenting is unaffected either way,
since the rail is hidden there. `window.deckEdit` exposes `order()` and
`buildFile()` in the console.

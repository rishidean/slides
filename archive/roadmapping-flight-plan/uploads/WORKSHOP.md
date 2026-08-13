# Flight Plan · workshop narrative

> Slide-by-slide outline with speaker notes. Airborne-style. Drop into the HTML deck pipeline, or present from this file directly.
>
> Running example: **PEDAL**, a consumer ride-hailing app for pedicabs in major cities. One example, end to end — the same roadmap you see on the slides is the repo you clone.
>
> Arc: Recap → Frame → What is a roadmap → The stack it controls → But it rots → So it survives change → Your turn.
>
> Refrain (recurs): *Slugs name what exists. The schedule names what's next. Neither one renumbers the other.*

---

## Slide 1 · COVER

**AUTHORING ROADMAPS FOR AGENTS · HANDS-ON WORKSHOP · 2026**

# Flight plan

Last session we got airborne. Today we build the map the loop flies: the roadmap your agent reads first, written so it survives every reprioritization you throw at it.

RISHI DEAN · `github.com/rishidean/agentic-roadmap`

**Speaker notes:** This is the sequel to *Getting Airborne*. That workshop built the engine — a loop that builds, verifies, and documents, unattended. It marched through a file called `roadmap.md`, and we treated that file as furniture. Today we earn it. The map is a PM artifact, so this one's for you.

---

## Slide 2 · HOW TO READ THIS · SELF-PACED

# Mapping the route.

Read straight through, or jump to the part you need.

- **Part 1 · The recap** — where we left off, and the one file that steered it all.
- **Part 2 · The frame** — what we're building today, and why the agent reads it first.
- **Part 3 · What is a roadmap** — the manifest and its anatomy.
- **Part 4 · The stack it controls** — the spec stack under each line.
- **Part 5 · But it rots** — the trap, if you're not careful.
- **Part 6 · So it survives change** — the convention, proven against three rounds of churn.
- **Part 7 · Your turn** — clone it, run two skills, do it to your own.

Every claim here is runnable — the repo is a real roadmap that survives three reprioritizations.

**Speaker notes:** Same shape as Airborne. Self-paced, jumpable. The payoff at the end is hands-on: you clone a repo and reprioritize a live roadmap without breaking a single reference. Tell them where we'll land so the theory has a destination.

---

## Slide 3 · A QUICK CAVEAT

# This is one way. Not the way.

There are many ways to make a roadmap legible to agents. This is a simplified version of what I do. The tools are moving fast, and some of this may even be outdated by the time you finish reading this deck!

Take the principles, not the syntax. The shape of the roadmap matters more than which file holds what.

**Speaker notes:** Lift Airborne's humility wholesale. People fixate on whether it's `roadmap.md` or a database or a Jira plugin. Doesn't matter. The convention is a few ideas; the files are just where I happen to put them. If you leave arguing about filenames I've failed.

---

## Slide 4 · PART ONE

# The recap

Where we left off in Airborne, and the one artifact that quietly steered the whole loop.

**Speaker notes:** Short part. Reset the shared context so newcomers aren't lost and veterans get a running start. Land on the handoff: the loop was the star last time, but a file we barely discussed was doing the steering.

---

## Slide 5 · THE AI ADOPTION CONTINUUM

# Think of AI adoption as modes of transport.

```
        GROUND  ·  same work, faster      │      AIR  ·  a different process
   ─────────────────────────────────────  │  ─────────────────────────────────
   Walking · Biking · Driving             │   Helicopter · Jet · Rocket
   ~10–20% faster                         │   10× faster, and a different shape
   95% of teams live here                 │   where the 10× live
```

Driving the tools harder gets you 10–20%. The 10× doesn't come from typing faster; it comes from leaving the ground — restructuring how you plan, build, and verify around what the agent can do.

**Speaker notes:** This is the frame from Airborne, brought back to re-anchor everyone. The point of the continuum: most teams are in ground transport, going a bit faster, and concluding that's all there is. The 10× teams changed their process, not their speed. Engineering and product are the helicopter — the first to leave the ground. (In the HTML deck this is the full continuum visual; here it's the text version.)

---

## Slide 6 · WE GOT AIRBORNE

# A loop that builds, verifies, and documents, unattended.

In Airborne we ran a real autonomous loop. A fresh agent woke up each sprint, did the work, checked it, wrote down what it learned, and handed off to the next sprint. No human at the keyboard.

The trick wasn't the model. It was the files: continuity lived in a handful of plain-text artifacts the loop read and rewrote, not in the model's memory.

**Visual (build note):** Bring back the Airborne double-loop diagram here as the recap — the outer loop marching through sprints, the inner build → verify → document. Show `roadmap.md` in its place in that system (the manifest the outer loop reads every turn to decide what's next), then **highlight it** — spotlight `roadmap.md` and dim the rest — so the room sees that this entire session zooms into that one artifact. It's the hand-off from "here's the whole machine" to "today, just this part."

**Speaker notes:** One-breath recap for the room. The headline from last time: the intelligence is in the scaffolding, not just the engine. Stateless sessions, real progress, because the files carried the state. Set this up so the next slide can point at the most important of those files.

---

## Slide 7 · THE ARTIFACT WE TOOK FOR GRANTED

# One file told the loop what to build next.

Every sprint, the agent opened the same file to decide what to do: the manifest. The roadmap. It was the state machine the whole loop marched through — and we treated it as given.

A flawless loop on a confused roadmap just builds the wrong things, efficiently. The engine was the easy half. Steering is this workshop.

**Speaker notes:** This is the bridge from Airborne to today. The loop is only as good as the map you hand it. Last session we admired the engine; today we author the steering. Name the stakes plainly: if the roadmap is illegible to the machine, the loop's autonomy works against you.

---

## Slide 8 · PART TWO

# The frame

What we're building today, why the agent reads it first, and what makes it trustworthy.

**Speaker notes:** Short part. Relocate the roadmap in their mental model — from "a slide for the leadership review" to "the index of the corpus my agent reads first." Then state the job and the four properties it has to hit.

---

## Slide 9 · THE INVERSION

# Your specs are no longer read by the people who wrote them.

For decades we wrote specs for humans, and machines scraped them as an afterthought. That's reversed. The agent is now the **primary reader**; the human view is generated on top.

The roadmap is the very top of that machine-readable corpus — the first thing the agent opens. If it's not legible to the machine, nothing downstream is.

*Ref: "The Context Inversion."*

**Speaker notes:** The seed insight, and the reason the room is here. One line: write for the machine, generate the human view. Then narrow it — of everything in the corpus, the roadmap is read first and reordered most. So it's where the inversion bites hardest, and where we start.

---

## Slide 10 · WHAT A TRUSTWORTHY CORPUS NEEDS · THE 4Cs

# Four properties, or the agent goes back to guessing.

From the Context Inversion: a base layer the agent can rely on has four properties.

- **Consolidated.** Synthesized once, not re-derived on every run.
- **Close-to-code.** Machine-native and structured, not a human narrative about the code.
- **Contextual.** In the repo, next to the code; no connector to go find it.
- **Current.** Regenerated or validated on change, so it can't drift.

Everything that follows builds a roadmap with all four. Miss one and the agent is back to stitching context at runtime, which is exactly what the inversion gets us out of.

*Ref: "The Context Inversion."*

**Speaker notes:** The inversion's payoff, stated as properties. These four are why the agent doesn't reconstruct the world every run — the synthesis happened once, in a format it reads, sitting where it can find it, kept honest by the build. Every team piling on connectors is trying to do at runtime what these do upfront. Keep it conceptual here; Parts 3 and 4 show exactly where each property lives in the roadmap and its stack. If your agent needs a search tool to find the roadmap, you've already failed Contextual.

---

## Slide 11 · WHAT THIS WORKSHOP DOES

# Build the roadmap for agents. Then scale it.

Two jobs today. First, author a roadmap an agent can read with zero reconstruction. Second, structure it so it survives going from one product area to many without rotting.

The bar: a fresh agent opens one file and immediately knows **what exists**, **what's next**, and **what to build right now** — no connector, no search, no stitching across five systems.

**Speaker notes:** Set the success criterion before the solution, so the design choices later read as inevitable. "Reconstruct nothing" is the whole game. "Scale it" is the second half people forget: the convention has to hold at one product and at fifty. The 4Cs from the last slide are the standard we're building to.

---

## Slide 12 · PART THREE

# What is a roadmap

Before we talk about what breaks, let's be precise about the artifact: what it's for, how it's laid out, and how the loop works it.

**Speaker notes:** This is the part the old version skipped, and it cost the rot section its punch. You can't appreciate the failure until you know the structure. Keep this descriptive — the anatomy, not yet the clever bit.

---

## Slide 13 · THE MANIFEST

# The list the agent reads to know what to build next.

A roadmap is the manifest for the loop. It holds the **epics** — the big goals — each broken into **sprints**, the slices that actually get built. The agent reads it, picks the next open sprint, and goes.

Everything else in the corpus hangs off a line in this file. Get this artifact right and the rest has somewhere to attach.

**Speaker notes:** Define the vocabulary cleanly: epic = a coherent goal you can state in one sentence; sprint = a buildable slice of that goal. The roadmap is the index; the specs are the chapters. Don't rush — half the room calls these different things at their company, so plant the terms you'll use for the rest of the deck.

---

## Slide 14 · THE ANATOMY

# Three questions, three sections.

A roadmap has to answer three things, and the file is laid out to match — here's PEDAL, our pedicab ride-hailing example:

```
## NOW → NEARBY-S2     NEXT → NEARBY-S3, BOOKING-S1   ← what's in flight

## SCHEDULE                                           ← what order
1. NEARBY  2. BOOKING  3. CHECKOUT  4. RIDE  5. RATINGS

## CATALOG                                            ← what exists
NEARBY · BOOKING · CHECKOUT · RIDE · RATINGS · NOTIFY
```

**What exists** (the catalog), **what order** (the schedule), **what's in flight** (the pointer). Three sections, read top to bottom.

**Speaker notes:** This is the map of the map. Walk it once: the pointer is what the agent acts on, the schedule is the priority call, the catalog is the inventory. The next slides take one section each, then show how the loop works the file. We're showing them the real PEDAL roadmap — the same one in the repo they'll clone.

---

## Slide 15 · SECTION 1 · CATALOG

# What exists.

Every epic that has ever existed, each with a permanent name. Unordered. The catalog answers one question — "is this a real thing?" — and nothing else.

```
## CATALOG  (every epic that exists · unordered)
| Epic     | What it is                  | Status | Depends on      |
|----------|-----------------------------|--------|-----------------|
| ACCOUNTS | Sign-up, profile, sign-in   | done   | —               |
| NEARBY   | Pedicabs on a live map      | active | ACCOUNTS        |
| BOOKING  | Request a ride              | todo   | NEARBY          |
| CHECKOUT | Pay the fare                | todo   | ACCOUNTS,BOOKING|
```

**Speaker notes:** The catalog is the dictionary. Note there's deliberately no order here — rows could be alphabetical, by creation, whatever. Status is a property of the thing, not its position. Hold the question of why the names look the way they do; we earn that later.

---

## Slide 16 · SECTION 2 · SCHEDULE

# What order.

A plain ordered list you rewrite freely. The number is the line's position, read at a glance — never written into the item itself.

```
## SCHEDULE  (the only place order lives · rewrite freely)
1. NEARBY     ← NOW (S2)
2. BOOKING
3. CHECKOUT
4. RIDE
```

Reorder by moving lines. That's the whole operation.

**Speaker notes:** Plant this carefully, because it pays off twice. The "1, 2, 3" is the line number, not data stored on the epic. When you drag CHECKOUT above BOOKING, you move a line; nothing else changes. The audience won't see why that matters until the rot section — for now, just establish that order lives here and only here.

---

## Slide 17 · SECTION 3 · SPRINTS

# The in-flight detail.

Inside an epic, sprints are a counter you append to: `CHECKOUT-S1`, `CHECKOUT-S2`. They run in creation order, and you rarely reference them weeks later.

```
| Sprint      | Scope                          | State |
|-------------|--------------------------------|-------|
| CHECKOUT-S1 | Card entry + charge happy path | done  |
| CHECKOUT-S2 | Saved payment methods          | done  |
| CHECKOUT-S3 | Tip selection                  | done  |
| CHECKOUT-S4 | Full fare breakdown            | active|
```

**Speaker notes:** Sprints are a sequence you extend, not a priority you reshuffle. That distinction — append vs. reorder — turns out to be the hinge of the whole convention, but don't tip it yet. Right now it's just "here's where the buildable slices live."

---

## Slide 18 · HOW THE AGENT WORKS THE FILE

# Read NOW, build it, tick it, pick up the next.

The top of the file is a pointer the agent reads on wake-up:

```
## NOW → NEARBY-S2     NEXT → NEARBY-S3, BOOKING-S1
```

A fresh session, with no memory of yesterday, runs the same cycle:

1. **Read NOW.** Take the sprint the pointer names — position 1's next open sprint.
2. **Build it.** Execute that sprint's spec.
3. **Tick it.** On success, flip the sprint's row to `done`; the checkbox ticks.
4. **Advance.** The pointer recomputes to the next open sprint, and the next session picks up there.

State lives in the file, not the model. The roadmap is the state machine the loop marches through, one ticked box at a time.

**Speaker notes:** This closes the anatomy by connecting it back to the loop from Part 1. The pointer is the entry point; the checkbox is the state transition. A stateless agent reads where the last one left off, builds one sprint, ticks the box, hands off — no memory required, because the file remembers. It's also why "done" must live in the file and never in your head: the agent only knows what the page says. Tie the "Advance" step to the schedule — the pointer is recomputed from line order, never stored, so finishing a sprint just surfaces the next one.

---

## Slide 19 · PART FOUR

# The stack it controls

The roadmap is the index. Under each line sits a four-artifact stack — the contract you author and the cache the agent regenerates.

**Speaker notes:** We've defined the roadmap and shown how the loop works it. Now: what each line points down into. This is where the Context Inversion's "operator authors source, system generates view" becomes concrete file paths, and where the 4Cs from Part 2 get their home.

---

## Slide 20 · CONTRACT ABOVE, CACHE BELOW

# Four artifacts per epic, split by one line.

Split by **who authors it** and **whether it survives**:

| Artifact            | Author   | Durability   | Path                                   |
|---------------------|----------|--------------|----------------------------------------|
| Epic spec           | operator | curated      | `specs/{SLUG}/{SLUG}.md`               |
| Sprint brief        | operator | durable      | `specs/{SLUG}/{SLUG}-S{n}.md`          |
| Functional design   | system   | regenerable  | `specs/{SLUG}/plans/{SLUG}-S{n}.design.md` |
| Implementation plan | system   | disposable   | `specs/{SLUG}/plans/{SLUG}-S{n}.plan.md`   |

You hand-write the top two: that's the **contract**. The agent derives the bottom two from the contract plus your code: that's the **cache**.

**Speaker notes:** The single most important line: if a plan ever contradicts the brief, the brief wins and the plan gets regenerated. You never edit the cache to record intent. Delete the whole `plans/` directory and the agent rebuilds it from your contract and the codebase, losing nothing, because intent was never stored there. This is "Current" from the 4Cs in practice.

---

## Slide 21 · WHY TWO OPERATOR DOCS

# The brief is intent. The design is elaboration.

They aren't the same document twice.

- **Sprint brief** (you): what this slice delivers, acceptance criteria, what's explicitly out of scope. The *contract*.
- **Functional design** (agent): edge cases, state transitions, data shapes — inferred by reading the actual codebase. The *elaboration*.

The brief constrains the design. The design can never overrule the brief.

**Speaker notes:** Answers the "isn't that redundant?" objection. The brief is small, durable, human-authored: the irreducible intent. The design is large, regenerable, code-aware: the agent's reading of how to honor that intent in this codebase. Different authors, different lifecycles, different jobs.

---

## Slide 22 · THE PROMOTION LADDER

# A sprint earns its detail as it approaches NOW.

```
listed     a row in the epic spec's sprint table
  briefed  operator writes {SLUG}-S{n}.md once the sprint is NEXT
  planned  agent generates .design.md + .plan.md once it is NOW
  built    agent executes the plan; commits key off SLUG-S{n}
  done     row flips to done; plans/ left as a build record
```

You brief one or two ahead and plan only the one in flight. The hand-authored surface stays small; the regenerable surface stays fresh.

**Speaker notes:** The answer to "do I have to spec everything up front?" No, and you shouldn't. Detail is expensive and rots if written too early. You write the brief when a sprint is NEXT, let the agent plan it when it's NOW. The `NOW → / NEXT →` pointer literally tells you what to brief next and what to plan now.

---

## Slide 23 · THE STACK, FOR REAL · CHECKOUT-S4

# At Helicopter, you write the brief. The agent writes the plan.

```
specs/CHECKOUT/
├── CHECKOUT.md              operator · epic spec        ┐ source
├── CHECKOUT-S4.md           operator · sprint brief     ┘ of truth
└── plans/
    ├── CHECKOUT-S4.design.md  system · functional design ┐ cache,
    └── CHECKOUT-S4.plan.md    system · implementation     ┘ regenerable
```

`CHECKOUT-S4` is in flight, so all four exist. Commits key off the slug: `feat(CHECKOUT-S4): full fare breakdown`.

**Speaker notes:** This is in the repo they'll clone — real files, not a mockup. CHECKOUT-S4 is the "show the full fare before you charge" sprint: base, distance, surge, booking fee, tip, all visible before the Confirm Ride button enables, reconciled against the final charge within a tolerance. A strong sprint to read end-to-end, brief through plan; surge transparency is a real, topical problem in this category.

---

## Slide 24 · PART FIVE

# But it rots

The artifact is clean on day one. Then you do the one thing you always do — reprioritize — and the obvious way to build it betrays you.

**Speaker notes:** The turn. Up to now everything looked tidy. Now we reveal the catch and pay off the "hold that question" moments from Part 3. This is the intellectual core; if they get it, they can rederive the whole convention.

---

## Slide 25 · YOU REORDER THIS WEEKLY

# The one constant is that the order changes.

A roadmap isn't written once. You reprioritize constantly — and hand a roadmap built for a human to an agent, and it hits three failures:

- **Renumber rot.** Build it the obvious way, numbering the epics, and one reorder gives you `E5, E9, E6, E11`. The numbers now lie.
- **The scavenger hunt.** The real order lives in your head and three tools. The agent picks one source and commits. You learn which in the build.
- **Drift.** "Done" lives in your memory, not the file. The agent reads a stale line and acts on it.

**Speaker notes:** Make it visceral. Everyone has shipped a roadmap where the epic numbers no longer sort. We laughed it off when a human read it — a human just re-derives the real order. The agent can't. It reads exactly what's on the page, every time, with no priors about your last standup. The numbering one is the deepest, so the next two slides dissect it.

---

## Slide 26 · IDENTITY vs POSITION

# Two properties that want opposite things.

Every roadmap item has two properties pulling against each other:

- **Identity** — what it *is*. Must **never** change, because commits, branches, and specs all point at it.
- **Position** — where it sits in line. Changes **constantly**, because you reprioritize.

One wants to be frozen. The other wants to move freely. The trouble starts the instant you make one token carry both.

**Speaker notes:** The fulcrum. Identity is a handle other things grab; position is a decision you revisit every week. They have opposite update rules. Any scheme that ignores that is borrowing trouble — and numbering the epics is exactly that scheme.

---

## Slide 27 · THE BUG, IN ONE NUMBER

# `E5` tries to be identity and position at once.

`E5` says "this is the fifth epic." That's a position pretending to be a name.

- Move it ahead of `E9` → the number now lies about where it sits.
- Renumber to fix the lie → every commit, branch, and spec that referenced `E5` rots.

One number doing two jobs can't win: every reorder forces a choice between a lie and a break.

**Speaker notes:** The "aha." The number isn't wrong because numbers are bad — it's wrong because it's doing two jobs with opposite update rules. The fix isn't a better numbering scheme. It's refusing to let one token be both. Which is exactly what the catalog/schedule split you saw in Part 3 was already doing — that's the next part.

---

## Slide 28 · PART SIX

# So it survives change

The convention's answer, and the proof: one roadmap, three rounds of change, zero broken references.

**Speaker notes:** Now we name the fix the anatomy was quietly implementing, and then stress-test it. This is the payoff section — the "watch nothing rot" moment that makes the whole thing land.

---

## Slide 29 · THE FIX

# Give each its own home.

Identity gets a name that never moves — a **slug**. Position gets a list you rewrite freely — the **schedule**. They never touch.

> Slugs name what exists. The schedule names what's next. Neither one renumbers the other.

You've already seen the shape of this: it's the catalog and schedule from Part 3. Now you know why they're separate.

**Speaker notes:** Land the refrain — say it out loud, slowly; the room will repeat it by the end. Then close the loop on Part 3 explicitly: the separation they took as "just the layout" was the entire fix. The catalog never holds order; the schedule never holds identity.

---

## Slide 30 · NAMING · WHY NO NUMBERS IS THE FEATURE

# A slug that can't be sorted reads as deliberate.

Rules: **1–3 words, UPPERCASE, no numbers.** `CHECKOUT`, `RIDE`, `REFUNDS`.

- `CHECKOUT, NEARBY, BOOKING` in any order reads as intentional — slugs have no natural sort, so nothing looks broken.
- `E9, E5, E6` reads as broken even when it's correct, because numbers beg to be sorted.
- A slug also says what the thing *is*. `CHECKOUT-S4` is self-documenting; `E5-S2` makes you go look up E5.

**Speaker notes:** The no-number rule feels arbitrary until this slide. The absence of a sort order is the feature: it removes the "this is out of order" signal entirely, because there was never an order to violate. And self-documentation is free — the agent never has to resolve `E5` to a meaning.

---

## Slide 31 · v1 → v2 · REORDER + INSERT

# Three line edits. Nothing renumbered.

- **ACCOUNTS done** → dropped from the schedule, status flipped in the catalog.
- **Inserted PLACES** — building BOOKING made it obvious you can't request a ride without searchable pickup and destination places. New catalog entry, slug dropped into the schedule.
- **Moved RIDE up** — test live ride tracking early against a mocked checkout. One line moved.

```
v1:  1.ACCOUNTS←done  2.NEARBY  3.BOOKING  4.CHECKOUT  5.RIDE  6.RATINGS
v2:  1.NEARBY  2.BOOKING  3.PLACES  4.RIDE  5.CHECKOUT  6.RATINGS
```

**Speaker notes:** These three are exactly the moves that used to produce `E9, E5, E6, E11`. Here they're three edits to one list, and every slug still points at the same thing it always did. NEARBY is NEARBY in every commit even as the line numbers around it churn. Insert costs nothing because the numbers were never real.

---

## Slide 32 · v2 → v3 · REOPEN + TOMBSTONE + NEW EPIC

# Three "the plan changed" events. Zero identifiers disturbed.

- **Tombstoned PLACES** — pickup and destination really belong inside booking, so the work folded into BOOKING. The slug stays in the catalog with `⛔` and a pointer.
- **Reopened CHECKOUT** — a fare-transparency pass found checkout charged before showing the full fare. Same goal, unfinished → flip `done → active`, append `CHECKOUT-S4`.
- **New epic REFUNDS** — returning money on a cancelled ride is a *different goal* that shares payment code → its own slug with `depends_on: CHECKOUT`.

**Speaker notes:** Three events, three rules, none touched an identifier. Walk each: a death that leaves a marked grave; a return from "done" with no fake version number; and a new thing that resists being called CHECKOUT2. The next two slides zoom into the two people get wrong.

---

## Slide 33 · THE ONE JUDGMENT CALL

# Reopen, or new epic? One test.

**Can you write a one-line goal for the new work that differs from the epic's original goal?**

- **Same goal, just unfinished → reopen.** CHECKOUT's goal: *let a rider pay for their ride, knowing the fare.* The missing fare breakdown is that same goal, undone. Flip to active, append a sprint. "Done" is a status you flip, not a sealed tomb.
- **Different goal, shared code → new epic.** REFUNDS' goal: *return money when a ride is cancelled or fails.* Different goal. New slug, `depends_on: CHECKOUT`.

**Never** `CHECKOUT2`. The `2` is position smuggled back in through the side door.

**Speaker notes:** The only real judgment call in the system, so spend a minute. The test is a one-liner: write the goal sentence. Matches the original → you weren't finished, reopen. A different sentence → new epic that happens to share code. `CHECKOUT2` fails because "the one after checkout" is a position wearing a name as a disguise.

---

## Slide 34 · TOMBSTONES

# A dead epic leaves a marked grave, never a silent gap.

When PLACES folded into BOOKING, it didn't vanish. It stayed in the catalog:

```
| PLACES | ⛔ folded into BOOKING | dead | — |
```

Delete the line and the next reader — human or agent — wonders what's missing and goes looking. The tombstone answers the question before it's asked: this was real, here's where the work went.

**Speaker notes:** Silence is the enemy. An agent reading a catalog with a hole in it can't tell a deliberate deletion from a sync error, so it reconstructs — exactly what we're preventing. A tombstone is one line that says "intentional, resolved, here's the pointer." Cheap insurance against a confused reader.

---

## Slide 35 · OPERATIONS CHEAT-SHEET

# Every change is one move.

| You want to…                         | You do…                                                   |
|--------------------------------------|-----------------------------------------------------------|
| Add or insert an epic                | Catalog entry + drop the slug anywhere in the schedule.   |
| Reorder                              | Rearrange the schedule list. That's the whole operation.  |
| Finish an epic                       | Flip catalog status to `done`, remove its schedule line.  |
| Kill an epic                         | Tombstone: `⛔` + a pointer to where the work went.       |
| Reopen finished work (same goal)     | Flip to `active`, append the next sprint. No new slug.    |
| New work that shares code (new goal) | New slug with a `depends_on`. Never `SLUG2`.              |

**Speaker notes:** The laminated card. Every row is a single, local edit — no cascading renumber, no cross-file reconciliation. That's the dividend of separating identity from position. Tell them to screenshot this slide; it's the whole convention operationalized.

---

## Slide 36 · PART SEVEN

# Your turn

A convention you can't run is a blog post. Here's the repo, two skills, and the exercise.

**Speaker notes:** Pivot to hands-on, the Airborne move. Everything until now was so this part lands. We give them the convention as executable skills, not a doc to admire.

---

## Slide 37 · TWO SKILLS

# One encodes the start. One encodes the change.

- **`create-roadmap`** — greenfield. Point it at a product description; it emits `roadmap.md` (NOW/NEXT + SCHEDULE + CATALOG) and the `specs/` scaffold, already in the convention.
- **`update-roadmap`** — the churn. Tell it "ship ACCOUNTS, pull RIDE up, we need refunds." It applies the right move per the cheat-sheet — reorder, insert, reopen, tombstone, or new epic — and never invents a `SLUG2`.

The convention isn't a doc you remember to follow. It's a skill that follows it for you.

**Speaker notes:** The inversion applied to the convention itself: don't hand-maintain the artifact, author the source and let a skill compile it. `create-roadmap` is the cold start; `update-roadmap` is what you run weekly. Be honest: these ship as v0 drafts in the repo — we'll harden them together. The design doc is in the repo if you want the intended behavior.

---

## Slide 38 · CLONE IT · THREE STEPS

# Copy the convention, generate one, run the churn.

```
your-product/
├── CONVENTIONS.md            the rules
├── CLAUDE.md                 standing map + rules (auto-loaded)
├── prompt.md                 the loop's per-turn marching orders
├── roadmap.md                NOW/NEXT · SCHEDULE · CATALOG
├── specs/
│   └── {SLUG}/
│       ├── {SLUG}.md             epic spec        (operator)
│       ├── {SLUG}-S{n}.md        sprint brief     (operator)
│       └── plans/                design + plan    (system)
└── .claude/skills/
    ├── create-roadmap/SKILL.md
    └── update-roadmap/SKILL.md
```

1. Drop `CONVENTIONS.md` into one product area.
2. Run `create-roadmap` on its description.
3. Run `update-roadmap` every time priorities move.

`github.com/rishidean/agentic-roadmap`

**Speaker notes:** Mirror Airborne's "three steps to your first run." Low floor: you don't reorganize the org, you do one product area. The repo they clone is PEDAL fully worked — three roadmap versions, the CHECKOUT spec stack, both skills. They can read a real one before authoring their own.

---

## Slide 39 · THE EXERCISE

# Take your messiest roadmap and try to break it.

1. Pick the product area whose roadmap reorders the most.
2. Express it once in the convention (or let `create-roadmap` do it).
3. Now reprioritize live — insert, reopen, kill something — and watch every commit, branch, and spec reference survive untouched.

If nothing rots, you're done. That's the test.

**Speaker notes:** Give them the falsifiable win. The whole pitch is "reorder freely and nothing breaks," so make them try to break it in the room. The aha is physical: you move four lines, every reference still resolves, and you realize the renumber tax you've paid for years was optional.

---

## Slide 40 · ANY SYSTEM OF RECORD

# You can build this out of anything.

Plain files are the lowest common denominator: they work with any agent, in any repo, with zero integration. But the format isn't the point — the convention is. Put it in Jira, Linear, Asana, a database, a spreadsheet. Identity in a permanent key, order in a view you rearrange, sprints appended underneath.

Your tracker probably already separates a stable issue key from a draggable rank. That separation *is* this convention. Most teams just don't treat it as sacred.

The tool changes. The idea doesn't: name what exists, derive what's next, never let one token do both.

**Speaker notes:** This is the Slide 3 caveat cashed out at the end, and it heads off the "but we live in Jira" objection. Jira already gives you `PEDAL-142` (a stable identity, a creation-order counter you never reorder) and a separate board rank (position) — which is exactly identity-apart-from-position. The files in this repo are the teaching version because they're legible to any agent with no connector; map the same convention onto whatever system of record you already run. Lowest common denominator first, then port the idea.

---

## Slide 41 · WHY THIS IS YOURS

# The roadmap was always the PM's. Now it's also the agent's first read.

In the agentic loop, the roadmap is two things at once: the priority artifact you've always owned, and the top of the corpus the agent reads before it builds anything. Engineering owns the loop. **You** own what the loop is pointed at.

If the map isn't legible to the machine, the loop flies blind — fast, and in the wrong direction.

**Speaker notes:** The "only you can fly the helicopter" beat from Airborne, retargeted at PMs. Don't outsource the roadmap's machine-legibility to engineering — it's an authoring decision, and authoring the priority artifact is the job. The convention is how you keep doing your job in a world where a machine reads it first.

---

## Slide 42 · THE ASK

# One product area. One roadmap in the convention. This quarter.

Pick the area whose priorities churn the most — the one that produces `E9, E5, E6, E11`. Express it once in the convention and run the loop against it.

Stop hand-maintaining order. **Author identity; derive position.**

> Slugs name what exists. The schedule names what's next. Neither one renumbers the other.

**Speaker notes:** Concrete, small, time-boxed — same as Airborne's 90-day ask. Not "reorganize everything," just one roadmap, the messiest one, this quarter. Close on the refrain one last time; by now the room can say it with you. End there.

---

# Appendix

Optional reference for those implementing.

---

## Slide A1 · ANTI-PATTERNS

# The ways position sneaks back in.

- **Numbers as position** at any layer you reorder. The whole problem.
- **The `2` suffix.** `CHECKOUT2` — position disguised as identity.
- **Storing the ordinal on the epic** (`CHECKOUT (3)` in the catalog). Now order lives in two places and drifts on the first reorder.
- **Emojis as IDs.** Unsortable, untypeable, render inconsistently across terminals and agents. (`⛔` is a status marker, not an ID.)
- **Deleting dead epics.** A silent gap reads as missing. Tombstone instead.

**Speaker notes:** The relapses. Every one is position trying to re-enter through a side door after you evicted it from the front. The `2` suffix is the most common and the most seductive because it feels like a name. It isn't.

---

## Slide A2 · THE FILES

# What ships in the repo.

- `CONVENTIONS.md` — the full rules.
- `roadmap.v1 → v2 → v3.md` — the worked example, evolving. Each has a "what changed since" block; the diffs are the lesson.
- `specs/CHECKOUT/` — a full spec stack on one active sprint: epic → brief → design → plan.
- `specs/REFUNDS/` — the new-epic case, with the boundary that explains why it isn't `CHECKOUT2`.
- `skills/create-roadmap`, `skills/update-roadmap` — v0 drafts; `SKILLS-DESIGN.md` has the intended behavior.
- `CLAUDE.md` + `prompt.md` — how the convention wires into the loop: `CLAUDE.md` is the standing map and rules, `prompt.md` is the per-turn traversal of `roadmap.md`.

**Speaker notes:** Orient them in the repo so reading it isn't a maze. Suggested order: README, then CONVENTIONS, then walk v1→v2→v3 to watch the convention absorb change, then open `specs/CHECKOUT/` to see the full operator-to-agent handoff on one sprint.

---

## Slide A3 · DIVISION OF LABOR

# Three files, three jobs.

- **`prompt.md` owns the loop.** The verb: "read `roadmap.md`, take NOW, read its spec stack, build, verify, on success tick the row and advance, on failure mark blocked." The per-turn traversal of `roadmap.md`. This is where the roadmap mechanics live; you don't re-describe the read/tick/advance cycle anywhere else.
- **`CLAUDE.md` owns the standing map and rules.** The nouns and the laws: where specs live (`specs/{SLUG}/`), contract-above-cache (brief wins over plan), the slug/identity rules, the definition of done, and a pointer to `CONVENTIONS.md`. It is not the loop.
- **`roadmap.md` is state.** `CONVENTIONS.md` is the full ruleset `CLAUDE.md` points at.

Each is referenced once, never duplicated — duplication across them is the drift the convention exists to prevent.

**Speaker notes:** For implementers. The trap is putting the loop steps in `CLAUDE.md` (now two files describe the traversal, and they drift), or the file layout in `prompt.md`. Procedure in `prompt.md`, structure in `CLAUDE.md`, state in `roadmap.md`, rules in `CONVENTIONS.md`. Both `prompt.md` and `CLAUDE.md` point at `roadmap.md`, but for different reasons — `prompt.md` says how to traverse it this turn, `CLAUDE.md` says it's the source of truth — which matters in ad-hoc sessions where `prompt.md` never runs.

---

## Slide A4 · THE PRINCIPLES, NOT THE SYNTAX

# Filenames change. These don't.

1. **Identity apart from position.** Name what exists; derive what's next.
2. **No numbers where you reorder.** Slugs for epics, a list for order.
3. **Contract above, cache below.** Hand-author intent; regenerate the rest.
4. **Earn detail late.** Brief at NEXT, plan at NOW.
5. **Mark the graves.** Tombstone, never delete.

This is my way. The syntax will change; these won't.

**Speaker notes:** Close the appendix the way Airborne did — the durable principles abstracted from the specific files. If someone reimplements this in a database or a different tool, these five are what they must preserve. Everything else is negotiable.

---

*Slugs name what exists. The schedule names what's next. Neither one renumbers the other.*

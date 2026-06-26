# Part 2: Workshop Exercise — Office Lunch Poll

## Overview

The audience builds a simple web-based lunch poll app using the Double Loop. You narrate each piece as they encounter it, then run the loop live. They see:
- Sprint 1: one-shot basic functionality (visual result immediately)
- Sprint 2: a feature addition (visible change)
- Sprint 3: QA rejects the build (RED → fix → GREEN cycle)
- Sprint 4: polish (if time allows)

---

## The Artifacts

### File Structure (what goes in the repo)

```
lunch-poll/
├── run.sh                      # The orchestrator
├── prompt.md                   # Marching orders
├── roadmap.md                  # The manifest
├── PROGRESS.md                 # Starts empty
├── CLAUDE.md                   # Broad context
├── specs/
│   ├── sprint-1.md             # Basic poll page
│   ├── sprint-2.md             # Live results chart
│   ├── sprint-3.md             # One-vote restriction (QA will catch a bug)
│   └── sprint-4.md             # Countdown timer
└── .claude/
    └── skills/
        ├── SKILL.md            # run-qa orchestrator
        ├── linter.md           # lint subagent
        ├── code-reviewer.md    # review subagent
        └── playwright-tester.md # e2e subagent
```

---

## File Contents

### `run.sh`

```bash
#!/usr/bin/env bash
set -euo pipefail

MAX=4; n=0

echo ""
echo "🚁 THE LOOP — starting..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📋 Current manifest:"
echo ""
cat roadmap.md
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

while grep -q '^- \[ \]' roadmap.md && (( n < MAX )); do
  n=$((n+1))
  echo ""
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "🔄 SPRINT $n — launching fresh session..."
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo ""
  
  claude -p "$(cat prompt.md)" || { echo "❌ Session error — stopping."; break; }
  
  echo ""
  echo "📋 Manifest after sprint $n:"
  echo ""
  cat roadmap.md
  echo ""
  
  if grep -q '^- \[!\]' roadmap.md; then
    echo "🚨 BLOCKED — human needed. Stopping."
    break
  fi
  
  echo "✅ Sprint $n complete."
  echo ""
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🏁 DONE — $n sprint(s) attempted"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📝 Memory accumulated:"
echo ""
cat PROGRESS.md
echo ""
```

---

### `CLAUDE.md`

```markdown
# Office Lunch Poll

A simple single-page web app where the team votes on where to eat lunch.

## Tech Stack
- Vanilla HTML + CSS + JavaScript (single index.html file)
- No frameworks, no build tools, no dependencies
- All state in localStorage (no backend)

## Conventions
- Keep everything in one `index.html` file (inline CSS and JS)
- Mobile-friendly (flexbox, responsive)
- Clean, modern UI — use system fonts, subtle shadows, rounded corners
- Color palette: warm neutrals with one accent color for interactive elements

## Definition of Done
Not done until `run-qa` returns GREEN.
If RED, read the failures, fix them, and re-run. Never declare done on a RED.
```

---

### `prompt.md`

```markdown
# Sprint Turn

Read `roadmap.md` and pick the first sprint marked `[ ]`.
Read that sprint's spec (linked in the roadmap) and read `PROGRESS.md` for prior context.

Build the feature per the spec.

Then run the `run-qa` skill until it returns GREEN (max 3 attempts).

When GREEN:
- Mark the sprint `[x]` in `roadmap.md`.
- Append a handoff to `PROGRESS.md`: what you built, key decisions, gotchas, what the next sprint needs to know.

If you can't reach GREEN after 3 attempts:
- Mark the sprint `[!]` in `roadmap.md`, then stop.

Updating the sprint status is your final action — never skip it.
```

---

### `roadmap.md`

```markdown
# Office Lunch Poll — Roadmap

- [ ] Sprint 1: Basic poll page — specs/sprint-1.md
- [ ] Sprint 2: Live results bar chart — specs/sprint-2.md
- [ ] Sprint 3: One vote per person — specs/sprint-3.md
- [ ] Sprint 4: Voting countdown timer — specs/sprint-4.md
```

---

### `PROGRESS.md`

```markdown
# Progress Log
```

*(Starts empty — the Builder fills this after each sprint.)*

---

### `specs/sprint-1.md`

```markdown
# Sprint 1: Basic Poll Page

## What to build
A single-page lunch poll showing 4 restaurant options. Users can click to vote. Vote counts display next to each option.

## Acceptance Criteria
- [ ] Page displays a title: "🍽️ Where should we eat?"
- [ ] 4 restaurant options displayed as cards/buttons: "Tacos El Pastor", "Sushi House", "Pizza Roma", "Burger Joint"
- [ ] Each option shows a vote count (starts at 0)
- [ ] Clicking an option increments its vote count by 1
- [ ] Votes persist in localStorage (survive page refresh)
- [ ] Page is responsive and looks good on mobile

## Technical Notes
- Single index.html file, inline CSS and JS
- Use localStorage key "lunchPollVotes" to store a JSON object of counts
- On page load, read from localStorage; if empty, initialize all to 0
```

---

### `specs/sprint-2.md`

```markdown
# Sprint 2: Live Results Bar Chart

## What to build
Add a horizontal bar chart below the voting buttons that visualizes the current vote distribution. Updates immediately when someone votes.

## Acceptance Criteria
- [ ] Horizontal bar chart appears below the voting cards
- [ ] Each bar is labeled with the restaurant name and vote count
- [ ] Bar widths are proportional to vote counts (widest bar = 100% width)
- [ ] Bars animate/transition when a vote is cast (CSS transition, 0.3s)
- [ ] If all counts are 0, bars show as empty (0 width) with the label still visible
- [ ] Chart updates instantly on vote (no page refresh needed)

## Technical Notes
- Pure CSS bars (div width as percentage)
- Calculate percentage: (count / maxCount) * 100, or 0 if all are 0
- Add a section element below the voting area
```

---

### `specs/sprint-3.md`

```markdown
# Sprint 3: One Vote Per Person

## What to build
Restrict each user to one vote total. Once they've voted, they can see results but can't vote again. Show a "You voted for X" confirmation state.

## Acceptance Criteria
- [ ] After voting, the user sees a confirmation: "✅ You voted for [restaurant]!"
- [ ] Voting buttons become disabled/unclickable after voting
- [ ] The voted choice is visually highlighted (e.g., border or background change)
- [ ] The restriction persists across page refreshes (stored in localStorage)
- [ ] A "Reset my vote" link exists at the bottom (small, subtle) that clears the restriction and decrements the count
- [ ] The bar chart still displays and updates even after the user has voted

## Technical Notes
- Store the user's vote in localStorage key "lunchPollMyVote" (value = restaurant name, or null)
- On page load: if myVote exists, render the "already voted" state
- IMPORTANT: When "Reset my vote" is clicked, it must BOTH clear "lunchPollMyVote" AND decrement the count for that restaurant in "lunchPollVotes". These must happen atomically — do not clear the vote without decrementing.
- The disabled state should be CSS-based (pointer-events: none, opacity reduction)
```

**Why QA will likely catch something here:** The interaction between "Reset my vote" and the vote count is a common source of bugs. The agent might:
- Forget to decrement the count on reset
- Decrement the wrong restaurant
- Allow the count to go negative
- Not re-enable the buttons after reset

The e2e test (see below) specifically checks the reset flow, so if the agent gets it wrong, QA goes RED and it has to fix it. This is the moment the audience sees the RED → fix → GREEN cycle live.

---

### `specs/sprint-4.md`

```markdown
# Sprint 4: Voting Countdown Timer

## What to build
Add a countdown timer that shows when voting closes. When the timer hits zero, voting is disabled for everyone (regardless of whether they've voted).

## Acceptance Criteria
- [ ] A countdown timer displays prominently at the top of the page
- [ ] Timer counts down to 12:00 PM (noon) of the current day
- [ ] Format: "Voting closes in: Xh Ym Zs" (updates every second)
- [ ] If current time is past noon, display "Voting is closed" and disable all buttons
- [ ] When timer reaches 0, buttons disable without page refresh
- [ ] If voting is closed, the bar chart still displays (read-only mode)

## Technical Notes
- Use setInterval (1 second) for the countdown
- Calculate target: today at 12:00:00 local time
- If time remaining <= 0, set closed state
- Closed state: add a CSS class that dims the voting section and disables interaction
```

---

## QA Agents

### `.claude/skills/SKILL.md`

```markdown
---
name: run-qa
description: Full QA pass — lint, code review, e2e. Returns one GREEN/RED verdict. Use before declaring any change done.
---

# run-qa

Run these in order. Each is a subagent; use its returned message as the result.

1. Delegate to `linter`.
2. Delegate to `code-reviewer`.
3. Delegate to `playwright-tester`.

Verdict:
- Any lint error, any CRITICAL review finding, or any failed spec → **RED**. List what failed.
- Otherwise → **GREEN**.

If RED: fix the reported issues, then re-run from step 1.
Stop after 3 attempts. If still RED, report the remaining failures to the human and stop.
```

---

### `.claude/skills/linter.md`

```markdown
---
name: linter
description: Validates HTML structure and checks for JS errors. Auto-fixes trivial issues.
tools: Read, Edit, Bash
model: sonnet
---

Run validation on `index.html`:
1. Check that the HTML is well-formed (matching tags, proper nesting)
2. Run `node --check` on any inline script content (extract to temp file if needed)
3. Check for obvious issues: unclosed strings, missing semicolons in critical spots, undefined variables

Auto-fix trivial violations (formatting, whitespace).
For anything needing a judgment call, leave it and report it.

Return "CLEAN" if no errors remain, otherwise the list of remaining errors with location.
```

---

### `.claude/skills/code-reviewer.md`

```markdown
---
name: code-reviewer
description: Reviews the current changes for bugs, logic errors, and UX issues. Read-only.
tools: Read, Grep, Glob
model: sonnet
---

Review `index.html` against the current sprint spec. Do not change any files.

Check for:
- Logic bugs (especially around localStorage read/write)
- State management issues (stale data, race conditions)
- UX problems (buttons that don't disable properly, counts that go negative)
- Missing acceptance criteria from the spec

Return findings as:
- CRITICAL — bugs, data corruption, broken functionality
- WARN — likely problems, edge cases not handled
- NIT — style, naming

For each: describe the issue and a one-line fix suggestion.
If nothing found, return "CLEAN".
```

---

### `.claude/skills/playwright-tester.md`

```markdown
---
name: playwright-tester
description: Runs behavioral tests against the lunch poll app.
tools: Read, Bash
model: sonnet
---

Write and run a Playwright test file that verifies the current sprint's acceptance criteria.

Test approach:
1. Create a test file `test-poll.spec.js` based on the current sprint spec
2. Open `index.html` using a file:// URL or a simple local server
3. Test each acceptance criterion from the spec

Key test scenarios for Sprint 3 (if applicable):
- Vote for a restaurant → verify count increments
- Verify buttons become disabled after voting
- Verify "You voted for X" message appears
- Click "Reset my vote" → verify count decrements by exactly 1
- After reset → verify buttons are re-enabled
- After reset → verify user can vote again
- Verify count never goes below 0

Return:
- "GREEN" if all specs pass.
- Otherwise "RED" plus, for each failure: the test name, the assertion that failed, and what actually happened.

Include enough detail that someone who did not see the run can fix it.
```

---

## Workshop Flow (Part 2 Script)

### Setup (before you start Part 2)

Everyone clones the repo. Verify they have Claude Code installed and working. The repo has everything EXCEPT `specs/sprint-1.md` — you'll write that together.

Actually — give them all 4 specs pre-written. The exercise is about understanding the LOOP, not about writing specs (that's the follow-up lesson). Writing Sprint 1's spec together would eat 10 minutes you need for the live demo.

### The Narration + Demo

**Beat 1: "Let me show you what's in here"** (5 min)
- Walk through the file structure on screen
- Open CLAUDE.md: "This is the broad context — who we are, what we're building, and the definition of done."
- Open prompt.md: "This is what every session reads first — its marching orders."
- Open roadmap.md: "This is the manifest. Four unchecked boxes. That's our state machine."
- Open specs/sprint-1.md: "This is the specific context for the first sprint. This is where your brain matters."

**Beat 2: "Now let me show you the actors"** (3 min)
- Open the agents folder: "Three QA specialists. Linter, reviewer, tester. They don't build — they verify."
- Open SKILL.md: "This is the bridge — it runs all three in sequence and returns GREEN or RED."
- "The Builder (Claude Code) does the work. The QA Crew checks it. The skill connects them."

**Beat 3: "And the orchestrator"** (2 min)
- Open run.sh: "Ten lines of bash. It's dumb on purpose."
- Walk through the logic: "While there are unchecked boxes... launch a session... check if blocked... repeat."
- "That's it. That's the whole system. Files plus a dumb loop."

**Beat 4: "Let's run it."** (10-15 min)
- Run `./run.sh` on the projector
- Sprint 1 executes: narrate what's happening ("It's reading the manifest... picking Sprint 1... reading the spec... building... now it's invoking QA...")
- Sprint 1 goes GREEN: "Look — the checkbox ticked. Let's look at PROGRESS.md — it wrote a handoff."
- Open the browser, show the lunch poll page working
- "That's Sprint 1. One shot. Let's keep going."

**Beat 5: "Sprint 2 — adding the chart"** (5 min)
- The loop continues automatically (or you re-run)
- Sprint 2 executes, goes GREEN
- Refresh the browser: "Look — bar chart appeared. The system read Sprint 2's spec and added it."

**Beat 6: "Sprint 3 — this is where it gets interesting"** (10 min)
- Sprint 3 executes (one-vote restriction)
- QA returns RED: "There it is. The reviewer or tester caught something."
- Show the RED output on screen: "It found a bug in the reset logic. Watch what happens next..."
- The Builder reads the failure, fixes it, re-runs QA
- QA returns GREEN: "Fixed itself. That's the inner loop — RED, fix, re-run, GREEN."
- "This is why the QA gate matters. Without it, that bug ships. With it, the system catches and fixes its own mistakes."

**Beat 7: Debrief** (5 min)
- Show the final roadmap.md (3 checked, 1 remaining)
- Show PROGRESS.md (3 handoff entries)
- Show the working app in the browser
- "Three sprints. One bug caught and fixed. Zero human intervention. That's Helicopter."

### If Sprint 3 doesn't go RED naturally:

The spec is designed to trigger a bug, but AI is unpredictable. If it somehow nails Sprint 3 on the first try:
- Option A: That's fine — say "Sometimes it gets it right. The point is the gate EXISTS. When it doesn't get it right, the system catches it."
- Option B: Have a backup — manually introduce a subtle bug before Sprint 3 runs (comment out the decrement line), then let QA catch it.

---

## Timing Estimate

| Section | Time |
|---------|------|
| Beat 1: Walk through files | 5 min |
| Beat 2: Show actors | 3 min |
| Beat 3: Show orchestrator | 2 min |
| Beat 4: Sprint 1 live | 10-15 min |
| Beat 5: Sprint 2 live | 5 min |
| Beat 6: Sprint 3 + RED cycle | 10 min |
| Beat 7: Debrief | 5 min |
| **Total Part 2** | **~40-45 min** |

This leaves time for Part 1 (15-20 min) and Part 3 (10-15 min) in a 75-90 minute session.

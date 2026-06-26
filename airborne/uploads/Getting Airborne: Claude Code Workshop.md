# Getting Airborne: Claude Code Workshop
## Full Talk Narrative — Mexico City Engineers

---

## PART 0: PRE-WORK (Send 3-5 days before)

### Message to the team:

---

**Subject: Workshop prep — "Getting Airborne" (30 min setup needed)**

Hey team,

Next [day] we're doing a hands-on workshop on agentic development with Claude Code. This isn't a lecture — you'll be running code live. To make that work, I need you to do a few things beforehand.

**What to install:**

1. **Claude Code CLI** — if you don't already have it:
   ```
   npm install -g @anthropic-ai/claude-code
   ```
   Verify it works: `claude --version`

2. **Node.js 18+** — you probably have this. Verify: `node --version`

3. **Playwright** — for the automated testing:
   ```
   npm install -g playwright
   npx playwright install chromium
   ```

**What to clone:**

I've set up a repo with everything we'll use:
```
git clone [REPO_URL]
cd lunch-poll
```

Take 10 minutes to look through the files. Don't run anything yet — just read. Pay attention to:
- `CLAUDE.md` — what does this tell you about the project?
- `prompt.md` — what instructions is the agent getting?
- `roadmap.md` — what's the plan?
- `specs/` folder — open Sprint 1's spec and read it

You don't need to understand everything. Just familiarize yourself with the structure. The workshop will make it click.

**What to think about:**

One question to come with: "What's the dumbest repetitive task I do every week that I wish I could hand off?" We'll come back to that at the end.

See you [day].

— Rishi

---

### Checklist (for you):

- [ ] Repo created and pushed with all artifacts
- [ ] Verify run.sh works end-to-end on your machine (dry run)
- [ ] Verify Playwright tests actually catch the Sprint 3 bug (test the failure case)
- [ ] Have a backup plan if WiFi is slow (screen-record a successful run as fallback video)
- [ ] Projector/screen setup for live terminal + browser side by side
- [ ] Confirm everyone has Claude Code access (API keys, org permissions)

---

## PART 1: THE FRAME (15-20 min)

---

### Slide 1: Cold Open

**Visual:** Black slide. White text. Nothing else.

> "In two years, half the engineers in this room will be doing a different job. The half who chose to."

**Say:** [Pause. Let it land.] I mean that literally. Not "different company." Different job. The role of engineer is splitting into two tracks right now, and the fork is happening whether we talk about it or not. Today is about making sure you're on the right side of that fork.

---

### Slide 2: The Paradox

**Visual:** Two stats, large font, side by side:

```
95% of businesses          Solo builders shipping
failing to see             in a week what used to
meaningful AI returns      take a quarter
```

**Say:** Both of these are true at the same time. MIT researchers, Nobel laureates, McKinsey — they all measured and found almost no productivity gain from AI. And yet, some practitioners are seeing 10x, 50x improvements. How can both be true? That's the question.

---

### Slide 3: The AI Adoption Continuum

**Visual:** Horizontal continuum with vehicle icons. Clean, left to right:

```
🚶 Walking → 🚲 Biking → 🚗 Driving → 🚁 Helicopter → ✈️ Commercial Pilot → 🚀 Astronaut
```

Below each, one line:
- Walking: No AI
- Biking: ChatGPT for tasks
- Driving: AI-native IDEs & workflows
- Helicopter: Changing how we work
- Commercial Pilot: Changing the system
- Astronaut: Questioning the structure

**Say:** This is the map. The 95% who see no gains? They're at Biking and Driving. They bought tools, trained people, and called it transformation. But Driving is still ground transport — you're doing the same work the same way, just faster. The gains live here [point to Helicopter and beyond]. Helicopter is where you cross from "better tools" to "different process." It's not a faster car. It's a different dimension of movement.

---

### Slide 4: Where We Are

**Visual:** The same continuum, with a "YOU ARE HERE" marker on Driving.

**Say:** Most of this office is here. You've adopted Claude, Copilot, AI-native workflows. That's good. But it's still ground transport. The gains from Driving are real — 10, maybe 20% faster. Not transformative. Not the 10x that the solo builders are seeing. The difference isn't talent. It's mode of transport.

---

### Slide 5: The Shift

**Visual:** Two boxes side by side:

```
GROUND TRANSPORT              AIRBORNE
─────────────────             ────────
Better tools                  Different process
Same workflow, faster         New workflow entirely
You write code with AI help   AI writes code, you write specs
Incremental                   Transformational
```

**Say:** This is the shift we're making today. Ground to air. It's not about typing faster or getting better autocomplete. It's about restructuring how you plan, build, verify, and ship — around what AI makes possible. That's Helicopter.

---

### Slide 6: Why You

**Visual:** The continuum again, with "Engineering Leaders" labeled under Helicopter.

**Say:** Look at who owns each level. Walking through Driving — that's IT. They buy tools, they roll them out. But Helicopter? That's owned by Engineering Leaders. Not the CTO. Not the VP. The people in this room. The org can't get airborne unless individuals do. And the individuals who get there first become the leaders who pull everyone else up. I want you to be those leaders.

---

### Slide 7: Today's Mission

**Visual:** Simple, centered:

```
Today is about getting airborne.
```

**Say:** By the end of this session, you'll have run a multi-sprint, self-verifying, autonomous development loop with your own hands. You'll have gone from Driving to Helicopter in two hours. And you'll have a system you can take back to your service tomorrow. Let's go.

---

## PART 2: THE DOUBLE LOOP (40-45 min)

---

### Slide 8: The Insight

**Visual:** Black slide, white text:

> "The orchestration stopped being code and became files plus a dumb loop."

**Say:** Here's the thing nobody tells you about working at Helicopter. It's not complicated. There's no framework to install. No platform to configure. No new language to learn. It's six files and a bash script. The whole system is legible because every piece does one thing. Let me show you.

---

### Slide 9: The System

**Visual:** Three columns:

```
SETUP                    ACTORS                   ORCHESTRATOR
─────                    ──────                   ────────────
Broad Context            The Builder              A bash script
Specific Context         The QA Crew (×3)         (10 lines)
Manifest                 The Skill (bridge)
```

**Say:** That's the whole architecture. Setup is what the system knows before it starts. Actors are who does the work. The orchestrator keeps it moving. Before we go into the details, let me show you how they fit together.

---

### Slide 9b: The Full Loop (Topology)

**Visual:** The Double Loop diagram (your existing diagram — outer loop and inner loop).

**Say:** Here's the full topology. One loop inside another. The outer loop marches through sprints — fresh brain each time. The inner loop is one session: build, QA, document. Build the feature. QA checks it — if RED, fix and re-check. If GREEN, tick the manifest, write a handoff note, and the outer loop moves to the next sprint. That's it. Three verbs: build, verify, document. One cycle. Now let me show you each piece up close — and you're going to see it in the repo you cloned.

---

### Slide 10: Broad Context

**Visual:** File icon + key contents:

```
BROAD CONTEXT — "who we are and how we work"

• Project architecture & conventions
• Marching orders (what to do each session)
• Definition of done

Implementation: CLAUDE.md + prompt.md
```

**Say:** Open CLAUDE.md in your repo. [Pause while they do.] This is everything that's true for every sprint. Tech stack, conventions, and most importantly — the definition of done. "Not done until run-qa returns GREEN." That one line is what makes the whole system work. It's the constraint that forces quality.

Now open prompt.md. [Pause.] This is what the Builder reads at the start of every session. Same instructions every time. The variable isn't the prompt — it's the state of the project. The prompt is the method. The specs are the content.

---

### Slide 11: Specific Context

**Visual:** File icon + key contents:

```
SPECIFIC CONTEXT — "what to build this turn"

• One spec per sprint
• Acceptance criteria
• Technical approach
• Edge cases

Implementation: specs/ directory
```

**Say:** Open specs/sprint-1.md. [Pause.] This is where YOUR engineering judgment lives. The spec defines what to build, how to verify it, and what to watch out for. A good spec makes the build trivial. A vague spec makes it unpredictable. This is the Helicopter skill — writing specs well. At Driving, you write code. At Helicopter, you write specs. Your brain moves up the stack.

---

### Slide 12: Manifest

**Visual:** The actual roadmap content:

```
MANIFEST — "what's done and what's next"

- [ ] Sprint 1: Basic poll page
- [ ] Sprint 2: Live results bar chart
- [ ] Sprint 3: One vote per person
- [ ] Sprint 4: Voting countdown timer

Implementation: roadmap.md
```

**Say:** Open roadmap.md. [Pause.] Three characters per line. That's your state machine. The orchestrator reads this to know if there's work left. The Builder reads it to know what to pick up. You read it to know where things stand. After each sprint, the checkbox ticks automatically. If something gets stuck, it marks `[!]` and stops. This file IS your project status.

---

### Slide 13: The Builder

**Visual:** Actor diagram — stick figure with label:

```
THE BUILDER
(main Claude Code session)

Reads: broad context + spec + manifest
Does: builds the feature
Then: invokes QA
Finally: updates manifest + writes memory
```

**Say:** The Builder is just a Claude Code session. One session, one sprint. Fresh brain every time. It reads everything it needs, builds the thing, checks its own work, and hands off to the next turn. No accumulated confusion. No context window bloat. Clean slate, every time.

---

### Slide 14: The QA Crew

**Visual:** Three small figures with labels:

```
THE QA CREW — 3 subagents

🔍 Linter          📋 Code Reviewer       🧪 E2E Tester
Formatting &       Bugs & security        Behavior &
style              (read-only)            acceptance criteria
```

**Say:** Open the .claude/skills folder. Three specialists. They don't build — they verify. Each has one job and a narrow scope. The linter catches formatting. The reviewer catches bugs. The tester catches broken behavior. They run on a cheaper, faster model because they don't need to reason deeply — they just need to check. Together they're your automated code review.

---

### Slide 15: The Skill (Bridge)

**Visual:** Flow diagram:

```
Builder finishes → invokes run-qa → Lint → Review → Test → GREEN/RED
                                                            ↓
                                                     RED → fix → re-run (max 3)
```

**Say:** Open SKILL.md. The skill is the bridge. When the Builder finishes coding, it calls run-qa. The skill runs all three QA agents in sequence and returns one verdict: GREEN or RED. If RED, the Builder reads the failures, fixes them, and tries again. Up to 3 attempts. If still RED after 3, it marks the sprint blocked and stops. That's your signal to step in. This is the quality gate. Nothing passes without it.

---

### Slide 16: The Orchestrator

**Visual:** The actual bash script, syntax-highlighted:

```bash
#!/usr/bin/env bash
set -euo pipefail
MAX=4; n=0
while grep -q '^- \[ \]' roadmap.md && (( n < MAX )); do
  n=$((n+1)); echo "=== sprint $n ==="
  claude -p "$(cat prompt.md)" || { echo "session error"; break; }
  grep -q '^- \[!\]' roadmap.md && { echo "blocked"; break; }
done
echo "done — $n sprint(s)"
```

**Say:** Open run.sh. Read it. It's a while loop. While there are unchecked boxes and we haven't hit the max: launch a Claude session with the prompt. If anything gets blocked, stop. That's it. That's the orchestrator. It's dumb on purpose — all the intelligence is in the files it reads. Ten lines of bash running a multi-sprint autonomous development pipeline.

---

### Slide 17: The Double Loop

**Visual:** Your Double Loop diagram (the one you already made).

**Say:** Two loops. The outer one — the bash script — marches through sprints. Fresh brain each turn. The inner one — a single session — builds, verifies, and either passes or fixes until it does. Together they can execute an entire feature set unattended. Let me show you.

---

### Slide 18: "Let's run it."

**Visual:** Terminal screenshot or just:

```
$ ./run.sh
```

**Say:** Watch the projector. I'm going to run this and we're going to watch it build a lunch poll app from scratch. Four sprints. Zero human intervention. Let's see what happens.

**[LIVE DEMO BEGINS]**

---

### During the demo (no slides — projector shows terminal + browser):

**Sprint 1 running:**
"It's reading the manifest... picking Sprint 1... reading the spec... now it's building. Watch — it's writing the HTML, the CSS, the JavaScript. Now it's invoking QA... linter running... reviewer running... tester running..."

**Sprint 1 GREEN:**
"GREEN. Look at the manifest — checkbox ticked. Let's look at PROGRESS.md — it wrote a handoff note. And let's see the app..."
[Open browser, show the poll page working]
"Four restaurants, vote buttons, counts. One sprint, one shot. Let's keep going."

**Sprint 2 running:**
"Fresh session. New brain. But it reads PROGRESS.md first — it knows what Sprint 1 built. Now it's reading Sprint 2's spec... adding the bar chart..."

**Sprint 2 GREEN:**
[Refresh browser]
"Bar chart. Animates on vote. The system read a spec and added a feature. No human touched the code."

**Sprint 3 running:**
"This one's interesting. One-vote restriction with a reset button. There's a subtle interaction between resetting your vote and decrementing the count. Let's see if it gets it right..."

**Sprint 3 RED (hopefully):**
"RED. [Point to screen] Look — the tester caught it. [Read the failure.] The reset clears the vote but doesn't decrement the count. Classic state management bug. Now watch — it reads the failure, understands the issue, and fixes it..."

**Sprint 3 re-run → GREEN:**
"Fixed. GREEN on attempt 2. That's the inner loop in action — RED, fix, re-run, GREEN. Without the QA gate, that bug ships. With it, the system catches and fixes its own mistakes."

[If Sprint 3 goes GREEN on first try: "Sometimes it nails it. The point isn't that it always fails — it's that the gate EXISTS. When it doesn't get it right, the system catches it. You don't have to."]

---

### Slide 19: Debrief

**Visual:** Three artifacts side by side:

```
roadmap.md              PROGRESS.md              The App
─────────────           ────────────             ───────
- [x] Sprint 1         Sprint 1: built basic    [screenshot]
- [x] Sprint 2         poll, localStorage...
- [x] Sprint 3         Sprint 2: added chart,
- [ ] Sprint 4         CSS transitions...
                        Sprint 3: added vote
                        restriction, fixed
                        reset bug on attempt 2
```

**Say:** Three sprints executed. One bug caught and fixed. Memory accumulated across sessions. A working app in the browser. Zero human intervention after I hit enter. That's the Double Loop. That's Helicopter.

---

### Slide 20: What Just Changed

**Visual:** Two-column comparison:

```
DRIVING (before today)              HELICOPTER (what you just saw)
──────────────────────              ─────────────────────────────
You write code with AI help         AI writes code, you write specs
You review every line               You review at checkpoints
Quality = your eyeballs             Quality = automated QA crew
One session, one task               Multi-session, memory, continuity
You are the builder                 You are the architect
```

**Say:** Your role just changed. You went from "engineer who types faster" to "engineer who directs a system." That's not incremental. That's a different job. A better job. And you can start doing it tomorrow.

---

## PART 3: LOOKING AHEAD (10-15 min)

---

### Slide 21: You Just Got Airborne

**Visual:** The continuum with the marker moved from Driving to Helicopter.

**Say:** An hour ago you were Driving. Now you've seen — and run — the system that gets you airborne. The gap between those two isn't talent. It's method. You have the method now.

---

### Slide 22: The Acceleration

**Visual:** Timeline:

```
Walking → Biking:     ~1 year (2024)
Biking → Driving:     ~6 months (early 2025)
Driving → Helicopter: 2 hours (today)
```

**Say:** Notice the compression. Each transition took less time than the last. You're accelerating. And the people who get airborne now have a compounding advantage — every week at Helicopter makes the next week more productive. The gap between Driving and Helicopter isn't closing. It's widening.

---

### Slide 23: Why This Matters to the Org

**Visual:** The continuum with ownership labels highlighted:

```
Driving (IT) → Helicopter (Engineering Leaders) → Commercial Pilot (CTO/VP)
```

**Say:** The org can't get to Commercial Pilot — system-wide transformation — until Helicopter is proven. You are the proof point. When you ship a feature using this method, you're not just delivering faster. You're demonstrating that a different way of working is possible. That's what pulls the org forward. That's leadership.

---

### Slide 24: The Path Forward

**Visual:** Three-row progression:

```
HELICOPTER (you, now)
Ship features using the loop. Prove it works on your service.

COMMERCIAL PILOT (the team, next)
The loop becomes the team's default. Specs become the interface between roles.

ASTRONAUT (the org, eventually)
Headcount models change. The company operates differently.
```

**Say:** Helicopter is where you prove it. Commercial Pilot is where it scales. Astronaut is where the company transforms. But it starts with one engineer, one service, one loop. It starts with you.

---

### Slide 25: One Ask

**Visual:** Large, centered:

```
90 days.
Every service gets a CLAUDE.md and a run-qa skill.
```

**Say:** One thing from this office in 90 days. Every service gets broad context and a quality gate. That's it. Once those exist, the loop becomes possible. Once the loop is possible, you're airborne. Once you're airborne, you're the leader who pulls the org to Commercial Pilot.

Remember the question I asked you to come with? "What's the dumbest repetitive task you do every week?" That's your first spec. Write it this week. Run the loop on it. See what happens.

---

### Slide 26: Close

**Visual:** Black slide. White text. Same as the open.

> "In two years, half the engineers in this room will be doing a different job. The half who chose to."

**Say:** You just chose. Keep climbing.

---

## APPENDIX: Slide Count & Timing

| Section | Slides | Time |
|---------|--------|------|
| Part 0 (pre-work) | — | Sent beforehand |
| Part 1: The Frame | Slides 1-7 | 15-20 min |
| Part 2: The Double Loop | Slides 8-20 | 40-45 min |
| Part 3: Looking Ahead | Slides 21-26 | 10-15 min |
| **Total** | **26 slides** | **~70-80 min** |

Buffer for Q&A: 10-15 min at the end.
Total session: 90 min.

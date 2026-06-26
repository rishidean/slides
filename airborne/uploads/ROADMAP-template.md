# [Project Name] — Roadmap

> The manifest. The loop reads this to know what to do next; humans read it to see the whole arc.
> *(This is a teaching template — replace the bracketed bits with your project.)*

## Structure

- **Epic** — a major milestone with a clear deliverable outcome.
- **Sprint** — a focused unit of work inside an Epic. Each points to a spec: `specs/epicN/sprintN-name.md`.
- **Feature** — a specific capability inside a larger Sprint: `specs/epicN/FEAT-N.N-name.md`.

---

## Epic Overview

*The dashboard. One row per Epic — the bird's-eye view.*

| Epic | Theme | Goal | Status |
|---|---|---|---|
| 0 | Setup | Schema, scaffold, environment connected — a standing skeleton | ✅ Done |
| 1 | Core CRUD | Read/write every entity through the UI — usable manually, no AI yet | ✅ Done |
| 2 | AI Bridge | Every operation agent-callable; command-mode UX | 🟡 Active |
| 3 | Memory & Context | Cross-session memory, layered context, a learning loop | 🔲 Not started |

*Legend: ✅ done · 🟡 active · 🔲 not started · ⏸️ parked*

---

## Artifacts

*The upstream "Looks Like" + "Extract" specs the build rests on. The roadmap points; these define.*

| Type | Artifact | Status |
|---|---|---|
| Vision | `docs/vision.md` | ✅ |
| Flows & business logic | `docs/specs/flows.md` | ✅ |
| Data / schema | `db/schema.yaml` | ✅ |
| Looks-like prototype | `design/prototype/` | ✅ |
| Architecture | `docs/specs/architecture.md` | 🟡 |

---

## Epic 0 — Setup
**Goal:** a standing skeleton the rest can build on.

- [x] Sprint 1 — Schema + seed data — `specs/epic0/sprint1-schema.md`
- [x] Sprint 2 — App scaffold + environment — `specs/epic0/sprint2-scaffold.md`

**Outcome:** app builds, connects to the DB, loads representative data.

---

## Epic 1 — Core CRUD
**Goal:** fully usable in manual mode — no AI, but a real tool.

- [x] Sprint 1 — Read-only views — `specs/epic1/sprint1-read.md`
- [x] Sprint 2 — Create + edit — `specs/epic1/sprint2-write.md`
- [x] Sprint 3 — Filters + detail drill-down — `specs/epic1/sprint3-filters.md`

**Outcome:** every entity is readable and writable through the UI.

---

## Epic 2 — AI Bridge   ← ACTIVE
**Goal:** every operation an agent can call; drive the app by typing.

**Start condition:** Epic 1 stable and dogfooded for a week.
*(Epics can gate on a human checkpoint, not just on prior code.)*

- [x] Sprint 1 — Tool library: wrap each CRUD op as an agent-callable tool — `specs/epic2/sprint1-tools.md`
- [ ] Sprint 2 — Command-mode UI — `specs/epic2/sprint2-command.md`
- [ ] Sprint 3 — Multi-intent parsing — `specs/epic2/sprint3-intents.md`

**Outcome:** the user can drive the whole app with a typed request.

---

## Parked / Future

*Resurrected once the core is solid and real usage teaches us more.*

- **External channels** — Telegram / Slack ingress. Gated on the AI Bridge being stable.
- **Specialist agents** — routing intents to sub-agents (PM, research, comms).

---

## Current Status

*The living handoff — where things actually stand. Update at the end of each session.*

**Active:** Epic 2, Sprint 2 (Command-mode UI). Epics 0–1 complete and dogfooded.
**Last shipped:** Epic 2 · Sprint 1 — tool library; all CRUD ops now agent-callable, tests green.
**Next:** Command-mode UI (`specs/epic2/sprint2-command.md`), then multi-intent parsing.
**Open human gates:** pick a 2-week dogfooding window before starting Epic 3.
**Stack:** [model] via API; secrets in [env var].

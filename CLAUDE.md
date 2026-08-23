# CLAUDE.md — Inkwake

This file is auto-loaded by Claude Code at the start of every session. It defines the project context, active standards, and behavioural contract for all AI work on this project.

---

## Session Start Protocol

At the start of every session Claude must:

1. Begin every response with `[CX]` — signals context is active
2. On the first response, declare standards as **not yet loaded**
3. Read `coding-standards/index.md` — loads the full standards map — only on the first turn that actually touches a file (edit, create, or a request needing a convention). Conversational, planning, or review-only turns never trigger this read.
4. Once loaded, confirm active standards below and declare them loaded from that point on

If `[CX]` is ever missing from a response the session has lost context. Stop immediately, discard the response, and start a new session.

---

## Repo Shape

This is **one repo containing three independent Next.js apps**, built as a CSS-framework benchmark (see `project-plan.md`). The same landing page is built three times — identical DOM intent, identical business-logic JS, identical content — varying only the CSS framework and its native JS idiom:

| App | CSS framework | UI-state JS idiom |
|---|---|---|
| `tailwind-app/` | Tailwind CSS | Alpine.js (self-hosted, `public/vendor/`) |
| `bootstrap-app/` | Bootstrap (raw/unpurged) | Bootstrap bundle JS (self-hosted, `public/vendor/`) |
| `strata-app/` | Strata CSS | Strata `data-st-*` attributes + `public/strata.components.js` |

Each app has its own `CLAUDE.md` with its app-specific standards table — read it when working inside that app. This root file covers what's shared across all three.

---

## Active Standards (shared across all three apps)

| Standard | Active |
|---|---|
| CSS standard | `coding-standards/css-standards.md` |
| HTML standard | `coding-standards/html-standards.md` |
| Script standard | `coding-standards/ts-standards.md` (all three apps are `--ts` Next.js) |
| Git standard | `coding-standards/git-standards.md` |
| Versioning standard | `coding-standards/versioning-standards.md` |
| SEO standard | `coding-standards/seo-standards.md` |
| Performance standard | `coding-standards/performance-standards.md` |
| Accessibility standard | `coding-standards/accessibility-standards.md` |
| QA standard | `coding-standards/qa/index.md` |
| AI standard | `coding-standards/ai-standards.md` |
| Framework | Next.js 16 (App Router) — all three apps |
| CSS Framework | varies per app — see that app's own `CLAUDE.md` and the table above |

**Resolved (AI-12, 2026-08-24):** custom CSS class signature (per `coding-standards/css-standards.md` RULE 11) is **`iw-`** (short for Inkwake), shared across all three apps — e.g. `iw-marquee`. Applies only to hand-written custom CSS classes (the last resort per RULE 18); framework/utility classes are unaffected.

---

## Business-Logic vs UI-State JS (guardrail from project-plan.md)

- **Business logic JS must be identical** across all three apps — do not let framework idiom leak into it.
- **UI-state JS (menu toggle, accordion, tabs, etc.) uses each framework's native idiom** — this is a measured variable for the benchmark, not something to normalize away. Do not "fix" Bootstrap's bundle-JS approach to look like Alpine's, or vice versa.
- **No CDN-hosted assets anywhere** — everything self-hosted from the same origin per app (`public/vendor/` or `public/` root, per app's existing convention).

---

## How to Load Standards Per File

Before editing any file identify its role using the table in `coding-standards/index.md` then load:

1. The relevant discipline global standard (`css-standards.md`, `html-standards.md`, etc.)
2. The relevant file-role partial (`css-standards/component-files.md`, etc.)
3. The relevant framework file if applicable (`frameworks/bootstrap.md` for `bootstrap-app/`)

Never edit a file without loading its standard chain first.

---

## AI Behavioural Contract

- Every response starts with `[CX]`
- First response of every session declares standards as not-yet-loaded; standards load lazily on first file-touching turn, not eagerly at session start
- No restating the task before acting
- No trailing summaries after completing work
- No filler phrases
- No invented rules — gaps in standards are flagged to the developer
- Full rules in `coding-standards/ai-standards.md`

---

## Parallel-Session Coordination

Not active yet. If work on the three apps is ever split across parallel Claude sessions (e.g. one session per app), read `.claude/skills/role-session/SKILL.md` and set up `handover/` (board, locks, per-role handovers) before claiming work — never touch a file that's part of shared or locked work without going through that protocol first.

---

## Project State

Step 1 (environment/infra) is done: all three apps scaffolded, each builds and serves its framework's placeholder "Hello World" correctly. GitHub repo creation and Vercel deploys are not yet done. See `project-plan.md` for the full step list and `handover.md` (once created) for session-to-session state.

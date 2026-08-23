@AGENTS.md

---

## Project-Specific Context (Inkwake — bootstrap-app)

Shared session protocol, standards list, and guardrails live in the repo-root `CLAUDE.md` — read that first. This table is this app's specifics.

| Property | Value |
|---|---|
| Project name | Inkwake — Bootstrap variant |
| Framework | Next.js 16.3.2 (App Router, TypeScript, `src/` dir) |
| CSS framework | Bootstrap, raw/unpurged (as-shipped — explicitly the "default install" comparison, not "optimized Bootstrap") |
| Script standard | TypeScript only |
| UI-state JS idiom | Bootstrap bundle JS, self-hosted at `public/vendor/bootstrap.bundle.min.js`, loaded via `<script defer>` in `src/app/layout.tsx` — never via CDN |
| Framework standards file | `coding-standards/frameworks/bootstrap.md` — load before touching Bootstrap markup/classes |
| CSS token prefix | not yet decided — flag before inventing one |
| Selector signature | not yet decided — flag before inventing one |
| Token file | none yet |
| Global stylesheet | `src/app/globals.css` + `public/vendor/bootstrap.min.css` |
| Entry scripts | `src/app/layout.tsx`, `src/app/page.tsx` |

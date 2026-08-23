@AGENTS.md

---

## Project-Specific Context (Inkwake — tailwind-app)

Shared session protocol, standards list, and guardrails live in the repo-root `CLAUDE.md` — read that first. This table is this app's specifics.

| Property | Value |
|---|---|
| Project name | Inkwake — Tailwind variant |
| Framework | Next.js 16.3.2 (App Router, TypeScript, `src/` dir) |
| CSS framework | Tailwind CSS |
| Script standard | TypeScript only |
| UI-state JS idiom | Alpine.js, self-hosted at `public/vendor/alpine.min.js`, loaded via `<script defer>` in `src/app/layout.tsx` — never via CDN |
| CSS token prefix | not yet decided — flag before inventing one |
| Selector signature | not yet decided — flag before inventing one |
| Token file | none yet |
| Global stylesheet | `src/app/globals.css` |
| Entry scripts | `src/app/layout.tsx`, `src/app/page.tsx` |

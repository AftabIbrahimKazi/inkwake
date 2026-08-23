@AGENTS.md

---

## Project-Specific Context (Inkwake — strata-app)

Shared session protocol, standards list, and guardrails live in the repo-root `CLAUDE.md` — read that first. This table is this app's specifics.

| Property | Value |
|---|---|
| Project name | Inkwake — Strata variant |
| Framework | Next.js 16.3.2 (App Router, TypeScript, `src/` dir) |
| CSS framework | Strata CSS (`strata-css` npm package, PostCSS JIT) |
| Script standard | TypeScript only |
| UI-state JS idiom | Strata's `data-st-*` attributes — never toggle classes for state; runtime is `public/strata.components.js` |
| Library skill | `.claude/skills/strata-css/SKILL.md` — read before debugging or extending Strata usage/components |
| Build | `npm run dev` runs `strata-css --watch` + `next dev` concurrently; `npm run build` runs `strata-css --build` before `next build` |
| CSS token prefix | Strata's own `--st-*` variables (see `node_modules/strata-css/README.md` → CSS Variables Reference) — do not introduce a second custom prefix without flagging it |
| Selector signature | not yet decided beyond Strata's own class conventions |
| Token file | `strata.config.js` (`theme.colors`, `theme.breakpoints`) |
| Global stylesheet | `strata.css` (entry, `@strata` directives) → builds to `public/strata.output.css` |
| Entry scripts | `src/app/layout.tsx`, `src/app/page.tsx` |

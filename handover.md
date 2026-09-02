# Handover — Inkwake

Updated: 2026-09-02 · Branch: `dev` (4 ahead of `master`) · Repo: https://github.com/AftabIbrahimKazi/inkwake

**`project-guide/project-plan.md` is the source of truth for this project.**

## Current state

Step 4 is complete, committed and deployed. All three apps are live and publicly reachable, each serving 19 sections:

| App | URL |
|---|---|
| tailwind | https://inkwake-tailwind.vercel.app |
| bootstrap | https://bootstrap-app-phi.vercel.app |
| strata | https://strata-app-ten.vercel.app |

`master` is still at Steps 1–3 and needs a PR from `dev` (git standard G-03 forbids direct pushes). strata-app runs strata-css **1.9.0**. A production payload audit exists as an artifact: https://claude.ai/code/artifact/6920904b-865d-4680-9ced-723fcab50992

## Last session

Committed and deployed all three apps; audited real production payloads; wrote two specs for the Strata framework (`strata-variant-system.md`, `strata-utility-gaps.md` — both now largely superseded, see Next steps); upgraded strata-css to 1.9.0 and synced ai-dev-kit.

## Decisions & why

- **Benchmark headline is payload, not the Lighthouse composite** — 412 KB of byte-identical React/Next JS in all three apps swamps the CSS variable; the composite score mostly grades what was deliberately held constant.
- **Strata's variant syntax is the class form (`hover:bg-primary`), not the attribute form** — the attribute form measured better (constant atomic CSS, ~12% less gzipped HTML) but Shopify theme-editor class fields and Liquid `link_to` accept a class string only. Deployment constraint beats byte measurement.
- **Dual syntax rejected** — measured 18% worse total; gzip rewards repetition and mixing forms destroys it.
- **Utility additions judged on cross-theme recurrence, not usage counts** — `backdrop-filter` and `background-clip: text` forced hand-written CSS here and were still rejected as theme-specific; `line-clamp`/`text-wrap` scored zero uses and were still accepted.
- **`coding-standards/frameworks/bootstrap.md` is not synced from ai-dev-kit** — the kit adds nothing to it, and the local copy carries the 2026-08-24 exception permitting raw Bootstrap utilities in `bootstrap-app`.
- **Bootstrap/Strata theming uses CSS-variable overrides, not new classes** — each framework's sanctioned theming API.

### Root-cause facts worth not rediscovering

- **Unlayered CSS beats every `@layer` regardless of specificity.** Layer order is evaluated before specificity, so an unlayered base-state rule silently suppresses a layered `:hover` rule. This is why `a { color: inherit }` defeated every `text-*` utility site-wide. To override a state you must name the state.
- **Strata's JIT scanner only reads string literals written textually inside a `class`/`className` attribute.** Class names held in data arrays or objects elsewhere in the file are invisible to it, even in the same file.
- **Bootstrap's `.ratio > *` stretches every direct child** — wrap overlay content in a single child. (Fixed in Strata 1.9.0, which scopes the fill rule to replaced elements; still live in bootstrap-app.)
- **Tailwind/Bootstrap grid-span mosaics need spans summing to exactly the column count per row** — a mismatch leaves a gap, not a wrap.

## Known issues

- **bootstrap-app: 20 style classes unplaced** after a markup reconstruction — `iw-bg-surface` ×7, `iw-promo-panel` ×7, `iw-accordion-button` ×3, plus `iw-icon-btn`, `iw-brand-gradient`, `iw-accordion` ×1 each. Symptom: panels missing surface backgrounds, gradient tiles rendering flat; bootstrap renders 66 buttons where the other two render 77. Mapping them from tailwind failed (bootstrap uses `.table` and other structures where tailwind uses cards) — each needs visual confirmation against the live URL.
- **All three apps still titled "Create Next App"** in production (`src/app/layout.tsx` metadata). Will sink the Lighthouse SEO category.
- **`strata.components.js` is 259 bytes because `@strata-packages/*` are not installed.** The build warns every run. With them installed it is ~43.9 KB. The payload report leans on that 259 bytes as Strata's decisive JS win, so the figure currently measures an incomplete install.
- **No images anywhere** — Step 5 not started, so all payload figures are a pre-asset baseline.

## Next steps

1. **Fix bootstrap-app's 20 unplaced classes.** Open https://bootstrap-app-phi.vercel.app, name what looks wrong, fix per element. Inference already failed once here — a named symptom pins the element far faster.
2. **Decide the `@strata-packages/*` question** — installing them makes the benchmark honest but narrows Strata's total-weight lead. Whichever way, the payload report needs updating to say which was measured.
3. **Fix the `Create Next App` metadata** in all three `layout.tsx` (content must stay identical across apps).
4. **Step 5 — asset swap.** Placeholder gradients everywhere; real imagery will move LCP substantially.
5. **PR `dev` → `master`.**
6. Optional: delete or commit `strata-variant-system.md` and `strata-utility-gaps.md` — strata-css 1.9.0 shipped their scope (variant system, `aspect-*`, `w-md-[40%]`, zero-declaration warning). Their residual value is the deferred/rejected family analysis.

## Don't touch / gotchas

- `bootstrap-app`'s `<body>` needs its `app-body` class (specificity workaround vs Bootstrap's own `body{}` rule).
- `public/js/ink-cursor.js` is identical across all three apps by design — copy-diff, don't hand-edit separately.
- `bootstrap-app/public/js/mega-menu.js` and `strata-app/public/js/interactions.js` both drive a shared `#iwMegaShell` height computed **once** from the max category height — never re-set it per hover/switch, that reintroduces the border-refade bug.
- `bootstrap-app` keeps `iw-header-bar` in markup as a **JS hook only** — it carries no CSS; `mega-menu.js` queries it.
- Mobile nav drawer (fixed right, 320px via `--iw-size-drawer`, backdrop) is intentionally identical across all three — a deliberate, user-approved exception to the "UI-state JS stays framework-native" guardrail.
- strata-app's `npm run build` already runs `strata:build` first — no need to run it separately.

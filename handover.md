# Handover — Inkwake

Updated: 2026-08-27 · Branch: master · Repo: https://github.com/AftabIbrahimKazi/inkwake (public, pushed)

**`project -guide/project-plan.md` is the source of truth for this project.**

## Current state

Step 4 (22 sections) is fully built and verified in **all three apps** — tailwind-app (:3000), bootstrap-app (:3001), strata-app (:3002). Sections 1/2/22 (alert bar, mega menu, mega footer) were already done from Step 3; this run added the remaining 19 in each app. Each app is strictly single-framework: tailwind-app uses only Tailwind utilities + Alpine, bootstrap-app only Bootstrap classes/components (plus token-level `--bs-*` variable overrides, not new classes), strata-app only Strata utilities/components (plus `--st-*` variable overrides). All three render with zero console/hydration errors and matching content/order. **Uncommitted** — nothing from this build has been committed yet.

User pasted a Lighthouse run for strata-app (dev server) showing FCP 1.2s/0.99, Speed Index 2.0s/0.99, LCP 2.6s/0.88 (JSON was truncated before CLS/TBT). Not yet discussed — see Next steps.

## Last session

Built tailwind-app's 19 sections first, audited them (screenshot-driven, not eyeballing) and fixed real bugs, then ported to bootstrap-app and strata-app per the new per-app-sequential workflow (see Decisions). User then asked for real e-commerce mechanics (prices, add-to-cart, product-tied reviews) instead of abstract SaaS-pattern content, applied across all three. Each port surfaced and fixed its own framework-specific rendering bugs (below).

## Decisions & why

- **Workflow is sequential per app, not simultaneous**: build/verify a feature fully in tailwind-app first, then port to bootstrap-app, then strata-app — no more triple-checking every small change across all three at once. User directive, 2026-08-25.
- **Bootstrap/Strata color theming uses variable overrides, not new classes**: both frameworks' own color utilities (`text-primary`/`bg-primary`/etc., and Bootstrap's `.btn-primary`) are driven by CSS custom properties (`--bs-primary`/`--st-primary`); overriding those (not writing new component classes) is each framework's own sanctioned theming API. User-approved for bootstrap-app; then confirmed as the right approach for strata-app too after `strata.config.js`'s `theme.colors` turned out to be a non-functional no-op in the installed version (verified by reading the framework source — not wired to any generated CSS).
- **Existing header/footer/mega-menu components were retrofitted to pure framework utilities** in bootstrap-app and strata-app, stripping custom CSS down to only what's structurally impossible as a utility (pseudo-classes/state selectors — never expressible as utilities in either framework; backdrop-filter, background-clip, animations — zero utility coverage in both, confirmed via strata's own `coverage.js`).

### Root-cause bugs worth not rediscovering
- **Strata's JIT scanner (`node_modules/strata-css/src/scanner/scanner.js`) only extracts class names from string literals written *textually inside* a `className=`/`class=` attribute** — it never scans plain data objects/arrays declared elsewhere in the file, even in the same file. Any "store class names in a data array, interpolate by variable" pattern is invisible to it. Fix: inline the literal strings directly in the className expression (ternary chains work — the scanner recurses into `${...}` interpolations).
- **`a { color: inherit }` (or any bare-tag base reset) is unlayered CSS, and unlayered always beats layered utilities** regardless of specificity — this was silently defeating every `text-*` color utility on every `<a>` tag site-wide in strata-app (invisible white-on-white buttons/links). Removed the color reset; kept only `text-decoration: none`.
- **Bootstrap's/Strata's `.ratio > *` rule stretches every direct child to fill the tile** — any element with more than one direct child inside `.ratio`/`ratio-*` gets ALL of them stretched (a circular play button became a giant ellipse). Fix: wrap all overlay content in a single child so only that one absorbs the stretch.
- **Strata's `bg-opacity-25` sets a CSS variable that `bg-primary` never reads** (confirmed via compiled output — `bg-primary` is a plain `background-color: var(--st-primary)`, no opacity formula) — genuine framework no-op, not a usage mistake. Use `bg-primary-subtle` instead.
- **Tailwind/Bootstrap grid-span mosaics need spans summing to exactly the column count per row** — a mismatched sum leaves a broken empty gap at the row's end, not a wrapped tile.

## Known issues

- None currently open against the verified build. All three apps' working trees have this session's changes **uncommitted**.

## Next steps

1. Discuss the pasted Lighthouse result for strata-app — clarify whether it was a dev-server run (likely, given no mention of a production build) vs. the production build Step 6 actually calls for, and whether to chase the LCP number now or wait until Step 5/6.
2. Review and commit this session's work (all three apps' Step 4 sections + header/footer utility retrofits) before starting anything new.
3. Step 5 (Asset Swap): placeholder gradients/content are still in place everywhere — real AI-generated imagery not yet started.
4. GitHub + Vercel per-app deploys still not done (flagged since Step 1).
5. Decide theme-choice persistence (localStorage) — still resets to dark on reload in all three, unresolved since Step 3.

## Don't touch / gotchas

- `bootstrap-app`'s `<body>` needs its `app-body` class (specificity workaround vs Bootstrap's own `body{}` rule).
- `public/js/ink-cursor.js` is identical across all three apps by design — copy-diff, don't hand-edit separately.
- `strata-app` needs `npm run strata:build` after ANY class/CSS change if the watch process isn't running — `public/strata.output.css` goes stale silently otherwise (bit twice this session before remembering).
- Mobile nav drawer mechanism (fixed right-side, 320px via `--iw-size-drawer`, backdrop) is intentionally identical across all three apps — a deliberate exception to the "UI-state JS stays framework-native" guardrail, user-approved.
- `bootstrap-app/public/js/mega-menu.js` and `strata-app/public/js/interactions.js` both drive a shared `#iwMegaShell` height computed ONCE from the max category height — never re-set it per hover/switch, that reintroduces the border-refade/height-snap bug fixed earlier.

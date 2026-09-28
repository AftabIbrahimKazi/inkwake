# Inkwake

A real-world CSS framework benchmark. The same anime-themed e-commerce landing page — identical DOM intent, identical business-logic JS, identical content — built three times, once per CSS framework, deployed live, and measured.

| App | CSS framework | UI-state JS idiom | Live |
|---|---|---|---|
| `tailwind-app/` | Tailwind CSS | Alpine.js (self-hosted) | [inkwake-tailwind.vercel.app](https://inkwake-tailwind.vercel.app) |
| `bootstrap-app/` | Bootstrap 5 (raw/unpurged) | Bootstrap bundle JS (self-hosted) | [bootstrap-app-phi.vercel.app](https://bootstrap-app-phi.vercel.app) |
| `strata-app/` | [Strata CSS](https://www.npmjs.com/package/strata-css) | Strata `data-st-*` attributes | [strata-app-ten.vercel.app](https://strata-app-ten.vercel.app) |

Only the CSS framework and its native JS idiom vary — everything else (markup structure, copy, interaction logic, no-CDN self-hosting) is held constant, so the difference in payload and Core Web Vitals is attributable to the framework, not incidental drift between the three builds.

## Why

Framework comparisons are usually synthetic (a single component, a Lighthouse run against a demo page). This repo instead builds one full storefront — mega menu, master footer, 19 content sections, three-theme toggle — three times over, and benchmarks the deployed result with repeated, isolated Lighthouse runs rather than a single snapshot.

## Structure

Three independent Next.js 16 apps in one repo, each with its own `package.json` and deployed as its own Vercel project (same repo, different Root Directory per project):

```
tailwind-app/     Tailwind CSS + Alpine.js
bootstrap-app/     Bootstrap 5 + its own bundle JS
strata-app/     Strata CSS + strata.components.js
```

`coding-standards/` and `.claude/skills/` hold the shared conventions and tooling both a human and an AI session follow when working in this repo — see `CLAUDE.md` for the project-specific rules layered on top.

## Running locally

Each app is standalone:

```bash
cd tailwind-app   # or bootstrap-app / strata-app
npm install
npm run dev
```

`strata-app`'s `dev` script runs Strata's own watcher alongside `next dev`; `build` runs Strata's minified build (`strata-css --minify`, via Lightning CSS) before `next build`.

## Benchmark methodology

Lighthouse (mobile + desktop presets), 10 isolated runs per app per mode, against the live Vercel deployments — not local dev servers. Medians are reported alongside means since single-machine parallel test runs introduce CPU-contention noise that skews individual passes.

## Benchmark reports

Four reports, in order, each published as a standalone page:

1. [First run](https://claude.ai/artifact/28aa7bb1-b483-44b5-82d8-dafa95a117f9) — single-pass snapshot, pre-asset baseline
2. [10-run isolated benchmark](https://claude.ai/artifact/930b95e3-9c8c-4946-88a4-309809e9229f) — mobile + desktop, medians, pre-asset baseline
3. [Post-minification benchmark](https://claude.ai/artifact/7d804219-37cd-4574-a7a1-71859da9403b) — after switching `strata-app`'s CSS build to Lightning CSS
4. [Real-asset benchmark](https://claude.ai/artifact/3diRxkpSor2fcQhEb7zFw6) — after Step 5's image/video swap, includes a single-run-vs-median sanity check

Each is a private Claude Artifact — the link alone won't open for anyone without owner-granted access; sharing is set per-page from its own Share menu.

## Branching

Single branch (`master`). This is a test/benchmark repo, not a production release pipeline — there's no `dev`/`test`/`beta` split. See `CLAUDE.md`'s git-standards override for the reasoning.

## Status

Steps 1–5 of the project plan are complete and live — all real imagery/video shipped, no placeholder gradients remaining. See `handover.md` for the current session-to-session state.

# Framework Standards — Bootstrap

Read [css-standards.md](../css-standards.md) RULE 18, 19, and 20 first. The rules below document known Bootstrap classes and patterns that conflict with the project coding standards. The developer must review each flagged item and decide how to handle it.

**Status of each item:**
- `⚠️ VIOLATION` — conflicts with coding standards, must be avoided or replaced
- `✅ SAFE` — no conflict, use freely
- `🔧 WORKAROUND` — violation exists but a compliant alternative is available

---

## !important Violations

Bootstrap uses `!important` extensively in its utility classes. All utility classes in Bootstrap's `utilities/` layer are generated with `!important`. This directly violates RULE 14.

### Display utilities
`⚠️ VIOLATION` — `.d-none`, `.d-block`, `.d-flex`, `.d-grid`, `.d-inline`, `.d-inline-flex` etc.
All generate rules with `!important`.

🔧 **Workaround:** Write custom display classes using token variables without `!important`. Use data attribute state selectors for show/hide behaviour per RULE C-04.

```css
/* Wrong — uses Bootstrap's !important utility */
/* <div class="d-none"> */

/* Right — custom class, no !important */
.ex-element[data-state="hidden"] { display: none; }
.ex-element[data-state="visible"] { display: block; }
```

---

### Spacing utilities
`⚠️ VIOLATION` — `.m-*`, `.p-*`, `.mt-*`, `.mb-*`, `.ms-*`, `.me-*`, `.pt-*` etc.
All generated with `!important`. Also use Bootstrap's own spacing scale, not the project token scale.

🔧 **Workaround:** Use project token variables in custom classes.

```css
/* Wrong */
/* <div class="mt-3 p-2"> */

/* Right */
.ex-card { margin-top: var(--space-md); padding: var(--space-sm); }
```

---

### Text utilities
`⚠️ VIOLATION` — `.text-center`, `.text-start`, `.text-end`, `.text-truncate`, `.fw-bold`, `.fs-*` etc.
All generated with `!important`.

🔧 **Workaround:** Write compliant custom classes.

---

### Color and background utilities
`⚠️ VIOLATION` — `.text-primary`, `.text-muted`, `.bg-primary`, `.bg-danger` etc.
Use `!important` and reference Bootstrap's colour system, not the project token system.

🔧 **Workaround:** Use project colour tokens in custom classes.

---

### Visibility utilities
`⚠️ VIOLATION` — `.visible`, `.invisible`
Use `!important` on `visibility` property.

🔧 **Workaround:** Control visibility via data attribute state per RULE C-04.

---

## Inline Style Violations

### Collapse component
`⚠️ VIOLATION` — Bootstrap's collapse plugin sets `height` as an inline style during animation.
Violates RULE 08 (no inline styles).

🔧 **Workaround:** Replace Bootstrap collapse with a custom CSS transition using `max-height` and a data attribute state. No inline styles required.

---

### Modal component
`⚠️ VIOLATION` — Bootstrap's modal plugin sets `padding-right` on `<body>` as an inline style to compensate for scrollbar width.
Violates RULE 08.

Developer decision required: accept as package exception or implement a custom modal.

---

### Tooltip and Popover
`⚠️ VIOLATION` — Positioning is applied via inline `style` attributes (top, left, transform).
Violates RULE 08. No practical workaround — this is core to how Popper.js positions these elements.

Developer decision required: accept as package exception or use a CSS-only alternative.

---

## Safe Bootstrap Components

The following Bootstrap components do not violate coding standards and may be used freely:

| Component | Notes |
|---|---|
| `✅` Grid system (`.container`, `.row`, `.col-*`) | No `!important`, structural only |
| `✅` Typography base (`.h1`–`.h6`, `.lead`) | No `!important` |
| `✅` Forms base (`.form-control`, `.form-label`) | No `!important` on core rules |
| `✅` Card structure (`.card`, `.card-body`, `.card-header`) | No `!important` |
| `✅` Table structure (`.table`) | No `!important` on core rules |
| `✅` Nav structure (`.nav`, `.nav-item`, `.nav-link`) | No `!important` on core rules |

---

## General Rule for Bootstrap

Use Bootstrap for layout structure and component scaffolding. Replace all utility classes with custom project classes using token variables. Never use Bootstrap utility classes that carry `!important` — they cannot be safely overridden without further `!important` use, which violates RULE 14.

**PROJECT-WIDE EXCEPTION (2026-08-24, developer decision) — applies to `bootstrap-app` only:**
Inkwake's guardrail is to benchmark **raw, unpurged, as-shipped Bootstrap** as a "default install" comparison against Tailwind and Strata (see root `CLAUDE.md` / `project-plan.md`). Rewriting every Bootstrap utility class as a custom non-`!important` equivalent would mean `bootstrap-app` no longer resembles real-world Bootstrap usage, defeating that benchmark's purpose. The developer has explicitly accepted, as a standing blanket exception (not decided per-instance):
- All Bootstrap **utility classes** flagged above (`!important` violations — display, spacing, text, color, visibility) may be used freely throughout `bootstrap-app`.
- Bootstrap's **Collapse** component (inline `height` set during animation) may be used via its native `data-bs-toggle="collapse"` markup, rather than replaced with a custom `max-height` CSS transition — this is how Bootstrap's real accordion/dropdown behavior works, and normalizing it away would defeat the "native UI-state idiom" guardrail the same way rewriting utilities would.
- Other inline-style components (Modal's `padding-right`, Tooltip/Popover positioning) remain **case-by-case** — flag at point of use if/when they're actually used.

This exception does not extend to hand-written custom CSS in `bootstrap-app` (still RULE 14 compliant — no `!important` in anything actually authored for this project) — it only covers Bootstrap's own shipped behavior.

---

## How to Document a Package Exception

If the developer accepts a Bootstrap violation as unavoidable, it must be documented at the point of use:

```css
/* PACKAGE EXCEPTION — Bootstrap 5
   Class/feature: Modal body padding-right
   Violation: inline style on <body> set by Bootstrap JS
   Workaround: none available without replacing modal entirely
   Decision: accepted
   Reviewed by: [developer name] */
```

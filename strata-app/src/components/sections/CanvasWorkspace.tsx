const POSE_OPTIONS = ["Standing", "Dynamic", "Seated"];
const FINISH_OPTIONS = ["Matte", "Gloss", "Metallic"];
// Strata's scanner only sees class strings written directly inside a
// className attribute, so the actual "bg-*" literals live in the inline
// ternary at the swatch's render site, not in this data array (see
// DashboardAnalytics.tsx for the full explanation).
const PALETTE_OPTIONS = ["Ink Violet", "Neon Magenta", "Cyan Flare"];

export default function CanvasWorkspace() {
  return (
    <section className="bg-[var(--color-bg-surface)] w-100" id="canvasWorkspace">
      <div className="mx-auto w-100 max-w-[1152px] px-[var(--space-xl)] d-flex flex-column flex-md-row gap-[var(--space-3xl)] py-[var(--space-4xl)]">
        <div className="card bg-[var(--color-bg-hero)] flex-fill p-[var(--space-3xl)] d-flex flex-column align-items-center justify-content-center gap-[var(--space-md)]">
          <span className="text-muted fs-[var(--font-size-xs)] fw-bold text-uppercase">Live preview</span>
          <div className="bg-[linear-gradient(to_bottom_right,var(--color-brand-gradient-start),var(--color-brand-gradient-end))] ratio ratio-1x1 rounded-[16px] w-75"></div>
          <p data-workspace-preview className="text-body fw-bold fs-[var(--font-size-sm)]" suppressHydrationWarning>
            Standing · Matte · Ink Violet
          </p>
        </div>

        <div className="d-flex flex-column gap-[var(--space-xl)] flex-fill">
          <div className="d-flex flex-column gap-[var(--space-sm)]">
            <span className="text-primary fs-[var(--font-size-xs)] fw-bold text-uppercase">Canvas workspace</span>
            <h2 className="text-body fw-bold fs-[var(--font-size-3xl)]">Design your own sculpt</h2>
            <p className="text-muted fs-[var(--font-size-lg)]">
              Choose a pose, finish, and palette — the workspace mirrors your combination before you
              commission it.
            </p>
          </div>

          <div className="d-flex flex-column gap-[var(--space-sm)]" data-pill-group="pose">
            <span className="text-body fw-bold fs-[var(--font-size-sm)]">Pose</span>
            <div className="d-flex flex-wrap gap-[var(--space-sm)]">
              {POSE_OPTIONS.map((option, i) => (
                <button
                  key={option}
                  type="button"
                  data-pill
                  data-pill-value={option}
                  data-active={i === 0 ? "true" : "false"}
                  suppressHydrationWarning
                  className="text-body border-[1px_solid_color-mix(in_srgb,var(--color-line-subtle)_20%,transparent)] rounded-pill fs-[var(--font-size-sm)] pt-[var(--space-xs)] pb-[var(--space-xs)] ps-[var(--space-lg)] pe-[var(--space-lg)]"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="d-flex flex-column gap-[var(--space-sm)]" data-pill-group="finish">
            <span className="text-body fw-bold fs-[var(--font-size-sm)]">Finish</span>
            <div className="d-flex flex-wrap gap-[var(--space-sm)]">
              {FINISH_OPTIONS.map((option, i) => (
                <button
                  key={option}
                  type="button"
                  data-pill
                  data-pill-value={option}
                  data-active={i === 0 ? "true" : "false"}
                  suppressHydrationWarning
                  className="text-body border-[1px_solid_color-mix(in_srgb,var(--color-line-subtle)_20%,transparent)] rounded-pill fs-[var(--font-size-sm)] pt-[var(--space-xs)] pb-[var(--space-xs)] ps-[var(--space-lg)] pe-[var(--space-lg)]"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="d-flex flex-column gap-[var(--space-sm)]" data-pill-group="palette">
            <span className="text-body fw-bold fs-[var(--font-size-sm)]">Palette</span>
            <div className="d-flex flex-wrap gap-[var(--space-sm)]">
              {PALETTE_OPTIONS.map((option, i) => (
                <button
                  key={option}
                  type="button"
                  data-pill
                  data-pill-value={option}
                  data-active={i === 0 ? "true" : "false"}
                  suppressHydrationWarning
                  className="text-body border-[1px_solid_color-mix(in_srgb,var(--color-line-subtle)_20%,transparent)] rounded-pill d-flex align-items-center gap-[var(--space-sm)] fs-[var(--font-size-sm)] pt-[var(--space-xs)] pb-[var(--space-xs)] ps-[var(--space-xs)] pe-[var(--space-lg)]"
                >
                  <span
                    className={`badge rounded-circle ${ option === "Ink Violet" ? "bg-primary" : option === "Neon Magenta" ? "bg-[var(--color-magenta)]" : "bg-[var(--color-cyan-bright)]" }`}
                  >
                    &nbsp;
                  </span>
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="border-top-[1px_solid_color-mix(in_srgb,var(--color-line-subtle)_10%,transparent)] d-flex align-items-center justify-content-between pt-[var(--space-xl)]">
            <div className="d-flex flex-column gap-[var(--space-xs)]">
              <span className="text-muted fs-[var(--font-size-sm)]">Commission price</span>
              <span data-workspace-price className="text-body fw-bold fs-[var(--font-size-2xl)]" suppressHydrationWarning>
                $85
              </span>
            </div>
            <a href="#" className="btn-primary text-white rounded-pill fs-[var(--font-size-sm)] fw-bold pt-[var(--space-md)] pb-[var(--space-md)] ps-[var(--space-2xl)] pe-[var(--space-2xl)]">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

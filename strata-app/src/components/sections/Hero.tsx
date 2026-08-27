const HERO_STATS = [
  { value: "40K+", label: "Pieces shipped" },
  { value: "4.9/5", label: "Collector rating" },
  { value: "100%", label: "Original art" },
];

export default function Hero() {
  return (
    <section className="bg-[var(--color-bg-hero)] position-relative d-flex align-items-center overflow-hidden min-h-screen">
      <canvas
        id="ink-canvas"
        data-ink-cursor
        className="pe-auto position-absolute top-0 start-0 w-100 h-100"
        suppressHydrationWarning
      />

      <div className="mx-auto w-100 max-w-[1152px] px-[var(--space-xl)] position-relative py-[var(--space-5xl)] pe-none">
        <div className="d-grid gtc-[1fr] gtc-md-[1fr_1fr] gap-[var(--space-3xl)] align-items-center">
          <div className="d-flex flex-column align-items-start gap-[var(--space-xl)]">
            <span className="border-[1px_solid_var(--color-brand-accent)] text-primary rounded-pill fs-[var(--font-size-xs)] fw-bold text-uppercase pt-[var(--space-xs)] pb-[var(--space-xs)] ps-[var(--space-lg)] pe-[var(--space-lg)]">
              New drop — Winter Collection
            </span>

            <h1 className="iw-hero-title text-body fw-bold fs-[var(--font-size-4xl)]">
              Ink that
              <span className="iw-brand-gradient bg-[linear-gradient(to_right,var(--color-brand-gradient-start),var(--color-brand-gradient-end))]"> moves </span>
              with you.
            </h1>

            <p className="text-muted max-w-[28rem] fs-[var(--font-size-lg)]">
              Original figures, apparel, and art built for collectors who want something the algorithm
              hasn&apos;t seen yet. Every piece self-generated, every drop limited.
            </p>

            <div className="pe-auto d-flex flex-wrap align-items-center gap-[var(--space-lg)]">
              <a
                href="#"
                className="bg-primary text-white rounded-pill fs-[var(--font-size-sm)] fw-bold text-nowrap pt-[var(--space-md)] pb-[var(--space-md)] ps-[var(--space-2xl)] pe-[var(--space-2xl)]"
              >
                Shop the drop
              </a>
              <a
                href="#"
                className="text-body border-[1px_solid_color-mix(in_srgb,var(--color-line-subtle)_20%,transparent)] rounded-pill fs-[var(--font-size-sm)] fw-bold text-nowrap pt-[var(--space-md)] pb-[var(--space-md)] ps-[var(--space-2xl)] pe-[var(--space-2xl)]"
              >
                Watch the film
              </a>
            </div>

            <div className="border-top-[1px_solid_color-mix(in_srgb,var(--color-line-subtle)_10%,transparent)] d-flex w-100 max-w-[28rem] align-items-center gap-[var(--space-2xl)] pt-[var(--space-xl)]">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="d-flex flex-column gap-[var(--space-xs)]">
                  <span className="text-body fw-bold fs-[var(--font-size-2xl)]">{stat.value}</span>
                  <span className="text-muted fs-[var(--font-size-xs)]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pe-none position-relative d-none d-md-block">
            <div className="bg-[linear-gradient(to_bottom_right,var(--color-brand-gradient-start),var(--color-brand-gradient-end))] opacity-25 rounded-[24px] position-absolute inset-[24px]"></div>
            <div className="bg-[color-mix(in_srgb,var(--color-bg-surface)_60%,transparent)] border-[1px_solid_color-mix(in_srgb,var(--color-line-subtle)_10%,transparent)] rounded-[24px] position-relative d-flex flex-column justify-content-between h-100 w-100 p-[var(--space-2xl)]">
              <div className="d-flex align-items-center justify-content-between">
                <span className="text-body fw-bold fs-[var(--font-size-sm)]">Featured piece</span>
                <span className="text-primary fs-[var(--font-size-xs)] fw-bold text-uppercase">Limited</span>
              </div>
              <div className="bg-[linear-gradient(to_bottom_right,var(--color-brand-gradient-start),var(--color-brand-gradient-end))] ratio ratio-1x1 rounded-[16px] w-100"></div>
              <div className="d-flex align-items-center justify-content-between">
                <span className="text-body fw-bold fs-[var(--font-size-lg)]">Ronin Scale Figure</span>
                <span className="text-primary fw-bold fs-[var(--font-size-lg)]">$128</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const KPI_CARDS = [
  { label: "Orders shipped today", value: "1,284", delta: "+12.4%", bars: [40, 55, 45, 70, 60, 80, 95] },
  { label: "Active drops", value: "6", delta: "+2 this week", bars: [30, 30, 45, 45, 60, 60, 60] },
  { label: "Collector rating", value: "4.9", delta: "2,930 reviews", bars: [70, 72, 68, 75, 80, 85, 90] },
  { label: "Restock ETA", value: "3 days", delta: "on schedule", bars: [90, 85, 80, 70, 60, 50, 40] },
];

export default function DashboardAnalytics() {
  return (
    <section className="bg-[var(--color-bg-surface)] w-100">
      <div className="mx-auto w-100 max-w-[1152px] px-[var(--space-xl)] d-flex flex-column gap-[var(--space-xl)] py-[var(--space-4xl)]">
        <div className="d-flex flex-column gap-[var(--space-sm)]">
          <span className="text-primary fs-[var(--font-size-xs)] fw-bold text-uppercase">Live from the floor</span>
          <h2 className="text-body fw-bold fs-[var(--font-size-3xl)]">Studio analytics, in the open</h2>
          <p className="text-muted max-w-[36rem] fs-[var(--font-size-lg)]">
            Real production numbers from the drop floor — because collectors deserve to know exactly
            what they&apos;re waiting on.
          </p>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          {KPI_CARDS.map((card) => (
            <div key={card.label} className="col">
              <div className="bg-[var(--color-bg-hero)] border-[1px_solid_color-mix(in_srgb,var(--color-line-subtle)_10%,transparent)] rounded-[16px] d-flex flex-column gap-[var(--space-lg)] p-[var(--space-xl)]">
                <span className="text-muted fs-[var(--font-size-sm)]">{card.label}</span>
                <span className="text-body fw-bold fs-[var(--font-size-3xl)]">{card.value}</span>

                <div className="d-flex align-items-end gap-1 h-[64px]">
                  {/* Strata's JIT scanner (src/scanner/scanner.js) only
                      extracts class names from string literals written
                      TEXTUALLY inside a className attribute — a lookup
                      object declared elsewhere in the file (the previous
                      approach here) was invisible to it even though the
                      class strings existed in the same file, because the
                      scanner never visits text outside a className
                      attribute's own boundaries. Confirmed missing from the
                      compiled CSS. Inlining the ternary directly in the
                      attribute fixes it — the scanner recurses into
                      ${...} interpolations, so these literals ARE found. */}
                  {card.bars.map((height, index) => (
                    <span
                      key={index}
                      className={`bg-primary rounded-[2px] flex-fill ${ height === 30 ? "h-[30%]" : height === 40 ? "h-[40%]" : height === 45 ? "h-[45%]" : height === 50 ? "h-[50%]" : height === 55 ? "h-[55%]" : height === 60 ? "h-[60%]" : height === 65 ? "h-[65%]" : height === 68 ? "h-[68%]" : height === 70 ? "h-[70%]" : height === 72 ? "h-[72%]" : height === 75 ? "h-[75%]" : height === 80 ? "h-[80%]" : height === 85 ? "h-[85%]" : height === 90 ? "h-[90%]" : "h-[95%]" }`}
                    ></span>
                  ))}
                </div>

                <span className="text-primary fs-[var(--font-size-xs)] fw-bold">{card.delta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const REGIONS = [
  {
    key: "na",
    name: "North America",
    warehouses: [
      { city: "Portland, OR", detail: "Primary fulfillment — 2-4 day domestic shipping" },
      { city: "Austin, TX", detail: "Overflow fulfillment for Southern drops" },
    ],
  },
  {
    key: "eu",
    name: "Europe",
    warehouses: [
      { city: "Rotterdam, NL", detail: "EU fulfillment — 3-5 day shipping across the bloc" },
      { city: "Manchester, UK", detail: "UK-only fulfillment, post-customs" },
    ],
  },
  {
    key: "apac",
    name: "Asia-Pacific",
    warehouses: [
      { city: "Osaka, JP", detail: "Studio origin — same-region 1-2 day shipping" },
      { city: "Melbourne, AU", detail: "ANZ fulfillment — 3-4 day shipping" },
    ],
  },
];

export default function RegionalDirectory() {
  return (
    <section className="iw-bg-surface bg-[var(--color-bg-surface)] w-100">
      <div className="iw-container mx-auto w-100 max-w-[1152px] px-[var(--space-xl)] d-flex flex-column gap-[var(--space-xl)] py-[var(--space-4xl)]">
        <div className="d-flex flex-column gap-[var(--space-sm)]">
          <span className="text-primary fs-[var(--font-size-xs)] fw-bold text-uppercase">Where we ship from</span>
          <h2 className="text-body fw-bold fs-[var(--font-size-3xl)]">Regional directory</h2>
        </div>

        <div className="border-bottom-[1px_solid_color-mix(in_srgb,var(--color-line-subtle)_10%,transparent)] d-flex flex-wrap gap-[var(--space-sm)] pb-[var(--space-xl)]" data-pill-group="region">
          {REGIONS.map((region, i) => (
            <button
              key={region.key}
              type="button"
              data-pill
              data-pill-target={`#region-${region.key}`}
              data-active={i === 0 ? "true" : "false"}
              suppressHydrationWarning
              className="text-muted rounded-pill fs-[var(--font-size-sm)] fw-bold pt-[var(--space-sm)] pb-[var(--space-sm)] ps-[var(--space-xl)] pe-[var(--space-xl)]"
            >
              {region.name}
            </button>
          ))}
        </div>

        {REGIONS.map((region, i) => (
          <div
            key={region.key}
            id={`region-${region.key}`}
            data-pill-panel-group="region"
            data-st-visible={i === 0 ? "true" : "false"}
            suppressHydrationWarning
            className="row row-cols-1 row-cols-md-2 g-4"
          >
            {region.warehouses.map((warehouse) => (
              <div key={warehouse.city} className="col">
                <div className="card bg-[var(--color-bg-hero)] p-[var(--space-xl)] d-flex flex-column gap-[var(--space-sm)]">
                  <span className="text-body fw-bold fs-[var(--font-size-lg)]">{warehouse.city}</span>
                  <span className="text-muted fs-[var(--font-size-sm)]">{warehouse.detail}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

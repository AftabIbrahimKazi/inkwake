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
    <section className="iw-bg-surface w-100">
      <div className="iw-container d-flex flex-column gap-4 py-5">
        <div className="d-flex flex-column gap-2">
          <span className="text-primary small fw-bold text-uppercase">Where we ship from</span>
          <h2 className="text-white fw-bold">Regional directory</h2>
        </div>

        <ul className="nav nav-pills gap-2 border-bottom pb-4" role="tablist">
          {REGIONS.map((region, i) => (
            <li key={region.key} className="nav-item" role="presentation">
              <button
                className={`nav-link rounded-pill ${i === 0 ? "active" : "text-secondary"}`}
                data-bs-toggle="pill"
                data-bs-target={`#region-${region.key}`}
                type="button"
                role="tab"
                suppressHydrationWarning
              >
                {region.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="tab-content">
          {REGIONS.map((region, i) => (
            <div key={region.key} id={`region-${region.key}`} className={`tab-pane fade ${i === 0 ? "show active" : ""}`} role="tabpanel" suppressHydrationWarning>
              <div className="row row-cols-1 row-cols-md-2 g-4">
                {region.warehouses.map((warehouse) => (
                  <div key={warehouse.city} className="col">
                    <div className="card bg-black border h-100 p-4 d-flex flex-column gap-2">
                      <span className="text-white fw-bold fs-5">{warehouse.city}</span>
                      <span className="text-secondary small">{warehouse.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

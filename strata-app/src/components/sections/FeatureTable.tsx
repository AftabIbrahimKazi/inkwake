const TIERS = ["Standard", "Plus", "Collector"];

const FEATURE_ROWS = [
  { label: "Free shipping", values: [false, true, true] },
  { label: "Early drop access", values: [false, false, true] },
  { label: "Limited variant eligibility", values: [false, true, true] },
  { label: "Certificate of authenticity", values: [false, false, true] },
  { label: "Priority restock alerts", values: [true, true, true] },
  { label: "Dedicated collector concierge", values: [false, false, true] },
];

export default function FeatureTable() {
  return (
    <section className="iw-bg-surface bg-[var(--color-bg-hero)] w-100">
      <div className="iw-container mx-auto w-100 max-w-[1152px] px-[var(--space-xl)] d-flex flex-column gap-[var(--space-xl)] py-[var(--space-4xl)]">
        <div className="d-flex flex-column gap-[var(--space-sm)] text-center">
          <span className="text-primary fs-[var(--font-size-xs)] fw-bold text-uppercase">Membership tiers</span>
          <h2 className="text-body fw-bold fs-[var(--font-size-3xl)]">What each tier unlocks</h2>
        </div>

        <div className="border-[1px_solid_color-mix(in_srgb,var(--color-line-subtle)_10%,transparent)] rounded-[16px] overflow-hidden">
          <table className="table">
            <thead>
              <tr>
                <th>Benefit</th>
                {TIERS.map((tier) => (
                  <th key={tier} className="text-center">
                    {tier}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FEATURE_ROWS.map((row) => (
                <tr key={row.label}>
                  <td>{row.label}</td>
                  {row.values.map((included, i) => (
                    <td key={i} className="text-center">
                      {included ? (
                        <span className="badge bg-primary rounded-circle">✓</span>
                      ) : (
                        <span className="text-muted">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

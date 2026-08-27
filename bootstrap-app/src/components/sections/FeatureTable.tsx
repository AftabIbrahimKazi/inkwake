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
    <section className="iw-bg-surface w-100">
      <div className="iw-container d-flex flex-column gap-4 py-5">
        <div className="d-flex flex-column gap-2 text-center">
          <span className="text-primary small fw-bold text-uppercase">Membership tiers</span>
          <h2 className="text-white fw-bold">What each tier unlocks</h2>
        </div>

        {/* Bootstrap's default .table draws a border on every row automatically
            (--bs-border-color, already token-mapped above) — no custom CSS
            needed for row dividers, unlike tailwind-app's zebra-stripe
            approach which needed a real fix earlier. */}
        <div className="table-responsive border rounded-4">
          <table className="table align-middle mb-0">
            <thead>
              <tr>
                <th className="text-secondary fw-bold p-4">Benefit</th>
                {TIERS.map((tier) => (
                  <th key={tier} className="text-white fw-bold text-center p-4">
                    {tier}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FEATURE_ROWS.map((row) => (
                <tr key={row.label}>
                  <td className="text-white p-4">{row.label}</td>
                  {row.values.map((included, i) => (
                    <td key={i} className="text-center p-4">
                      {included ? (
                        <span className="badge rounded-circle bg-primary bg-opacity-25 text-primary">✓</span>
                      ) : (
                        <span className="text-secondary">—</span>
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

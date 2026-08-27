const PLANS = [
  {
    name: "Standard",
    monthly: "Free",
    yearly: "Free",
    tagline: "For first-time collectors",
    features: ["Standard shipping", "Restock alerts", "Community Discord access"],
    highlight: false,
  },
  {
    name: "Plus",
    monthly: "$12",
    yearly: "$9",
    tagline: "For regular drops",
    features: ["Free shipping", "Limited variant eligibility", "Early drop access", "Restock alerts"],
    highlight: true,
  },
  {
    name: "Collector",
    monthly: "$29",
    yearly: "$22",
    tagline: "For serious display shelves",
    features: [
      "Everything in Plus",
      "Certificate of authenticity",
      "Dedicated collector concierge",
      "First pick on 1-of-1 pieces",
    ],
    highlight: false,
  },
];

export default function PricingMatrix() {
  return (
    <section className="bg-[var(--color-bg-hero)] w-100" id="pricingMatrix">
      <div className="iw-container mx-auto w-100 max-w-[1152px] px-[var(--space-xl)] d-flex flex-column align-items-center gap-[var(--space-xl)] py-[var(--space-4xl)]">
        <div className="d-flex flex-column gap-[var(--space-sm)] text-center">
          <span className="text-primary fs-[var(--font-size-xs)] fw-bold text-uppercase">Membership pricing</span>
          <h2 className="text-body fw-bold fs-[var(--font-size-3xl)]">Pick your collector tier</h2>
        </div>

        <div className="d-flex align-items-center gap-[var(--space-md)]" data-pill-group="period">
          <button
            type="button"
            data-pill="monthly"
            data-active="true"
            suppressHydrationWarning
            className="text-body rounded-pill fs-[var(--font-size-sm)] fw-bold pt-[var(--space-sm)] pb-[var(--space-sm)] ps-[var(--space-xl)] pe-[var(--space-xl)]"
          >
            Monthly
          </button>
          <button
            type="button"
            data-pill="yearly"
            data-active="false"
            suppressHydrationWarning
            className="text-body border-[1px_solid_color-mix(in_srgb,var(--color-line-subtle)_20%,transparent)] rounded-pill fs-[var(--font-size-sm)] fw-bold pt-[var(--space-sm)] pb-[var(--space-sm)] ps-[var(--space-xl)] pe-[var(--space-xl)]"
          >
            Yearly — save 25%
          </button>
        </div>

        <div className="row g-[var(--space-xl)] w-100">
          {PLANS.map((plan) => (
            <div key={plan.name} className="col-12 col-md-4">
              <div
                className={`card bg-[var(--color-bg-surface)] h-100 p-[var(--space-xl)] d-flex flex-column gap-[var(--space-xl)] ${ plan.highlight ? "border-[2px_solid_var(--color-brand-accent)]" : "" }`}
              >
                {plan.highlight && (
                  <span className="badge bg-primary rounded-pill text-white text-uppercase align-self-start">
                    Most popular
                  </span>
                )}

                <div className="d-flex flex-column gap-[var(--space-xs)]">
                  <span className="text-body fw-bold fs-[var(--font-size-xl)]">{plan.name}</span>
                  <span className="text-muted fs-[var(--font-size-sm)]">{plan.tagline}</span>
                </div>

                <div className="d-flex align-items-end gap-[var(--space-xs)]">
                  <span
                    className="text-body fw-bold fs-[var(--font-size-4xl)]"
                    data-monthly-price={plan.monthly}
                    data-yearly-price={plan.yearly}
                    suppressHydrationWarning
                  >
                    {plan.monthly}
                  </span>
                  {plan.monthly !== "Free" && <span className="text-muted fs-[var(--font-size-sm)]">/mo</span>}
                </div>

                <ul className="list-unstyled d-flex flex-column gap-[var(--space-sm)]">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-body fs-[var(--font-size-sm)] d-flex align-items-center gap-[var(--space-sm)]">
                      <span className="badge bg-primary rounded-circle">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`rounded-pill fw-bold text-center mt-auto fs-[var(--font-size-sm)] pt-[var(--space-md)] pb-[var(--space-md)] ${ plan.highlight ? "btn-primary text-white" : "text-body border-[1px_solid_color-mix(in_srgb,var(--color-line-subtle)_20%,transparent)]" }`}
                >
                  {plan.monthly === "Free" ? "Get started" : "Choose " + plan.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

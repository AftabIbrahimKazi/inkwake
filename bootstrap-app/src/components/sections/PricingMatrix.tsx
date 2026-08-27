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
    <section className="bg-black w-100" id="pricingMatrix">
      <div className="iw-container d-flex flex-column align-items-center gap-4 py-5">
        <div className="d-flex flex-column gap-2 text-center">
          <span className="text-primary small fw-bold text-uppercase">Membership pricing</span>
          <h2 className="text-white fw-bold">Pick your collector tier</h2>
        </div>

        <div className="btn-group" role="group" aria-label="Billing period">
          <input type="radio" className="btn-check" name="pricingPeriod" id="period-monthly" value="monthly" defaultChecked />
          <label className="btn btn-outline-primary rounded-pill me-2" htmlFor="period-monthly">
            Monthly
          </label>
          <input type="radio" className="btn-check" name="pricingPeriod" id="period-yearly" value="yearly" />
          <label className="btn btn-outline-primary rounded-pill" htmlFor="period-yearly">
            Yearly — save 25%
          </label>
        </div>

        <div className="row g-4 w-100">
          {PLANS.map((plan) => (
            <div key={plan.name} className="col-12 col-md-4">
              <div className={`card h-100 p-4 d-flex flex-column gap-4 ${plan.highlight ? "border-primary border-2" : "border"}`}>
                {plan.highlight && (
                  <span className="badge rounded-pill bg-primary text-white align-self-start text-uppercase">
                    Most popular
                  </span>
                )}

                <div className="d-flex flex-column gap-1">
                  <span className="text-white fw-bold fs-4">{plan.name}</span>
                  <span className="text-secondary small">{plan.tagline}</span>
                </div>

                <div className="d-flex align-items-end gap-1">
                  <span
                    className="text-white fw-bold fs-1"
                    data-monthly-price={plan.monthly}
                    data-yearly-price={plan.yearly}
                    suppressHydrationWarning
                  >
                    {plan.monthly}
                  </span>
                  {plan.monthly !== "Free" && <span className="text-secondary small pb-1">/mo</span>}
                </div>

                <ul className="list-unstyled d-flex flex-column gap-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-white small d-flex align-items-center gap-2">
                      <span className="badge rounded-circle bg-primary bg-opacity-25 text-primary">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`btn rounded-pill fw-bold mt-auto ${plan.highlight ? "btn-primary text-white" : "btn-outline-light"}`}
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

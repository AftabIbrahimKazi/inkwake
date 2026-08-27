const PLANS = [
  {
    name: "Standard",
    monthly: 0,
    yearly: 0,
    tagline: "For first-time collectors",
    features: ["Standard shipping", "Restock alerts", "Community Discord access"],
    highlight: false,
  },
  {
    name: "Plus",
    monthly: 12,
    yearly: 9,
    tagline: "For regular drops",
    features: ["Free shipping", "Limited variant eligibility", "Early drop access", "Restock alerts"],
    highlight: true,
  },
  {
    name: "Collector",
    monthly: 29,
    yearly: 22,
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
    <section className="bg-hero-bg w-full" x-data="{ yearly: false }">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2xl px-xl py-4xl">
        <div className="flex flex-col gap-sm text-center">
          <span className="text-accent text-xs font-bold tracking-wide uppercase">Membership pricing</span>
          <h2 className="text-heading text-3xl font-bold tracking-tight">Pick your collector tier</h2>
        </div>

        <div className="border-border-subtle/20 flex items-center gap-md rounded-full border p-xs">
          <button
            type="button"
            className="rounded-full px-xl py-sm text-sm font-bold transition-colors duration-200"
            suppressHydrationWarning
            {...{ "x-on:click": "yearly = false", ":class": "{ 'bg-accent text-white': !yearly, 'text-muted': yearly }" }}
          >
            Monthly
          </button>
          <button
            type="button"
            className="rounded-full px-xl py-sm text-sm font-bold transition-colors duration-200"
            suppressHydrationWarning
            {...{ "x-on:click": "yearly = true", ":class": "{ 'bg-accent text-white': yearly, 'text-muted': !yearly }" }}
          >
            Yearly — save 25%
          </button>
        </div>

        <div className="grid w-full grid-cols-1 gap-xl md:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`bg-surface flex flex-col gap-xl rounded-3xl border p-2xl ${
                plan.highlight ? "border-accent" : "border-border-subtle/10"
              }`}
            >
              {plan.highlight && (
                <span className="bg-accent self-start rounded-full px-lg py-xs text-xs font-bold tracking-wide text-white uppercase">
                  Most popular
                </span>
              )}

              <div className="flex flex-col gap-xs">
                <span className="text-heading text-xl font-bold">{plan.name}</span>
                <span className="text-muted text-sm">{plan.tagline}</span>
              </div>

              <div className="flex items-end gap-xs">
                <span className="text-heading text-4xl font-bold">
                  {plan.monthly === 0 ? (
                    "Free"
                  ) : (
                    <>
                      $
                    <span x-text={`yearly ? ${plan.yearly} : ${plan.monthly}`} suppressHydrationWarning>
                      {plan.monthly}
                    </span>
                    </>
                  )}
                </span>
                {plan.monthly !== 0 && <span className="text-muted pb-xs text-sm">/mo</span>}
              </div>

              <ul className="flex flex-col gap-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-heading flex items-center gap-sm text-sm">
                    <span className="bg-accent/15 text-accent flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-auto rounded-full px-2xl py-md text-center text-sm font-bold whitespace-nowrap transition-colors duration-200 ${
                  plan.highlight
                    ? "bg-accent hover:bg-accent-alt text-white"
                    : "border-border-subtle/20 text-heading hover:border-accent border"
                }`}
              >
                {plan.monthly === 0 ? "Get started" : "Choose " + plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQ_CATEGORIES = [
  {
    key: "shipping",
    label: "Shipping",
    items: [
      { question: "How long does shipping take?", answer: "Standard orders ship within 3-5 business days; limited drops may take longer due to small-batch casting." },
      { question: "Do you ship internationally?", answer: "Yes — international shipping is available at checkout with duties calculated up front." },
    ],
  },
  {
    key: "orders",
    label: "Orders",
    items: [
      { question: "Can I change my order after placing it?", answer: "You have a 2-hour window after checkout to edit sizing or shipping details from your account." },
      { question: "What's your return policy?", answer: "30-day returns on unopened items; limited variants are final sale once shipped." },
    ],
  },
  {
    key: "product-care",
    label: "Product care",
    items: [
      { question: "How should I clean resin figures?", answer: "Use a soft, dry brush or microfiber cloth — avoid water and solvents on painted finishes." },
      { question: "Are the art prints archival quality?", answer: "Yes, all prints use archival pigment ink rated for 75+ years under UV-glass framing." },
    ],
  },
  {
    key: "membership",
    label: "Membership",
    items: [
      { question: "Can I cancel my membership anytime?", answer: "Yes, cancel anytime from account settings — no lock-in contracts on any tier." },
      { question: "Does Collector tier include past drops?", answer: "Collector concierge covers future drops and any back-in-stock 1-of-1 releases." },
    ],
  },
];

export default function FAQIndex() {
  return (
    <section className="bg-[var(--color-bg-surface)] w-100">
      <div className="mx-auto w-100 max-w-[1152px] px-[var(--space-xl)] d-flex flex-column align-items-center gap-[var(--space-xl)] py-[var(--space-4xl)]">
        <div className="d-flex flex-column gap-[var(--space-sm)] text-center">
          <span className="text-primary fs-[var(--font-size-xs)] fw-bold text-uppercase">Support</span>
          <h2 className="text-body fw-bold fs-[var(--font-size-3xl)]">Frequently asked questions</h2>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-[var(--space-sm)]" data-pill-group="faq-category">
          {FAQ_CATEGORIES.map((category, i) => (
            <button
              key={category.key}
              type="button"
              data-pill
              data-pill-target={`#faq-pane-${category.key}`}
              data-active={i === 0 ? "true" : "false"}
              suppressHydrationWarning
              className="text-muted rounded-pill fs-[var(--font-size-sm)] fw-bold pt-[var(--space-sm)] pb-[var(--space-sm)] ps-[var(--space-xl)] pe-[var(--space-xl)]"
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="w-100 max-w-[42rem] mx-auto">
          {FAQ_CATEGORIES.map((category, i) => (
            <div
              key={category.key}
              id={`faq-pane-${category.key}`}
              data-pill-panel-group="faq-category"
              data-st-visible={i === 0 ? "true" : "false"}
              suppressHydrationWarning
              className="d-flex flex-column gap-[var(--space-md)]"
            >
              {category.items.map((item, j) => {
                const bodyId = `faq-body-${category.key}-${j}`;
                return (
                  <div key={item.question} className="border-[1px_solid_color-mix(in_srgb,var(--color-line-subtle)_10%,transparent)] rounded-[16px]">
                    <button
                      type="button"
                      data-toggle-target={`#${bodyId}`}
                      data-toggle-attr="collapsed"
                      aria-expanded="false"
                      className="text-body d-flex align-items-center justify-content-between w-100 bg-[transparent] border-[none] fw-bold fs-[var(--font-size-sm)] pt-[var(--space-lg)] pb-[var(--space-lg)] ps-[var(--space-xl)] pe-[var(--space-xl)]"
                    >
                      {item.question}
                      <svg aria-hidden="true" className="transition" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <div id={bodyId} data-st-collapsed="true" className="overflow-hidden">
                      <p className="text-muted fs-[var(--font-size-sm)] pb-[var(--space-lg)] ps-[var(--space-xl)] pe-[var(--space-xl)]">{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

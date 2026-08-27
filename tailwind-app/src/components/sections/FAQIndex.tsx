const FAQ_CATEGORIES = ["Shipping", "Orders", "Product care", "Membership"];

const FAQ_ITEMS = [
  { category: "Shipping", question: "How long does shipping take?", answer: "Standard orders ship within 3-5 business days; limited drops may take longer due to small-batch casting." },
  { category: "Shipping", question: "Do you ship internationally?", answer: "Yes — international shipping is available at checkout with duties calculated up front." },
  { category: "Orders", question: "Can I change my order after placing it?", answer: "You have a 2-hour window after checkout to edit sizing or shipping details from your account." },
  { category: "Orders", question: "What's your return policy?", answer: "30-day returns on unopened items; limited variants are final sale once shipped." },
  { category: "Product care", question: "How should I clean resin figures?", answer: "Use a soft, dry brush or microfiber cloth — avoid water and solvents on painted finishes." },
  { category: "Product care", question: "Are the art prints archival quality?", answer: "Yes, all prints use archival pigment ink rated for 75+ years under UV-glass framing." },
  { category: "Membership", question: "Can I cancel my membership anytime?", answer: "Yes, cancel anytime from account settings — no lock-in contracts on any tier." },
  { category: "Membership", question: "Does Collector tier include past drops?", answer: "Collector concierge covers future drops and any back-in-stock 1-of-1 releases." },
];

export default function FAQIndex() {
  return (
    <section className="bg-surface w-full" x-data="{ activeCategory: 'Shipping', openIndex: null }">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2xl px-xl py-4xl">
        <div className="flex flex-col gap-sm text-center">
          <span className="text-accent text-xs font-bold tracking-wide uppercase">Support</span>
          <h2 className="text-heading text-3xl font-bold tracking-tight">Frequently asked questions</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-sm">
          {FAQ_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              className="rounded-full px-xl py-sm text-sm font-bold transition-colors duration-200"
              suppressHydrationWarning
              {...{
                "x-on:click": `activeCategory = '${category}'; openIndex = null`,
                ":class": `{ 'bg-accent text-white': activeCategory === '${category}', 'text-muted border border-border-subtle/20': activeCategory !== '${category}' }`,
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mx-auto flex w-full max-w-[42rem] flex-col gap-md">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={item.question}
              className="border-border-subtle/10 rounded-2xl border"
              x-show={`activeCategory === '${item.category}'`}
              suppressHydrationWarning
            >
              <button
                type="button"
                className="flex w-full items-center justify-between px-xl py-lg text-left"
                {...{ "x-on:click": `openIndex = openIndex === ${index} ? null : ${index}` }}
              >
                <span className="text-heading text-sm font-bold">{item.question}</span>
                <svg
                  aria-hidden="true"
                  className="text-muted h-4 w-4 flex-shrink-0 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  suppressHydrationWarning
                  {...{ ":class": `{ 'rotate-180': openIndex === ${index} }` }}
                >
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div
                className="px-xl pb-lg"
                x-show={`openIndex === ${index}`}
                suppressHydrationWarning
              >
                <p className="text-muted text-sm">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Every review is tied to the product it's actually about — a bare
// testimonial wall reads as generic company praise, but naming the product
// (and linking to it) is what makes this read as real product reviews on
// a storefront rather than a marketing quotes section.
const REVIEWS = [
  { name: "Mika T.", product: "Ronin Scale Figure", rating: 5, text: "The sculpt detail is genuinely better than pieces twice the price. Packaging alone felt premium." },
  { name: "Dev R.", product: "Ronin Scale Figure — Deluxe", rating: 5, text: "Ordered the deluxe size on a whim — worth it. The finish work on the base is incredible." },
  { name: "Sana K.", product: "Streetwear Drop Hoodie", rating: 4, text: "Shipping took a bit longer than expected but the studio kept me updated the whole time." },
  { name: "Owen P.", product: "Winter Collection Figure", rating: 5, text: "First time buying an original-art figure instead of licensed — won't go back." },
  { name: "Lior B.", product: "Print Series 04", rating: 5, text: "The art print series matches my figure shelf perfectly. Framing was straightforward." },
  { name: "Ama N.", product: "Streetwear Drop Hoodie", rating: 4, text: "Great customer support when I needed to change my shipping address last minute." },
  { name: "Cass W.", product: "Ronin Scale Figure", rating: 5, text: "The price estimator on the site was spot on — no surprise costs at checkout." },
  { name: "Rin F.", product: "Collector membership", rating: 5, text: "Collector concierge tier is worth it if you're buying more than one piece a quarter." },
];

export default function ReviewColumns() {
  return (
    <section className="bg-hero-bg w-full">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2xl px-xl py-4xl">
        <div className="flex flex-col gap-sm text-center">
          <span className="text-accent text-xs font-bold tracking-wide uppercase">Collector reviews</span>
          <h2 className="text-heading text-3xl font-bold tracking-tight">What the community is saying</h2>
        </div>

        <div className="columns-1 gap-lg sm:columns-2 lg:columns-3">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="border-border-subtle/10 bg-surface mb-lg flex break-inside-avoid flex-col gap-md rounded-2xl border p-xl"
            >
              <div className="flex items-center gap-xs">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < review.rating ? "text-accent text-sm" : "text-muted/30 text-sm"}>
                    ★
                  </span>
                ))}
              </div>
              <p className="text-heading text-sm">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <span className="text-muted text-xs font-bold">{review.name}</span>
                <a href="#" className="text-accent hover:text-accent-alt text-xs font-bold transition-colors duration-200">
                  on {review.product}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

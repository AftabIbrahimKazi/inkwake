const FOOTER_COLUMNS = [
  {
    heading: "Shop",
    links: ["Figures", "Apparel", "Art Prints", "Manga", "Accessories", "Sale"],
  },
  {
    heading: "Company",
    links: ["About", "Careers", "Journal", "Press", "Affiliates"],
  },
  {
    heading: "Support",
    links: ["FAQ", "Shipping", "Returns", "Track order", "Size guide", "Contact"],
  },
  {
    heading: "Community",
    links: ["Discord", "Reviews", "Fan art", "Rewards program"],
  },
  {
    heading: "Resources",
    links: ["Gift cards", "Store locator", "Wholesale", "Sitemap"],
  },
  {
    heading: "Legal",
    links: ["Terms", "Privacy", "Cookies", "Accessibility"],
  },
  {
    heading: "Account",
    links: ["Sign in", "Order history", "Wishlist", "Rewards"],
  },
  {
    heading: "Explore",
    links: ["Lookbook", "Style guide", "Size charts", "Gift guide"],
  },
];

const SOCIAL_LINKS = ["Twitter", "Instagram", "Discord", "YouTube", "TikTok"];

const TRUST_BADGES = ["Free shipping over $50", "Secure checkout", "30-day returns", "Made-to-order prints"];

const PAYMENT_METHODS = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay", "Google Pay"];

export default function Footer() {
  return (
    <footer className="border-border-subtle/10 bg-surface border-t">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3xl px-xl py-4xl">
        <div className="flex flex-col gap-lg md:w-2/5">
          <span className="from-gradient-start to-gradient-end bg-gradient-to-r bg-clip-text text-lg font-bold tracking-tight text-transparent">
            Inkwake
          </span>
          <p className="text-muted text-sm">
            Original anime-inspired figures, apparel, art prints, and manga.
            Self-generated art only — no third-party IP.
          </p>

          <form className="flex flex-col gap-sm">
            <label htmlFor="footer-newsletter-email" className="text-heading text-sm font-bold">
              Join the newsletter
            </label>
            <div className="flex gap-sm">
              <input
                id="footer-newsletter-email"
                type="email"
                placeholder="you@example.com"
                className="border-border-subtle/20 text-heading placeholder:text-muted flex-1 rounded-full border bg-transparent px-lg py-xs text-sm"
              />
              <button
                type="submit"
                className="bg-accent hover:bg-accent-alt rounded-full px-lg py-xs text-sm whitespace-nowrap text-white transition-colors duration-200"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="border-border-subtle/10 grid grid-cols-2 gap-xl border-y py-2xl md:grid-cols-4">
          {TRUST_BADGES.map((badge) => (
            <div key={badge} className="flex items-center gap-sm">
              <span className="bg-accent block h-2 w-2 rounded-full"></span>
              <span className="text-muted text-sm">{badge}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2xl md:grid-cols-4 lg:grid-cols-8">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading} className="flex flex-col gap-md">
              <span className="text-heading text-sm font-bold">{column.heading}</span>
              <ul className="flex flex-col gap-sm">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted hover:text-accent text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-border-subtle/10 flex flex-col gap-lg border-t pt-xl md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap items-center gap-lg">
            {SOCIAL_LINKS.map((social) => (
              <li key={social}>
                <a
                  href="#"
                  className="text-muted hover:text-accent text-xs transition-colors duration-200"
                >
                  {social}
                </a>
              </li>
            ))}
          </ul>

          <p className="text-muted text-xs">
            © 2026 Inkwake. All rights reserved.
          </p>
          <p className="text-muted text-xs">Built with Tailwind CSS</p>
        </div>
      </div>

      <div className="border-border-subtle/10 bg-hero-bg border-t py-lg">
        <div className="iw-marquee">
          <div className="iw-marquee-track iw-marquee-track--fast gap-3xl" aria-hidden="true">
            {[...PAYMENT_METHODS, ...PAYMENT_METHODS].map((method, index) => (
              <div key={index} className="flex items-center gap-sm">
                <svg
                  aria-hidden="true"
                  className="h-6 w-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 32 24"
                >
                  <rect x="1" y="1" width="30" height="22" rx="3" />
                  <path d="M1 9h30" />
                </svg>
                <span className="text-muted text-xs whitespace-nowrap">{method}</span>
              </div>
            ))}
          </div>
        </div>
        <span className="sr-only">Accepted payment methods: {PAYMENT_METHODS.join(", ")}</span>
      </div>
    </footer>
  );
}

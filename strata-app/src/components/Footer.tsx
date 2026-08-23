const FOOTER_COLUMNS = [
  { heading: "Shop", links: ["Figures", "Apparel", "Art Prints", "Manga", "Accessories", "Sale"] },
  { heading: "Company", links: ["About", "Careers", "Journal", "Press", "Affiliates"] },
  { heading: "Support", links: ["FAQ", "Shipping", "Returns", "Track order", "Size guide", "Contact"] },
  { heading: "Community", links: ["Discord", "Reviews", "Fan art", "Rewards program"] },
  { heading: "Resources", links: ["Gift cards", "Store locator", "Wholesale", "Sitemap"] },
  { heading: "Legal", links: ["Terms", "Privacy", "Cookies", "Accessibility"] },
  { heading: "Account", links: ["Sign in", "Order history", "Wishlist", "Rewards"] },
  { heading: "Explore", links: ["Lookbook", "Style guide", "Size charts", "Gift guide"] },
];

const SOCIAL_LINKS = ["Twitter", "Instagram", "Discord", "YouTube", "TikTok"];

const PAYMENT_METHODS = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay", "Google Pay"];

export default function Footer() {
  return (
    <footer className="border-top-[1px_solid_var(--color-line-subtle)] bg-[var(--color-bg-surface)]">
      <div className="d-flex flex-column gap-5 p-4">
        <div className="d-flex flex-column gap-3 w-100">
          <span className="iw-brand-gradient fw-bold fs-[var(--font-size-lg)]">Inkwake</span>
          <p className="iw-nav-link fs-[var(--font-size-sm)]">
            Original anime-inspired figures, apparel, art prints, and manga. Self-generated art only — no
            third-party IP.
          </p>

          <form className="d-flex flex-column gap-2">
            <label htmlFor="footer-newsletter-email" className="iw-column-heading fw-bold fs-[var(--font-size-sm)]">
              Join the newsletter
            </label>
            <div className="d-flex gap-2">
              <input
                id="footer-newsletter-email"
                type="email"
                placeholder="you@example.com"
                className="iw-newsletter-input flex-fill rounded-pill p-2 fs-[var(--font-size-sm)]"
              />
              <button type="submit" className="iw-subscribe-btn rounded-pill p-2 fs-[var(--font-size-sm)] text-nowrap">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="d-flex flex-wrap gap-4 border-top-[1px_solid_var(--color-line-subtle)] border-bottom-[1px_solid_var(--color-line-subtle)] p-3">
          {["Free shipping over $50", "Secure checkout", "30-day returns", "Made-to-order prints"].map((badge) => (
            <div key={badge} className="d-flex align-items-center gap-2">
              <span className="iw-badge-dot"></span>
              <span className="iw-nav-link fs-[var(--font-size-sm)]">{badge}</span>
            </div>
          ))}
        </div>

        <div className="d-grid gap-4 gtc-[repeat(2,1fr)] gtc-md-[repeat(4,1fr)]">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading} className="d-flex flex-column gap-3">
              <span className="iw-column-heading fw-bold fs-[var(--font-size-sm)]">{column.heading}</span>
              <ul className="d-flex flex-column gap-2 list-unstyled">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="iw-nav-link fs-[var(--font-size-sm)]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="d-flex flex-column flex-md-row gap-3 justify-content-between align-items-md-center border-top-[1px_solid_var(--color-line-subtle)] p-3">
          <ul className="d-flex flex-wrap gap-4 list-unstyled">
            {SOCIAL_LINKS.map((social) => (
              <li key={social}>
                <a href="#" className="iw-nav-link fs-[var(--font-size-sm)]">
                  {social}
                </a>
              </li>
            ))}
          </ul>

          <span className="iw-nav-link fs-[var(--font-size-xs)]">© 2026 Inkwake. All rights reserved.</span>
          <span className="iw-nav-link fs-[var(--font-size-xs)]">Built with Strata CSS</span>
        </div>
      </div>

      <div className="border-top-[1px_solid_var(--color-line-subtle)] bg-[var(--color-bg-hero)] p-3">
        <div className="iw-marquee">
          <div className="iw-marquee-track iw-marquee-track--fast d-flex gap-5" aria-hidden="true">
            {[...PAYMENT_METHODS, ...PAYMENT_METHODS].map((method, index) => (
              <div key={index} className="d-flex align-items-center gap-2">
                <svg aria-hidden="true" width="32" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 32 24">
                  <rect x="1" y="1" width="30" height="22" rx="3" />
                  <path d="M1 9h30" />
                </svg>
                <span className="iw-nav-link fs-[var(--font-size-sm)] text-nowrap">{method}</span>
              </div>
            ))}
          </div>
        </div>
        <span className="visually-hidden">Accepted payment methods: {PAYMENT_METHODS.join(", ")}</span>
      </div>
    </footer>
  );
}

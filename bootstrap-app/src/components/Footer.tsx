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

const TRUST_BADGES = ["Free shipping over $50", "Secure checkout", "30-day returns", "Made-to-order prints"];

const PAYMENT_METHODS = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay", "Google Pay"];

export default function Footer() {
  return (
    <footer className="iw-footer border-top">
      <div className="iw-container iw-footer-outer d-flex flex-column gap-5">
        <div className="d-flex flex-column gap-3">
          <span className="iw-footer-brand iw-brand-gradient fw-bold">Inkwake</span>
          <p className="iw-nav-link mb-0">
            Original anime-inspired figures, apparel, art prints, and manga. Self-generated art only — no
            third-party IP.
          </p>

          <form className="iw-footer-newsletter d-flex flex-column gap-2">
            <label htmlFor="footer-newsletter-email" className="iw-column-heading fw-bold">
              Join the newsletter
            </label>
            <div className="d-flex gap-2">
              <input
                id="footer-newsletter-email"
                type="email"
                placeholder="you@example.com"
                className="iw-newsletter-input form-control"
              />
              <button type="submit" className="iw-subscribe-btn btn text-nowrap">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="iw-footer-badges d-grid border-top border-bottom">
          {TRUST_BADGES.map((badge) => (
            <div key={badge} className="d-flex align-items-center gap-2">
              <span className="iw-badge-dot"></span>
              <span className="iw-nav-link">{badge}</span>
            </div>
          ))}
        </div>

        <div className="iw-footer-columns d-grid">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading} className="d-flex flex-column gap-3">
              <span className="iw-column-heading fw-bold">{column.heading}</span>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="iw-nav-link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="d-flex flex-column flex-md-row gap-3 justify-content-between align-items-md-center border-top pt-4">
          <ul className="list-unstyled d-flex flex-wrap gap-4 mb-0">
            {SOCIAL_LINKS.map((social) => (
              <li key={social}>
                <a href="#" className="iw-nav-link">
                  {social}
                </a>
              </li>
            ))}
          </ul>

          <span className="iw-nav-link">© 2026 Inkwake. All rights reserved.</span>
          <span className="iw-nav-link">Built with Bootstrap</span>
        </div>
      </div>

      <div className="iw-payment-strip border-top py-3">
        <div className="iw-marquee">
          <div className="iw-marquee-track iw-marquee-track--fast gap-5" aria-hidden="true">
            {[...PAYMENT_METHODS, ...PAYMENT_METHODS].map((method, index) => (
              <div key={index} className="d-flex align-items-center gap-2">
                <svg aria-hidden="true" width="32" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 32 24">
                  <rect x="1" y="1" width="30" height="22" rx="3" />
                  <path d="M1 9h30" />
                </svg>
                <span className="iw-nav-link text-nowrap">{method}</span>
              </div>
            ))}
          </div>
        </div>
        <span className="visually-hidden">Accepted payment methods: {PAYMENT_METHODS.join(", ")}</span>
      </div>
    </footer>
  );
}

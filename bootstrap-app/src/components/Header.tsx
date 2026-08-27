import AnnouncementBar from "./AnnouncementBar";

const MEGA_CATEGORIES = [
  {
    label: "Figures",
    columns: [
      { heading: "Shop by type", links: ["New releases", "Pre-orders", "Scale figures", "Nendoroids", "Prize figures", "Statues"] },
      { heading: "Shop by price", links: ["Under $25", "$25 – $50", "$50 – $100", "$100+"] },
      { heading: "Shop by size", links: ["Mini", "Standard", "Deluxe", "Life-size"] },
      { heading: "Browse", links: ["Best sellers", "New arrivals", "Staff picks", "Restocks"] },
    ],
    promo: { title: "New Arrivals", copy: "This week's figure drops.", cta: "Shop new arrivals" },
  },
  {
    label: "Apparel",
    columns: [
      { heading: "Shop by type", links: ["T-shirts", "Hoodies", "Jackets", "Sweatpants", "Accessories"] },
      { heading: "Shop by size", links: ["XS – S", "M – L", "XL – 2XL", "Plus size"] },
      { heading: "Shop by style", links: ["Streetwear", "Minimalist", "Graphic tees", "Limited drops"] },
      { heading: "Browse", links: ["Best sellers", "New arrivals", "Sale", "Limited"] },
    ],
    promo: { title: "Streetwear Drop", copy: "Limited-run apparel, restocked weekly.", cta: "Shop apparel" },
  },
  {
    label: "Art Prints",
    columns: [
      { heading: "Shop by type", links: ["Posters", "Canvas", "Postcards", "Frames", "Stickers"] },
      { heading: "Shop by size", links: ["A5", "A4", "A3", "Oversized"] },
      { heading: "Browse", links: ["Best sellers", "New arrivals", "Staff picks", "Sale"] },
      { heading: "Shop by room", links: ["Living room", "Bedroom", "Office", "Desk"] },
    ],
    promo: { title: "Print Collection", copy: "Original, self-generated art only.", cta: "Shop art prints" },
  },
  {
    label: "Manga",
    columns: [
      { heading: "Shop by type", links: ["Volumes", "Box sets", "Light novels", "Artbooks"] },
      { heading: "Genres", links: ["Action", "Fantasy", "Romance", "Sci-fi", "Slice of life"] },
      { heading: "Browse", links: ["Best sellers", "New arrivals", "Staff picks"] },
      { heading: "Format", links: ["Physical", "Digital", "Bundle", "Subscription"] },
    ],
    promo: { title: "Reader Picks", copy: "Staff-recommended reads.", cta: "Shop manga" },
  },
  {
    label: "Accessories",
    columns: [
      { heading: "Shop by type", links: ["Bags", "Pins & badges", "Keychains", "Phone cases", "Plushies"] },
      { heading: "Browse", links: ["Best sellers", "New arrivals", "Under $20"] },
      { heading: "Shop by price", links: ["Under $10", "$10 – $25", "$25 – $50", "$50+"] },
      { heading: "Gift ideas", links: ["For him", "For her", "Under $20", "Stocking stuffers"] },
    ],
    promo: { title: "Desk & Bag Kit", copy: "Small collectibles, big personality.", cta: "Shop accessories" },
  },
  {
    label: "Sale",
    columns: [
      { heading: "Shop the sale", links: ["Clearance", "Bundle deals", "Last chance", "Restocked & reduced"] },
      { heading: "Browse", links: ["Figures", "Apparel", "Art prints", "Manga"] },
      { heading: "Discount level", links: ["10% off", "25% off", "40% off", "Clearance"] },
      { heading: "Timing", links: ["Ending soon", "Just added", "Final markdowns"] },
    ],
    promo: { title: "Up To 40% Off", copy: "While stock lasts.", cta: "Shop the sale" },
  },
];

function IconButton({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <button type="button" aria-label={label} className="iw-icon-btn btn btn-link p-0">
      {children}
    </button>
  );
}

export default function Header() {
  return (
    <header className="sticky-top">
      {/* .iw-header's backdrop-filter lives on this inner wrapper, not the
          <header> root — filter/backdrop-filter establishes a new
          containing block for any position:fixed descendant (CSS spec),
          which was silently collapsing the offcanvas mobile drawer (also
          fixed, but a sibling of this wrapper below, not a descendant of
          it) down to this wrapper's own ~76px height instead of the
          viewport. Same latent bug existed in tailwind-app/strata-app's
          headers — fixed there too. */}
      <div className="iw-header">
        <AnnouncementBar />

      <nav className="navbar navbar-expand-lg iw-header-bar">
        <div className="iw-container d-flex align-items-center justify-content-between">
          <a href="/" className="iw-brand-gradient navbar-brand fw-bold">
            Inkwake
          </a>

          <ul className="navbar-nav d-none d-lg-flex flex-row gap-3 mx-auto">
            {MEGA_CATEGORIES.map((category) => (
              <li key={category.label} className="nav-item dropdown position-static">
                <button
                  type="button"
                  className="iw-nav-link nav-link dropdown-toggle btn btn-link"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                  aria-expanded="false"
                >
                  {category.label}
                </button>

                <div className="iw-mega-panel dropdown-menu w-100">
                  <div className="iw-container">
                    <div className="row g-4 py-4">
                      {category.columns.map((column) => (
                        <div key={column.heading} className="col">
                          <div className="iw-column-heading fw-bold mb-2">{column.heading}</div>
                          <ul className="list-unstyled d-flex flex-column gap-2">
                            {column.links.map((link) => (
                              <li key={link}>
                                <a href="#" className="iw-nav-link dropdown-item p-0">
                                  {link}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div className="col">
                        <div className="iw-promo-panel h-100 d-flex flex-column justify-content-between gap-3 rounded p-4">
                          <div>
                            <div className="fw-bold text-white mb-1">{category.promo.title}</div>
                            <p className="text-white-50 mb-0">{category.promo.copy}</p>
                          </div>
                          <a href="#" className="fw-bold text-white text-decoration-underline">
                            {category.promo.cta}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Shared shell: border/background/entrance-exit transition live
              here, not on each .dropdown-menu — it shows/hides once for
              "is any category open", so switching categories never re-fades
              the border the way each panel carrying its own border would.
              Matches tailwind-app's split between the outer wrapper (fades
              once) and each category's inner content (crossfades inside
              it). Sits behind the actual .dropdown-menu panels (z-index),
              which now carry only content, not border/bg. */}
          <div className="iw-mega-shell" id="iwMegaShell" suppressHydrationWarning />

          <div className="d-none d-md-flex align-items-center gap-3">
            <button type="button" data-theme-toggle aria-label="Cycle colour theme" className="iw-theme-toggle btn">
              dark
            </button>

            <IconButton label="Search">
              <svg aria-hidden="true" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
              </svg>
            </IconButton>

            <IconButton label="Account">
              <svg aria-hidden="true" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" strokeLinecap="round" />
              </svg>
            </IconButton>

            <button type="button" aria-label="Cart, 0 items" className="iw-icon-btn btn btn-link p-0 position-relative">
              <svg aria-hidden="true" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M6 8h12l-1 12H7L6 8Z" strokeLinejoin="round" />
                <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
              </svg>
              <span className="iw-cart-badge">0</span>
            </button>
          </div>

          <button
            type="button"
            className="iw-navbar-toggler navbar-toggler border-0 p-0 d-flex flex-column gap-1 d-lg-none"
            data-bs-toggle="offcanvas"
            data-bs-target="#iwMobileNav"
            aria-controls="iwMobileNav"
            aria-label="Toggle navigation menu"
          >
            <span className="iw-toggler-bar d-block"></span>
            <span className="iw-toggler-bar d-block"></span>
            <span className="iw-toggler-bar d-block"></span>
          </button>
        </div>
      </nav>
      </div>

      <div className="iw-offcanvas offcanvas offcanvas-end" tabIndex={-1} id="iwMobileNav" aria-labelledby="iwMobileNavLabel">
        <div className="offcanvas-header border-bottom">
          <h2 className="iw-brand-gradient offcanvas-title fw-bold" id="iwMobileNavLabel">
            Inkwake
          </h2>
          <button type="button" className="btn btn-link p-0" data-bs-dismiss="offcanvas" aria-label="Close navigation menu">
            <svg aria-hidden="true" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="offcanvas-body d-flex flex-column">
          <div className="iw-accordion accordion" id="iwMobileCategories">
            {MEGA_CATEGORIES.map((category, i) => (
              <div key={category.label} className="accordion-item">
                <h3 className="accordion-header">
                  <button
                    className="iw-accordion-button-sm accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#iwCat${i}`}
                  >
                    {category.label}
                  </button>
                </h3>
                <div id={`iwCat${i}`} className="accordion-collapse collapse" data-bs-parent="#iwMobileCategories">
                  <div className="accordion-body">
                    <div className="iw-accordion iw-accordion-nested accordion" id={`iwSub${i}`}>
                      {category.columns.map((column, j) => (
                        <div key={column.heading} className="accordion-item">
                          <h4 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#iwSub${i}-${j}`}
                            >
                              {column.heading}
                            </button>
                          </h4>
                          <div id={`iwSub${i}-${j}`} className="accordion-collapse collapse" data-bs-parent={`#iwSub${i}`}>
                            <div className="accordion-body row row-cols-2 g-2">
                              {column.links.map((link) => (
                                <div key={link} className="col">
                                  <a href="#" className="iw-nav-link">
                                    {link}
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex align-items-center justify-content-between border-top pt-4 mt-4">
            <div className="d-flex align-items-center gap-4">
              <IconButton label="Search">
                <svg aria-hidden="true" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                </svg>
              </IconButton>
              <IconButton label="Account">
                <svg aria-hidden="true" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" strokeLinecap="round" />
                </svg>
              </IconButton>
              <button type="button" aria-label="Cart, 0 items" className="iw-icon-btn btn btn-link p-0 position-relative">
                <svg aria-hidden="true" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M6 8h12l-1 12H7L6 8Z" strokeLinejoin="round" />
                  <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
                </svg>
                <span className="iw-cart-badge">0</span>
              </button>
            </div>

            <button type="button" data-theme-toggle aria-label="Cycle colour theme" className="iw-theme-toggle btn">
              dark
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

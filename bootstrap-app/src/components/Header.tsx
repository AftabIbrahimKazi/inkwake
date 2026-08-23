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
    <header className="sticky-top bg-body border-bottom">
      <AnnouncementBar />

      <nav className="navbar navbar-expand-lg py-3">
        <div className="container">
          <a href="/" className="navbar-brand iw-brand-gradient fw-bold">
            Inkwake
          </a>

          <ul className="navbar-nav d-none d-lg-flex flex-row gap-4 mx-auto">
            {MEGA_CATEGORIES.map((category) => (
              <li key={category.label} className="nav-item dropdown position-static">
                <button
                  type="button"
                  className="nav-link dropdown-toggle iw-nav-link btn btn-link"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {category.label}
                </button>

                <div className="dropdown-menu w-100 iw-mega-panel">
                  <div className="container">
                    <div className="row g-4 py-4">
                      {category.columns.map((column) => (
                        <div key={column.heading} className="col">
                          <div className="iw-column-heading fw-bold mb-2">{column.heading}</div>
                          <ul className="list-unstyled d-flex flex-column gap-2">
                            {column.links.map((link) => (
                              <li key={link}>
                                <a href="#" className="dropdown-item iw-nav-link p-0">
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

          <div className="d-none d-md-flex align-items-center gap-4">
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
            className="navbar-toggler border-0 p-0 d-lg-none"
            data-bs-toggle="offcanvas"
            data-bs-target="#iwMobileNav"
            aria-controls="iwMobileNav"
            aria-label="Toggle navigation menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <div className="offcanvas offcanvas-end iw-offcanvas" tabIndex={-1} id="iwMobileNav" aria-labelledby="iwMobileNavLabel">
        <div className="offcanvas-header border-bottom">
          <h2 className="offcanvas-title iw-brand-gradient fw-bold" id="iwMobileNavLabel">
            Inkwake
          </h2>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div className="offcanvas-body d-flex flex-column">
          <div className="accordion iw-accordion" id="iwMobileCategories">
            {MEGA_CATEGORIES.map((category, i) => (
              <div key={category.label} className="accordion-item">
                <h3 className="accordion-header">
                  <button
                    className="accordion-button collapsed iw-accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#iwCat${i}`}
                  >
                    {category.label}
                  </button>
                </h3>
                <div id={`iwCat${i}`} className="accordion-collapse collapse" data-bs-parent="#iwMobileCategories">
                  <div className="accordion-body">
                    <div className="accordion iw-accordion iw-accordion-nested" id={`iwSub${i}`}>
                      {category.columns.map((column, j) => (
                        <div key={column.heading} className="accordion-item">
                          <h4 className="accordion-header">
                            <button
                              className="accordion-button collapsed iw-accordion-button iw-accordion-button-sm"
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

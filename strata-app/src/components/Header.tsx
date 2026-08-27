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
    <button type="button" aria-label={label} className="iw-icon-btn text-muted transition d-flex bg-[transparent] border-[none] p-0">
      {children}
    </button>
  );
}

export default function Header() {
  return (
    <header className="position-sticky top-0 z-[50]">
      {/* .iw-header's backdrop-filter lives on this inner wrapper, not the
          <header> root — filter/backdrop-filter establishes a new
          containing block for any position:fixed descendant (CSS spec),
          which was silently collapsing the mobile drawer/backdrop below
          (also fixed, but siblings of this wrapper, not descendants of it)
          down to this wrapper's own ~76px height instead of the viewport.
          Same latent bug existed in tailwind-app/bootstrap-app's headers —
          fixed there too. The mega-menu shell/panels stay inside this
          wrapper: they're position:absolute, not fixed, so they're
          unaffected and should stay positioned relative to the header. */}
      <div className="iw-header bg-[color-mix(in_srgb,var(--color-bg-surface)_90%,transparent)] border-bottom-[1px_solid_color-mix(in_srgb,var(--color-line-subtle)_10%,transparent)]">
        <AnnouncementBar />

      <div className="mx-auto w-100 max-w-[1152px] px-[var(--space-xl)] d-flex align-items-center justify-content-between pt-[var(--space-md)] pb-[var(--space-md)]" data-hover-group>
        <a href="/" className="iw-brand-gradient bg-[linear-gradient(to_right,var(--color-brand-gradient-start),var(--color-brand-gradient-end))] fw-bold fs-[var(--font-size-lg)]">
          Inkwake
        </a>

        <nav aria-label="Primary" className="d-none d-lg-block">
          <ul className="d-flex align-items-center gap-3 list-unstyled">
            {MEGA_CATEGORIES.map((category, i) => (
              <li key={category.label}>
                <button
                  type="button"
                  className="iw-nav-link text-muted transition bg-[transparent] border-[none] px-0 pt-[var(--space-sm)] pb-[var(--space-sm)] fs-[var(--font-size-sm)]"
                  data-hover-target={`#strataMega${i}`}
                >
                  {category.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="d-none d-md-flex align-items-center gap-3">
          <button
            type="button"
            data-theme-toggle
            aria-label="Cycle colour theme"
            className="iw-theme-toggle iw-pill text-muted transition rounded-pill text-capitalize border-[1px_solid_color-mix(in_srgb,var(--color-line-subtle)_20%,transparent)] pt-[var(--space-xs)] pb-[var(--space-xs)] ps-[var(--space-md)] pe-[var(--space-md)] fs-[var(--font-size-xs)]"
          >
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

          <button type="button" aria-label="Cart, 0 items" className="iw-icon-btn text-muted transition position-relative bg-[transparent] border-[none] p-0">
            <svg aria-hidden="true" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M6 8h12l-1 12H7L6 8Z" strokeLinejoin="round" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
            </svg>
            <span className="d-flex align-items-center justify-content-center position-absolute rounded-circle bg-primary text-white fs-[var(--font-size-xs)] h-[var(--space-lg)] w-[var(--space-lg)] top-[calc(var(--space-sm)*-1)] right-[calc(var(--space-sm)*-1)]">
              0
            </span>
          </button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="d-flex d-lg-none flex-column gap-1 bg-[transparent] border-[none] p-0"
          data-toggle-target="#strataMobileNav"
          data-toggle-attr="visible"
        >
          <span className="bg-[var(--color-text-heading)] d-block h-[1px] w-[24px]"></span>
          <span className="bg-[var(--color-text-heading)] d-block h-[1px] w-[24px]"></span>
          <span className="bg-[var(--color-text-heading)] d-block h-[1px] w-[24px]"></span>
        </button>
      </div>

      {/* Shared shell: border/background/entrance-exit transition live here,
          not on each category panel — it shows/hides once for "is any
          category open" (driven from interactions.js), so switching
          categories never re-fades the border the way each panel carrying
          its own border/bg would. Matches tailwind-app's split between the
          outer wrapper (fades once) and each category's inner content
          (crossfades inside it). Sits behind the actual panels (z-index). */}
      <div
        id="iwMegaShell"
        data-st-visible="false"
        suppressHydrationWarning
        className="iw-mega-shell position-absolute start-0 end-0 top-100 d-none d-md-block border-top-[1px_solid_color-mix(in_srgb,var(--color-line-subtle)_10%,transparent)] bg-[var(--color-bg-surface)]"
      />

      {MEGA_CATEGORIES.map((category, i) => (
        <div
          key={category.label}
          id={`strataMega${i}`}
          data-st-visible="false"
          className="iw-mega-panel position-absolute start-0 end-0 top-100 d-none d-md-block"
        >
          <div className="mx-auto w-100 max-w-[1152px] px-[var(--space-xl)] py-[var(--space-3xl)]">
            <div className="d-grid gap-4 gtc-[1fr_1fr_1fr_1fr_1.2fr]">
              {category.columns.map((column) => (
                <div key={column.heading} className="d-flex flex-column gap-2">
                  <span className="iw-column-heading text-body fw-bold fs-[var(--font-size-sm)]">{column.heading}</span>
                  <ul className="d-flex flex-column gap-2 list-unstyled">
                    {column.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="iw-nav-link text-muted transition fs-[var(--font-size-sm)] text-nowrap">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="bg-[linear-gradient(to_bottom_right,var(--color-brand-gradient-start),var(--color-brand-gradient-end))] d-flex flex-column justify-content-between gap-3 rounded p-4">
                <div>
                  <div className="fw-bold text-white fs-[var(--font-size-sm)]">{category.promo.title}</div>
                  <p className="text-white fs-[var(--font-size-sm)]">{category.promo.copy}</p>
                </div>
                <a href="#" className="fw-bold text-white fs-[var(--font-size-sm)] text-decoration-underline">
                  {category.promo.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>

      {/* Backdrop reuses the same generic [data-toggle-target] click
          handler as the close button (interactions.js) — clicking it while
          the drawer is open always closes (toggling an already-open value),
          so no extra JS is needed. Matches bootstrap-app's native .offcanvas
          backdrop and tailwind-app's Alpine backdrop. */}
      <div
        data-st-visible="false"
        data-toggle-target="#strataMobileNav"
        data-toggle-attr="visible"
        className="iw-mobile-backdrop position-fixed inset-0 z-[55] d-lg-none bg-[var(--color-black)]"
      />

      <div
        id="strataMobileNav"
        data-st-visible="false"
        className="iw-mobile-drawer position-fixed top-0 end-0 bottom-0 z-[60] w-[var(--iw-size-drawer)] d-flex d-lg-none flex-column bg-[var(--color-bg-surface)] border-[1px_solid_color-mix(in_srgb,var(--color-line-subtle)_10%,transparent)] overflow-[hidden] p-4"
      >
        <div className="d-flex align-items-center justify-content-between border-bottom-[1px_solid_color-mix(in_srgb,var(--color-line-subtle)_10%,transparent)] pb-3 mb-3">
          <span className="iw-brand-gradient bg-[linear-gradient(to_right,var(--color-brand-gradient-start),var(--color-brand-gradient-end))] fw-bold fs-[var(--font-size-lg)]">Inkwake</span>
          <button
            type="button"
            aria-label="Close navigation menu"
            className="iw-icon-btn text-muted transition bg-[transparent] border-[none] p-0"
            data-toggle-target="#strataMobileNav"
            data-toggle-attr="visible"
          >
            <svg aria-hidden="true" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="d-flex flex-column overflow-[auto]">
          {MEGA_CATEGORIES.map((category, i) => (
            <div key={category.label} className="border-bottom-[1px_solid_color-mix(in_srgb,var(--color-line-subtle)_10%,transparent)] py-3">
              <button
                type="button"
                className="iw-nav-link text-body d-flex align-items-center justify-content-between w-100 bg-[transparent] border-[none] p-0 fw-bold fs-[var(--font-size-md)]"
                data-toggle-target={`#strataMobileCat${i}`}
                data-toggle-attr="collapsed"
                aria-expanded="false"
              >
                {category.label}
                <svg aria-hidden="true" className="iw-chevron transition" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div id={`strataMobileCat${i}`} data-st-collapsed="true" className="d-flex flex-column gap-3 pt-3">
                {category.columns.map((column, j) => (
                  <div key={column.heading}>
                    <button
                      type="button"
                      className="iw-nav-heading text-muted transition d-flex align-items-center justify-content-between w-100 bg-[transparent] border-[none] p-0 fw-bold fs-[var(--font-size-xs)] text-uppercase"
                      data-toggle-target={`#strataMobileSub${i}-${j}`}
                      data-toggle-attr="collapsed"
                      aria-expanded="false"
                    >
                      {column.heading}
                      <svg aria-hidden="true" className="iw-chevron transition" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <div
                      id={`strataMobileSub${i}-${j}`}
                      data-st-collapsed="true"
                      className="d-grid gap-2 pt-2 gtc-[1fr_1fr]"
                    >
                      {column.links.map((link) => (
                        <a key={link} href="#" className="iw-nav-link text-muted transition fs-[var(--font-size-sm)]">
                          {link}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex align-items-center justify-content-between border-top-[1px_solid_color-mix(in_srgb,var(--color-line-subtle)_10%,transparent)] pt-3 mt-3">
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
            <button type="button" aria-label="Cart, 0 items" className="iw-icon-btn text-muted transition position-relative bg-[transparent] border-[none] p-0">
              <svg aria-hidden="true" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M6 8h12l-1 12H7L6 8Z" strokeLinejoin="round" />
                <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
              </svg>
              <span className="d-flex align-items-center justify-content-center position-absolute rounded-circle bg-primary text-white fs-[var(--font-size-xs)] h-[var(--space-lg)] w-[var(--space-lg)] top-[calc(var(--space-sm)*-1)] right-[calc(var(--space-sm)*-1)]">
                0
              </span>
            </button>
          </div>

          <button
            type="button"
            data-theme-toggle
            aria-label="Cycle colour theme"
            className="iw-theme-toggle text-muted transition rounded-pill text-capitalize border-[1px_solid_color-mix(in_srgb,var(--color-line-subtle)_20%,transparent)] pt-[var(--space-xs)] pb-[var(--space-xs)] ps-[var(--space-md)] pe-[var(--space-md)] fs-[var(--font-size-xs)]"
          >
            dark
          </button>
        </div>
      </div>
    </header>
  );
}

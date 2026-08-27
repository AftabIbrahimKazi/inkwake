import AnnouncementBar from "./AnnouncementBar";

const MEGA_CATEGORIES = [
  {
    label: "Figures",
    columns: [
      {
        heading: "Shop by type",
        links: ["New releases", "Pre-orders", "Scale figures", "Nendoroids", "Prize figures", "Statues"],
      },
      {
        heading: "Shop by price",
        links: ["Under $25", "$25 – $50", "$50 – $100", "$100+"],
      },
      {
        heading: "Shop by size",
        links: ["Mini", "Standard", "Deluxe", "Life-size"],
      },
      {
        heading: "Browse",
        links: ["Best sellers", "New arrivals", "Staff picks", "Restocks"],
      },
    ],
    promo: {
      title: "New Arrivals",
      copy: "This week's figure drops.",
      cta: "Shop new arrivals",
    },
  },
  {
    label: "Apparel",
    columns: [
      {
        heading: "Shop by type",
        links: ["T-shirts", "Hoodies", "Jackets", "Sweatpants", "Accessories"],
      },
      {
        heading: "Shop by size",
        links: ["XS – S", "M – L", "XL – 2XL", "Plus size"],
      },
      {
        heading: "Shop by style",
        links: ["Streetwear", "Minimalist", "Graphic tees", "Limited drops"],
      },
      {
        heading: "Browse",
        links: ["Best sellers", "New arrivals", "Sale", "Limited"],
      },
    ],
    promo: {
      title: "Streetwear Drop",
      copy: "Limited-run apparel, restocked weekly.",
      cta: "Shop apparel",
    },
  },
  {
    label: "Art Prints",
    columns: [
      {
        heading: "Shop by type",
        links: ["Posters", "Canvas", "Postcards", "Frames", "Stickers"],
      },
      {
        heading: "Shop by size",
        links: ["A5", "A4", "A3", "Oversized"],
      },
      {
        heading: "Browse",
        links: ["Best sellers", "New arrivals", "Staff picks", "Sale"],
      },
      {
        heading: "Shop by room",
        links: ["Living room", "Bedroom", "Office", "Desk"],
      },
    ],
    promo: {
      title: "Print Collection",
      copy: "Original, self-generated art only.",
      cta: "Shop art prints",
    },
  },
  {
    label: "Manga",
    columns: [
      {
        heading: "Shop by type",
        links: ["Volumes", "Box sets", "Light novels", "Artbooks"],
      },
      {
        heading: "Genres",
        links: ["Action", "Fantasy", "Romance", "Sci-fi", "Slice of life"],
      },
      {
        heading: "Browse",
        links: ["Best sellers", "New arrivals", "Staff picks"],
      },
      {
        heading: "Format",
        links: ["Physical", "Digital", "Bundle", "Subscription"],
      },
    ],
    promo: {
      title: "Reader Picks",
      copy: "Staff-recommended reads.",
      cta: "Shop manga",
    },
  },
  {
    label: "Accessories",
    columns: [
      {
        heading: "Shop by type",
        links: ["Bags", "Pins & badges", "Keychains", "Phone cases", "Plushies"],
      },
      {
        heading: "Browse",
        links: ["Best sellers", "New arrivals", "Under $20"],
      },
      {
        heading: "Shop by price",
        links: ["Under $10", "$10 – $25", "$25 – $50", "$50+"],
      },
      {
        heading: "Gift ideas",
        links: ["For him", "For her", "Under $20", "Stocking stuffers"],
      },
    ],
    promo: {
      title: "Desk & Bag Kit",
      copy: "Small collectibles, big personality.",
      cta: "Shop accessories",
    },
  },
  {
    label: "Sale",
    columns: [
      {
        heading: "Shop the sale",
        links: ["Clearance", "Bundle deals", "Last chance", "Restocked & reduced"],
      },
      {
        heading: "Browse",
        links: ["Figures", "Apparel", "Art prints", "Manga"],
      },
      {
        heading: "Discount level",
        links: ["10% off", "25% off", "40% off", "Clearance"],
      },
      {
        heading: "Timing",
        links: ["Ending soon", "Just added", "Final markdowns"],
      },
    ],
    promo: {
      title: "Up To 40% Off",
      copy: "While stock lasts.",
      cta: "Shop the sale",
    },
  },
];

const THEME_CYCLE_EXPR =
  "theme = theme === 'dark' ? 'light' : theme === 'light' ? 'dim' : 'dark'; document.documentElement.dataset.theme = theme";

const FADE_TRANSITION = {
  "x-transition:enter": "transition ease-out duration-200",
  "x-transition:enter-start": "opacity-0",
  "x-transition:enter-end": "opacity-100",
  "x-transition:leave": "transition ease-in duration-150",
  "x-transition:leave-start": "opacity-100",
  "x-transition:leave-end": "opacity-0",
};

const FADE_SLIDE_TRANSITION = {
  "x-transition:enter": "transition ease-out duration-200",
  "x-transition:enter-start": "opacity-0 -translate-y-1",
  "x-transition:enter-end": "opacity-100 translate-y-0",
  "x-transition:leave": "transition ease-in duration-150",
  "x-transition:leave-start": "opacity-100 translate-y-0",
  "x-transition:leave-end": "opacity-0 -translate-y-1",
};

// Mobile nav mechanism is now unified across all three apps as a fixed,
// right-anchored slide-in drawer with a backdrop (bootstrap-app's native
// .offcanvas and strata-app's hand-rolled fixed panel already used this
// shape; tailwind-app previously used an inline in-flow dropdown instead —
// changed here to match). Timings match bootstrap-app's Bootstrap-default
// offcanvas transform transition (300ms both directions) and its backdrop
// fade, so the same open/close feel applies everywhere.
const DRAWER_TRANSITION = {
  "x-transition:enter": "transition ease-in-out duration-300",
  "x-transition:enter-start": "translate-x-full",
  "x-transition:enter-end": "translate-x-0",
  "x-transition:leave": "transition ease-in-out duration-300",
  "x-transition:leave-start": "translate-x-0",
  "x-transition:leave-end": "translate-x-full",
};

const BACKDROP_TRANSITION = {
  "x-transition:enter": "transition ease-linear duration-300",
  "x-transition:enter-start": "opacity-0",
  "x-transition:enter-end": "opacity-100",
  "x-transition:leave": "transition ease-linear duration-300",
  "x-transition:leave-start": "opacity-100",
  "x-transition:leave-end": "opacity-0",
};

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50"
      x-data="{ mobileOpen: false, theme: 'dark', openCategory: null }"
      x-init="theme = document.documentElement.dataset.theme"
    >
      {/* backdrop-blur lives on this inner wrapper, not the <header> root —
          filter/backdrop-filter establishes a new containing block for any
          `position: fixed` descendant (CSS spec), which was silently
          collapsing the mobile drawer/backdrop below (also fixed, but
          siblings of this wrapper, not descendants of it) down to this
          wrapper's own ~76px height instead of the viewport. Same latent
          bug existed in bootstrap-app/strata-app's headers — fixed there
          too. */}
      <div className="border-border-subtle/10 bg-surface/90 border-b backdrop-blur-md">
        <AnnouncementBar />

        <div className="relative" {...{ "x-on:mouseleave.debounce.150ms": "openCategory = null" }}>
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-xl py-md">
          <a
            href="/"
            className="from-gradient-start to-gradient-end bg-gradient-to-r bg-clip-text text-lg font-bold tracking-tight text-transparent"
          >
            Inkwake
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-lg">
              {MEGA_CATEGORIES.map((category) => (
                <li key={category.label}>
                  <button
                    type="button"
                    className="text-muted hover:text-accent py-sm text-sm whitespace-nowrap transition-colors duration-200"
                    suppressHydrationWarning
                    {...{
                      "x-on:mouseenter": `openCategory = '${category.label}'`,
                      ":class": `{ 'text-accent': openCategory === '${category.label}' }`,
                    }}
                  >
                    {category.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-lg">
            <button
              type="button"
              aria-label="Cycle colour theme"
              className="border-border-subtle/20 text-muted hover:text-heading hidden rounded-full border px-md py-xs text-xs tracking-wide capitalize md:inline-block"
              x-text="theme"
              suppressHydrationWarning
              {...{ "x-on:click": THEME_CYCLE_EXPR }}
            >
              dark
            </button>

            <button type="button" aria-label="Search" className="text-muted hover:text-accent hidden md:inline-flex">
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
              </svg>
            </button>

            <button type="button" aria-label="Account" className="text-muted hover:text-accent hidden md:inline-flex">
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" strokeLinecap="round" />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Cart, 0 items"
              className="text-muted hover:text-accent relative hidden md:inline-flex"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M6 8h12l-1 12H7L6 8Z" strokeLinejoin="round" />
                <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
              </svg>
              <span className="bg-accent absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full text-xs text-white">
                0
              </span>
            </button>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              className="flex flex-col gap-xs lg:hidden"
              {...{ "x-on:click": "mobileOpen = !mobileOpen" }}
            >
              <span className="bg-heading block h-px w-6"></span>
              <span className="bg-heading block h-px w-6"></span>
              <span className="bg-heading block h-px w-6"></span>
            </button>
          </div>
        </div>

        <div
          className="border-border-subtle/10 bg-surface absolute inset-x-0 top-full hidden border-t md:block"
          x-show="openCategory !== null"
          suppressHydrationWarning
          {...FADE_SLIDE_TRANSITION}
        >
          <div className="mx-auto grid w-full max-w-6xl px-xl py-3xl">
            {MEGA_CATEGORIES.map((category) => (
              // Every category sits in the SAME grid cell (grid-area 1/1) —
              // the standard CSS-only crossfade-stack technique. Previously
              // each used x-show in normal block flow, so switching ran one
              // leave-transition and one enter-transition concurrently, and
              // with both still taking up flow space, that was a visible
              // jump/double layout, not a clean crossfade. Plain `absolute
              // inset-0` was tried instead of grid-stacking, but absolutely
              // positioned children don't contribute to their parent's
              // height, collapsing the wrapper to zero — grid-stacking still
              // sizes the container to the tallest overlapping child.
              // (A <template x-if> per-category approach was tried before
              // that and reverted: Alpine's x-if relies on the browser HTML
              // parser routing children into <template>.content, which only
              // happens when parsing static markup — React builds the DOM
              // via appendChild, which does NOT get that special routing,
              // so the div rendered as a normal, non-inert child instead
              // and caused a hydration mismatch.)
              <div
                key={category.label}
                className="col-start-1 row-start-1 grid grid-cols-[1fr_1fr_1fr_1fr_1.2fr] gap-2xl"
                x-show={`openCategory === '${category.label}'`}
                suppressHydrationWarning
                {...FADE_TRANSITION}
              >
                {category.columns.map((column) => (
                  <div key={column.heading} className="flex flex-col gap-md">
                    <span className="text-heading text-sm font-bold">{column.heading}</span>
                    <ul className="flex flex-col gap-sm">
                      {column.links.map((link) => (
                        <li key={link}>
                          <a
                            href="#"
                            className="text-muted hover:text-accent text-sm whitespace-nowrap transition-colors duration-200"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="from-gradient-start to-gradient-end flex flex-col justify-between gap-lg rounded-md bg-gradient-to-br p-xl">
                  <div className="flex flex-col gap-xs">
                    <span className="text-sm font-bold text-white">{category.promo.title}</span>
                    <p className="text-sm text-white/80">{category.promo.copy}</p>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-bold text-white underline underline-offset-4"
                  >
                    {category.promo.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>

      <div
        className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        x-show="mobileOpen"
        suppressHydrationWarning
        {...{ "x-on:click": "mobileOpen = false" }}
        {...BACKDROP_TRANSITION}
      ></div>

      <nav
        aria-label="Mobile"
        className="border-border-subtle/10 bg-surface fixed inset-y-0 right-0 z-50 flex w-[var(--iw-size-drawer)] flex-col overflow-y-auto border-l lg:hidden"
        x-show="mobileOpen"
        suppressHydrationWarning
        {...DRAWER_TRANSITION}
      >
        <div className="border-border-subtle/10 flex items-center justify-between gap-lg border-b px-xl py-lg">
          <span className="from-gradient-start to-gradient-end bg-gradient-to-r bg-clip-text text-lg font-bold tracking-tight text-transparent">
            Inkwake
          </span>
          <button
            type="button"
            aria-label="Close navigation menu"
            className="text-muted hover:text-accent"
            {...{ "x-on:click": "mobileOpen = false" }}
          >
            <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="divide-border-subtle/10 flex flex-col divide-y px-xl">
          {MEGA_CATEGORIES.map((category) => (
            <div key={category.label} className="py-lg" x-data="{ open: false }">
              <button
                type="button"
                className="text-heading flex w-full items-center justify-between text-base font-bold"
                {...{ "x-on:click": "open = !open" }}
              >
                {category.label}
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  suppressHydrationWarning
                  {...{ ":class": "{ 'rotate-180': open }" }}
                >
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div
                className="flex flex-col gap-md pt-lg"
                x-show="open"
                suppressHydrationWarning
                {...FADE_TRANSITION}
              >
                {category.columns.map((column) => (
                  <div
                    key={column.heading}
                    className="border-border-subtle/10 border-l pl-md"
                    x-data="{ subOpen: false }"
                  >
                    <button
                      type="button"
                      className="text-muted flex w-full items-center justify-between py-xs text-xs font-bold tracking-wide uppercase"
                      {...{ "x-on:click": "subOpen = !subOpen" }}
                    >
                      {column.heading}
                      <svg
                        aria-hidden="true"
                        className="h-3 w-3 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        suppressHydrationWarning
                        {...{ ":class": "{ 'rotate-180': subOpen }" }}
                      >
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    <div
                      className="grid grid-cols-2 gap-x-md gap-y-sm pt-sm pb-sm"
                      x-show="subOpen"
                      suppressHydrationWarning
                      {...FADE_TRANSITION}
                    >
                      {column.links.map((link) => (
                        <a
                          key={link}
                          href="#"
                          className="text-muted hover:text-accent text-sm transition-colors duration-200"
                        >
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

        <div className="border-border-subtle/10 flex items-center justify-between gap-lg border-t px-xl py-lg">
          <div className="flex items-center gap-lg">
            <button type="button" aria-label="Search" className="text-muted hover:text-accent">
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
              </svg>
            </button>
            <button type="button" aria-label="Account" className="text-muted hover:text-accent">
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" strokeLinecap="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Cart, 0 items"
              className="text-muted hover:text-accent relative"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M6 8h12l-1 12H7L6 8Z" strokeLinejoin="round" />
                <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
              </svg>
              <span className="bg-accent absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full text-xs text-white">
                0
              </span>
            </button>
          </div>

          <button
            type="button"
            aria-label="Cycle colour theme"
            className="border-border-subtle/20 text-muted rounded-full border px-lg py-xs text-sm capitalize"
            x-text="theme"
            suppressHydrationWarning
            {...{ "x-on:click": THEME_CYCLE_EXPR }}
          >
            dark
          </button>
        </div>
      </nav>
    </header>
  );
}

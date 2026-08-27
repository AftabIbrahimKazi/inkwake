// Strata has no grid-column/span utility (coverage.js: 0 matches) — using
// its native Bootstrap-style row/col grid instead of CSS grid for this
// mosaic, same as bootstrap-app. Spans must sum to 12 per row exactly, or a
// broken empty gap appears at the row's end (same real bug caught during
// tailwind-app's build).
//
// Strata's JIT scanner only extracts class names from literal strings that
// appear TEXTUALLY inside a className attribute (it walks class(Name)?=
// attributes and recurses into their string content — see
// node_modules/strata-css/src/scanner/scanner.js) — a class name that only
// exists inside a plain data object declared elsewhere in the file, then
// referenced by variable, is invisible to it even though the same file
// technically "contains" that text. `wide` is a plain boolean here (not a
// class-string field) specifically so the real class names below can be
// written directly inside the className expression itself.
const PARTNERS = [
  { name: "Nightloom Studio", wide: true },
  { name: "Kaen Press", wide: false },
  { name: "Ronin Freight", wide: false },
  { name: "Glasswave", wide: false },
  { name: "Driftmark", wide: true },
  { name: "Paper Lantern Co.", wide: false },
  { name: "Umbra Print", wide: true },
  { name: "Foxfire Media", wide: true },
];

export default function PartnerLogos() {
  return (
    <section className="iw-bg-surface bg-[var(--color-bg-hero)] w-100">
      <div className="iw-container mx-auto w-100 max-w-[1152px] px-[var(--space-xl)] d-flex flex-column gap-[var(--space-xl)] py-[var(--space-4xl)]">
        <p className="text-muted text-center fs-[var(--font-size-xs)] fw-bold text-uppercase">
          Trusted by studios and print houses worldwide
        </p>

        <div className="row g-0 border-[1px_solid_color-mix(in_srgb,var(--color-line-subtle)_10%,transparent)] rounded-[16px] overflow-hidden">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className={`${partner.wide ? "col-12 col-lg-6" : "col-6 col-lg-3"} border-[1px_solid_color-mix(in_srgb,var(--color-line-subtle)_10%,transparent)] d-flex align-items-center justify-content-center py-[var(--space-2xl)] px-[var(--space-lg)]`}
            >
              <span className="text-muted text-center fs-[var(--font-size-sm)] fw-bold text-uppercase">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

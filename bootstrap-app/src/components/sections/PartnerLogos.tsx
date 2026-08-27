// Column spans use Bootstrap's 12-col grid directly (4 tracks at lg = 3
// units each) — span-2 tiles get col-lg-6, span-1 tiles get col-lg-3, same
// exact tiling as tailwind-app's CSS-grid version, just expressed in
// Bootstrap's own column system instead of grid-column-span.
const PARTNERS = [
  { name: "Nightloom Studio", col: "col-12 col-md-6 col-lg-6" },
  { name: "Kaen Press", col: "col-6 col-md-3 col-lg-3" },
  { name: "Ronin Freight", col: "col-6 col-md-3 col-lg-3" },
  { name: "Glasswave", col: "col-6 col-md-3 col-lg-3" },
  { name: "Driftmark", col: "col-12 col-md-6 col-lg-6" },
  { name: "Paper Lantern Co.", col: "col-6 col-md-3 col-lg-3" },
  { name: "Umbra Print", col: "col-12 col-md-6 col-lg-6" },
  { name: "Foxfire Media", col: "col-12 col-md-6 col-lg-6" },
];

export default function PartnerLogos() {
  return (
    <section className="iw-bg-surface bg-black w-100">
      <div className="iw-container d-flex flex-column gap-4 py-5">
        <p className="text-secondary text-center small fw-bold text-uppercase">
          Trusted by studios and print houses worldwide
        </p>

        <div className="row g-0 border rounded-4 overflow-hidden">
          {PARTNERS.map((partner) => (
            <div key={partner.name} className={`${partner.col} border d-flex align-items-center justify-content-center py-4 px-3`}>
              <span className="text-secondary text-center small fw-bold text-uppercase">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

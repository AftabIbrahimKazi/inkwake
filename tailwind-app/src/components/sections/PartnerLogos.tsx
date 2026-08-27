// Each row's spans must sum to exactly 4 (the grid's column count) — a
// mismatched sum leaves a broken empty gap at the end of that row instead
// of the tile filling it (real bug, caught by screenshot audit).
const PARTNERS = [
  { name: "Nightloom Studio", span: "col-span-2" },
  { name: "Kaen Press", span: "col-span-1" },
  { name: "Ronin Freight", span: "col-span-1" },
  { name: "Glasswave", span: "col-span-1" },
  { name: "Driftmark", span: "col-span-2" },
  { name: "Paper Lantern Co.", span: "col-span-1" },
  { name: "Umbra Print", span: "col-span-2" },
  { name: "Foxfire Media", span: "col-span-2" },
];

export default function PartnerLogos() {
  return (
    <section className="bg-surface w-full">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2xl px-xl py-4xl">
        <p className="text-muted text-center text-xs font-bold tracking-wide uppercase">
          Trusted by studios and print houses worldwide
        </p>

        <div className="border-border-subtle/10 bg-border-subtle/20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border md:grid-cols-4">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className={`bg-hero-bg flex h-24 items-center justify-center px-lg ${partner.span}`}
            >
              <span className="text-muted hover:text-heading text-center text-sm font-bold tracking-wide uppercase transition-colors duration-200">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

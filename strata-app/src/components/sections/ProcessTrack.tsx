const STEPS = [
  { number: "01", title: "Sketch & concept", copy: "Every piece starts as an original sketch — no reference to existing IP." },
  { number: "02", title: "Digital sculpt", copy: "Concepts are sculpted digitally and reviewed for proportion and detail." },
  { number: "03", title: "Small-batch cast", copy: "Approved sculpts go to a limited-run cast, capped per drop." },
  { number: "04", title: "Hand finished", copy: "Every unit is hand-painted and inspected before it ships." },
];

export default function ProcessTrack() {
  return (
    <section className="bg-[var(--color-bg-surface)] w-100">
      <div className="iw-container mx-auto w-100 max-w-[1152px] px-[var(--space-xl)] d-flex flex-column gap-[var(--space-3xl)] py-[var(--space-4xl)]">
        <div className="d-flex flex-column gap-[var(--space-sm)] text-center">
          <span className="text-primary fs-[var(--font-size-xs)] fw-bold text-uppercase">From sketch to shelf</span>
          <h2 className="text-body fw-bold fs-[var(--font-size-3xl)]">How a drop gets made</h2>
        </div>

        <div className="row g-[var(--space-3xl)]">
          {STEPS.map((step) => (
            <div key={step.number} className="col-12 col-md-3 d-flex flex-column align-items-start gap-[var(--space-md)]">
              <span className="border-[1px_solid_var(--color-brand-accent)] text-primary rounded-circle d-flex align-items-center justify-content-center fs-[var(--font-size-sm)] fw-bold h-[48px] w-[48px]">
                {step.number}
              </span>
              <h3 className="text-body fw-bold fs-[var(--font-size-lg)]">{step.title}</h3>
              <p className="text-muted fs-[var(--font-size-sm)]">{step.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

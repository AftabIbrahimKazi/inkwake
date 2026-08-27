const STEPS = [
  { number: "01", title: "Sketch & concept", copy: "Every piece starts as an original sketch — no reference to existing IP." },
  { number: "02", title: "Digital sculpt", copy: "Concepts are sculpted digitally and reviewed for proportion and detail." },
  { number: "03", title: "Small-batch cast", copy: "Approved sculpts go to a limited-run cast, capped per drop." },
  { number: "04", title: "Hand finished", copy: "Every unit is hand-painted and inspected before it ships." },
];

export default function ProcessTrack() {
  return (
    <section className="bg-hero-bg w-full">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3xl px-xl py-4xl">
        <div className="flex flex-col gap-sm text-center">
          <span className="text-accent text-xs font-bold tracking-wide uppercase">From sketch to shelf</span>
          <h2 className="text-heading text-3xl font-bold tracking-tight">How a drop gets made</h2>
        </div>

        <div className="relative grid grid-cols-1 gap-3xl md:grid-cols-4">
          <div className="border-border-subtle/10 absolute top-6 right-0 left-0 hidden border-t md:block"></div>

          {STEPS.map((step) => (
            <div key={step.number} className="relative flex flex-col items-start gap-lg">
              <span className="border-accent bg-hero-bg text-accent relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 text-sm font-bold">
                {step.number}
              </span>
              <h3 className="text-heading text-lg font-bold">{step.title}</h3>
              <p className="text-muted text-sm">{step.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

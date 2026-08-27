const STEPS = [
  { number: "01", title: "Sketch & concept", copy: "Every piece starts as an original sketch — no reference to existing IP." },
  { number: "02", title: "Digital sculpt", copy: "Concepts are sculpted digitally and reviewed for proportion and detail." },
  { number: "03", title: "Small-batch cast", copy: "Approved sculpts go to a limited-run cast, capped per drop." },
  { number: "04", title: "Hand finished", copy: "Every unit is hand-painted and inspected before it ships." },
];

export default function ProcessTrack() {
  return (
    <section className="bg-black w-100">
      <div className="iw-container d-flex flex-column gap-5 py-5">
        <div className="d-flex flex-column gap-2 text-center">
          <span className="text-primary small fw-bold text-uppercase">From sketch to shelf</span>
          <h2 className="text-white fw-bold">How a drop gets made</h2>
        </div>

        <div className="row g-5 position-relative">
          <div className="border-top position-absolute top-0 start-0 end-0 d-none d-md-block mt-3"></div>

          {STEPS.map((step) => (
            <div key={step.number} className="col-12 col-md-3 d-flex flex-column align-items-start gap-3 position-relative">
              <span className="badge rounded-circle border border-primary text-primary bg-black fs-6 p-3">
                {step.number}
              </span>
              <h3 className="text-white fw-bold fs-5">{step.title}</h3>
              <p className="text-secondary small">{step.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

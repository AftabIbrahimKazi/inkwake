const POSE_OPTIONS = ["Standing", "Dynamic", "Seated"];
const FINISH_OPTIONS = ["Matte", "Gloss", "Metallic"];
const PALETTE_OPTIONS = [
  { name: "Ink Violet", swatch: "bg-primary" },
  { name: "Neon Magenta", swatch: "bg-danger" },
  { name: "Cyan Flare", swatch: "bg-info" },
];

export default function CanvasWorkspace() {
  return (
    <section className="bg-black w-100" id="canvasWorkspace">
      <div className="iw-container d-flex flex-column flex-md-row gap-5 py-5">
        <div className="card border flex-fill p-5 d-flex flex-column align-items-center justify-content-center gap-3">
          <span className="text-secondary small fw-bold text-uppercase">Live preview</span>
          <div className="ratio ratio-1x1 rounded-4 w-75"></div>
          <p data-workspace-preview className="text-white fw-bold small" suppressHydrationWarning>
            Standing · Matte · Ink Violet
          </p>
        </div>

        <div className="d-flex flex-column gap-4 flex-fill">
          <div className="d-flex flex-column gap-2">
            <span className="text-primary small fw-bold text-uppercase">Canvas workspace</span>
            <h2 className="text-white fw-bold">Design your own sculpt</h2>
            <p className="text-secondary fs-5">
              Choose a pose, finish, and palette — the workspace mirrors your combination before you
              commission it.
            </p>
          </div>

          <div className="d-flex flex-column gap-2">
            <span className="text-white fw-bold small">Pose</span>
            <div className="d-flex flex-wrap gap-2">
              {POSE_OPTIONS.map((option, i) => (
                <div key={option}>
                  <input
                    type="radio"
                    className="btn-check"
                    name="workspacePose"
                    id={`pose-${option}`}
                    value={option}
                    defaultChecked={i === 0}
                  />
                  <label className="btn btn-outline-primary rounded-pill" htmlFor={`pose-${option}`}>
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="d-flex flex-column gap-2">
            <span className="text-white fw-bold small">Finish</span>
            <div className="d-flex flex-wrap gap-2">
              {FINISH_OPTIONS.map((option, i) => (
                <div key={option}>
                  <input
                    type="radio"
                    className="btn-check"
                    name="workspaceFinish"
                    id={`finish-${option}`}
                    value={option}
                    defaultChecked={i === 0}
                  />
                  <label className="btn btn-outline-primary rounded-pill" htmlFor={`finish-${option}`}>
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="d-flex flex-column gap-2">
            <span className="text-white fw-bold small">Palette</span>
            <div className="d-flex flex-wrap gap-2">
              {PALETTE_OPTIONS.map((option, i) => (
                <div key={option.name}>
                  <input
                    type="radio"
                    className="btn-check"
                    name="workspacePalette"
                    id={`palette-${option.name}`}
                    value={option.name}
                    defaultChecked={i === 0}
                  />
                  <label className="btn btn-outline-primary rounded-pill d-flex align-items-center gap-2" htmlFor={`palette-${option.name}`}>
                    <span className={`badge rounded-circle ${option.swatch}`}>&nbsp;</span>
                    {option.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-between border-top pt-4">
            <div className="d-flex flex-column gap-1">
              <span className="text-secondary small">Commission price</span>
              <span data-workspace-price className="text-white fs-3 fw-bold" suppressHydrationWarning>
                $85
              </span>
            </div>
            <a href="#" className="btn btn-primary rounded-pill fw-bold text-white">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

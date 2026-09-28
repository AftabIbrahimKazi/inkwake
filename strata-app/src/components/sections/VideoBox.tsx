export default function VideoBox() {
  return (
    <section className="bg-[var(--color-bg-surface)] w-100">
      <div className="mx-auto w-100 max-w-[1152px] px-[var(--space-xl)] d-flex flex-column gap-[var(--space-xl)] py-[var(--space-4xl)]">
        <div className="d-flex flex-column gap-[var(--space-sm)] text-center">
          <span className="text-primary fs-[var(--font-size-xs)] fw-bold text-uppercase">Studio film</span>
          <h2 className="text-body fw-bold fs-[var(--font-size-3xl)]">Watch the Winter Collection drop</h2>
        </div>

        {/* `.ratio > video` auto-fills per Strata's own native rule (1.9.0+
            scopes the fill to replaced elements, not arbitrary wrapper
            divs — see .claude/skills/strata-css/learnings.md). The UI
            overlay elements below are self-positioned via explicit
            position-absolute + inset classes against `.ratio`'s own
            position:relative, so they don't need a stretched wrapper. */}
        <div className="ratio ratio-16x9 rounded-[16px] overflow-hidden">
          <video
            id="winterFilmVideo"
            src="/video/winter-collection-film.mp4"
            playsInline
            preload="metadata"
          />

          <div className="position-absolute top-0 start-0 m-[var(--space-xl)]">
            <span className="badge bg-[color-mix(in_srgb,var(--color-black)_50%,transparent)] rounded-pill text-white d-flex align-items-center gap-[var(--space-sm)]">
              <span className="badge bg-primary rounded-circle">&nbsp;</span>
              Now streaming
            </span>
          </div>

          <button
            type="button"
            aria-label="Play studio film"
            id="videoPlayBtn"
            data-st-visible="true"
            className="bg-[color-mix(in_srgb,var(--color-black)_50%,transparent)] border-[none] rounded-circle position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center p-[var(--space-xl)]"
          >
            <svg aria-hidden="true" width="32" height="32" fill="white" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>

          <div className="bg-[color-mix(in_srgb,var(--color-black)_50%,transparent)] position-absolute bottom-0 start-0 end-0 d-flex align-items-center justify-content-between p-[var(--space-xl)]">
            <div className="d-flex flex-column gap-[var(--space-xs)]">
              <span className="text-white fw-bold fs-[var(--font-size-sm)]">Winter Collection — Studio Film</span>
              <span className="text-white fs-[var(--font-size-sm)]">0:20 · Behind the sculpt-to-cast process</span>
            </div>
            <span className="text-primary fw-bold fs-[var(--font-size-sm)] text-uppercase">HD</span>
          </div>
        </div>
      </div>
    </section>
  );
}

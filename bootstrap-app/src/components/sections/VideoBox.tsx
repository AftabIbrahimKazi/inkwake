export default function VideoBox() {
  return (
    <section className="iw-bg-surface w-100">
      <div className="iw-container d-flex flex-column gap-4 py-5">
        <div className="d-flex flex-column gap-2 text-center">
          <span className="text-primary small fw-bold text-uppercase">Studio film</span>
          <h2 className="text-white fw-bold">Watch the Winter Collection drop</h2>
        </div>

        {/* Bootstrap's native `.ratio > *` rule stretches EVERY direct
            child to width:100%/height:100%/top:0/left:0 — with the badge,
            button, and info bar all as direct children, each one gets
            forced to fill the whole tile (a real bug this caused: the
            circular play button became a giant stretched ellipse). A
            single wrapper as the sole ratio child absorbs that stretch;
            everything inside it positions normally, unaffected. */}
        <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
          {/* No position-relative here: `.ratio > *` already sets this
              wrapper to position:absolute/inset:0 (that's what fills the
              tile) — any position:absolute element is a valid containing
              block for its own absolutely-positioned children regardless,
              so overriding to relative would break the fill instead. */}
          <div>
            <div className="position-absolute top-0 start-0 m-4">
              <span className="badge rounded-pill bg-black bg-opacity-50 text-white d-flex align-items-center gap-2 px-3 py-2">
                <span className="badge rounded-circle bg-primary p-1"></span>
                Now streaming
              </span>
            </div>

            {/* Bootstrap's native collapse component swaps the two states —
                the button targets both ids, each toggling independently, no
                custom JS needed. */}
            <button
              type="button"
              aria-label="Play studio film"
              className="btn position-absolute top-50 start-50 translate-middle rounded-circle bg-black bg-opacity-50 p-4 border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#filmIdle,#filmPlaying"
            >
              <span id="filmIdle" className="collapse show">
                <svg aria-hidden="true" width="32" height="32" fill="white" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span id="filmPlaying" className="collapse text-white fw-bold text-uppercase small">
                Loading — final film lands in Step 5 asset swap
              </span>
            </button>

            <div className="position-absolute bottom-0 start-0 end-0 bg-black bg-opacity-50 d-flex align-items-center justify-content-between p-4">
              <div className="d-flex flex-column gap-1">
                <span className="text-white fw-bold small">Winter Collection — Studio Film</span>
                <span className="text-secondary small">3:24 · Behind the sculpt-to-cast process</span>
              </div>
              <span className="text-primary fw-bold small text-uppercase">HD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

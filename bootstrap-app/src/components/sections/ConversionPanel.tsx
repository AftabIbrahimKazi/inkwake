export default function ConversionPanel() {
  return (
    <section className="iw-promo-panel w-100">
      <div className="iw-container d-flex flex-column align-items-center gap-4 py-5 text-center">
        <span className="badge rounded-pill bg-black bg-opacity-25 text-white text-uppercase">
          Winter Collection closes soon
        </span>
        <h2 className="text-white fw-bold col-12 col-md-8 col-lg-6">Your shelf is missing something original.</h2>
        <p className="text-white text-opacity-75 fs-5 col-12 col-md-8 col-lg-6">
          Once this cast run sells out, it doesn&apos;t come back. Join now and get first pick before
          the next drop goes public.
        </p>

        <div className="d-flex flex-wrap justify-content-center gap-3">
          <a href="#" className="btn btn-light rounded-pill px-4 py-2 fw-bold">
            Shop the Winter Collection
          </a>
          <a href="#" className="btn btn-outline-light rounded-pill px-4 py-2 fw-bold">
            Join the waitlist
          </a>
        </div>
      </div>
    </section>
  );
}

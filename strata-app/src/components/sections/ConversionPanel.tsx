export default function ConversionPanel() {
  return (
    <section className="bg-[linear-gradient(to_bottom_right,var(--color-brand-gradient-start),var(--color-brand-gradient-end))] w-100">
      <div className="mx-auto w-100 max-w-[1152px] px-[var(--space-xl)] d-flex flex-column align-items-center gap-[var(--space-xl)] py-[var(--space-4xl)] text-center">
        <span className="badge bg-[color-mix(in_srgb,var(--color-black)_25%,transparent)] rounded-pill text-white text-uppercase">
          Winter Collection closes soon
        </span>
        <h2 className="text-white fw-bold fs-[var(--font-size-4xl)] max-w-[42rem]">Your shelf is missing something original.</h2>
        <p className="text-white fs-[var(--font-size-lg)] max-w-[36rem]">
          Once this cast run sells out, it doesn&apos;t come back. Join now and get first pick before
          the next drop goes public.
        </p>

        <div className="d-flex flex-wrap justify-content-center gap-[var(--space-lg)]">
          <a href="#" className="bg-white text-primary rounded-pill fw-bold fs-[var(--font-size-sm)] pt-[var(--space-md)] pb-[var(--space-md)] ps-[var(--space-2xl)] pe-[var(--space-2xl)]">
            Shop the Winter Collection
          </a>
          <a href="#" className="text-white border-[1px_solid_color-mix(in_srgb,var(--color-white)_40%,transparent)] rounded-pill fw-bold fs-[var(--font-size-sm)] pt-[var(--space-md)] pb-[var(--space-md)] ps-[var(--space-2xl)] pe-[var(--space-2xl)]">
            Join the waitlist
          </a>
        </div>
      </div>
    </section>
  );
}

export default function ConversionPanel() {
  return (
    <section className="from-gradient-start to-gradient-end w-full bg-gradient-to-br">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-xl px-xl py-4xl text-center">
        <span className="rounded-full bg-black/20 px-lg py-xs text-xs font-bold tracking-wide text-white uppercase">
          Winter Collection closes soon
        </span>
        <h2 className="max-w-[42rem] text-3xl font-bold tracking-tight text-white md:text-4xl">
          Your shelf is missing something original.
        </h2>
        <p className="max-w-[36rem] text-lg text-white/80">
          Once this cast run sells out, it doesn&apos;t come back. Join now and get first pick before
          the next drop goes public.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-lg">
          <a
            href="#"
            className="text-accent rounded-full bg-white px-2xl py-md text-sm font-bold whitespace-nowrap transition-transform duration-200 hover:scale-105"
          >
            Shop the Winter Collection
          </a>
          <a
            href="#"
            className="rounded-full border border-white/40 px-2xl py-md text-sm font-bold whitespace-nowrap text-white transition-colors duration-200 hover:border-white"
          >
            Join the waitlist
          </a>
        </div>
      </div>
    </section>
  );
}

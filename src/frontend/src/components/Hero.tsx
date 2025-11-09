const Hero = () => {
  return (
    <>
      <section className="mt-6 overflow-hidden rounded-2xl bg-linear-to-r from-white/5 to-white/0 p-8 ring-1 ring-white/10">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold leading-tight">
              Qualität, auf Schweizer Niveau.
            </h1>
            <p className="mt-2 text-white/70">
              Faire Preise. Verlässliche Lieferung. Kein Schnickschnack.
            </p>
          </div>
          <a
            href="#products"
            className="rounded-xl bg-accent px-5 py-3 font-semibold text-black shadow-soft hover:opacity-95"
          >
            Jetzt shoppen
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="mt-8 overflow-hidden rounded-2xl border border-border bg-card px-8 py-12 sm:py-16">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-card-foreground sm:text-4xl">
              Qualität, auf Schweizer Niveau.
            </h1>
            <p className="mt-3 text-muted-foreground">
              Faire Preise. Verlässliche Lieferung. Kein Schnickschnack.
            </p>
          </div>
          <Link
            to="#products"
            className="shrink-0 rounded-lg bg-foreground px-6 py-3 font-semibold text-background hover:opacity-90"
          >
            Jetzt shoppen
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;

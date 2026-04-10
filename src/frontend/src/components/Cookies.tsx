import { Link } from "react-router-dom";

const Cookies = () => {
  return (
    <div className="fixed bottom-4 left-4 z-50 w-full max-w-sm rounded-2xl border border-border bg-card p-6 shadow-lg">
      <h5 className="text-sm font-semibold text-card-foreground">
        Datenschutz
      </h5>
      <p className="mt-2 text-sm text-muted-foreground">
        Wir verwenden Cookies, um unsere Website und Services zu verbessern.{" "}
        <Link to="/privacy" className="font-medium text-foreground underline underline-offset-2 hover:text-muted-foreground cursor-pointer">
          Datenschutzerklärung
        </Link>
      </p>
      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          className="rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-background hover:opacity-90"
        >
          Akzeptieren
        </button>
        <button
          type="button"
          className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted"
        >
          Einstellungen
        </button>
      </div>
    </div>
  );
}

export default Cookies;

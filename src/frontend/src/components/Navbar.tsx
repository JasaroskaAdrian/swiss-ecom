import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 py-4 text-foreground backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-2 font-semibold tracking-wide" to="/">
            <span className="text-xl gravitas-one-regular">Gligar</span>
          </Link>

          <form
            className="ml-auto hidden w-full max-w-80 items-center gap-2 rounded-lg border border-border bg-muted/50 px-3 py-2 sm:flex"
            role="search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 shrink-0 text-muted-foreground"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.9 14.32a8 8 0 1 1 1.414-1.414l3.387 3.386a1 1 0 0 1-1.414 1.415l-3.387-3.387ZM14 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
              />
            </svg>
            <input
              aria-label="Suche"
              type="search"
              placeholder="Produkte suchen"
              className="w-full bg-transparent text-foreground placeholder-muted-foreground outline-none"
            />
          </form>

          <nav className="ml-2 flex items-center gap-2">
            <ThemeToggle />
            <Link
              className="rounded-lg border border-border px-4 py-2 text-sm hover:bg-muted"
              to="/login"
            >
              Login
            </Link>
            <a
              href="/cart"
              className="relative rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-background hover:opacity-90"
            >
              Warenkorb
              <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-foreground px-1 text-xs font-bold text-background ring-2 ring-background">
                3
              </span>
            </a>
          </nav>
        </div>

        <form
          className="mt-3 flex w-full items-center gap-2 rounded-lg border border-border bg-muted/50 px-3 py-2 sm:hidden"
          role="search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 shrink-0 text-muted-foreground"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.9 14.32a8 8 0 1 1 1.414-1.414l3.387 3.386a1 1 0 0 1-1.414 1.415l-3.387-3.387ZM14 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
            />
          </svg>
          <input
            aria-label="Suche"
            type="search"
            placeholder="Produkte suchen"
            className="w-full bg-transparent text-foreground placeholder-muted-foreground outline-none"
          />
        </form>
      </div>
    </header>
  );
};

export default Navbar;

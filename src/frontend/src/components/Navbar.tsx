const Navbar = () => {
  return (
    <header className="py-4 bg-[#17405f]/85 text-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-">
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="flex items-center gap-2 font-semibold tracking-wide"
          >
            <img src="/eS-Logo.svg" alt="eS" className="h-10 w-10" />
            <span className="text-xl">eSwiss</span>
          </a>

          <form
            className="ml-auto hidden w-full max-w-xl items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 shadow-soft backdrop-blur sm:flex"
            role="search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 shrink-0 text-white/60"
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
              className="w-full bg-transparent placeholder-white/50 outline-none"
            />
          </form>

          <nav className="ml-2 flex items-center gap-2">
            <a
              href="/login"
              className="rounded-xl bg-white/10 px-4 py-2 text-sm hover:bg-white/15"
            >
              Login
            </a>
            <a
              href="/cart"
              className="relative rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-black hover:opacity-95"
            >
              Warenkorb
              <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-xs font-bold text-black">
                3
              </span>
            </a>
          </nav>
        </div>

        <form
          className="mt-3 flex w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 shadow-soft backdrop-blur sm:hidden"
          role="search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 shrink-0 text-white/60"
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
            className="w-full bg-transparent placeholder-white/50 outline-none"
          />
        </form>
      </div>
    </header>
  );
};

export default Navbar;

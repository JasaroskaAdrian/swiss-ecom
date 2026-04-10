import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="mt-16 border-t border-border bg-card py-10 text-card-foreground">
        <div className="mx-auto max-w-5xl text-center px-4">
          <p className="text-sm text-muted-foreground">&copy; 2024, Adrian Jasaroska. Alle Rechte vorbehalten.</p>

          <p className="mt-2 text-sm">
            Kontakt:{" "}
            <Link
              to="mailto:adrian.jasaroska@ict.csbe.ch"
              className="underline underline-offset-4 hover:text-muted-foreground"
            >
              adrian.jasaroska@ict.csbe.ch
            </Link>
          </p>

          <div className="mt-4 flex justify-center">
            <Link to=
              "https://github.com/JasaroskaAdrian"
              className="group relative inline-flex items-center justify-center text-muted-foreground hover:text-foreground"
              aria-label="GitHub"
            >
              <svg
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                className="w-6 transition-transform duration-200 group-hover:scale-110"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

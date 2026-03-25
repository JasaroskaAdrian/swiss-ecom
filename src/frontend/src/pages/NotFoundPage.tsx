import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-foreground">
      <h1 className="text-8xl font-bold tracking-tighter">404</h1>
      <p className="mt-4 text-lg text-muted-foreground">Seite nicht gefunden.</p>
      <Link
        to="/"
        className="mt-8 rounded-lg bg-foreground px-6 py-2.5 text-sm font-semibold text-background hover:opacity-90"
      >
        Zur Startseite
      </Link>
    </div>
  );
}

export default NotFoundPage

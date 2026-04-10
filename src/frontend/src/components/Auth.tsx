import { Link } from "react-router-dom"

const Auth = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <main className="w-full max-w-sm">
        <span className="mb-8 flex items-center justify-center">
          <span className="text-2xl gravitas-one-regular">Gligar</span>
        </span>

        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h1 className="text-2xl font-semibold text-card-foreground">Anmelden</h1>
          <p className="mt-1 text-sm text-muted-foreground">Willkommen zurück.</p>

          <form className="mt-6 space-y-4" action="/login" method="post" noValidate>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground">E-Mail</label>
              <input
                id="email" name="email" type="email" autoComplete="email" required
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-ring"
                placeholder="you@example.com" />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground">Passwort</label>
              <input
                id="password" name="password" type="password" autoComplete="current-password" required
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-ring"
                placeholder="••••••••" />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-foreground px-4 py-2.5 font-semibold text-background hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
              Anmelden
            </button>
          </form>

          <p className="mt-4 text-sm text-muted-foreground">
            Noch kein Konto?{" "}
            <Link to="/register" className="font-semibold text-foreground underline underline-offset-4 hover:text-muted-foreground">Registrieren</Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          &copy; 2025 Gligar
        </p>
      </main>
    </div>
  )
}

export default Auth

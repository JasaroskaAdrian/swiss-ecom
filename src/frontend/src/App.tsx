import React from 'react'

const App = () => {
  return (
    <>
    <div className="min-h-screen bg-bg text-text flex items-center justify-center px-4">
    <main className="w-full max-w-md">
    {/*brand*/} 
    <a href="/home" className="mb-6 flex items-center gap-3 justify-center text-white/90">
      <img src="eS-Logo.svg" alt="eS" className="h-10 w-10"/>
      <span className="text-xl font-semibold">eSwiss</span>
    </a>

    {/*card*/}
    <div className="rounded-2xl bg-gray-900/80 backdrop-blur border border-white/10 shadow-soft">
      <div className="p-6 sm:p-8">
        <h1 className="text-2xl font-semibold">Anmelden</h1>
        <p className="mt-1 text-sm text-white/60">Willkommen zurück.</p>

        <form className="mt-6 space-y-4" action="/login" method="post" noValidate>
          {/*email*/}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/80">E-Mail</label>
            <input
              id="email" name="email" type="email" autoComplete="email" required
              className="mt-1 w-full rounded-xl bg-white/5 text-white placeholder-white/40
                     border border-white/10 px-3 py-2 outline-none
                     focus:ring-2 focus:ring-accent/60 focus:border-accent/60
                     hover:border-white/20"
              placeholder="you@example.com" />
          </div>

          {/*Password*/}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white/80">Passwort</label>
            <input
              id="password" name="password" type="password" autoComplete="current-password" required
              className="mt-1 w-full rounded-xl bg-white/5 text-white placeholder-white/40
                     border border-white/10 px-3 py-2 outline-none
                     focus:ring-2 focus:ring-accent/60 focus:border-accent/60
                     hover:border-white/20"
              placeholder="••••••••" />
          </div>

          {/*submit*/}
          <button
            type="submit"
            className="w-full rounded-xl bg-accent px-4 py-2.5 font-semibold text-black
                   hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2
                   focus:ring-accent/70 focus:ring-offset-gray-900">
            <a href="/home"></a>
            Anmelden
          </button>
        </form>

        <p className="mt-4 text-sm text-white/70">
          Noch kein Konto?
          <a href="/register" className="font-semibold text-white hover:text-accent">Registrieren</a>
        </p>
      </div>
    </div>

      {/*footer link (optional slim)*/} 
    <p className="mt-6 text-center text-xs text-white/50">
      © 2025 eSwiss
    </p>
  </main>
    </div>
    </>
  )
}

export default App
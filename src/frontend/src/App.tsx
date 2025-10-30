import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <div className="min-h-screen bg-bg text-text flex flex-col">
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 flex-1">

    <Navbar />

    {/** Hero*/}
    <section className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-r from-white/5 to-white/0 p-8 ring-1 ring-white/10">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold leading-tight">Qualität, auf Schweizer Niveau.</h1>
          <p className="mt-2 text-white/70">Faire Preise. Verlässliche Lieferung. Kein Schnickschnack.</p>
        </div>
        <a href="#products" className="rounded-xl bg-accent px-5 py-3 font-semibold text-black shadow-soft hover:opacity-95">Jetzt shoppen</a>
      </div>
    </section>

    {/** Products grid (placeholder) */}
    <main id="products" className="mt-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/** … product cards … */} 
        <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-soft">
          <div className="aspect-4/3 w-full bg-white/10"></div>
          <div className="p-4">
            <h3 className="text-sm/6 font-medium">Alpine Softshell Jacket</h3>
            <p className="mt-1 text-white/60 text-sm">Auf Lager</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-lg font-semibold">CHF 149.–</span>
              <button className="rounded-lg bg-accent px-3 py-1.5 text-sm font-semibold text-black hover:opacity-95">Hinzufügen</button>
            </div>
          </div>
        </article>
        {/** duplicate as needed*/}
      </div>
    </main>

  </div>

  {/** FOOTER*/}
  <footer className="bg-gray-800 text-white py-4 mt-12">
    <div className="container mx-auto text-center px-4">
      <p>&copy; 2024, Adrian Jasaroska. Alle Rechte vorbehalten.</p>

      <ul className="mt-2">
        <li>
          <p>
            Kontakt:
            <a href="mailto:adrian.jasaroska@ict.csbe.ch" className="hover:text-teal-400 underline underline-offset-4">
              adrian.jasaroska@ict.csbe.ch
            </a>
          </p>
        </li>
      </ul>

      <ul className="flex justify-center space-x-4 mt-4">
        <li>
          <a href="https://github.com/JasaroskaAdrian" className="hover:text-teal-400 group relative inline-flex items-center justify-center" aria-label="GitHub">
            <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2"
                 stroke="currentColor" fill="none" viewBox="0 0 24 24"
                 className="w-8 transition-transform duration-200 group-hover:scale-125 group-hover:stroke-blue-500">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            <span className="absolute -top-14 left-1/2 -translate-x-1/2 z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold text-gray-900 shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
              GitHub
            </span>
          </a>
        </li>
      </ul>
    </div>
  </footer>
    </div>
    </>
  )
}

export default App
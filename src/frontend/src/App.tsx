import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <div className="min-h-screen bg-bg text-text flex flex-col">
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 flex-1">

    <Navbar />

    {/** Hero*/}
    <Hero />

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
    <Footer />
    </div>
    </>
  )
}

export default App
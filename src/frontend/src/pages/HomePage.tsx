import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  return (
    <>
    <div className="min-h-screen bg-bg text-text flex flex-col">
    <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 flex-1">

    {/** Hero*/}
    <Hero />

    {/** Products grid (placeholder) */}
    <main id="products" className="mt-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/** … product cards … */} 
        <ProductCard pName="Alpine Jacket Wolfskin" pStock={ 5 } pPrice={ 14900 }/>
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

export default HomePage
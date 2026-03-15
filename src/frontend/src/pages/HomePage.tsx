import Cookies from '../components/Cookies';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  return (
    <>
    <div className="min-h-screen bg-background text-foreground flex flex-col">
    <div className="mx-auto max-w-5xl w-full px-4 sm:px-6 lg:px-8 flex-1">
    {/** Hero*/}
    <Hero />

    {/** Products */}
    <main id="products" className="mt-8">
      <h2 className="mb-6 text-xl font-semibold text-foreground">Produkte</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
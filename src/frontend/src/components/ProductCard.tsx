type ProductCardProps = {
    pName: string;
    pStock: number;
    pPrice: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ pName = 'Item x', pStock = 9999, pPrice = 9999 }) => {
    const priceCHF = (pPrice / 100).toLocaleString('de-CH', {
        style: 'currency',
        currency: 'CHF',
        minimumFractionDigits: 2
    })
    const inStock = 
        pStock > 4 ? 'In Stock'
        : pStock > 0 ? `Only ${pStock} left`
        : 'Out of Stock'
  return (
    <>
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-soft">
          <div className="aspect-4/3 w-full bg-white/10"></div>
          <div className="p-4">
            <h3 className="text-sm/6 font-medium">{ pName }</h3>
            <p className="mt-1 text-white/60 text-sm">{ inStock }</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-lg font-semibold">{ priceCHF }</span>
              <button className="rounded-lg bg-accent px-3 py-1.5 text-sm font-semibold text-black hover:opacity-95">Add to Cart</button>
            </div>
          </div>
        </article>
    </>
  )
}

export default ProductCard
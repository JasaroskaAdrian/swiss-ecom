type ProductCardProps = {
  pName: string;
  pStock: number;
  pPrice: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  pName = "Item x",
  pStock = 9999,
  pPrice = 9999,
}) => {
  const priceCHF = (pPrice / 100).toLocaleString("de-CH", {
    style: "currency",
    currency: "CHF",
    minimumFractionDigits: 2,
  });
  const inStock =
    pStock > 4 ? "In Stock" : 
      pStock > 0 ? `Only ${pStock} left`: "Out of Stock";
  return (
    <>
      <article className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md">
        <div className="aspect-4/3 w-full bg-muted"></div>
        <div className="p-4">
          <h3 className="text-sm font-medium text-card-foreground">{pName}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{inStock}</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-lg font-semibold text-card-foreground">{priceCHF}</span>
            <button className="rounded-lg bg-foreground px-3 py-1.5 text-sm font-semibold text-background hover:opacity-90">
              In den Warenkorb
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProductCard;

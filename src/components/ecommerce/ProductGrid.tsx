import { ProductCard } from "./ProductCard";
import { products } from '@/lib/product-data';

export function ProductGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-2 border-dashed border-muted p-4 rounded-lg">
      {products.slice(0, 4).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

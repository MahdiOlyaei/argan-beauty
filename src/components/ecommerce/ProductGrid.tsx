import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-2 border-dashed border-muted p-4 rounded-lg">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

import { ProductCard } from "../productCard";

export function ProductWrapper() {
  return (
    <>
      <div className="p-4 border-none grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
}

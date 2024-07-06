import { Card } from "../common/cards";
import { ProductCard } from "../productCard";

export function ProductWrapper() {
  return (
    <>
      <Card className="p-5 border-none grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
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
      </Card>
    </>
  );
}

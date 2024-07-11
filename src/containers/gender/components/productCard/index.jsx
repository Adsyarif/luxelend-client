import { Card } from "../common/cards";
import productImg from "../../../../assets/img/product.webp";
import { Button } from "../common/button";

export function ProductCard() {
  return (
    <Card className="border-none">
      <Card className="border-none p-3">
        <img src={productImg} alt="" />
        <p>Ted Baker</p>
        <p>Floral Pink Puff Sleeve Maxi Dress</p>
        <p className="font-semibold">Rent for IDR 1.032.000</p>
        <p>Retail value IDR 5.676.000</p>
      </Card>
      <div className="flex justify-center">
        <Button className="w-4/6  px-3 text-white font-semibold">
          Rent Now
        </Button>
      </div>
    </Card>
  );
}

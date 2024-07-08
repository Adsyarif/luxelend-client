import { Card } from "../../../../components/cards";
import productImg from "../../../../Assets/img/product.webp";
import { Button } from "../../../../components/button";

export function ProductCard() {
  return (
    <div >
      <Card className="border-none">
        <img src={productImg} alt=""/>
          <div className="p-2">
            <p className="text-xs">Ted Baker</p>
            <p className="text-xs pb-2">Floral Pink Puff Sleeve Maxi Dress</p>
            <p className="font-semibold text-xs">Rent for IDR 1.032.000</p>
            <p className="text-xs">Retail value IDR 5.676.000</p>
          </div>
      </Card>
      <div className="flex justify-center pt-5">
        <Button className="w-4/6  px-3 text-white font-semibold">
          Rent Now
        </Button>
      </div>
    </div>
  );
}

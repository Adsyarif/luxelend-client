import { Card } from "../../../components/cards";
import { ProductPage } from "../components/productPage";
import { TopNav } from "../../../containers/Navbar";
import { BottomNav } from "../../../containers/bottomNav";
import { Button } from "../../../components/buttonRent";

export function GenderPage() {
  return (
    <Card className="border-none p-0">
      <TopNav />
      <Card className="m-0 border-none  flex  h-32 flex-col text-center justify-center gap-2 text-white bg-center bg-no-repeat bg-cover bg-[url('src/assets/img/genderHeroBg.webp')]">
        <p className="text-sm">Category</p>
        <p className="font-bold text-2xl">Women</p>
      </Card>
        <div className="p-4 border-none flex justify-between">
          <Button className="bg-yellow-100">Filter + Sort</Button>
          <p className="italic">180 result</p>
        </div>
      <ProductPage />
      <BottomNav />
    </Card>
  );
}

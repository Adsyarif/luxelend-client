import { Button } from "../../components/buttonRent";
import { Card } from "../../components/cards";
import homeImg from "../../assets/img/Home.png";
import listImg from "../../assets/img/List.png";

export function BottomNav() {
  return (
    <div className="flex justify-center sticky bottom-10 font-medium text-lg text-stone-900">
      <Card className="border-slate-100 shadow-md rounded-full flex w-fit justify-around text-center items-center bg-white p-5">
        <Button className="bg-transparent border-none flex items-center gap-2">
          <img src={homeImg} alt="" className="size-4"/>
          <p>Home</p>
        </Button>
        <span></span>
        <Button className="bg-transparent border-none flex items-center gap-2 ">
        <img src={listImg} alt="" className="size-4"/>
          <p>Category</p>
        </Button>
      </Card>
    </div>
  );
}

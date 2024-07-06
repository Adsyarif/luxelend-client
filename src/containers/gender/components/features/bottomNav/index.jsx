import { Button } from "../../common/button";
import { Card } from "../../common/cards";

export function BottomNav() {
  return (
    <div className="flex justify-center sticky bottom-10 font-medium text-lg text-stone-900">
      <Card className="border-slate-100 shadow-md rounded-full flex w-fit justify-around text-center items-center bg-slate-100 p-5">
        <Button className="bg-transparent border-none flex gap-2">
          <span>🏠︎</span>
          <p>Home</p>
        </Button>
        <span></span>
        <Button className="bg-transparent border-none flex gap-2 ">
          <span>☰</span>
          <p>Category</p>
        </Button>
      </Card>
    </div>
  );
}

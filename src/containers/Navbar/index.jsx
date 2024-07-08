import { Card } from "../../components/cards";
import searchImg from "../../Assets/img/search.png";

export function TopNav() {
  return (
    <Card className="top-0 sticky h-20 border-none bg-blue-950 flex justify-around items-center">
      <span className="invisible">0</span>
      <p className="text-amber-400 font-semibold text-center">LUXELEND</p>
      <img src={searchImg} alt="" className="right-0 text-right size-4"/>
    </Card>
  );
}

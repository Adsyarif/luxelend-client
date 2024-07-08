import { Card } from "../../containers/gender/components/common/cards";
import { Button } from "../../containers/gender/components/common/button";

export function StickyRent() {
  const whatsappLink = "https://wa.me/6282282395169";

  return (
    <div className="flex justify-center bottom-0 sticky font-medium text-lg text-white">
      <Card className="flex w-screen justify-around text-center items-center bg-[#011224] p-5">
        <p className="font-bold">Rent for IDR 839.000</p>
        <span></span>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <Button className="bg-[#F4F4F4] text-[#191825] border-none">
            <p>Rent Now</p>
          </Button>
        </a>
      </Card>
    </div>
  );
}

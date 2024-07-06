import { Button } from "../../common/button";
import { Card } from "../../common/cards";

export function FilterResult() {
  return (
    <Card className="p-5 border-none flex justify-between">
      <Button className="bg-yellow-100">Filter + Sort</Button>
      <p>180 result</p>
    </Card>
  );
}

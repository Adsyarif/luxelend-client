import { Button } from "../../../../../components/button";

export function FilterResult() {
  return (
    <div className="p-4 border-none flex justify-between">
      <Button className="bg-yellow-100">Filter + Sort</Button>
      <p className="italic">180 result</p>
    </div>
  );
}

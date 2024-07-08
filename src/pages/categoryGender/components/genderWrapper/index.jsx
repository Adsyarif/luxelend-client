import { Card } from "../../../../components/cards";
import { FilterResult } from "../features/filterResultSection";
import { GenderHero } from "../features/genderHero";
import { ProductWrapper } from "../productPage";
import { TopNav } from "../../../../containers/Navbar";
import { BottomNav } from "../../../../containers/bottomNav";

export function GenderWrapper() {
  return (
    <Card className="border-none p-0">
      <TopNav />
      <GenderHero />
      <FilterResult />
      <ProductWrapper />
      <BottomNav />
    </Card>
  );
}

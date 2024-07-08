import { BottomNav } from "../components/features/bottomNav";
import { Card } from "../components/common/cards";
import { FilterResult } from "../components/features/filterResultSection";
import { GenderHero } from "../components/features/genderHero";
import { ProductWrapper } from "../components/productPage";
import { TopNav } from "../components/features/topnav";

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

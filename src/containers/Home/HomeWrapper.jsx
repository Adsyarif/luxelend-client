import { TopNav } from "../gender/components/features/topnav";
import { Card } from "./components/common/cards";
import { WelcomeBanner } from "./components/exclusive/welcomeBanner";
import { Buttons } from "./components/common/button";
import { HomeBanner } from "./components/exclusive/homeBanner";
import { BrandLineup } from "./components/exclusive/brandLineup";
import { FeaturesCard } from "./components/exclusive/featuresCard";
import { BottomNav } from "../gender/components/features/bottomNav";

export function HomeWrapper() {
    return (
        <Card>
            <TopNav />
            <WelcomeBanner />
            <div className=" flex flex-row justify-center align-middle gap-10 my-4">
                <Buttons>
                    <p>Women</p>
                </Buttons>
                <Buttons>
                    <p>Men</p>
                </Buttons>
            </div>
            <HomeBanner />
            <BrandLineup />
            <FeaturesCard />
            <BottomNav />
        </Card>
    );
}

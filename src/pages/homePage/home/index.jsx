import { TopNav } from "../../../containers/Navbar";
import { Card } from "../../../components/cards";
import { WelcomeBanner } from "../components/welcomeBanner";
import { Button } from "../../../components/buttonRent";
import { HomeBanner } from "../components/homeBanner";
import { BrandLineup } from "../components/brandLineup";
import { FeaturesCard } from "../components/featuresCard";
import { BottomNav } from "../../../containers/bottomNav";

export function HomePage() {
    return (
        <Card>
            <TopNav />
            <WelcomeBanner />
            <div className=" flex flex-row justify-center align-middle gap-10 my-4">
                <Button>
                    <p>Women</p>
                </Button>
                <Button>
                    <p>Men</p>
                </Button>
            </div>
            <HomeBanner />
            <BrandLineup />
            <FeaturesCard />
            <BottomNav />
        </Card>
    );
}

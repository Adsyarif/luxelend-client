import { Card } from "../../../../components/cards";
import kateSpade from "../../../../assets/img/kate-spade.webp";

export function BrandLineup() {
    return (
        <Card>
            <p className="my-2 mx-6">Brand</p>
            <div className="flex flex-row mx-8 gap-6">
                <div>
                    <img src={kateSpade} alt="Kate Spade" />
                    <p>Kate Spade</p>
                </div>
                <div>
                    <img src={kateSpade} alt="Kate Spade" />
                    <p>Kate Spade</p>
                </div>
                <div>
                    <img src={kateSpade} alt="Kate Spade" />
                    <p>Kate Spade</p>
                </div>
                <div>
                    <img src={kateSpade} alt="Kate Spade" />
                    <p>Kate Spade</p>
                </div>
            </div>
        </Card>
    );
}

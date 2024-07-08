import { Card } from "../../common/cards";
import Scroll from "../../../../../assets/img/scroll.webp";

export function FeaturesCard() {
    return (
        <Card className="flex flex-col justify-center bg-rose-50 h-48">
            <b className="my-2 mx-6">Rent, Return, Repeat</b>
            <div className="flex flex-row mx-8 gap-6">
                <div>
                    <img src={Scroll} alt="Kate Spade" />
                    <p>lorem ipsum</p>
                </div>
                <div>
                    <img src={Scroll} alt="Kate Spade" />
                    <p>lorem ipsum</p>
                </div>
                <div>
                    <img src={Scroll} alt="Kate Spade" />
                    <p>lorem ipsum</p>
                </div>
            </div>
        </Card>
    );
}

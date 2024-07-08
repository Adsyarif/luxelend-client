import { Card } from "../../common/cards";

export function WelcomeBanner() {
    return (
        <Card className="m-0 border-none flex flex-row text-center gap-16 justify-center items-center h-16 text-white bg-gradient-to-r from-gray-900 from-40% to-blue-900">
            <p>logo here</p>
            <i>Welcome to LuxeLend!</i>
        </Card>
    );
}

import { NavBar } from "./navBar.js";
import { Card } from "./Card"
const pi_1 = "../images/athleisure.jpg"
export function Shop() {
    return (
        <>
            <NavBar nav_bg={"light"}/>;
            <div class="row mt-5">
            <Card sauce={pi_1} />;
            <Card sauce={pi_1} />;
            </div>;

        </>
    )
}
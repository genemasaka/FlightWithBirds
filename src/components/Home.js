import bg_image from "../images/flight with birds.png";
import { NavBar } from "./navBar";
export function Home() {
    return (
        <>
        <NavBar />
        <img class = "bg-img bg-image"  src = {bg_image} alt = ""/>

        </>
    );
} 
import { NavBar } from "./navBar.js";
import { Card } from "./Card"
import { CardGrid } from "./CardGrid"
import athleisure from "../images/athleisure.jpg"
import back1 from "../images/back1.jpg"
import cynthia from "../images/cynthia.jpg"
import ksenia from "../images/ksenia.jpg"

export function Shop() {
       return (
        <>
            <NavBar nav_bg={"light"}/>;
            <CardGrid>
              { Array(4).fill().map((_, i) => (
                  <Card key={i}>
                     <div class="card">
                        <img class ="card-img-top" src={ksenia}  alt="Product image"/>
                        <h4 class="card-title">Sundress</h4>
                        <p class="card-text">$134</p>
                        <a href="#" class="btn btn-dark">Purchase</a>
                     </div>
                  </Card>
                ))}
            </CardGrid>

        </>
    )
}
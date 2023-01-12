import { NavBar } from "./navBar.js";

export function Shop() {
    return (
        <>
            <NavBar />;
            <div class="row">
  <div class="col-sm-6">
    <div class="card text-center">
        <img class ="card-img-top" src = "" alt="Product image"/>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-secondary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card text-center">
    <img class ="card-img-top" src = "" alt="Product image"/>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-secondary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>

        </>
    )
}
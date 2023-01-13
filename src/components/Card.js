export const Card = ({sauce}) => {
const image_src = sauce
return (
<div class="row mt-5">
  <div class="col-sm-6">
    <div class="card text-center">
        <img class ="card-img-top" src = {image_src} alt="Product image"/>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-secondary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
);
}
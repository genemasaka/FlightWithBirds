import React from 'react';
import {Link} from 'react-router-dom';

import '../App.css';
export function NavBar() {
return (
<>
<nav class="navbar fixed-top navbar-expand-lg navbar-dark">
  
  <a class="navbar-brand" >flight with birds</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Shop</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#">About</a>
      </li>
    </ul>

    <button class="btn btn-outline-secondary">
    <span>Connect Wallet</span>
    </button>
  </div>
</nav>
</>
);
}       
import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react'
import { provider, flightWithBirdsContract, requestAccount } from '../connect_to_contract'
import '../App.css';

export function NavBar({nav_bg}) {
 
return (

<>
<nav class="navbar fixed-top navbar-expand-lg navbar-{bg_toggle}">
  
  <Link to="/" class="navbar-brand" >flight with birds</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <Link to="/" class="nav-link">Home</Link>
      </li>
      <li class="nav-item">
        <Link to="/shop" class="nav-link">Shop</Link>
      </li>
      <li class="nav-item">
        <Link to="/about" class="nav-link" >About</Link>
      </li>
    </ul>

    <button class="btn btn-outline-secondary" 
      onClick={ requestAccount }
    >
    <span>Connect Wallet</span>
    </button>
  </div>
</nav>
</>
);
}       
import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react'
import { ethers } from 'ethers'
import '../App.css';

export function NavBar({nav_bg}) {
  const {walletAddress, setWalletAddress} = useState(" ");
  const contractAddress = "0x962f6e144578fc506c8C8D1d5dA3c185B59275cE"
  const contractABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_price",
        "type": "uint256"
      }
    ],
    "name": "buyItem",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "purchases",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "item_id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "customer",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
const provider = ethers.getDefaultProvider();
const flightWithBirds = new ethers.Contract(contractAddress, contractABI, provider)
console.log(flightWithBirds);
  async function requestAccount() {

    console.log("Requesting account...");

    if(window.ethereum) {
      console.log("detected...");

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts)

      } catch (error) {
          console.log("Error connecting...");
      }
    } else {
      console.log('Please install metamask in your browser');
    }

  }
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
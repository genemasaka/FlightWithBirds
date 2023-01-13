 import { ethers } from 'ethers'

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
  export const provider = ethers.getDefaultProvider();
  export const flightWithBirdsContract = new ethers.Contract(contractAddress, contractABI, provider)
  console.log(flightWithBirdsContract);
  export async function requestAccount() {

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
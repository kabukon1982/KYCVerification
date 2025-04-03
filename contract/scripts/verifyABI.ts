const { ethers } = require("hardhat");
import * as dotenv from "dotenv";

dotenv.config();

async function verifyABI() {
  const contractAddress = process.env.CONTRACT_ADDRESS; // Replace with your contract address
  const contractABI =[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address[]","name":"addressList","type":"address[]"}],"name":"UserVerified","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"changeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"checkAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"checkKYC","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"checkUserList","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bool","name":"verified","type":"bool"}],"name":"verifyUser","outputs":[],"stateMutability":"nonpayable","type":"function"}];
  // const provider = ethers.getDefaultProvider("sepolia"); // or your network
  const provider = new ethers.providers.JsonRpcProvider("https://eth-sepolia.public.blastapi.io/" + process.env.PRIVATE_KEY);

  console.log(provider);
  const contract = new ethers.Contract(contractAddress, contractABI, provider);
  const publicKey = process.env.WALLET_PUBLIC;

  // Try calling a method to verify
  const result = await contract.checkUserList();
  console.log("Method result:", result);
}

verifyABI().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
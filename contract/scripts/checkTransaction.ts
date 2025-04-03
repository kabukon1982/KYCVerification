import * as dotenv from "dotenv";

dotenv.config();

async function checkTransaction() {
  const contractAddress = process.env.CONTRACT_ADDRESS; // 替换为你的合约地址
  const contractABI =[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address[]","name":"addressList","type":"address[]"}],"name":"UserVerified","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"changeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"checkAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"checkKYC","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"checkUserList","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bool","name":"verified","type":"bool"}],"name":"verifyUser","outputs":[],"stateMutability":"nonpayable","type":"function"}];
  // const provider = ethers.getDefaultProvider("sepolia"); // or your network
  const provider = new ethers.providers.JsonRpcProvider("https://eth-sepolia.public.blastapi.io/" + process.env.PRIVATE_KEY);
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  const publicKey = process.env.WALLET_PUBLIC;

  try {
    const result = await contract.verifyUser(publicKey, false);
    console.log("Method result:", result);
    // const receipt = await tx.wait();
    // console.log("Transaction receipt:", receipt);
    
  } catch (error) {
    console.error("Transaction failed:", error);
  }
  contract.on("UserVerified", (user: any, addressList: any) => {
      console.log(`Add:  ${user}, to ${addressList}`);
  });
}



checkTransaction().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
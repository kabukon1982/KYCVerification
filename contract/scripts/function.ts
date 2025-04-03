import * as dotenv from "dotenv";

dotenv.config();

async function callContractMethod() {
  const contractAddress = process.env.CONTRACT_ADDRESS; // 替换为你的合约地址
  const contractABI =[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"UserVerified","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"changeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"checkKYC","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"test","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bool","name":"verified","type":"bool"}],"name":"verifyUser","outputs":[],"stateMutability":"nonpayable","type":"function"}];

  const publicKey = process.env.WALLET_PUBLIC;

  // 获取合约实例
  const contract = await ethers.getContractAt("KYCVerification", contractAddress);

  // 调用合约方法
  const result = await contract.checkKYC(publicKey);
  console.log("Method result:", result);
}

callContractMethod().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

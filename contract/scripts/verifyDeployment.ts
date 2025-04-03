const { ethers } = require("hardhat");

async function verifyDeployment() {
  const contractAddress = "0x7C85AB779D028dA168761AB09f294b8b474fCccc"; // Replace with your contract address
  const provider = ethers.getDefaultProvider("sepolia"); // or your network
  const code = await provider.getCode(contractAddress);
  console.log("Contract code:", code);
}

verifyDeployment().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
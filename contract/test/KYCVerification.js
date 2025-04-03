const { expect } = require("chai");
const { ethers } = require("hardhat");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
// const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");

// const { describe } = require("node:test");

const publicKey = "0x96E12db166f38928203DB5785872CAa989c5f0b7";

describe("KYCVerification", function() {
  async function deployContract() {

    const KYCVerification = await ethers.getContractFactory("KYCVerification");
      const [owner, otherAccount] = await ethers.getSigners();
      
      const KYCVerificationInstance = await KYCVerification.deploy();

      return {
          KYCVerificationInstance,
          owner,
          otherAccount
      };
  }

  it("verifyUser", async function() {
      const { KYCVerificationInstance, owner } = await loadFixture(deployContract);
      await KYCVerificationInstance.verifyUser(publicKey, true);

      expect(await KYCVerificationInstance.checkKYC(publicKey)).to.be.true;
  });
});
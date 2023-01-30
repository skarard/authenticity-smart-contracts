import { ethers } from "hardhat";
import { Authenticity__factory } from "../typechain-types/factories/Authenticity__factory";

before(async function () {
  const [owner, signer, mod, user1, user2, user3] = await ethers.getSigners();

  this.owner = owner; // 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
  this.signer = signer; // 0x70997970C51812dc3A010C7d01b50e0d17dc79C8
  this.mod = mod; // 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC
  this.user1 = user1; // 0x90F79bf6EB2c4f870365E785982E1f101E93b906
  this.user2 = user2; // 0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65
  this.user3 = user3; // 0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc

  this.authenticityFactory = (await ethers.getContractFactory(
    "Authenticity"
  )) as Authenticity__factory;
});

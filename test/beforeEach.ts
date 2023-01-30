import { ethers } from "ethers";
import { upgrades } from "hardhat";

beforeEach(async function () {
  this.authenticity = await this.authenticityFactory.deploy();
});

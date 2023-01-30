import { expect } from "chai";
import { ethers } from "hardhat";
export default function suite() {
  let ctx: Mocha.Context;

  before(async function () {
    const context = this.test?.ctx;
    if (context) ctx = context;
  });

  beforeEach(async function () {});

  it("should deploy", async () => {
    const authenticity = await ctx.authenticityFactory.deploy();
    await expect(authenticity.deployed()).to.not.be.reverted;
  });
}

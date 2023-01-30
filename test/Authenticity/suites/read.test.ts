import { expect } from "chai";
import { ethers } from "hardhat";
export default function suite() {
  let ctx: Mocha.Context;

  before(async function () {
    const context = this.test?.ctx;
    if (context) ctx = context;
  });

  beforeEach(async function () {});

  it("should read hash", async () => {
    const hash = ethers.utils.solidityKeccak256(
      ["string"],
      ["Some image details"]
    );
    await expect(ctx.authenticity.writeHash(hash)).to.not.be.reverted;

    expect(await ctx.authenticity.readHash(hash)).to.eq(ctx.owner.address);
  });
}

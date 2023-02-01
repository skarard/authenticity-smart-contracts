import { expect } from "chai";
import { ethers } from "hardhat";
import { dave } from "../images";

export default function suite() {
  let ctx: Mocha.Context;

  before(async function () {
    const context = this.test?.ctx;
    if (context) ctx = context;
  });

  beforeEach(async function () {
    const hash = ethers.utils.solidityKeccak256(["bytes"], [dave]);

    await expect(
      ctx.authenticity.connect(ctx.user1).writeHash([hash])
    ).to.not.be.reverted;
  });

  it("should read hash", async () => {
    const hash = ethers.utils.solidityKeccak256(["bytes"], [dave]);

    expect(await ctx.authenticity.readHash([ctx.user1.address], [hash])).to.eql(
      [true]
    );
  });

  it("should fail to read hash because of array length mismatch", async () => {
    const hash = ethers.utils.solidityKeccak256(["bytes"], [dave]);

    await expect(
      ctx.authenticity.readHash([ctx.user1.address, ctx.user2.address], [hash])
    ).to.be.revertedWithCustomError(ctx.authenticity, "ArrayLengthMismatch");
  });
}

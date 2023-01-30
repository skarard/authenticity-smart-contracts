import { expect } from "chai";
import { ethers } from "hardhat";
export default function suite() {
  let ctx: Mocha.Context;

  before(async function () {
    const context = this.test?.ctx;
    if (context) ctx = context;
  });

  beforeEach(async function () {});

  it("should write hash", async () => {
    const hash = ethers.utils.solidityKeccak256(
      ["string"],
      ["Some image details"]
    );
    await expect(ctx.authenticity.writeHash(hash)).to.not.be.reverted;
  });
}

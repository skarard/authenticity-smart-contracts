import { expect } from "chai";
import { ethers } from "hardhat";
import { dave } from "../images";

export default function suite() {
  let ctx: Mocha.Context;

  before(async function () {
    const context = this.test?.ctx;
    if (context) ctx = context;
  });

  beforeEach(async function () {});

  it("should write hash", async () => {
    const hash = ethers.utils.solidityKeccak256(["bytes"], [dave]);

    await expect(ctx.authenticity.connect(ctx.user1).writeHash([hash])).to.not
      .be.reverted;
  });
}

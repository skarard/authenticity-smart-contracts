import { expect } from "chai";
export default function suite() {
  let ctx: Mocha.Context;

  before(async function () {
    const context = this.test?.ctx;
    if (context) ctx = context;
  });

  beforeEach(async function () {});

  it("should deploy", async () => {
    const deployed = false;
    expect(deployed).to.be.true;
  });
}

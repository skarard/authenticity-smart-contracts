import * as fs from "fs";

const testImageDir = "test/Authenticity/images/";

export const dave =
  "0x" + fs.readFileSync(testImageDir + "dave.jpg", { encoding: "hex" });

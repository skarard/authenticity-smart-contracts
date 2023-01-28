import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

declare module "mocha" {
  export interface Context {
    owner: SignerWithAddress;
    signer: SignerWithAddress;
    mod: SignerWithAddress;
    user1: SignerWithAddress;
    user2: SignerWithAddress;
    user3: SignerWithAddress;
  }
}

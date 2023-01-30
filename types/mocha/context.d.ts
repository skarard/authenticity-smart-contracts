import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Authenticity } from "../../typechain-types/Authenticity";
import { Authenticity__factory } from "../../typechain-types/factories/Authenticity__factory";

declare module "mocha" {
  export interface Context {
    owner: SignerWithAddress;
    signer: SignerWithAddress;
    mod: SignerWithAddress;
    user1: SignerWithAddress;
    user2: SignerWithAddress;
    user3: SignerWithAddress;
    authenticityFactory: Authenticity__factory;
    authenticity: Authenticity;
  }
}

import * as dotenv from "dotenv";
import hre, { ethers } from "hardhat";
import { Authenticity } from "../typechain-types/Authenticity";
import { contractDeployment, keypress, LogDeployment } from "./utils";

dotenv.config();

const network = hre.network.name;

// Settings //////////////////////////////////////////////////////////////

const settingsNetwork = "mumbai";
const date = new Date().toJSON().replace(/-|:|T|\..*/g, "");

const deployment = new LogDeployment(
  `deployment/${network}`,
  `deployment-${date}.json`
);

//////////////////////////////////////////////////////////////////////////

async function main() {
  const [deployer] = await ethers.getSigners();

  // Confirm Settings
  {
    console.log("***************************");
    console.log("*   Contract Deployment   *");
    console.log("***************************");
    console.log("\n");

    console.log("Settings");
    console.log("Network:", network, settingsNetwork == network);
    console.log(
      "Contract Owner Address:",
      deployer.address,
      ethers.utils.isAddress(deployer.address)
    );
    console.log("\n");

    deployment.write({
      date,
      network,
      deployer: deployer.address,
    });
  }

  // Deploy Contract
  {
    const authenticityContract = (await contractDeployment(
      deployer,
      "Authenticity",
      [],
      true
    )) as Authenticity;

    deployment.write({
      authenticityContract: authenticityContract.address,
    });
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

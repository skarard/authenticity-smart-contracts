import { LedgerSigner } from "@anders-t/ethers-ledger";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Contract } from "ethers";
import fs from "fs";
import hre, { ethers } from "hardhat";

export const keypress = async (
  text: string = "Press any key to continue..."
) => {
  process.stdout.write(text);
  process.stdin.setRawMode(true);
  return new Promise((resolve) =>
    process.stdin.once("data", (data) => {
      const byteArray = [...data];
      if (byteArray.length > 0 && byteArray[0] === 3) {
        console.log("\n^C");
        process.exit(1);
      }
      process.stdin.setRawMode(false);
      process.stdout.write("\r" + " ".repeat(text.length) + "\r");
      resolve(() => {});
    })
  );
};

export class LogDeployment {
  dir: string;
  path: string;

  constructor(dir: string, filename: string) {
    this.dir = dir;
    this.path = dir + "/" + filename;
  }

  write(value: any) {
    if (!fs.existsSync(this.dir)) {
      fs.mkdirSync(this.dir, { recursive: true });
    }

    let details = (() => {
      try {
        return JSON.parse(fs.readFileSync(this.path).toString());
      } catch {
        return {};
      }
    })();

    fs.writeFileSync(this.path, JSON.stringify({ ...details, ...value }));
    fs.copyFile(this.path, this.dir + "/deployment-latest.json", (err) => {
      if (err) throw err;
    });
  }
}

export async function contractDeployment(
  contractDeployer: LedgerSigner | SignerWithAddress,
  contractName: string,
  constructorArguments: any[] = [],
  silent: boolean = false
): Promise<Contract> {
  console.log(`${contractName} Contract`);
  if (!silent) {
    await keypress("Deploy? Press any key to continue or ctrl-C to cancel");
  }
  process.stdout.write("Deploying...     " + "\r");
  const contractFactory = await ethers.getContractFactory(contractName);
  if (contractDeployer instanceof LedgerSigner) {
    process.stdout.write("Check Ledger..." + "\r");
  }
  const contract = await contractFactory
    .connect(contractDeployer)
    .deploy(...constructorArguments);

  console.log("Tx hash:", contract.deployTransaction.hash);
  console.log("Nonce:", contract.deployTransaction.nonce);
  console.log("gasPrice", contract.deployTransaction.gasPrice?.toString());
  process.stdout.write("Deploying..." + "\r");
  await contract.deployed();
  console.log(`${contractName} Contract address`, contract.address);
  console.log("");

  return contract;
}

export async function etherscanVerification(
  address: string,
  constructorArguments: any[] = [],
  contract: string | null = null
) {
  console.log("Verifing contract on etherscan");
  try {
    await hre.run("verify:verify", {
      address,
      constructorArguments,
      contract,
    });

    console.log("Verification successful");
  } catch (e) {
    console.log("Manual verification required");
  }
  console.log("");
}

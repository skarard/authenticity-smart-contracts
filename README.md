# WIP: Authenticity Smart Contracts

Authenticity is an online blockchain-based photo validation tool designed to combat the rise of deep fakes. The free-to-use tool uses a unique hash code to verify the authenticity of images, making it easier to identify and combat fake news and other malicious activities.

This repository contains the smart contracts associated with the Authenticity platform, built using the Hardhat framework.

This is very early stages and parts maybe broken, check back regularly for updates.

## Project Links
- **Live Demo** - https://authenticity-frontend.vercel.app/
- Frontend Repo - https://github.com/skarard/authenticity-frontend
- SmartContractGUI - https://www.smartcontractgui.xyz/Authenticity-V1-CJPiiWMed3
- PolygonScan - https://mumbai.polygonscan.com/address/0xABFd0922f43C6591400F30ccFae055d5e2a54122

## Getting Started

These instructions will get you a copy of the Authenticity smart contracts up and running on your local machine for development and testing purposes. 

### Prerequisites

To get started with Authenticity, you'll need to install the following dependencies:

* Node.js
* Hardhat
* NPM

### Installation

1. Clone the Authenticity repository:
```
git clone https://github.com/skarard/authenticity-smart-contracts.git
```
2. Install the dependencies:
```
npm install
```
3. Compile the contracts:
```
npx hardhat compile
```

## Usage

Once the contracts are compiled, you can deploy them to any Ethereum network.

To deploy the contracts, run the following command:
```
npx hardhat deploy
```

## 100% coverage on unit tests
Deploying, writing and reading data to and from a blockchain is a critical process that requires absolute accuracy. To ensure this accuracy, 100% coverage is essential as it guarantees that all code is tested before deployment. However, 100% coverage is not enough. Smart coverage, which entails writing unit tests to specifically target areas of the codebase with a higher risk of errors or bugs, is necessary to ensure that the code is bug-free when deployed. Smart coverage also helps to identify potential areas of improvement, as it allows for more focused testing. Additionally, it can help to reduce the amount of time spent writing and debugging unit tests, as it allows for more targeted tests. In conclusion, having 100% coverage is important, but having smart coverage is even more important as it ensures that all areas of the codebase are thoroughly tested and any potential errors or bugs are identified.


## License

Authenticity is released under the MIT License. See [LICENSE](https://github.com/skarard/authenticity-smart-contracts/blob/master/LICENSE) for more details.

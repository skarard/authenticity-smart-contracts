# WIP: Authenticity Smart Contracts

Authenticity is an online blockchain-based photo validation tool designed to combat the rise of deep fakes. The free-to-use tool uses a unique hash code to verify the authenticity of images, making it easier to identify and combat fake news and other malicious activities.

This repository contains the smart contracts associated with the Authenticity platform, built using the Hardhat framework.

This is very early stages and parts maybe broken, check back regularly for updates.

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

## License

Authenticity is released under the MIT License. See [LICENSE](https://github.com/skarard/authenticity-smart-contracts/blob/master/LICENSE) for more details.

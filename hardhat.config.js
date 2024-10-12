// import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-gas-reporter"

const { vars } = require("hardhat/config");
const ALCHEMY_ETH_API_KEY = vars.get("ALCHEMY_ETH_API_KEY");
const ALCHEMY_SEPOLIA_API_KEY = vars.get("ALCHEMY_SEPOLIA_API_KEY");
const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY");
const BASESCAN_API_KEY = vars.get("BASESCAN_API_KEY");
const ACCOUNT_PRIVATE_KEY = vars.get("ACCOUNT_PRIVATE_KEY");
const COINMARKETCAP_API_KEY = vars.get("COINMARKETCAP_API_KEY");

module.exports = {
  solidity: {
    version: "0.8.27",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
    // apiKey: BASESCAN_API_KEY,
  },
  networks: {
    ethereum: {
      url: `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_ETH_API_KEY}`,
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    base: {
      url: `https://base-mainnet.g.alchemy.com/v2/${ALCHEMY_SEPOLIA_API_KEY}`,
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    sepolia: {
    url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_SEPOLIA_API_KEY}`,
    accounts: [ACCOUNT_PRIVATE_KEY],
    }
  },
  gasReporter: {
    currency: 'JPY',
    // L1: "ethereum",
    coinmarketcap: COINMARKETCAP_API_KEY,
    gasPrice: 10,
  }
};
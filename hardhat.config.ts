import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from 'dotenv';
require("hardhat-gas-reporter");
dotenv.config();
const config: HardhatUserConfig = {
  solidity: {
    compilers:[
      {
        version: '0.7.5',
        settings: {
          optimizer: {
            enabled: true,
            runs: 500,
          },
        },
      }
    ]
  },
  gasReporter: {
    currency: 'INR',
    gasPriceApi: 'https://api.etherscan.io/api?module=proxy&action=eth_gasPrice',
    enabled: true
  },
  networks: {
    hardhat: {
      forking: {
        url: `https://mainnet.infura.io/v3/${process.env.API_KEY_INFURA}`,
      }
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.API_KEY_INFURA}`,
      accounts: [`0x${process.env.PRIVATE_KEY_1}`, `0x${process.env.PRIVATE_KEY_2}`]
    },
  },
  etherscan: {
    apiKey: {
      sepolia: `${process.env.API_KEY_ETHERSCAN}`
    },
  },
  mocha: {
    timeout: 40000
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  typechain: {
    outDir: 'src/types',
    target: 'ethers-v5',
    alwaysGenerateOverloads: false, 
    externalArtifacts: ['externalArtifacts/*.json'],
    dontOverrideCompile: false
  }
};

export default config;

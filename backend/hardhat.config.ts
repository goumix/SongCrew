import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "@nomicfoundation/hardhat-foundry";
require("dotenv").config();

const INFURA = process.env.INFURA || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: INFURA,
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 11155111,
    },
    localhost: {
      url: "http://localhost:8545",
    }
  },
  etherscan:{
    apiKey: ETHERSCAN_API_KEY,
  },
};

export default config;

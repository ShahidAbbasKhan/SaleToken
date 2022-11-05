require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
const alchemy_key=process.env.RPC_KEY;
const pvt_key= process.env.PVT_KEY;
module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${alchemy_key}`,
      accounts: [pvt_key]
    }},
  apiKey: process.env.API_KEY,
};

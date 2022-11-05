
const hre = require("hardhat");

async function main() {
  const SaleToken = await hre.ethers.getContractFactory("SaleToken");
  const saletoken = await SaleToken.deploy("0x1002570a9b51b1bb3B4240435C64eD2744Ea4a21");

  await saletoken.deployed();

  console.log(
    `contract is deployed to address ${saletoken.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


const hre = require("hardhat");

async function main() {
  const Pakistan = await hre.ethers.getContractFactory("Pakistan");
  const pkt = await Pakistan.deploy();

  await pkt.deployed();

  console.log(
    `contract is deployed to address ${pkt.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

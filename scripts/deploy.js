const hre = require("hardhat");

async function main() {

  const ferrari_contract = await hre.ethers.deployContract("Ferrari");

  await ferrari_contract.waitForDeployment();

  console.log(
    "Robot Driving a Ferrari Contract Address: ", ferrari_contract.target
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {

  const privateKey = process.env.PRIVATE_KEY;
  const networkAddress = "https://ethereum-goerli.publicnode.com";
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);
  const signer = new ethers.Wallet(privateKey, provider);

  const contractAddress = "0x878f620Fe64B75C6845F4091Dd5e54F82Fb5cac0";
  const ferrari_contract = await ethers.getContractFactory("Ferrari", signer);
  const contract = await ferrari_contract.attach(contractAddress);

  await contract.mint(5);
  console.log("Minted!");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

const { ethers } = require("hardhat");
const { FXRootContractAbi } = require('../artifacts/FXRootContractAbi.js');
const ABI = require('../artifacts/contracts/Ferrari.sol/Ferrari.json');
require('dotenv').config();

async function main() {
 
  const networkAddress = 'https://ethereum-goerli.publicnode.com';
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  const wallet = new ethers.Wallet(privateKey, provider);

  const [signer] = await ethers.getSigners();

  const ferrari_contract = await ethers.getContractFactory("Ferrari");
  const ferrari = await ferrari_contract.attach('0x81dd81A68E5c7C3F7b7a4a0fB43e04F274C9BF53');

  const fxRootAddress = '0xF9bc4a80464E48369303196645e876c8C7D972de';
  const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

  const approveTx = await ferrari.connect(signer).setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  console.log('Approved!');

  const Ids = [0, 1, 2, 3, 4]; 

  for (let i = 0; i < Ids.length; i++) {
    const depositTx = await fxRoot.connect(signer).deposit(
      ferrari.address,
      wallet.address, 
      Ids[i],
      '0x6566'
    );

    await depositTx.wait();
  }

  console.log("Deposited!");

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

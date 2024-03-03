const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/Ferrari.sol/Ferrari.json");

const tokenAddress = "0x25187eaFbB2D6bc32A611CABe52f588841D7A303";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xF05ce7A7dbc3C7dF7AFe650B231134ceBA063409"; 

async function main() {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    console.log("In your polygon testnet, your balance is : " + await token.balanceOf(walletAddress));
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

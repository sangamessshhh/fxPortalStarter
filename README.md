# 5-Item Robot Driving a Ferrari Collection - FXPortal Bridge Transfer
In this repository , a 5item ferrari collection has been transferred from goerli to mumbai testnet with the use of FxPortal Bridge.

## Description

* A collection of five Ferrari NFTs was successfully transferred from the Goerli testnet to the Mumbai testnet using the FxPortal Bridge.

* The prompt for generating the artwork was "Robot Driving Ferrari."

* The resulting NFT artwork has been uploaded to IPFS and can be accessed through the following baseURL: https://gateway.pinata.cloud/ipfs/Qme2LahM9DpQvD7zu8hgezdzgL1dP6csesHxKUVamWPkAG.

* The entire transfer process was facilitated using the FxPortal Bridge, showcasing the interoperability between the Goerli and Mumbai testnets.

* The NFT collection, now residing on the Mumbai testnet, represents a fusion of blockchain technology, creative prompts, and cross-network functionality.

### Steps for Bridging

1. Run npm i to install dependencies
2. Put your private key in the .env.examples file and rename to .env when finished
3. Run npx hardhat run scripts/deploy.js --network goerli to deploy ERC20 contract
4. Paste the newly deployed contract address in the tokenAddress variable for the other scripts
5. Make sure to fill in your public key
6. Run npx hardhat run scripts/mint.js --network goerli to mint tokens to your wallet
7. Run npx hardhat run scripts/approveDeposit.js --network goerli to approve and deposit your tokens to polygon
8. Wait 20-30ish minutes for tokens to show on polygon account
9. Use polyscan.com to check your account for the tokens. Once they arrive, you can click on the transaction to get the contract address for polygon.
10. Use this polygon contract address for your getBalance script's tokenAddress
11. Run npx hardhat run scripts/getBalance.js --network mumbai to see the new polygon balance


## Authors 

Sangamesh Y[@sangamessshhh@gmail.com]

## License

This project is licensed under the [MIT] License - read LICENSE.md for more details.

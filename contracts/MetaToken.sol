// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract Ferrari is ERC721A{

    address public owner;
    uint256 public maxNFTs;
    string baseUrl = "https://gateway.pinata.cloud/ipfs/Qme2LahM9DpQvD7zu8hgezdzgL1dP6csesHxKUVamWPkAG";

    string public input_prompt;

    constructor() ERC721A("Ferrari", "FR") {
        owner = msg.sender;
        maxNFTs = 5;
        input_prompt ="robot driving a ferrari";
        
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function mint(uint256 input_NFTs) external payable onlyOwner{
        require(totalSupply() + input_NFTs <= maxNFTs ,"Only 5 Allowed!");
        _mint(msg.sender, input_NFTs);
    }


    function _baseURI() internal view override returns (string memory){
        return baseUrl;
    }

    function promptDetails() external view returns (string memory) {
        return input_prompt;
    }
}

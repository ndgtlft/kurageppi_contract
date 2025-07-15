// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Address.sol";

contract Kurageppi is Ownable, ERC721A, ReentrancyGuard {
  constructor() ERC721A("Kurageppi", "KRGP") {

  }


  function withdraw(address payable toAddress, uint256 amountWei) external onlyOwner {
    Address.sendValue(toAddress, amountWei);
  }

  //override
  function _startTokenId() internal view virtual override returns (uint256) {
    return 1;
  }

  function tokenURI(uint256 tokenId) public view virtual override returns (string memory){
    return string(abi.encodePacked(ERC721A.tokenURI(tokenId), baseExtension));
  }

  function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
  }

}


//段階を経て成長する
//何かをトリガーにして基本的に全自動
//生まれ変わるような要素もあれば⚪︎
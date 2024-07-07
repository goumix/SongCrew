// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Songcrew is ERC1155 {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  struct Project {
    string name;
    string artist;
    string genre;
    string description;
    uint numberOfCopies;
  }

  constructor() ERC1155("https://songcrew.com/api/project/{id}.json") {}
}

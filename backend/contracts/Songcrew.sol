// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Songcrew is ERC1155 {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  struct Project {
    string artist;
    string idSACEM;
    string title;
    string genre;
    string description;
    uint numberOfCopies;
  }

  Project[] projects;

  mapping(address => Project) projectsByOwner;

  event ProjectCreated(string artist, string idSACEM, string title, string genre, string description, uint numberOfCopies);

  constructor() ERC1155("https://songcrew.com/api/project/{id}.json") {}

  function supportsInterface(bytes4 interfaceId) public view virtual override(ERC1155) returns (bool){
    return super.supportsInterface(interfaceId);
  }

  function CreateProject(
    string memory _artist,
    string memory _idSACEM,
    string memory _title,
    string memory _genre,
    string memory _description,
    uint _numberOfCopies
  ) public {
    require(msg.sender != address(0), "ERC1155: mint to the zero address");
    _tokenIds.increment();
    projects.push(Project(_artist, _idSACEM, _title, _genre, _description, _numberOfCopies));
    uint256 newItemId = _tokenIds.current();
    _mint(msg.sender, newItemId, _numberOfCopies, "");
    emit ProjectCreated(_artist, _idSACEM, _title, _genre, _description, _numberOfCopies);
  }

  function getAllProjects() public view returns (Project[] memory) {
    return projects;
  }
}

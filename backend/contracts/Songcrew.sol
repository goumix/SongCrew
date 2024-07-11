// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// OpenZeppelin library for semi-fungible tokens
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

/// @title Songcrew contract
/// @author Brault Natheo
/// @notice You can use this contract to create a music project
contract Songcrew is ERC1155 {

  /// @notice The tokenIds of the projects
  uint256 private _tokenIds;

  /// @notice A struct to represent an project
  /// @param addressArtist The address of the artist
  /// @param artist The name of the artist
  /// @param idSACEM The id of the project in the SACEM
  /// @param title The title of the project
  /// @param genre The genre of the project
  /// @param description The description of the project
  /// @param numberOfCopies The number of copies of the semi-fungible token
  struct Project {
    address addressArtist;
    string artist;
    string idSACEM;
    string title;
    string genre;
    string description;
    uint numberOfCopies;
  }

  /// @notice An array of all projects
  Project[] projects;

  /// @notice An event emitted when a project is created
  event ProjectCreated(address addressArtist, string artist, string idSACEM, string title, string genre, string description, uint numberOfCopies);
  /// @notice An event emitted when a project is created with the number of the project in the array
  event ProjectCreatedNumber(uint256 projectId);
  /// @notice An event emitted when a project is bought
  event ProjectBought(address buyer, uint projectId, uint amount);

  constructor() ERC1155("https://songcrew.com/api/project/{id}.json") {}

  function supportsInterface(bytes4 interfaceId) public view virtual override(ERC1155) returns (bool){
    return super.supportsInterface(interfaceId);
  }

  // ::::::::::::: GETTERS ::::::::::::: //

  /// @notice Get a project by its id
  /// @param _id The id of the project
  function getOneProject(uint _id) public view returns (Project memory) {
    return projects[_id];
  }

  /// @notice Get all projects
  function getAllProjects() public view returns (Project[] memory) {
    return projects;
  }

  /// @notice Get balance of all projects for the sender
  function getBalanceOfAllProjectsForTheSender() public view returns (uint256[] memory) {
    uint256[] memory projectIds = new uint256[](projects.length);
    address[] memory addresses = new address[](projects.length);

    for (uint i = 0; i < projects.length; i++) {
        projectIds[i] = i;
        addresses[i] = msg.sender;
    }

    uint256[] memory balances = balanceOfBatch(addresses, projectIds);

    return balances;
  }

  // ::::::::::::: SETTERS ::::::::::::: //

  /// @notice Create a project
  /// @dev The function requires the sender to be different from the zero address
  function createProject(
    string memory _artist,
    string memory _idSACEM,
    string memory _title,
    string memory _genre,
    string memory _description,
    uint _numberOfCopies
  ) public {
    require(msg.sender != address(0), "ERC1155: mint to the zero address");
    projects.push(Project(msg.sender, _artist, _idSACEM, _title, _genre, _description, _numberOfCopies));
    uint256 newItemId = _tokenIds;
    _tokenIds++;
    _mint(msg.sender, newItemId, _numberOfCopies, "");
    emit ProjectCreated(msg.sender, _artist, _idSACEM, _title, _genre, _description, _numberOfCopies);
    emit ProjectCreatedNumber(projects.length - 1);
  }


  /// @notice Buy Nft of a project
  /// @param _id The id of the project
  /// @param _amount The amount of the semi-fungible token
  function buyNft(uint _id, uint _amount) public payable {
    _setApprovalForAll(projects[_id].addressArtist, msg.sender, true);
    safeTransferFrom(projects[_id].addressArtist, msg.sender, _id, _amount, "");
    projects[_id].numberOfCopies -= _amount;
    _setApprovalForAll(projects[_id].addressArtist, msg.sender, false);
    emit ProjectBought(msg.sender, _id, _amount);
  }
}

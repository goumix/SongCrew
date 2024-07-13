// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// OpenZeppelin library for semi-fungible tokens
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
// OpenZeppelin library for reentrancy guard
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

/// @title Songcrew contract
/// @author Brault Natheo
/// @notice You can use this contract to create a music project
contract Songcrew is ERC1155, ReentrancyGuard {

  /// @notice The tokenIds of the projects
  uint256 private _tokenIds;

  /// @notice A struct to represent an project
  /// @param addressArtist The address of the artist
  /// @param artist The name of the artist
  /// @param idSACEM The id of the project in the SACEM
  /// @param title The title of the project
  /// @param genre The genre of the project
  /// @param description The description of the project
  /// @param priceProject The ethers price of the project
  /// @param numberOfCopies The number of copies of the semi-fungible token
  /// @param priceNft The ethers price of the semi-fungible token
  struct Project {
    uint256 id;
    address addressArtist;
    string artist;
    string idSACEM;
    string title;
    string genre;
    string description;
    uint256 priceProject;
    uint256 numberOfCopies;
    uint256 priceNft;
  }

  /// @notice An array of all projects
  Project[] projects;

  /// @notice An event emitted when a project is created
  event ProjectCreated(uint256 id, address addressArtist, string artist, string idSACEM, string title, string genre, string description, uint256 priceProject, uint256 numberOfCopies, uint256 priceNft);
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
  /// @dev The function requires the sender to be different from the zero address,
  /// the number of copies to be greater than 0 and less than or equal to 70,
  /// the price of the project to be greater than 0 and less than or equal to 16
  /// and the number of projects to be less than 1000
  function createProject(
    string memory _artist,
    string memory _idSACEM,
    string memory _title,
    string memory _genre,
    string memory _description,
    uint256 _priceProject,
    uint _numberOfCopies
  ) public {
    require(msg.sender != address(0), "ERC1155: mint to the zero address");
    require(_numberOfCopies > 0, "ERC1155: number of copies must be greater than 0");
    require(_numberOfCopies <= 70, "ERC1155: number of copies must be less than or equal to 70");
    require(_priceProject > 0, "ERC1155: price of the project must be greater than 0");
    require(_priceProject <= 16, "ERC1155: price of the project must be less than or equal to 16");
    require(projects.length < 1000, "ERC1155: number of projects must be less than 1000");

    uint256 newItemId = _tokenIds;
    _priceProject = _priceProject*10**18;
    projects.push(Project(newItemId, msg.sender, _artist, _idSACEM, _title, _genre, _description, _priceProject, _numberOfCopies, _priceProject / _numberOfCopies));
    _mint(msg.sender, newItemId, _numberOfCopies, "");

    emit ProjectCreated(newItemId, msg.sender, _artist, _idSACEM, _title, _genre, _description, _priceProject, _numberOfCopies, _priceProject / _numberOfCopies);
    _tokenIds++;
  }


  /// @notice Buy Nft of a project
  /// @param _id The id of the project
  /// @param _amount The amount of the semi-fungible token
  /// @dev The function requires the id of the project to be less than the length of the projects array,
  /// the amount to be greater than 0 and less than or equal to the number of copies of the project,
  /// the value to be greater than or equal to the price of the semi-fungible token multiplied by the amount,
  function buyNft(uint _id, uint _amount) public payable nonReentrant {
    require(_id < projects.length, "ERC1155: project does not exist");
    require(_amount > 0, "ERC1155: amount must be greater than 0");
    require(_amount <= projects[_id].numberOfCopies, "ERC1155: amount must be less than or equal to the number of copies");
    require(msg.value >= projects[_id].priceNft * _amount, "ERC1155: insufficient funds");

    projects[_id].numberOfCopies -= _amount;
    _setApprovalForAll(projects[_id].addressArtist, msg.sender, true);
    address payable artistAddress = payable(projects[_id].addressArtist);
    (bool success, ) = artistAddress.call{value: msg.value}("");
    require(success, "Transfer failed.");
    safeTransferFrom(projects[_id].addressArtist, msg.sender, _id, _amount, "");
    _setApprovalForAll(projects[_id].addressArtist, msg.sender, false);

    emit ProjectBought(msg.sender, _id, _amount);
  }
}

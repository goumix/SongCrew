// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.25;

import "forge-std/Test.sol";
import "../contracts/Songcrew.sol";

contract SongcrewTest is Test {

  address _user1 = makeAddr("User0");
  address _user2 = makeAddr("User1");

  event ProjectCreated(uint256 id, address addressArtist, string artist, string idSACEM, string title, string genre, string description, uint256 priceProject, uint256 numberOfCopies, uint256 priceNft);
  event ProjectBought(address buyer, uint projectId, uint amount);

  Songcrew songcrew;

  function setUp() public {
    songcrew = new Songcrew();
  }

  function testFail_CreateProjectWithAddress0() public {
    vm.prank(address(0));
    songcrew.createProject("_artist", "_idSACEM", "_title", "_genre", "_description", 10, 10);
  }

  function testFail_CreateProjectNumberOfCopies0() public {
    vm.prank(_user1);
    songcrew.createProject("_artist", "_idSACEM", "_title", "_genre", "_description", 10, 0);
  }

  function testFail_CreateProjectNumberOfCopies100() public {
    vm.prank(_user1);
    songcrew.createProject("_artist", "_idSACEM", "_title", "_genre", "_description", 10, 100);
  }

  function testFail_CreateProjectPriceProject0() public {
    vm.prank(_user1);
    songcrew.createProject("_artist", "_idSACEM", "_title", "_genre", "_description", 0, 10);
  }

  function testFail_CreateProjectPriceProject20() public {
    vm.prank(_user1);
    songcrew.createProject("_artist", "_idSACEM", "_title", "_genre", "_description", 20, 10);
  }

  function test_CreateProjectPushInProjects() public {
    vm.prank(_user1);
    songcrew.createProject("_artist", "_idSACEM", "_title", "_genre", "_description", 10, 10);
    Songcrew.Project[] memory projects = songcrew.getAllProjects();
    assertEq(projects.length, 1);
    assertEq(projects[0].addressArtist, _user1);
    assertEq(projects[0].artist, "_artist");
    assertEq(projects[0].idSACEM, "_idSACEM");
    assertEq(projects[0].title, "_title");
    assertEq(projects[0].genre, "_genre");
    assertEq(projects[0].description, "_description");
    assertEq(projects[0].priceProject, 10*10**18);
    assertEq(projects[0].numberOfCopies, 10);
  }

  function test_CreateProjectEmitEvent() public {
    vm.expectEmit(true, false, false, true);
    emit ProjectCreated(0, address(_user1), "_artist", "_idSACEM", "_title", "_genre", "_description", 10*10**18, 10, 1*10**18);
    vm.startPrank(_user1);
    songcrew.createProject("_artist", "_idSACEM", "_title", "_genre", "_description", 10, 10);
    vm.stopPrank();
  }

  function testFail_BuyNftProjectDoesNotExist() public {
    vm.prank(_user1);
    songcrew.createProject("_artist", "_idSACEM", "_title", "_genre", "_description", 10, 10);
    vm.prank(_user2);
    vm.deal(_user2, 10 ether);
    songcrew.buyNft{value: 1 ether}(1, 1);
  }

  function testFail_BuyNftAmount0() public {
    vm.prank(_user1);
    songcrew.createProject("_artist", "_idSACEM", "_title", "_genre", "_description", 10, 10);
    vm.prank(_user2);
    vm.deal(_user2, 10 ether);
    songcrew.buyNft{value: 1 ether}(0, 0);
  }

  function testFail_BuyNftAmount11() public {
    vm.prank(_user1);
    songcrew.createProject("_artist", "_idSACEM", "_title", "_genre", "_description", 10, 10);
    vm.prank(_user2);
    vm.deal(_user2, 10 ether);
    songcrew.buyNft{value: 1 ether}(0, 11);
  }

  function testFail_BuyNftInsufficientFunds() public {
    vm.prank(_user1);
    songcrew.createProject("_artist", "_idSACEM", "_title", "_genre", "_description", 10, 10);
    vm.prank(_user2);
    vm.deal(_user2, 10 ether);
    songcrew.buyNft{value: 0 ether}(0, 1);
  }

  function test_BuyNft() public {
    vm.prank(_user1);
    songcrew.createProject("_artist", "_idSACEM", "_title", "_genre", "_description", 10, 10);
    vm.prank(_user2);
    vm.deal(_user2, 10 ether);
    songcrew.buyNft{value: 1 ether}(0, 1);
    uint256 balanceUser1 = songcrew.balanceOf(_user1, 0);
    assertEq(balanceUser1, 9);
    uint256 balanceUser2 = songcrew.balanceOf(_user2, 0);
    assertEq(balanceUser2, 1);
  }

  function test_BuyNftEmitEvent() public {
    vm.prank(_user1);
    songcrew.createProject("_artist", "_idSACEM", "_title", "_genre", "_description", 10, 10);
    vm.expectEmit(true, false, false, true);
    emit ProjectBought(address(_user2), 0, 1);
    vm.prank(_user2);
    vm.deal(_user2, 10 ether);
    songcrew.buyNft{value: 1 ether}(0, 1);
  }

}

// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.25;

import "forge-std/Test.sol";
import "../contracts/Songcrew.sol";

contract SongcrewTest is Test {

  address _user1 = makeAddr("User0");
  address _user2 = makeAddr("User1");

  Songcrew songcrew;

  function setUp() public {
    songcrew = new Songcrew();
  }

  function testFail_CreateProjectWithAddress0() public {
    vm.prank(address(0));
    songcrew.createProject("artist", "idSACEM", "title", "genre", "description", 1);
  }

  function test_CreateProject() public {
    vm.prank(_user1);
    songcrew.createProject("artist", "idSACEM", "title", "genre", "description", 1);
    Songcrew.Project[] memory projects = songcrew.getAllProjects();
    assertEq(projects.length, 1);
    assertEq(projects[0].addressArtist, _user1);
    assertEq(projects[0].artist, "artist");
    assertEq(projects[0].idSACEM, "idSACEM");
    assertEq(projects[0].title, "title");
    assertEq(projects[0].genre, "genre");
    assertEq(projects[0].description, "description");
    assertEq(projects[0].numberOfCopies, 1);
  }

}

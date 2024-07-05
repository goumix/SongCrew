// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.25;

import "forge-std/Test.sol";
import "../contracts/Songcrew.sol";

contract SongcrewTest is Test {

  Songcrew songcrew;

  function beforeEach() public {
    songcrew = new Songcrew();
  }

  function test_lock() public pure {
    assertTrue(true);
  }

}

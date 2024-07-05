// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.25;

import "forge-std/Test.sol";
import "../contracts/Lock.sol";

contract LockTest is Test {

  Lock lock;

  function beforeEach() public {
    lock = new Lock(100);
  }

  function test_lock() public pure {
    assertTrue(true);
  }

}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract KYCVerification {
  address public admin;

  mapping(address => bool) public userList;
  address[] addressList;

  event UserVerified(address user, address[] addressList);
  event AdminChanged(address user);

  constructor() {
    admin = msg.sender;
  }

  modifier onlyAdmin() {
    require(msg.sender == admin, "Only admin can call this function");
    _;
  }

  function changeAdmin(address user) public onlyAdmin {
    require(user != address(0), "Invalid address!");
    admin = user;
    emit AdminChanged(user);
  }

  function verifyUser(address user, bool verified) public onlyAdmin () {
    require(user != address(0), "Invalid address!");
    require(!userList[user], "User is already verified");
    userList[user] = verified;
    addressList.push(user);
    emit UserVerified(user, addressList);
  }

  function checkKYC(address user) public view returns (bool) {
    require(user != address(0), "Invalid address!");
    return userList[user];
  }

  function checkAdmin() external onlyAdmin view returns(address) {
    return admin;
  }

  function checkUserList() public onlyAdmin view returns(address[] memory) {
    return addressList;
  }

  // function clearUserList() public {
  //   for (uint256 i = 0; i < addressList.length; i++) {
  //     delete addressList[i];
  //   }
  // }
}

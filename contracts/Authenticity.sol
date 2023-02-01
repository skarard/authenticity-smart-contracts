// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;

contract Authenticity {
    mapping(bytes32 => address) private _hashAddress;

    constructor() {}

    function writeHash(bytes32[] memory hash_) external {
        for (uint256 i; i < hash_.length; i++) {
            _hashAddress[hash_[i]] = msg.sender;
        }
    }

    function readHash(
        bytes32[] calldata hash_
    ) external view returns (address[] memory) {
        address[] memory addresses = new address[](hash_.length);
        for (uint256 i; i < hash_.length; i++) {
            addresses[i] = _hashAddress[hash_[i]];
        }
        return addresses;
    }
}

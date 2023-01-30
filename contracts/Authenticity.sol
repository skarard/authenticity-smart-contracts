// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;

contract Authenticity {
    mapping(bytes32 => address) private _hashAddress;

    constructor() {}

    function writeHash(bytes32 hash_) external {
        _hashAddress[hash_] = msg.sender;
    }

    function readHash(bytes32 hash_) external view returns (address) {
        return _hashAddress[hash_];
    }
}

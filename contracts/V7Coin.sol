// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;
import "./token/ERC20/ERC20.sol";

contract V7Coin is ERC20 {
    address public owner = msg.sender;

    constructor() ERC20("V7Coin", "V7", 18, owner) {
        _mint(msg.sender, 57896044);
    }
}

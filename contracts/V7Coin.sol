pragma solidity ^0.8.0;

import "./token/ERC20/ERC20.sol";

contract V7 is ERC20 {
    constructor() ERC20("Decentralized Systems", "V7") {
        _mint(msg.sender, 1000);
    }
}

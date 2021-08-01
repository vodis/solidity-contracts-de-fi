[![Docs](https://img.shields.io/badge/docs-%F0%9F%93%84-blue)](https://docs.openzeppelin.com/contracts)
[![NPM Package](https://img.shields.io/npm/v/@openzeppelin/contracts.svg)](https://www.npmjs.org/package/@openzeppelin/contracts)
[![Coverage Status](https://codecov.io/gh/OpenZeppelin/openzeppelin-contracts/graph/badge.svg)](https://codecov.io/gh/OpenZeppelin/openzeppelin-contracts)

**A library for secure smart contract development.** Build on a solid foundation of community-vetted code.

- Implementations of standards like [ERC20](https://docs.openzeppelin.com/contracts/erc20) and [ERC721](https://docs.openzeppelin.com/contracts/erc721).
- Flexible [role-based permissioning](https://docs.openzeppelin.com/contracts/access-control) scheme.
- Reusable [Solidity components](https://docs.openzeppelin.com/contracts/utilities) to build custom contracts and complex decentralized systems.

:mage: **Not sure how to get started?** Check out [Contracts Wizard](https://wizard.openzeppelin.com/) — an interactive smart contract generator.

## Overview

### Installation

```console
$ npm install @openzeppelin/contracts
```

OpenZeppelin Contracts features a [stable API](https://docs.openzeppelin.com/contracts/releases-stability#api-stability), which means your contracts won't break unexpectedly when upgrading to a newer minor version.

### Usage

Once installed, you can use the contracts in the library by importing them:

```solidity
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyCollectible is ERC721 {
    constructor() ERC721("MyCollectible", "MCO") {
    }
}
```

_If you're new to smart contract development, head to [Developing Smart Contracts](https://docs.openzeppelin.com/learn/developing-smart-contracts) to learn about creating a new project and compiling your contracts._

To keep your system secure, you should **always** use the installed code as-is, and neither copy-paste it from online sources, nor modify it yourself. The library is designed so that only the contracts and functions you use are deployed, so you don't need to worry about it needlessly increasing gas costs.

## Security

This project is maintained by [OpenZeppelin](https://openzeppelin.com), and developed following our high standards for code quality and security. OpenZeppelin Contracts is meant to provide tested and community-audited code, but please use common sense when doing anything that deals with real money! We take no responsibility for your implementation decisions and any security problems you might experience.

The core development principles and strategies that OpenZeppelin Contracts is based on include: security in depth, simple and modular code, clarity-driven naming conventions, comprehensive unit testing, pre-and-post-condition sanity checks, code consistency, and regular audits.

The latest audit was done on October 2018 on version 2.0.0.

Please report any security issues you find to security@openzeppelin.org.

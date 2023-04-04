# SwapHat V3

This repository contains the core smart contracts for the SwapHat V3 Protocol.
For higher level contracts, see the [swaphat-v3-periphery](https://github.com/swaphat/uniswap-v3-periphery)
repository.

[![Lint](https://github.com/uniswap/uniswap-v3-core/actions/workflows/lint.yml/badge.svg)](https://github.com/uniswap/uniswap-v3-core/actions/workflows/lint.yml)
[![Tests](https://github.com/uniswap/uniswap-v3-core/actions/workflows/tests.yml/badge.svg)](https://github.com/uniswap/uniswap-v3-core/actions/workflows/tests.yml)
[![Fuzz Testing](https://github.com/uniswap/uniswap-v3-core/actions/workflows/fuzz-testing.yml/badge.svg)](https://github.com/uniswap/uniswap-v3-core/actions/workflows/fuzz-testing.yml)
[![Mythx](https://github.com/uniswap/uniswap-v3-core/actions/workflows/mythx.yml/badge.svg)](https://github.com/uniswap/uniswap-v3-core/actions/workflows/mythx.yml)
[![npm version](https://img.shields.io/npm/v/@uniswap/v3-core/latest.svg)](https://www.npmjs.com/package/@uniswap/v3-core/v/latest)


## Local deployment

In order to deploy this code to a local testnet, you should install the npm package
`@uniswap/v3-core`
and import the factory bytecode located at
`@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json`.
For example:

```typescript
import {
  abi as FACTORY_ABI,
  bytecode as FACTORY_BYTECODE,
} from '@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json'

// deploy the bytecode
```

This will ensure that you are testing against the same bytecode that is deployed to
mainnet and public testnets, and all Uniswap code will correctly interoperate with
your local deployment.

## Using solidity interfaces

The SwapHat v3 interfaces are available for import into solidity smart contracts
via the npm artifact `@uniswap/v3-core`, e.g.:

```solidity
import '@uniswap/v3-core/contracts/interfaces/IUniswapV3Pool.sol';

contract MyContract {
  IUniswapV3Pool pool;

  function doSomethingWithPool() {
    // pool.swap(...);
  }
}

```

## Licensing

The primary license for SwapHat V3 Core is the GNU General Public License 2.0-or-later, see [`LICENSE`](./LICENSE). However, some files are dual licensed under `MIT`:


### Exceptions

- `contracts/libraries/FullMath.sol` is licensed under `MIT` (as indicated in its SPDX header), see [`contracts/libraries/LICENSE_MIT`](contracts/libraries/LICENSE_MIT)
- All files in `contracts/test` remain unlicensed (as indicated in their SPDX headers).

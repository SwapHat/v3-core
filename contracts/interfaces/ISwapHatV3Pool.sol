// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.5.0;

import './pool/ISwapHatV3PoolImmutables.sol';
import './pool/ISwapHatV3PoolState.sol';
import './pool/ISwapHatV3PoolDerivedState.sol';
import './pool/ISwapHatV3PoolActions.sol';
import './pool/ISwapHatV3PoolOwnerActions.sol';
import './pool/ISwapHatV3PoolEvents.sol';

/// @title The interface for a SwapHat V3 Pool
/// @notice A SwapHat pool facilitates swapping and automated market making between any two assets that strictly conform
/// to the ERC20 specification
/// @dev The pool interface is broken up into many smaller pieces
interface ISwapHatV3Pool is
    ISwapHatV3PoolImmutables,
    ISwapHatV3PoolState,
    ISwapHatV3PoolDerivedState,
    ISwapHatV3PoolActions,
    ISwapHatV3PoolOwnerActions,
    ISwapHatV3PoolEvents
{

}

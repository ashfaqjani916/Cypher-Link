// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import { IRouterClient } from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import { OwnerIsCreator } from "@chainlink/contracts-ccip/src/v0.8/shared/access/OwnerIsCreator.sol";
import { Client } from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";

contract RouterContract is OwnerIsCreator {
    IRouterClient private routerClient;

    constructor(address _routerClient) {
        routerClient = IRouterClient(_routerClient);
    }

    function ccipReceive(Client.Any2EVMMessage memory any2EvmMessage) external {
        // Implement logic to handle cross-chain messages if required
        // For now, we don't need to implement anything here
    }

    function getFee(
        uint64 _destinationChainSelector,
        Client.EVM2AnyMessage memory _evm2AnyMessage
    ) external view returns (uint256) {
        return routerClient.getFee(_destinationChainSelector, _evm2AnyMessage);
    }

    function ccipSend(
        uint64 _destinationChainSelector,
        Client.EVM2AnyMessage memory _evm2AnyMessage
    ) external returns (bytes32) {
        return routerClient.ccipSend(_destinationChainSelector, _evm2AnyMessage);
    }
}

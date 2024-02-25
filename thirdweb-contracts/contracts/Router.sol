// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import { IRouterClient } from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import { OwnerIsCreator } from "@chainlink/contracts-ccip/src/v0.8/shared/access/OwnerIsCreator.sol";
import { Client } from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";

import "./Sender.sol";
import "./Receiver.sol";
import "./CrowdFunding.sol";
import "./TokenTransferor.sol";

contract Router is OwnerIsCreator {
    IRouterClient private s_router;

    constructor(address _router) {
        s_router = IRouterClient(_router);
    }

    function ccipSend(
        uint64 _destinationChainSelector,
        Client.EVM2AnyMessage memory _message
    ) external onlyOwner returns (bytes32) {
        return s_router.ccipSend(_destinationChainSelector, _message);
    }

    function getFee(
        uint64 _destinationChainSelector,
        Client.EVM2AnyMessage memory _message
    ) external view onlyOwner returns (uint256) {
        return s_router.getFee(_destinationChainSelector, _message);
    }

    function allowlistDestinationChain(
        uint64 _destinationChainSelector,
        bool _allowed
    ) external onlyOwner {
        s_router.allowlistDestinationChain(_destinationChainSelector, _allowed);
    }
}

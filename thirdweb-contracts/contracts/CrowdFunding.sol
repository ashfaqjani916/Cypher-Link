pragma solidity ^0.8.9;

// SPDX-License-Identifier: UNLICENSED


contract CrowdFunding{
    struct Campaign{
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        string img;
        address[] donators;
        uint256[] donations;
    }


    mapping(uint256 => Campaign) public campaings;

    uint256 public numberOfCampaings = 0;

    function createCampaing(address _owner,string memory _title, string memory _description, uint256 _target, uint256 _deadline, string memory _img) public returns (uint256) {
        Campaign storage campaing = campaings[numberOfCampaings];

        //is everything okey?

        require(campaing.deadline <block.timestamp, " The deadline should be a date in the future");     

        campaing.owner = _owner;
        campaing.title = _title;
        campaing.description = _description;
        campaing.target = _target;
        campaing.deadline = _deadline;
        campaing.amountCollected = 0;
        campaing.img = _img;

        numberOfCampaings++;
         
        return numberOfCampaings -1;
         
    }

    function donateToCampaign() {}

    function getDonators() {}

    function getCampaigns() {}

}
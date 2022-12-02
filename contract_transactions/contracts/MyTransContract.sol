// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;  // choose version of solidity we need license so we need to add comment above..


contract MyTransContract {

    uint256 NumberofTransaction;

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    struct TransactionPayStructure {
        address sender;  // type : name of the property
        address receiver;  // type : name of the property
        uint amount;  
        string message;
        uint256 timestamp;
        string keyword;  
    }

    // array of different transactions, define what type of transactions
    TransactionPayStructure[] mytranscontract;

    // define functionality using inbuilt class also public keyword bcoz by default its private..
    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        NumberofTransaction += 1;
        
        // push javascript method we can also use in solidity.. 
        mytranscontract.push(TransactionPayStructure(msg.sender, receiver, amount, message, block.timestamp, keyword)); //time stamp specific block
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function getAllTransactions() public view returns (TransactionPayStructure[] memory) {
        // this function return  all the transactions...
        return mytranscontract;
    }

    function getTransactionCount() public view returns (uint256) {
        // this function return number of transactions.....
        return NumberofTransaction;
    }

}


// npx hardhat run scripts/deploy.js --network goerli
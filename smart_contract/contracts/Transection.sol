// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

contract Transection {

    constructor (){
    }

    uint256 transectionCount;

    event Transfer(address from , address receiver , string message , uint amount , uint256 timestamp , string account, string keyword );
    struct TransferStruct{
        address sender ;
        address receiver;
        string message;
        uint amount;
        uint256 timestamp;
        string account;
        string keyword;
    }

    TransferStruct[] transection;

    function addToBlockChain(address payable _receiver , string memory _message , uint _amount , string memory _account, string memory _keyword) public {
        transectionCount +=1 ;

        transection.push(TransferStruct(msg.sender , _receiver , _message , _amount , block.timestamp , _account , _keyword));

        emit Transfer(msg.sender , _receiver , _message , _amount , block.timestamp , _account , _keyword);
    }

    function getAllTransection() public view returns (TransferStruct[] memory){
        return transection;
    }

    function getTransectionCount() public view returns (uint){
        return transectionCount;
    }
}

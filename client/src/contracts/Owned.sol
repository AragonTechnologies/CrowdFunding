pragma solidity ^0.6.1;


contract Owned{
    address payable  public owner;
    address  payable public newOwner;
    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );
    constructor() public{
        owner = msg.sender;
    }

    modifier onlyOwner(){
        require(msg.sender == owner);
        _;
    }

    function transferOwnership(address payable  _newOwner) onlyOwner payable public{
        newOwner = _newOwner;
    }

    function acceptOwnership() public{
        require(msg.sender == newOwner);
        emit OwnershipTransferred(owner, newOwner);
        owner=newOwner;
        newOwner = address(0);
    }
}
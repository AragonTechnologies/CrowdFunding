pragma solidity ^0.6.1;
import "./SimpleCoin";

contract ReleasablesSimpleCoin is SimpleCoin{

    bool public released = false;

    modifier isReleased(){
        if(!released){
            revert();
        }
        _;
    }


    
}
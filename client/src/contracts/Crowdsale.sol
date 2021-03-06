pragma solidity ^0.6.1;

import "./SimpleCoin.sol";
import "./ReleasablesSimpleCoin.sol";
import "./Ownable.sol";
contract Crowdsale is Ownable{
    uint256 public startTime;
    uint256 public endTime;
    uint256 public weiTokenPrice;
    uint256 public weiInvestmentObjective;
    mapping(address => uint256) public investmentAmountOf;
    uint public investmentReceived;
    uint256 public investmentRefunded;
    bool public isFinalized;
    bool public isRefundingAllowed;
    // address public owner;
    ReleasablesSimpleCoin public crowdSaleToken;


/** EVENTS */
    event LogInvestment(address indexed investor, uint256 value);
    event LogTokenAssignment(address indexed investor, uint256 newTokens);
    event Refund(address investor, uint256 value);


    constructor(
        uint256 _startTime,
        uint256 _endTime,
        uint256 _weiTokenPrice,
        uint256 _etherInvestmentObjective
    ) public {
        require(_startTime >= now);
        require(_endTime >= _startTime);
        require(_weiTokenPrice != 0);
        require(_etherInvestmentObjective != 0);

        startTime = _startTime;
        endTime = _endTime;
        weiTokenPrice = _weiTokenPrice;
        weiInvestmentObjective = _etherInvestmentObjective * 1000000000000000000;

        crowdSaleToken = new ReleasablesSimpleCoin(0);
        isFinalized = false;
        isRefundingAllowed = false;
        owner = msg.sender;
    }

    // function invest(address _beneficiary) public payable{
    //     // allows an investor to book corwdsale tokens
    // }

    function refund() public {
        // allows an investor to get 
        // a refund in case of unsuccessfull completion
    }

    function invest() public payable{
        require(isValidInvestment);
        address investor = msg.sender;
        uint256 investment = msg.value;
        investmentAmountOf[investor] += investment;
        investmentReceived += investment;
        assignTokens(investor, investment);
        emit LogInvestment(investor, investment);
    }
    function isValidInvestment(uint256 _investment) internal view returns(bool){
        bool nonZeroInvestment = _investment != 0;
        bool withinCrowdsalePeriod = now >= startTime && now <= endTime;
        return nonZeroInvestment && withinCrowdsalePeriod;
    }

    function assignTokens(
            address _beneficiary, 
            uint256 _investment) internal{
        uint256 _numberOfTokens = calculateNumberOfTokens(_investment);
        crowdSaleToken.mint(_beneficiary, _numberOfTokens);
    }

    function calculateNumberOfTokens(uint256 _investment) internal returns(uint256){
        return _investment / weiTokenPrice;
    }

    function finalize() onlyOwner public{
        // allows the crowdsale organizer, who is the contract owner 
        // to release tokens to investors in case of successfull completion
        if(isFinalized) revert();
        bool isCrowdsaleComplete  = now > endTime;
        bool investmentObjectiveMet = investmentReceived >= weiInvestmentObjective;

        if(isCrowdsaleComplete){
            if(investmentObjectiveMet)
                crowdSaleToken.release();
            else
                isRefundingAllowed = true;
            
            isFinalized = true;
        }
    }

    function refund() public{
        if(!isRefundingAllowed) revert();
        address investor = msg.sender;
        uint256 investment = investmentAmountOf(investor);
        if(investment == 0) revert();
        investmentAmountOf(investor) = 0;
        investmentRefunded += investment;
        emit Refund(msg.sender, investment);
        if(!investor.send(investment)) revert();
    }
}
pragma solidity ^0.5.0;



contract CrowdFunding {
    Project public project;
    Contribution[] public contributions;
    enum Status{
        Fundraising,
        Fail,
        Successful
    }

    event LogProjectInitialized(
        address owner,
        string name,
        string website,
        uint minimumRateToRaise,
        uint duration
    );
    event ProjectSubmitted(address addr, string name, string url, bool initialized);
    event LogFundingReceived(address addr, uint amount, uint currentTotal);
    event LogProjectPaid(address projectAddr, uint amount,Status status);
    event Refund(address _to, uint amount);
    event LogErr(address addr, uint amount);

    // campaign contributors
    struct Contribution{
        address addr,
        uint amount
    }

    struct Project{
        address addr,
        string name,
        string website,
        uint totalRaised,
        uint minimumToRaise,
        uint currentBalance,
        uint deadline,
        uint completedAt,
        Status status
    }


    constructor(
        address _owner, 
        uint _minimumToRaise, 
        uint _durationProjects,
        string _name,
        string _website
    ) payable public{
        uint minimumToRaise = _minimumToRaise * 1 ether; //convert to wei
        uint deadlineProjects = now + _durationProjects* 1 seconds;
        project = Project(
            _owner, 
            _name,
            _website,
            0,
            minimumToRaise,
            0,
            deadlineProject,
            0,
            Status.Fundraising
        );
          emit LogProjectInitialized(
            _owner,
            _name,
            _website,
            _minimumToRaise,
            _durationProjects);
    }
    }


    function fund() public atStage(Status.Fundraising) payable {
        contributions.push(
            Contribution({
                addr: msg.sender,
                amount: msg.value
                })
            );
        project.totalRaised += msg.value;
        project.currentBalance = project.totalRaised;
        emit LogFundingReceived(msg.sender, msg.value, project.totalRaised);
    }

}

function checkGoalReached() public onlyOwner afterDeadline {
        require(project.status != Status.Successful && project.status!=Status.Fail);
        if (project.totalRaised > project.minimumToRaise){
            project.addr.transfer(project.totalRaised);
            project.status = Status.Successful;
            emit LogProjectPaid(project.addr, project.totalRaised, project.status);
        } else {
            project.status = Status.Fail;
            for (uint i = 0; i < contributions.length; ++i) {
              uint amountToRefund = contributions[i].amount;
              contributions[i].amount = 0;
              if(!contributions[i].addr.send(contributions[i].amount)) {
                contributions[i].amount = amountToRefund;
                emit LogErr(contributions[i].addr, contributions[i].amount);
                revert();
              } else{
                project.totalRaised -= amountToRefund;
                project.currentBalance = project.totalRaised;
                emit Refund(contributions[i].addr, contributions[i].amount);
              }
            }
        }
        project.completeAt = now;
    }


    /** @dev Function to retrieve donated amount when a project expires.
      */
    function getRefund() public inState(State.Expired) returns (bool) {
        require(contributions[msg.sender] > 0);

        uint amountToRefund = contributions[msg.sender];
        contributions[msg.sender] = 0;

        if (!msg.sender.send(amountToRefund)) {
            contributions[msg.sender] = amountToRefund;
            return false;
        } else {
            currentBalance = currentBalance.sub(amountToRefund);
        }

        return true;
    }

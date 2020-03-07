pragma solidity ^0.6.1;

pragma experimental ABIEncoderV2;

library SafeMath {
    /**
     * @dev Returns the addition of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `+` operator.
     *
     * Requirements:
     * - Addition cannot overflow.
     */
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "SafeMath: addition overflow");

        return c;
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting on
     * overflow (when the result is negative).
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     * - Subtraction cannot overflow.
     */
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        return sub(a, b, "SafeMath: subtraction overflow");
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting with custom message on
     * overflow (when the result is negative).
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     * - Subtraction cannot overflow.
     *
     * _Available since v2.4.0._
     */
    function sub(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b <= a, errorMessage);
        uint256 c = a - b;

        return c;
    }

    /**
     * @dev Returns the multiplication of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `*` operator.
     *
     * Requirements:
     * - Multiplication cannot overflow.
     */
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
        // benefit is lost if 'b' is also tested.
        // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522
        if (a == 0) {
            return 0;
        }

        uint256 c = a * b;
        require(c / a == b, "SafeMath: multiplication overflow");

        return c;
    }

    /**
     * @dev Returns the integer division of two unsigned integers. Reverts on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator. Note: this function uses a
     * `revert` opcode (which leaves remaining gas untouched) while Solidity
     * uses an invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     * - The divisor cannot be zero.
     */
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        return div(a, b, "SafeMath: division by zero");
    }

    /**
     * @dev Returns the integer division of two unsigned integers. Reverts with custom message on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator. Note: this function uses a
     * `revert` opcode (which leaves remaining gas untouched) while Solidity
     * uses an invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     * - The divisor cannot be zero.
     *
     * _Available since v2.4.0._
     */
    function div(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        // Solidity only automatically asserts when dividing by 0
        require(b > 0, errorMessage);
        uint256 c = a / b;
        // assert(a == b * c + a % b); // There is no case in which this doesn't hold

        return c;
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * Reverts when dividing by zero.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     * - The divisor cannot be zero.
     */
    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        return mod(a, b, "SafeMath: modulo by zero");
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * Reverts with custom message when dividing by zero.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     * - The divisor cannot be zero.
     *
     * _Available since v2.4.0._
     */
    function mod(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b != 0, errorMessage);
        return a % b;
    }
}

contract Elesarr{

    using SafeMath for uint256;

    /**
    @param projectCount : Keeping Track Of the number of campaigns
    @param contributionCount : keeping track of the number of contributors
    @param dapp_name : dapp name
    @param contributions : contributor address and their value
    @param projects    : projects maps
    */
    uint public projectCount;
    uint public contributionCount;
    string public dapp_name = "Elesarr";
    mapping (address => uint256) public contributions;
    mapping(string => Project) public projects;



    /** PROJECT STRUCT
        @param id : project id
        @param creator: project creator address
        @param project_name : Project name
        @param project_descripion: Project Desciption
        @param goal : amount goal
        @param created: time project was created
        @param deadline : project date deadline
        @param currentBalance : amount project has gianned
        @param completedAt : time the project funding was completed
    */

    // struct Contributor{
    //     string project_id;
    //     uint256 id;
    //     address payable contributor_address;
    //     uint256 value;
    // }


    struct Project{
        string  id;
        address payable creator;
        string project_name;
        string project_description;
        uint256 goal;
        uint256 created;
        uint256 deadline;
        uint256 currentBalance;
        uint256 completedAt;
        // Contributor[] contributors;
    }

    /* START EVENTS */
    event ProjectCreated(
        string id,
        address payable creator,
        string project_name,
        string project_description,
        uint256 goal,
        uint256 created,
        uint256 deadline,
        uint256 currentBalance
    );


    // event ContributedCreated(
    //     string project_id,
    //     uint256 id,
    //     address payable contributor_address,
    //     uint256 value
    // );

    event Contributed(
        string  project_name,
        address contributor,
        uint256 value
    );
    event CreatorPaid(address recipient);
    event FundReceived(address contributor, uint256 amount, uint256 currentTotal);
    event ProjectCompletedAt(string name, uint256 currentBalance, uint256 completedAt);


    /* END EVENTS */
    function createCampaign(
        /**
            @param _id
            @param _name
            @param _description
            @param _goal
            @param _deadline
            
        */
        string memory _id,
        string memory _name,
        string memory _description,
        uint _goal,
        uint _deadline
    )public {
        projectCount++;
        // Project memory newProject = Project({
        //     id:_id,
        //     creator:msg.sender,
        //     project_name:_name,
        //     project_description:_description,
        //     goal:_goal,
        //     created:now,
        //     deadline:_deadline,
        //     currentBalance:0,
        //     completedAt: 0
        // });
        projects[_id].id = _id;
        projects[_id].creator = msg.sender;
        projects[_id].project_name = _name;
        projects[_id].project_description = _description;
        projects[_id].goal = _goal;
        projects[_id].created= now;
        projects[_id].deadline = _deadline;
        projects[_id].currentBalance = 0;
        projects[_id].completedAt = 0;
        
        
        emit ProjectCreated(
            _id,
            msg.sender,
            _name,
            _description,
            _goal,
            now,
            _deadline,
         0
        );           
    }

    function getProject(string memory _id) public view returns(
        string memory,
        string memory,
        string memory,
        uint256 ,
        uint256 ,
        uint256,
        uint256,
        address
    ){

    Project memory project = projects[_id];
    return(
        project.id,
        project.project_name,
        project.project_description,
        project.currentBalance,
        project.goal,
        project.deadline,
        project.completedAt,
        project.creator
    );
    }




/*
    CONTRIBUTE FUNCTIONALITY
*/

     /**  CONTRIBUTE FUNCTIONALITY
         
      */

    function contribute(string memory _id) public payable{
        contributionCount++;  // increase contribution count
        Project memory _project = projects[_id]; // gets the project
         require(msg.sender != _project.creator); // checks
         require(msg.value > 0); // checks
         contributions[msg.sender] = contributions[msg.sender].add(msg.value); // increasest
         emit Contributed(
             _project.project_name,
             msg.sender,
             msg.value
         );
        _project.currentBalance =  _project.currentBalance.add(msg.value);  // increases the currentBalance

        //  currentBalance = currentBalance.add(msg.value); //updates the totalbalance
        projects[_id] = _project; // updates the 
         emit FundReceived(msg.sender, msg.value, _project.currentBalance);
         checkIfFundingCompleteOrExpired(_id);
     }
     function checkIfFundingCompleteOrExpired(string memory _id) public{
        Project memory _project = projects[_id];
          if(_project.currentBalance >= _project.goal){
            //   state = State.Successful;
              payOut(_id);
          } else if(now > _project.deadline){
                // state = State.Expired;   
                projects[_id].completedAt = now;
                projects[_id] = _project;
          }
          _project.completedAt = now;
          emit ProjectCompletedAt(
                _project.project_name,
                _project.currentBalance,
                _project.completedAt
         );
      }
              

        function payOut(string memory _id) internal  returns (bool){
            Project memory _project = projects[_id];
            uint256 totalRaised = _project.currentBalance;
            _project.currentBalance = 0;
            if(_project.creator.send(totalRaised)){
                emit CreatorPaid(_project.creator);
            }else{
                _project.currentBalance = totalRaised;
                // state = State.Successful;
            }
            return false;
        }




}
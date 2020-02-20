pragma solidity ^0.5.0;
import "./Owned.sol";

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


contract ContractReceiver { function tokenFallback(address _from,uint _value,bytes calldata _data)  external;}
interface tokenRecipient { 
        function receiveApproval(address _from, uint256 _value, address _token, bytes calldata _extraData) external; }




contract ElessarToken is Owned{
    using SafeMath for uint256;

    string public token_name = "Elessar";
    string public token_symbol = "ELS";
    uint8 public decimals=18; // 18 decimals is the strongly suggested default, avoid changing it
    uint256 public totalSupply = 1000000000;
    address[] public elessarHolders;
    uint256 public buyRate=1000;
    bool public saleIsOn=true;
    mapping (address => mapping (address => uint256)) public allowance;

    // Admin Structure
    struct Admin{
        bool isAdmin;
        address beAdmin;
    }

    modifier onlyAdmin{
        require(msg.sender == owner || admins[msg.sender].isAdmin);
        _;
    }

    //create an array of admins
    mapping(address => Admin) admins;
    mapping(address => uint256) public balanceOf;
    mapping (address => bool) public frozenAccount;
 
    // This generates a public event on the blockchain that will notify clients
    event FrozenFunds(address target, bool frozen);


    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    // This notifies clients about the amount burnt
    event Burn(address indexed from, uint256 value);


    //This notifies clients about an approval request for transferFrom()
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);


    //Notifies contract owner about a successfult terminated/destroyed contract
    event LogContractDestroyed(address indexed contractAddress, bytes30 _extraData);


    //Notifies clients about token sale
    event LogTokenSale(address indexed _client, uint256 _amountTransacted);


    //Notifies of newly minted tokensevent
    event LogMintedTokens(address indexed _this, uint256 _amount);
    event LogNewPrices(address indexed _admin, uint256 _buyRate);



/**
CONSTRUCTOR FUNCTION
 */

 constructor() public{
     totalSupply = totalSupply*10**uint256(decimals); // Update total supply with the decimal amount
     balanceOf[msg.sender] = totalSupply;
     Owned(msg.sender);
 }


function transfer(address _to, uint256 _value, bytes memory _data, string memory _custom_fallback) public returns(bool success){
    require(!frozenAccount[msg.sender] && !frozenAccount[_to]);
    if(isContract(_to)){
        balanceOf[msg.sender] = balanceOf[msg.sender].sub(_value);
        balanceOf[_to] = balanceOf[_to].add(_value);
        // assert(_to.call.value(0)(bytes4(keccak256(abi.encodePacked(_custom_fallback))), msg.sender, _value, _data));
        emit Transfer(msg.sender, _to, _value);
        // emit Transfer(msg.sender, _to, _value, _data);
        return true;
    } else {
        return transferToAddress(_to, _value, _data);
    }
}

function transfer(address _to, uint256 _value, bytes memory _data) public returns(bool suucess){
    require(!frozenAccount[msg.sender] && !frozenAccount[_to]);
    if(isContract(_to)){
        return transferToContract(_to, _value, _data);
    } else {
        return transferToAddress(_to, _value, _data);
    }
}


// 
    // Standard function transfer similar to ERC20 transfer with no _data .
    // Added due to backwards compatibility reasons .

    function transfer(address _to,uint256 _value) public returns(bool success){
        require(!frozenAccount[msg.sender] && !frozenAccount[_to]);
        bytes memory empty;
        if(isContract(_to)){
            return transferToContract(_to, _value, empty);
        } else{
            return transferToAddress(_to, _value, empty);
        }
    }


 function isContract(address _addr) public view returns(bool){
     uint length;
     assembly{
        //retrieve the size of the code on target address, this needs assembly
            length := extcodesize(_addr)
     }
     return(length > 0);
 }

    //function that is called when transaction target is an address
    function transferToAddress(address _to,uint256 _value, bytes memory _data) private returns(bool success){
        require(balanceOf[msg.sender] > _value, "NOT ENOUGH TOKENS");
        balanceOf[msg.sender] = balanceOf[msg.sender].sub(_value);
        balanceOf[_to] = balanceOf[_to].add(_value);
        emit Transfer(msg.sender, _to, _value);
        // emit Transfer(msg.sender, _to, _value, _data);
        return true;
    }


    //function that is called when transaction target is a contract
    function transferToContract(address _to, uint256 _value, bytes memory _data) private returns(bool success){
        require(balanceOf[msg.sender] > _value);
        balanceOf[msg.sender] = balanceOf[msg.sender].sub(_value);
        ContractReceiver receiver = ContractReceiver(_to);
        receiver.tokenFallback(msg.sender, _value, _data);
        emit Transfer(msg.sender, _to, _value);
        return true;
    }


    function transferToOwner(uint256 _amount) public onlyOwner{
        require(balanceOf[address(this)] > convert(_amount));
        uint256 amount = convert(_amount);
        balanceOf[address(this)] = balanceOf[address(this)].sub(amount);
        balanceOf[owner] = balanceOf[owner].add(amount);
        emit Transfer(address(this), owner, amount);
    }

/**
     * Conversion
     *
     * @param _value convert to proper value for math operations
     *///0x44b6782dde9118baafe20a39098b1b46589cd378
    function convert(uint256 _value) internal view returns (uint256) {
         return _value*10**uint256(decimals);
     }

     function burn(uint256 _value) public onlyOwner {
        require(balanceOf[address(this)] >= convert(_value));
        uint256 value=convert(_value);
        // Check if the contract has enough
        balanceOf[address(this)]=balanceOf[address(this)].sub(value);    // Subtract from the contract
        totalSupply=totalSupply.sub(value);     // Updates totalSupply
        emit Burn(address(this), value);
    }


    function freezeAccount(address target, bool freeze) public onlyAdmin{
        require(target != owner);
        frozenAccount[target] = freeze;
        emit FrozenFunds(target, freeze);
    }


    function mintToken(uint256 mintedAmount)public onlyOwner{
        uint256 mint = convert(mintedAmount);
        balanceOf[address(this)] = balanceOf[address(this)].add(mint);
        totalSupply = totalSupply.add(mint);
        emit LogMintedTokens(address(this), mint);
    }

    function setPrice(uint256 newBuyRate) public onlyAdmin{
        buyRate= newBuyRate;
        emit LogNewPrices(msg.sender,buyRate);
    }


    function buy() payable public{
        require(msg.value > 0);
        require(msg.sender != owner && saleIsOn == true);
        uint256 amount = msg.value.mul(buyRate);
        uint256 percentile = amount.add(getEthRate(msg.value).mul(amount).div(100));
        balanceOf[msg.sender] = balanceOf[msg.sender].add(percentile);
        balanceOf[address(this)] = balanceOf[address(this)].sub(percentile);
        elessarHolders.push(msg.sender);
        owner.transfer(msg.value);
        emit LogTokenSale(msg.sender,percentile);
    }


    function () external payable {
        buy();
    }

    function destroyContract() public onlyOwner {
       selfdestruct(owner);
       transferOwnership(address(0x0));
       emit LogContractDestroyed(address(this), "Contract has been destroyed");
   }

   function getEthRate(uint256 _value) private pure returns(uint256){
       require(_value > 0 );
       if(_value < 3 ether)
         return 10;
       if(_value >= 3 ether && _value < 5 ether )
         return 20;
       if(_value >= 5 ether && _value < 24 ether )
         return 30;
       if(_value >= 24 ether )
         return 40;
   }
 function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(_value <= allowance[_from][msg.sender]);     // Check allowance
        allowance[_from][msg.sender] =allowance[_from][msg.sender].sub(_value);
        transfer(_to, _value);
        return true;
    }

     function approve(address _spender, uint256 _value) public returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender,_spender,_value);
        return true;
    }

   function approveAndCall(address _spender, uint256 _value, bytes memory _extraData)public returns (bool success) {
        tokenRecipient spender = tokenRecipient(_spender);
        if (approve(_spender, _value)) {
            spender.receiveApproval(msg.sender, _value, address(this), _extraData);
            return true;
        }
    }

    function setName(string memory _name) public onlyOwner() returns (bool success) {
        token_name=_name;
        return true;
    }

    function setSaleStatus(bool _bool) public onlyOwner() returns (bool success){
        saleIsOn=_bool;
        return true;
    }
}



require('chai')
    .use(require('chai-as-promised'))
    .should()


const Token = artifacts.require("./Token.sol")


contract("TOKEN CONTRACT", ([dep, user, user2]) => {
    before(async() => {
        this.contract = await Token.deployed()
        this.totalSupply = await this.contract.totalSupply()
    })

    it("check if it deployed sucessfully", async() => {
        const address = this.contract.address
        assert.notEqual(address, 0x0)
    })
    it("check token name", async() => {
        const token_name = await this.contract.token_name()
        assert.equal(token_name, "ELESSAR")
    })
    it("check token symbol", async() => {
        const token_name = await this.contract.token_symbol()
        assert.equal(token_name, "ELS")
    })
    it("check totalSupply", async() => {
        const totalSupply = await this.contract.totalSupply()
        // console.log(totalSupply.toString())
        assert.equal(totalSupply, 1000000000000000000000000)
    })
    it("check contract deployer token", async() => {
        const delpoyerBal = await web3.eth.getBalance(dep)
        var  getDeployerTokenBalance = await this.contract.balanceOf(dep)
        getDeployerTokenBalance = getDeployerTokenBalance.toString()
        // console.log(getDeployerTokenBalance)
        assert.equal(getDeployerTokenBalance, this.totalSupply)
    })

    it("checks if the transfer functionality is working",async() => {
        const transfer = await this.contract.transfer(user, 3000)
        console.log(transfer)
        const deployerTokenAmount = await this.contract.balanceOf(dep)
        const userTokenAmount = await this.contract.balanceOf(user)
        assert.equal(userTokenAmount.toString(), 3000)
        assert.equal(deployerTokenAmount.toString(),999999999999999999997000)
        // assert.equal(userTokenAmount, 3000)
        // assert.equal(deployerTokenAmount, 7000)

    })
})  

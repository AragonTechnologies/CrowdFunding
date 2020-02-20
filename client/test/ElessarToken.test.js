require('chai')
    .use(require('chai-as-promised'))
    .should()


const Token = artifacts.require("./ElessarToken.sol")

contract("ELESSARTOKEN", ([deployer, user1, user2]) => {
    before(async() => {
        this.contract = await Token.deployed();
    })

    it("checks if it destroyed successfully", async() => {
        const address = this.contract.address
        assert.notEqual(address, 0x0)
        assert.notEqual(address, undefined)
        assert.notEqual(address, "")
        assert.notEqual(address, null)
    })

    it("checks token name", async() => {
        const token_name = await this.contract.token_name()
        assert.equal(token_name, "Elessar")
    })
    it("checks token symbol", async() => {
        const token_symbol = await this.contract.token_symbol()
        assert.equal(token_symbol, "ELS")
    })
    it("check buyRate", async() => {
        const buyRate = await this.contract.buyRate()
        assert.equal(buyRate, 1000)
    })
    it("checks totalSupply", async() => {
        const totalSupply = await this.contract.totalSupply()
        // assert.equal(totalSupply, 1000000000)
        // console.log("TOTAL SUPPLY", totalSupply.toString())
        assert.equal(totalSupply.toString(),1000000000000000000000000000)
    })
    it("checks if the decimal is working", async() => {
        const decimals = await this.contract.decimals()
        assert.equal(decimals, 18)
    })


    it("checks if saleIsOn is true", async() => {
        const saleIsOn = await this.contract.saleIsOn()
        assert.equal(saleIsOn, true)
    })

    it("check if the transfer functionality is working", async() => {
        await this.contract.transfer(user1, 200)
        const userBalance = await this.contract.balanceOf(user1)
        const totalSupply = await this.contract.totalSupply()
        console.log("TOTAL SUPPLY 2", totalSupply.toString())
        assert.equal(userBalance.toString(), 200)
    })

    it("checks if the buy rate functionality is working", async() => {
        const buyRate = await this.contract.buyRate()
        assert.equal(buyRate, 1000)
    })
    it("checks if the buyFunctionality is working", async() => {
        await this.contract.buy({from:deployer}).should.be.rejected
        await this.contract.buy({from:user2, value:0}).should.be.rejected
        await this.contract.buy({from:user2, value:3})
    })

})


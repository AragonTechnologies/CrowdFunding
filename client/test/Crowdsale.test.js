require('chai')
    .use(require('chai-as-promised'))
    .should()




const Crowdsale= artifacts.require("./Crowdsale.sol")




contract("CROWDSALE CONTRACT", ([dep, user, user2]) => {
    before(async() => {
        this.contract = await Crowdsale.deployed()

    })

    describe('#CROWDSALE TESTING SUITE PHASE 1', async() => {
        it("checks if it deloys well", async() => {
            const address = this.contract.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, undefined)
            assert.notEqual(address, "")
            assert.notEqual(address, null)      
        })

        it("checks StartTime", async() => {
            const startTime = await this.contract.startTime()
            assert.equal(startTime.toString(), 1584048142230)
        })
        it("checks endTime", async() => {
            const endTime = await this.contract.endTime()
            assert.equal(endTime.toString(),1584054000000)
        })
        it("checks if the owner is the deployer", async() => {
            const owner = await this.contract.owner()
            const isFinalized = await this.contract.isFinalized()
            const weiTokenPrice = await this.contract.weiTokenPrice()
            const isRefundingAllowed = await this.contract.isRefundingAllowed()
            assert.equal(owner, dep)
            assert.equal(isFinalized, false)
            assert.equal(weiTokenPrice,2)
            assert.equal(isRefundingAllowed, false)
        })
    })
    
})

require('chai')
    .use(require('chai-as-promised'))
    .should()




const SimpleCoin= artifacts.require("./SimpleCoin.sol")


contract("SIMPLE COIN CONTRACT TEST PHASE", ([dep, user, user2, user3]) => {
    before(async() => {
        this.contract = await SimpleCoin.deployed()
    })

    describe('PHASE 1', async() => {
        it('#####SIMPLE COIN CONTRACT checks if it deployed successfully', async() => {
        
            const address = this.contract.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, undefined)
            assert.notEqual(address, "")
            assert.notEqual(address, null)    
        });
        it("#####SIMPLE COIN CONTRACT checks if the mint is working correctly", async() => {
            const owner = await this.contract.owner()
            const checkBalance = await this.contract.coinBalance(owner)
            assert.equal(owner, dep)
            assert.equal(checkBalance, 1000)
        })

        it("#####SIMPLE COIN CONTRACT checks if the transfer functionality is working", async() => {
            const transfer = await this.contract.transfer(user, 100)
            const ownerBal = await this.contract.coinBalance(dep)
            const userBal = await this.contract.coinBalance(user)
            assert.equal(ownerBal.toString(), 900)
            assert.equal(userBal.toString(), 100)
            await this.contract.transfer(dep,user, 3000).should.be.rejected
            
        })
        it("#####SIMPLE COIN CONTRACT checks if the transferFrom functionality is working", async() => {
            const transferFrom = await this.contract.transferFrom(user, user2, 20)
            const userBal = await this.contract.coinBalance(user)
            const user2Bal = await this.contract.coinBalance(user2)
            assert.equal(userBal.toString(), 80)
            assert.equal(user2Bal.toString(), 20)
            await this.contract.transferFrom(user,user2, 300).should.be.rejected
        })        
    });
    
})
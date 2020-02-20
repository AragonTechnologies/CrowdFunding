// import { contract } from "./Token.test"
require('chai')
    .use(require('chai-as-promised'))
    .should()


const Owned = artifacts.require("./Owned.sol")

contract("OwnedContract", ([deployer, user, user2]) => {
    before(async() => {
        this.contract =  await Owned.deployed()
    })


    it("checks if the contract deployed successfully", async() => {
        const address = this.contract.address
        assert.notEqual(address, 0x0)
        assert.notEqual(address, "")
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
    })

    it("checks if the owner is the deployer", async() => {
        const owner = await this.contract.owner();
        assert.equal(owner, deployer)
    })

    it("checks if the newOwner is working", async() => {
        const newOwner = await this.contract.newOwner()
        assert.equal(newOwner, 0x0)
    })
    it("checks if the transferOwnership is working", async() => {
        await this.contract.transferOwnership(user)
        const newOwner = await this.contract.newOwner()
        assert.equal(newOwner, user)
    })

    it("checks if the acceptOwnership is working", async() => {
        await this.contract.acceptOwnership({from:deployer}).should.be.rejected
        await this.contract.acceptOwnership({from:user})
        const owner = await this.contract.owner()
        assert.equal(owner, user)
    })

})
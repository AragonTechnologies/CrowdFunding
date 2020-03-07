require('chai')
    .use(require('chai-as-promised'))
    .should()




const Elesarr= artifacts.require("./Elesarr.sol")



contract("#Elesarr Contract Tests Suites", ([dep, creator, user2, user3, user4]) => {
    before(async() => {
        this.contract = await Elesarr.deployed()
        // this.address = this.contract.address
    })

    describe("#FIRST PHASE TESTING", async() => {
        it("checks if the contract compiled successfully", async() => {
            const address = this.contract.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, undefined)
            assert.notEqual(address, "")
            assert.notEqual(address, null)
        })
    })


    describe('#SECOND PHASE TESTING', async() => {
        it("checks if the create campaign functionality is working", async() => {
            var deadline = new Date('April 1, 2020 03:24:00');
            deadline=deadline.getTime()    
            const newProject = await this.contract.createCampaign(
                'asrsdqa',
                "First Campaign",
                "First Campaign Description",
                web3.utils.toWei('0.3','Ether'),
                deadline,
                {from:creator}
            )
            const result = newProject.logs[0].args
            assert.equal(result['id'].toString(),'asrsdqa')
            assert.equal(result['creator'].toString(),creator)
            assert.equal(result['project_name'], "First Campaign")
            assert.equal(result['project_description'], "First Campaign Description")
            assert.equal(result['goal'].toString(), web3.utils.toWei('0.3','Ether'))
            assert.equal(result['deadline'].toString(),deadline)
        })


        it("checks if the get project functionality is working", async() => {
            const project = await this.contract.getProject('asrsdqa')
            // console.log(project['1'])
            assert.equal(project['0'], 'asrsdqa')
            assert.equal(project['1'], 'First Campaign')
            assert.equal(project['2'], 'First Campaign Description')
            assert.equal(project['3'].toString(), 0)
            // assert.equal(project['0'], 'asrsdqa')
        })

        it("checks if the public projects functionality works well", async() => {
            var deadline = new Date('April 1, 2020 03:24:00');
            deadline=deadline.getTime()
            await this.contract.createCampaign(
                'dsdlmlckk',
                "Second Campaign",
                "Second Campaign Description",
                web3.utils.toWei('0.3','Ether'),
                deadline,
                {from:user2}
            )

            await this.contract.createCampaign(
                'nsdjlsdnkjl',
                "Third Campaign",
                "Third Campaign Description",
                web3.utils.toWei('0.4','Ether'),
                deadline,
                {from:user3}
            )

            await this.contract.createCampaign(
                "Fourth Campaign",
                'sdkjndus',
                "Fourth Campaign Description",
                web3.utils.toWei('0.10','Ether'),
                deadline,
                {from:user4}
            )
            

            // TESTING 
            const project2 =  await this.contract.getProject('dsdlmlckk')
                assert.equal(project2['0'], 'dsdlmlckk')
                assert.equal(project2['1'], 'Second Campaign')
                assert.equal(project2['2'], 'Second Campaign Description')
                assert.equal(project2['3'].toString(), 0)
                assert.equal(project2['7'], user2)
    
            
            const project3 = await this.contract.getProject("nsdjlsdnkjl")
                assert.equal(project3['0'], 'nsdjlsdnkjl')
                assert.equal(project3['1'], 'Third Campaign')
                assert.equal(project3['2'], 'Third Campaign Description')
                assert.equal(project3['3'].toString(), 0)
                assert.equal(project3['7'], user3)
                    
        })


    });
    

    describe('PHASE2', async() => {
            it("PROJECT CONTRACT:- checks if the contribute function is working", async() =>{

                var contribute_result = await this.contract.contribute("asrsdqa",{
                                                                        'from':user2,
                                                                        'value':web3.utils.toWei('0.1','Ether')
                                                                    })
                // var contribute_two =     await this.contract.contribute("asrsdqa",{
                //         'from':user3,
                //         'value':web3.utils.toWei('0.1','Ether')
                //     })

                //   var contribute_three =    await this.contract.contribute("asrsdqa",{
                //         'from':user4,
                //         'value':web3.utils.toWei('0.1','Ether')
                //     })
                // console.log(contribute_result)
                var project = await this.contract.getProject("asrsdqa")
                // console.log("Project:", project)
                // var current_state = await this.contract.state()
                const contributionCount = await this.contract.contributionCount()
                contribute_result = contribute_result.logs[0].args
                assert.equal(project['3'].toString(), web3.utils.toWei('0.1','Ether'))
                assert.equal(contributionCount.toString(), 1)
                // assert.equal(current_state.toString(),1)  // state should still be at Fundraising Since the Goal hasn't been met
                // should fails
                await this.contract.contribute({'from':creator}).should.be.rejected
                await this.contract.contribute({'from':creator, 'value':web3.utils.toWei('0','Ether')}).should.be.rejected
            
            
            
            


                let oldcreatorBalance
                var project = await this.contract.getProject("asrsdqa")
        
                oldcreatorBalance =await web3.eth.getBalance(project['3'])
                oldcreatorBalance =new web3.utils.BN(oldcreatorBalance)
                
                // console.log("OLD  BALANCE", oldcreatorBalance.toString())
        
                // var contribute_result = await this.contract.contribute("asrsdqa",{'from':user2,'value':web3.utils.toWei('0.2','Ether')})
                // // var current_state = await this.contract.state()

                // var result = await this.contract.checkIfFundingCompleteOrExpired(1)
                // assert.equal(current_state.toString(),2)  // state should still be at Successful Since the Goal has been met
        
        
        
        
                //     // // check the creator recieve funds
                    // let newcreatorBalance;
                    // newcreatorBalance =await web3.eth.getBalance(project['3'])
                    // newcreatorBalance =new web3.utils.BN(newcreatorBalance)
            
                //     // let price
                    // price = web3.utils.toWei('0.4','Ether')
                    // price = new web3.utils.BN(price)
                    
            
                    // const expectedBalance = oldcreatorBalance.add(price)
                    // assert.equal(newcreatorBalance.toString(), expectedBalance.toString())
                
        
            
            
            })
        
        })
})

const Migrations = artifacts.require("./Crowdsale.sol");
var startTime = Date.now()
var endTime = new Date("Mar 13 2020")
endTime = endTime.getTime()
module.exports = function(deployer) {
  deployer.deploy(Migrations,startTime,endTime, 2,5);
};

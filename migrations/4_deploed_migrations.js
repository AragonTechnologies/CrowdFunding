// 
const Migrations = artifacts.require("./ElessarToken.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};

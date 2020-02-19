const Migrations = artifacts.require("./Owned.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};

const Migrations = artifacts.require("./SimpleCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations, 1000);
};

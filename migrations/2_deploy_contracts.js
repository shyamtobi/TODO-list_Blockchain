const TODOlist = artifacts.require("./TODOlist.sol");

module.exports = function(deployer) {
    deployer.deploy(TODOlist);
}
// var ConvertLib = artifacts.require("./ConvertLib.sol");
// var MetaCoin = artifacts.require("./MetaCoin.sol");
var HelloWorld = artifacts.require("./HelloWorld");
var PiggyBank = artifacts.require("./PiggyBank");
var PipelineCoin = artifacts.require("./PipelineCoin");
var Settlement = artifacts.require("./Settlement");

module.exports = function(deployer) {
  // deployer.deploy(ConvertLib);
  // deployer.link(ConvertLib, MetaCoin);
  // deployer.link(ConvertLib, HelloWorld);
  // deployer.deploy(MetaCoin);
  deployer.deploy(HelloWorld);
  deployer.deploy(PiggyBank);
  deployer.deploy(PipelineCoin);
  deployer.deploy(Settlement);
};

require('babel-register');
require('babel-polyfill');
var HDWalletProvider = require('@truffle/hdwallet-provider')

var mnemonic = 'silk critic casino reopen snow loud final clump salt render consider pulp'
var publicNode = 'https://public-node.testnet.rsk.co:443'

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      // gasPrice: "30000000000",
      network_id: "*" // Match any network id
    },
    rsk: {
      provider: () =>
      new HDWalletProvider(mnemonic, publicNode),
      network_id: '*',
      // gas: 25000000,
      // gas:4600000,
      // gasPrice: 6800000
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      version:"^0.5.1",
      evmVersion: "byzantium"
    }
  }
}



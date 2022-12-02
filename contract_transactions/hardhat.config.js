
require('@nomiclabs/hardhat-waffle');  // its a plugin to build smart contract tests using waffle in hardhat

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/y7pTNcGghNrBK0dmfvNpVAJdKgWCPnKH',
      accounts: ['efcde5642b51296e48dbdeb56e4038b18df999e6df36a524b8753c8eff7a733f'],
    },
  },
};
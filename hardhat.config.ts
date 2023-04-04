import 'hardhat-typechain'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'

export default {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    mainnet: {
      url: `https://ethereum.rpc.thirdweb.com`,
    },
    ropsten: {
      url: `https://ropsten.rpc.thirdweb.com`,
    },
    rinkeby: {
      url: `https://rinkeby.rpc.thirdweb.com`,
    },
    goerli: {
      url: `https://goerli.rpc.thirdweb.com`,
    },
    kovan: {
      url: `https://kovan.rpc.thirdweb.com`,
    },
    arbitrumGoerli: {
      url: `https://arbitrum-goerli.rpc.thirdweb.com`,
    },
    arbitrum: {
      url: `https://arbitrum.rpc.thirdweb.com`,
    },
    optimismGoerli: {
      url: `https://optimism-goerli.rpc.thirdweb.com`,
    },
    optimism: {
      url: `https://optimism.rpc.thirdweb.com`,
    },
    mumbai: {
      url: `https://mumbai.rpc.thirdweb.com`,
    },
    polygon: {
      url: `https://polygon.rpc.thirdweb.com`,
    },
    bnb: {
      url: `https://binance.rpc.thirdweb.com`,
    },
    tbnb: {
      url: `https://binance-testnet.rpc.thirdweb.com`,
    },
    avalanche: {
      url: `https://avalanche.rpc.thirdweb.com`,
    },
    avalancheFuji: {
      url: `https://avalanche-fuji.rpc.thirdweb.com`,
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  solidity: {
    version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 500,
      },
      metadata: {
        // do not include the metadata hash, since this is machine dependent
        // and we want all generated code to be deterministic
        // https://docs.soliditylang.org/en/v0.7.6/metadata.html
        bytecodeHash: 'ipfs',
      },
    },
  },
}

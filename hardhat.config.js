// hardhat.config.js
require('dotenv').config();
require('@nomicfoundation/hardhat-toolbox'); // Replaces hardhat-ethers and hardhat-waffle

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: '0.8.11', // Or update to '0.8.17' for newer features
  defaultNetwork: 'volta',
  networks: {
    hardhat: {},
    volta: {
      url: API_URL || 'https://volta-rpc.energyweb.org', // Fallback URL if env var is missing
      accounts: PRIVATE_KEY ? [`0x${PRIVATE_KEY}`] : [], // Safety check for PRIVATE_KEY
    },
  },
};
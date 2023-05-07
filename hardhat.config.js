require('@nomicfoundation/hardhat-toolbox');
/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();
const url = process.env.Rpc;
const Key = process.env.privKey;
module.exports = {
  solidity: "0.8.18",
  networks:{
     sepolia :{
      url: `https://eth-sepolia.g.alchemy.com/v2/${url}` ,
      accounts : [Key],
     }
  },
  paths:{
    artifacts: './frontend/src/Contract'
  }
};

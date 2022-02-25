// https://eth-ropsten.alchemyapi.io/v2/dD7PpZlwDQyVAVVI1lf7te-sdss2uWDZ

require("@nomiclabs/hardhat-waffle");



module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/dD7PpZlwDQyVAVVI1lf7te-sdss2uWDZ',
      accounts: ['3882908ee4f98862084fce335777d954c58e4c23355610182ebb8324e1820e22'],
    } , 
  } ,
};

const ETHAddress = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6";

/****************** LOCAL HOST **********************/
// npx hardhat run scripts/deploy.js --network localhost
// const DAITokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
// const LINKTokenAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
// const USDCTokenAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
// const AddressToTokenMapAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
// const LendingConfigAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";
// const LendingHelperAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";
// const LendingPoolAddress = "0x0165878A594ca255338adfa4d48449f69242Eb8F";

/****************** SEPOLIA TESTNET **********************/

// npx hardhat run scripts/deploy-sepolia.js --network sepolia
const DAITokenAddress = "0x37fF3D06Cb4Bd3bA8a16b0bea32eF137cE32F54f";
const LINKTokenAddress = "0xF56B89AeB1A309Ffe433bEF88e06614DdD01A96A";
const USDCTokenAddress = "0xbDcaaE7d84E76c542B7FBAca8D48c15e15Eb4FeE";
const AddressToTokenMapAddress = "0x344a929bA928Baa11b895B5618CC06c6eFBD50A1";
const LendingConfigAddress = "0xFB06331F54e3AF91E5f5f20CEe0A0DCFAcE690bB";
const LendingHelperAddress = "0x9719117d55e6B0C1abBF1B85E900b76fd2eB82a2";
const LendingPoolAddress = "0x167Bd89ffa2f928aDA2786f5218816FfACf87807";

/********* PRICE FEED ADDRESSES ***********/
// Sepolia PF addresses
// https://docs.chain.link/data-feeds/price-feeds/addresses/#Sepolia%20Testnet
const ETH_USD_PF_ADDRESS = "0x694AA1769357215DE4FAC081bf1f309aDC325306";
const DAI_USD_PF_ADDRESS = "0x14866185B1962B63C3Ea9E03Bc1da838bab34C19";
const USDC_USD_PF_ADDRESS = "0xA2F78ab2355fe2f984D808B5CeE7FD0A93D5270E";
const LINK_USD_PF_ADDRESS = "0xc59E3633BAAC79493d908e63626716e204A45EdF";

const account1 = "0x464493368022aE17748753e2264436ca616c"; //replace the address
const account2 = "0x021edEFA52893eB8ad9A2d9d71011f629760"; //replace the address
const account3 = "0xc1f3e8c427fd4126A23A4a9721D97Fb11dDe"; //replace the address

const account4 = "0x315F6049DaB3D321aF7582157E7F43630863"; //replace the address
const account5 = "0x4B40f99E93A814be7fDe5FaFA5e9823E1372"; //replace the address
const account6 = "0x3f39Ae58Cb148ec1Ad90364819359Cfc34a0"; //replace the address

module.exports = {
  ETHAddress,
  DAITokenAddress,
  LINKTokenAddress,
  USDCTokenAddress,
  AddressToTokenMapAddress,
  LendingConfigAddress,
  LendingHelperAddress,
  LendingPoolAddress,
  ETH_USD_PF_ADDRESS,
  DAI_USD_PF_ADDRESS,
  USDC_USD_PF_ADDRESS,
  LINK_USD_PF_ADDRESS,
  account1,
  account2,
  account3,
  account4,
  account5,
  account6,
};

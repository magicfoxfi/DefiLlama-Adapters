const { staking } = require('../helper/staking')

const MCS_TOKEN_ADDRESS = '0xDa5aC8F284537d6eaB198801127a9d49b0CbDff5';
const USDC_TOKEN_ADDRESS = '0xfa9343c3897324496a05fc75abed6bac29f8a40f';
const STAKING_CONTRACT_ADDRESS  = '0x258FC83E130Bc708541c33900bAEDE83242646db';

module.exports = {
  kava: {
    tvl: staking(STAKING_CONTRACT_ADDRESS, USDC_TOKEN_ADDRESS),
    staking: staking(STAKING_CONTRACT_ADDRESS, MCS_TOKEN_ADDRESS),
  }
}
import EVMRevert from './helper/EVMRevert';

const Controller = artifacts.require('Controller');
const BigNumber = web3.BigNumber;

require('chai')
  .use(require("chai-as-promised"))
  .use(require("chai-bignumber")(BigNumber))
  .should();


contract('Sweeper', async (accounts) => {
  const owner = accounts[0];
  console.log(owner);

  it('test sample', async () => {
    console.log('test');
  });
});

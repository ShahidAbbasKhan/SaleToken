const { expect } = require("chai");
  
describe("SaleToken", function () {
  let erc20;
  beforeEach(async function(){
      const [owner, acc1, acc2, acc3] = await ethers.getSigners();
      const ERC20 = await ethers.getContractFactory("ERC20");
       erc20 = await ERC20.deploy();
       console.log(`Token is Deployed Address:${erc20.address}`)

       const TokenSale = await ethers.getContractFactory("TokenSale");
       erc20 = await TokenSale.deploy(erc20.address);
       console.log(`Token is Deployed Address:${erc20.address}`)

  })
  describe("Purchase Token", function(){
      it("Its purchase token in Phase 1", async function(){
          let newOwner = tokenSale.address;
          await erc20.transferOwnership(newOwner);
          
          let oneTokenAmount = 5000000000000000;
          await tokenSale.buyToken({value:oneTokenAmount});

      })
  })
});

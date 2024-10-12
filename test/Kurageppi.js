import { expect } from "chai";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { ethers } from "hardhat";

describe("Kurageppi contract", function () {
  async function deploySolFixture() {
    const solContract = await ethers.deployContract("Kurageppi");
    const [owner, addr1, addr2] = await ethers.getSigners();
    // const mainContract = await sol.deploy();
    return { solContract, owner, addr1,addr2 };
  }

  it("掛け算のテスト", async function () {
    const { solContract, owner } = await loadFixture(deploySolFixture);
    let result = await solContract.kakezan(2,2);
    console.log(result);
    expect(result).to.equal(4);

    result = await solContract.kakezan(3, 11);
    console.log(result);
    expect(result).to.equal(33);

    await expect(solContract.kakezan(1111, 11)).to.be.revertedWith("num length is over!(3 num length)");

  })

});
import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import { expect } from "chai";
import hre from "hardhat";
import { parseAbiItem } from "viem";
import { getAddress, parseGwei } from "viem";

describe("Songcrew", function () {
  async function deploy() {
    const [address1, address2] = await hre.viem.getWalletClients();

    const songcrew = await hre.viem.deployContract("Songcrew");

    const publicClient = await hre.viem.getPublicClient();

    return {
      songcrew,
      address1,
      address2,
      publicClient,
    };
  }

  describe("Create Project", function () {
    it("Should not create a project with 0 number of copies", async function () {
      const { songcrew, address1 } = await loadFixture(deploy);

      await expect(songcrew.write.createProject(["Artist", "ID123", "Title", "Genre", "Description", 1n, 0n,], { account: address1.account.address })).to.be.rejectedWith("ERC1155: number of copies must be greater than 0");
    });

    it("Should not create a project with 100 number of copies", async function () {
      const { songcrew, address1 } = await loadFixture(deploy);

      await expect(songcrew.write.createProject(["Artist", "ID123", "Title", "Genre", "Description", 1n, 100n,], { account: address1.account.address })).to.be.rejectedWith("ERC1155: number of copies must be less than or equal to 70");
    });

    it("Should not create a project with 0 price project", async function () {
      const { songcrew, address1 } = await loadFixture(deploy);

      await expect(songcrew.write.createProject(["Artist", "ID123", "Title", "Genre", "Description", 0n, 10n,], { account: address1.account.address })).to.be.rejectedWith("ERC1155: price of the project must be greater than 0");
    });

    it("Should not create a project with 0 price project", async function () {
      const { songcrew, address1 } = await loadFixture(deploy);

      await expect(songcrew.write.createProject(["Artist", "ID123", "Title", "Genre", "Description", 20n, 10n,], { account: address1.account.address })).to.be.rejectedWith("ERC1155: price of the project must be less than or equal to 16");
    });

    it("Should create a project", async function () {
      const { songcrew, address1 } = await loadFixture(deploy);

      await expect(songcrew.write.createProject(["Artist", "ID123", "Title", "Genre", "Description", 10n, 10n,], { account: address1.account.address })).to.be.fulfilled;
      songcrew.read.getOneProject([0n]).then((project) => {
        expect(project.artist).to.equal("Artist");
        expect(project.id).to.equal("ID123");
        expect(project.title).to.equal("Title");
        expect(project.genre).to.equal("Genre");
        expect(project.description).to.equal("Description");
        expect(project.priceProject).to.equal(10n);
        expect(project.numberOfCopies).to.equal(10n);
        expect(project.priceNft).to.equal(1n);
      });
    });
  });

  describe("Buy NFT", function () {
    it("Should not buy a NFT does not exist", async function () {
      const { songcrew, address1, address2 } = await loadFixture(deploy);

      await songcrew.write.createProject(["Artist", "ID123", "Title", "Genre", "Description", 10n, 10n,], { account: address1.account.address });
      await expect(songcrew.write.buyNft([1n, 1n], { account: address2.account.address })).to.be.rejectedWith("ERC1155: project does not exist");
    });

    it("Should not buy a NFT with 0 amount", async function () {
      const { songcrew, address1, address2 } = await loadFixture(deploy);

      await songcrew.write.createProject(["Artist", "ID123", "Title", "Genre", "Description", 10n, 10n,], { account: address1.account.address });
      await expect(songcrew.write.buyNft([0n, 0n], { account: address2.account.address })).to.be.rejectedWith("ERC1155: amount must be greater than 0");
    });

    it("Should not buy a NFT with too much amount", async function () {
      const { songcrew, address1, address2 } = await loadFixture(deploy);

      await songcrew.write.createProject(["Artist", "ID123", "Title", "Genre", "Description", 10n, 10n,], { account: address1.account.address });
      await expect(songcrew.write.buyNft([0n, 11n], { account: address2.account.address })).to.be.rejectedWith("ERC1155: amount must be less than or equal to the number of copies");
    });
  });
});

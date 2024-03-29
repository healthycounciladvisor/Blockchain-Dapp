const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function() {
    it("Should return the new greeting once it's changed", async function() {
        const Greeter = await ethers.getContractFactory("Greeter");
        const greeter = await Greeter.deploy("Hello, world!");

        await greeter.deployed();
        expect(await greeter.greet()).to.equal("Hello, world!");

        await greeter.setGreeting("Welcome to hardhat");
        expect(await greeter.greet()).to.equal("Welcome to hardhat");
    });
});
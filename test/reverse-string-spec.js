const { expect } = require("chai");
const reverseString = require("../problems/reverse-string");
describe("Reverse string", function () {
  it("should Reverse the order of a string", function () {
    expect(reverseString("fun")).to.equal("nuf");
  });

  it("Should throw a Type error when a non-string is used as an argument", function () {
    expect(reverseString).to.throws(TypeError);
  });
})
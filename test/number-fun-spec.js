const { expect } = require("chai");
const { returnsThree, reciprocal } = require("../problems/number-fun");
describe("The number-fun module", () => {
  context("When it has a valid number", () => {
    it("should return the reciprocal of the input number", () => {
      const two = 2;
      const five = 5;
      const oneThousand = 1000;
      const oneMillion = 1000000
      expect(reciprocal(two)).to.equal(.5);
      expect(reciprocal(five)).to.equal(.2);
      expect(reciprocal(oneThousand)).to.equal(1 / 1000);
      expect(reciprocal(oneMillion)).to.equal(1 / 1000000);
    });
  });
  context("When it does not have a valid number", () => {
    it("should return a rangeError", () => {
      const zero = 0;
      expect(() => { reciprocal(zero) }).to.throw(RangeError);

    });
    it("should return a TypeError when a non-number is used", () => {
      expect(() => { reciprocal(null) }).to.throw(TypeError);
    });
  });
});
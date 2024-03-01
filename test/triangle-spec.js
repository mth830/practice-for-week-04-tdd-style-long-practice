const { expect } = require("chai");
const { Triangle, Isoceles, Scalene, RightTriangle, Equilateral } = require("../problems/triangle");
describe("Triangle class", () => {
  context("A new Triangle", () => {
    let triangle = new Triangle(2, 2, 3);
    it("Should have 3 sides initialized with the constructor", () => {

      expect(triangle).to.have.property("side1").to.equal(2)
      expect(triangle).to.have.property("side2").to.equal(2)
      expect(triangle).to.have.property("side3").to.equal(3)
    });
    it("Should have a perimeter function that adds up the sides", () => {
      expect(triangle.getPerimeter()).to.equal(7);
    });
    it("Should have a hasValidSideLengths function that returns true for valid Triangles", () => {
      expect(triangle.hasValidSideLengths()).to.equal(true);
    });
    it("Should have a hasValidSideLengths function that returns false for invalid Triangles", () => {
      let invalidTriangle = new Triangle(1, 1, 2);
      let invalidTriangle2 = new Triangle(1000, 1000, 2000);
      expect(invalidTriangle.hasValidSideLengths()).to.equal(false);
      expect(invalidTriangle2.hasValidSideLengths()).to.equal(false);
    });
    it("Should have a validate function that adds an isValid Property equal to true when side lengths are valid", () => {
      let validTriangle = new Triangle(1, 2, 2);
      validTriangle.validate();
      expect(validTriangle).has.property("isValid").equal(true)
    });
    it("Should have a validate function that adds an isValid Property equal to false when side lengths are not valid", () => {
      let invalidTriangle = new Triangle(1, 1, 2);
      invalidTriangle.validate();
      expect(invalidTriangle).has.property("isValid").equal(false);
    });
  });
  context("getValidTriangles() ", () => {
    let validTriangle = new Triangle(2, 2, 3);
    let validTriangle2 = new Triangle(4, 5, 6);
    let validTriangle3 = new Triangle(3, 9, 7);
    let invalidTriangle = new Triangle(1, 1, 2);
    let invalidTriangle2 = new Triangle(3, 3, 6);
    let invalidTriangle3 = new Triangle(9, 9, 22);
    let allTriangles = [validTriangle, validTriangle2, validTriangle3, invalidTriangle, invalidTriangle2, invalidTriangle3];
    it("should take a list of triangles and return only the valid triangles", () => {
      let validTriangles = Triangle.getValidTriangles(allTriangles);
      expect(validTriangles).to.include.members([validTriangle, validTriangle2, validTriangle3]);
      expect(validTriangles.length).to.equal(3);
    });
  });
});



describe("Scalene class", () => {
  context("constructor", () => {
    let scalene = new Scalene(15, 32, 34);
    it("Should be derived from the parent class Triangle", () => {
      expect(scalene).to.be.an.instanceOf(Triangle);
    });
    it("Should have 3 properties one for each side", () => {
      expect(scalene).to.include({ side1: 15, side2: 32, side3: 34 });
    });
  });

  context("has validSideLengths should be inherited from Triangle", () => {
    let validscalene = new Scalene(15, 32, 34);
    it("should return true when valid side lengths are provided", () => {
      expect(validscalene.hasValidSideLengths()).to.equal(true);
    });
    it("should return false when valid side lengths are not provided", () => {
      let invalidScalene = new Scalene(15, 15, 30);
      expect(invalidScalene.hasValidSideLengths()).to.equal(false);
    });
  });

  context("isScalene should check if the triangle has 3 different side lengths", () => {


    it("Should return true when all 3 sides are of different lengths", () => {
      let validScalene = new Scalene(15, 34, 32);
      expect(validScalene.isScalene()).to.equal(true);
    });
    it("Should return false when all 3 sides are not of different lengths", () => {
      let invalidScalene = new Scalene(15, 15, 15);
      expect(invalidScalene.isScalene()).to.equal(false);
    });
  });

  context("validate method", () => {
    let validScalene = new Scalene(15, 34, 32);
    let invalidScalene = new Scalene(15, 15, 15);
    it("Should set isValidScalene property equal to true when a valid Scalene is used", () => {
      validScalene.validate();
      expect(validScalene.isValidScalene).to.equal(true);
      expect(validScalene).to.not.have.property("isValid");
    });
    it("Should set isValid property equal to false when an invalid Scalene is used", () => {
      invalidScalene.validate();
      expect(invalidScalene.isValidScalene).to.equal(false);
      expect(invalidScalene).to.not.have.property("isValid");
    });
  });
});


describe("Isoceles class", () => {
  let isoceles = new Isoceles(32, 32, 34);
  context("constructor", () => {

    it("Should be derived from the parent class Triangle", () => {
      expect(isoceles).to.be.an.instanceOf(Triangle);
    });
    it("Should have 3 properties one for each side", () => {
      expect(isoceles).to.have.property("side1").that.equals(32);
      expect(isoceles).to.have.property("side2").that.equals(32);
      expect(isoceles).to.have.property("side3").that.equals(34);
    });
  });
  context("has validSideLengths should be inherited from Triangle", () => {
    it("should return true when valid side lengths are provided", () => {
      expect(isoceles.hasValidSideLengths()).to.equal(true);
    });
    it("should return false when valid side lengths are not provided", () => {
      let invalidIsoceles = new Isoceles(90, 15, 30);
      expect(invalidIsoceles.hasValidSideLengths()).to.equal(false);
    });
  });
  context("isIsoceles should check if the triangle has 2 of the same lengths", () => {
    let validIsoceles = new Isoceles(32, 34, 32);
    let invalidIsoceles = new Isoceles(15, 16, 17);
    it("Should return true when all 2 of the sides are of equal length", () => {
      expect(validIsoceles.isIsoceles()).to.equal(true);
    });
    it("Should return false when all 3 lengths are not the same", () => {
      expect(invalidIsoceles.isIsoceles()).to.equal(false);
    });
  });
  context("validate method", () => {
    let validIsoceles = new Isoceles(32, 34, 32);
    let invalidIsoceles = new Isoceles(15, 16, 17);
    it("Should set isValidIsoceles property equal to true when a valid Isoceles is used", () => {
      validIsoceles.validate();
      expect(validIsoceles).has.property("isValidIsoceles").to.equal(true);
      expect(validIsoceles).to.not.have.property("isValid");
    });
    it("Should set isValid property equal to false when an invalid Isoceles is used", () => {
      invalidIsoceles.validate();
      expect(invalidIsoceles).has.property("isValidIsoceles").to.equal(false);
      expect(invalidIsoceles).to.not.have.property("isValid");
    });
  });
});


describe("RightTriangle class", () => {
  let right = new RightTriangle(4, 3, 5);
  context("constructor", () => {

    it("Should be derived from the parent class Triangle", () => {
      expect(right).to.be.an.instanceOf(Triangle);
    });
    it("Should have 3 properties one for each side", () => {
      expect(right).to.have.property("side1").that.equals(4);
      expect(right).to.have.property("side2").that.equals(3);
      expect(right).to.have.property("side3").that.equals(5);
    });
  });
  context("has validSideLengths should be inherited from Triangle", () => {
    it("should return true when valid side lengths are provided", () => {
      expect(right.hasValidSideLengths()).to.equal(true);
    });
    it("should return false when valid side lengths are not provided", () => {
      let invalidRightTriangle = new RightTriangle(90, 15, 30);
      expect(invalidRightTriangle.hasValidSideLengths()).to.equal(false);
    });
  });
  context("isRightTriangle should check if the  has side a b and c where a**2 + b**2 = c**2", () => {
    let validRightTriangle = new RightTriangle(3, 4, 5);
    let validRightTriangle2 = new RightTriangle(7, 24, 25);
    let invalidRightTriangle = new RightTriangle(24, 24, 25);
    it("Should return true when the side condition is met", () => {
      expect(validRightTriangle.isRightTriangle()).to.equal(true);
      expect(validRightTriangle2.isRightTriangle()).to.equal(true);
    });
    it("Should return false when the side condition is not met", () => {
      expect(invalidRightTriangle.isRightTriangle()).to.equal(false);
    });
  });
  context("validate method", () => {
    let validRightTriangle = new RightTriangle(7, 24, 25);
    let invalidRightTriangle = new RightTriangle(15, 16, 17);
    it("Should set isValidRightTriangle property equal to true when a valid RightTriangle is used", () => {
      validRightTriangle.validate();
      expect(validRightTriangle).has.property("isValidRightTriangle").to.equal(true);
      expect(validRightTriangle).to.not.have.property("isValid");
    });
    it("Should set isValid property equal to false when an invalid RightTriangle is used", () => {
      invalidRightTriangle.validate();
      expect(invalidRightTriangle).has.property("isValidRightTriangle").to.equal(false);
      expect(invalidRightTriangle).to.not.have.property("isValid");
    });
  });
});

describe("Equilateral class", () => {
  let equilateral = new Equilateral(4, 4, 4);
  context("constructor", () => {

    it("Should be derived from the parent class Triangle", () => {
      expect(equilateral).to.be.an.instanceOf(Triangle);
    });
    it("Should have 3 properties one for each side", () => {
      expect(equilateral).to.have.property("side1").that.equals(4);
      expect(equilateral).to.have.property("side2").that.equals(4);
      expect(equilateral).to.have.property("side3").that.equals(4);
    });
  });
  context("has validSideLengths should be inherited from Triangle", () => {
    it("should return true when valid side lengths are provided", () => {
      expect(equilateral.hasValidSideLengths()).to.equal(true);
    });
    it("should return false when valid side lengths are not provided", () => {
      let invalidEquilateral = new Equilateral(90, 15, 30);
      expect(invalidEquilateral.hasValidSideLengths()).to.equal(false);
    });
  });
  context("isEquilateral should check if the  has side a b and c where a**2 + b**2 = c**2", () => {
    let validEquilateral = new Equilateral(4, 4, 4);
    let validEquilateral2 = new Equilateral(9, 9, 9);
    let invalidEquilateral = new Equilateral(24, 24, 25);
    it("Should return true when the side condition is met", () => {
      expect(validEquilateral.isEquilateral()).to.equal(true);
      expect(validEquilateral2.isEquilateral()).to.equal(true);
    });
    it("Should return false when the side condition is not met", () => {
      expect(invalidEquilateral.isEquilateral()).to.equal(false);
    });
  });
  context("validate method", () => {
    let validEquilateral = new Equilateral(4, 4, 4);
    let invalidEquilateral = new Equilateral(15, 16, 17);
    it("Should set isValidEquilateral property equal to true when a valid Equilateral is used", () => {
      validEquilateral.validate();
      expect(validEquilateral).has.property("isValidEquilateral").to.equal(true);
      expect(validEquilateral).to.not.have.property("isValid");
    });
    it("Should set isValid property equal to false when an invalid Equilateral is used", () => {
      invalidEquilateral.validate();
      expect(invalidEquilateral).has.property("isValidEquilateral").to.equal(false);
      expect(invalidEquilateral).to.not.have.property("isValid");
    });
  });
});
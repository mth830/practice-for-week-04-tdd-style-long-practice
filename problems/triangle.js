class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }
  getPerimeter() {
    return this.side1 + this.side2 + this.side3;
  }
  hasValidSideLengths() {
    let sides = [this.side1, this.side2, this.side3];
    let largestSide = Math.max(...sides);
    sides.splice(sides.indexOf(largestSide), 1);
    let smallerSidesSum = sides[0] + sides[1];
    return smallerSidesSum > largestSide;
  }
  validate() {
    if (this.hasValidSideLengths()) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }
  static getValidTriangles(triangleArray) {
    triangleArray.forEach(triangle => { triangle.validate() });
    return triangleArray.filter(triangle => triangle.isValid)
  }


}
class Scalene extends Triangle {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
  }
  hasValidSideLengths() {

    let validTriangle = super.hasValidSideLengths();
    return validTriangle;
  }
  isScalene() {
    let sides = [this.side1, this.side2, this.side3];
    let allDifferentSideLengths = new Set(sides).size === 3;
    return allDifferentSideLengths;
  }
  validate() {
    let validSides = this.hasValidSideLengths();
    this.isValidScalene = this.isScalene() && validSides;
  }

}
class Isoceles extends Triangle {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
  }
  isIsoceles() {
    let sides = [this.side1, this.side2, this.side3];
    let threeDifferentSides = new Set(sides).size === 3;
    return !threeDifferentSides;
  }
  validate() {
    let validSides = this.hasValidSideLengths();
    this.isValidIsoceles = this.isIsoceles() && validSides;
  }

}
class RightTriangle extends Triangle {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
  }
  isRightTriangle() {
    let sides = [this.side1, this.side2, this.side3];
    let largestSide = Math.max(...sides);
    let largestSideSquared = largestSide ** 2
    sides.splice(sides.indexOf(largestSide), 1);
    let smallerSidesSum = sides[0] ** 2 + sides[1] ** 2;
    return smallerSidesSum === largestSideSquared;
  }
  validate() {
    let validSides = this.hasValidSideLengths();
    this.isValidRightTriangle = this.isRightTriangle() && validSides;
  }
}
class Equilateral extends Triangle {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
  }
  isEquilateral() {
    return this.side1 === this.side2 && this.side2 === this.side3;
  }
  validate() {
    let validSides = this.hasValidSideLengths();
    this.isValidEquilateral = this.isEquilateral() && validSides;
  }
}
module.exports = { Triangle, Isoceles, Scalene, RightTriangle, Equilateral }
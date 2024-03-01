function returnsThree() {
  // Your code here
}

function reciprocal(n) {
  if (typeof n !== "number") {
    throw new TypeError("reciprocal only accepts numbers");
  } else if (n < 1 || n > 1000000) {
    throw new RangeError("reciprocal only accepts numbers between 1 and 1,000,000");
  } else {
    return 1 / n;
  }
}

module.exports = {
  returnsThree,
  reciprocal
};
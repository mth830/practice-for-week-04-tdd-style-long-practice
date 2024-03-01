module.exports = function reverseString(string) {
  if (typeof string !== "string") {
    throw new TypeError("the input was not a valid string");
  } else {
    return string.split("").reverse().join("");
  }
};

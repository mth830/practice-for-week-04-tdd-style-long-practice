function myMap(inputArray, callback) {
  let newArr =[];
  inputArray.forEach(elem=>newArr.push(callback(elem)));
  return newArr;
}

module.exports = myMap;
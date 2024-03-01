const myMap = require("../problems/my-map");
const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;
chai.use(spies);




describe("Basic functionality", () => {
  let arr;
  beforeEach(() => arr = [1, 2, 3, 4, 5])
  it("Should return an empty array when run on an empty array", () => {
    let empty = [];
    expect(myMap(empty, x => x)).to.have.members([]);
  });
  it("Should return a new array with every element operated on my callback", () => {
    expect(myMap(arr, x => x ** 2)).to.have.members([1, 4, 9, 16, 25]);
    expect(myMap(arr, x => x + 1)).to.have.members([2, 3, 4, 5, 6]);
  });
  it("Should return an array of objects when run with an array of objects", () => {
    let objects = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }];
    expect(myMap(objects, (x => x.a + 1))).to.have.members([2, 3, 4, 5]);
  });
  context("Implementation details", () => {
    let arr;
    let callback;
    beforeEach(() => {
      arr = [1, 2, 3, 4, 5];
      callback = function (x) {
        return x * 5;
      }
    })

    it("shouldn't call the array.map function", () => {
      let spy = chai.spy.on(arr, "map");
      let result = myMap(arr, callback);
      expect(spy).to.have.been.called.exactly(0);
      expect(result).to.have.members([5, 10, 15, 20, 25]);
    });
    it("should call the callback once per item", () => {
      let callback = function (x) {
        return x * 5;
      }
      function test(x) {
        return x * 5;
      }
      let spy = chai.spy.on(callback)
      myMap(arr, spy);
      expect(spy).to.have.been.called.exactly(arr.length);

    });
    it("Should not mutate the original array", () => {
      myMap(arr, callback);
      expect(arr).to.have.same.members([1, 2, 3, 4, 5]);
    });
  })
})
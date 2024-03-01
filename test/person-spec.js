const { expect } = require("chai");
const Person = require("../problems/person");

describe("Person", () => {
  context("When a new Person is created", () => {
    let john = new Person("John", 68);
    it("Should  be filled with a name  and age", () => {
      expect(john).to.have.property("age").to.equal(68)
      expect(john).to.have.property("name").to.equal("John")
    })
    it("Should have a say name function returning {name} says hello", () => {
      expect(john.sayHello()).to.equal("John says hello");
    })
  })
  context("When there are two people", () => {
    let mai = new Person("Mai", 23);
    let erin = new Person("Erin", 24);
    it("Should allow one person to vist another", () => {
      expect(mai.visit(erin)).to.equal("Mai visited Erin");
    });
    it("Should allow the other to visit the first", () => {
      expect(mai.switchVisit(erin)).to.equal("Erin visited Mai");
    })
  })
  context("The update function ", () => {
    let coolPerson = new Person("mai", 23);
    beforeEach(() => {
      let coolPerson = new Person("mai", 23); // Person { name: 'mai', age: 32 }
    });


    it("Should handle non object arguments with a typeError", () => {
      expect(() => { coolPerson.update(null) }).to.throw(TypeError);
      expect(() => { coolPerson.update(undefined) }).to.throw(TypeError);
    });
    it("Should handle valid Arguments", () => {
      coolPerson.update({ name: "lulu", age: 57 })
      expect(coolPerson).property("name").to.equal("lulu");
      expect(coolPerson).property("age").to.equal(57);
    });
    it("Should handle non object arguments with a typeError", () => {
      expect(() => coolPerson.update({ lulu: "lulu", fifty: 50 })).to.throw(TypeError);
    });
  })
  context("The tryUpdate method", () => {
    let coolPerson;
    beforeEach(() => {
      coolPerson = new Person("mai", 23); // Person { name: 'mai', age: 32 }
    });
    it("Should return true when an update was successful", () => {
      expect(coolPerson.tryUpdate({ name: "Roberto", age: 89 })).to.equal(true);
    });
    it("Should return false when an update was unsuccessful", () => {
      expect(coolPerson.tryUpdate({ sdf: "asdf" })).to.equal(false);
      expect(coolPerson.tryUpdate({ sdf: "asdf" })).to.equal(false);
    });
  });
  context("The greetAll method", () => {
    let person1 = new Person("Bob", 32);
    let person2 = new Person("Sally", 33);
    let person3 = new Person("Harry", 35);
    let people = [person1, person2, person3];
    it("Should return an array with all the names greeted", () => {
      expect(Person.greetAll(people)).to.deep.equals(people.map(person => person.sayHello()));
    })
  })
});
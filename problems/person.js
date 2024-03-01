class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello = () => `${this.name} says hello`;
  visit = (visitee) => `${this.name} visited ${visitee.name}`;
  switchVisit = (visitee) => visitee.visit(this);
  update(personObj) {
    if (!personObj) {
      throw new TypeError("Invalid or missing Object");
    } else if (personObj["name"] === undefined || personObj["age"] === undefined) {
      throw new TypeError("Object missing properties name and/or age");
    } else {
      this.age = personObj["age"];
      this.name = personObj["name"];
    }
  }
  tryUpdate(personObj) {
    try {
      this.update(personObj);
      return true;
    } catch (error) {
      return false;
    }
  }
  static greetAll(people) {
    return people.map(person => person.sayHello());
  }


}
let coolPerson = new Person("mai", 23); // Person { name: 'mai', age: 32 }
console.log(coolPerson.update({ name: "lulu", age: 57 }))
module.exports = Person;
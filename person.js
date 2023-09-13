class Person {
 #ID () {
  Math.floor(Math.random());
 }

 get ID () {
  return this.#ID;
 }
}

const me = new Person(Person.Id()); // Not sure exactly what to do here

module.exports = Person;


'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function () {
  //     console.log(2025 - this.birthYear);
  // };
};

const lebron = new Person('Lebron', 1984);
console.log(lebron);

// 1. A new empty object {} is created.
// 2. function is called. this keyword is this new empty object. this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const kobe = new Person('Kobe', 1978);
const shaq = new Person('Shaq', 1972);
console.log(kobe, shaq);

console.log(lebron instanceof Person);

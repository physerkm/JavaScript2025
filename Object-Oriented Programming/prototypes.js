'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const lebron = new Person('Lebron', 1984);
const kobe = new Person('Kobe', 1978);
const shaq = new Person('Shaq', 1972);

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

lebron.calcAge();
kobe.calcAge();
shaq.calcAge();

console.log(lebron.__proto__);
console.log(lebron.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(lebron));
console.log(Person.prototype.isPrototypeOf(kobe));
console.log(Person.prototype.isPrototypeOf(shaq));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(lebron.species, kobe.species);

console.log(lebron.hasOwnProperty('firstName'));
console.log(lebron.hasOwnProperty('species'));

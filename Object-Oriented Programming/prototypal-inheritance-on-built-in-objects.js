'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const lebron = new Person('Lebron', 1984);
const kobe = new Person('Kobe', 1978);
const shaq = new Person('Shaq', 1972);

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

Person.prototype.species = 'Homo Sapiens';

console.log(lebron.__proto__);
// Object.prototype (top of prototype chain)
console.log(lebron.__proto__.__proto__);
console.log(lebron.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);

const arr = [1, 2, 2, 3, 2, 4, 4];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
console.log((x) => x + 1);

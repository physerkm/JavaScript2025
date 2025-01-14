'use strict';

const Person1 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const Person1Proto = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },
};

const lebron = Object.create(Person1Proto);
console.log(lebron);
lebron.name = 'Lebron';
lebron.birthYear = 1984;
lebron.calcAge();

console.log(lebron.__proto__);
console.log(lebron.__proto__ === Person1Proto);

//////////////////////////////////////////////////
/////////////////////////////////////////////////

const Person2 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const Person2Proto = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const kobe = Object.create(Person2Proto);
kobe.init('Kobe', 1978);
kobe.calcAge();

'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const lebron = new Student('Lebron', 1984, 'Basketball');
lebron.introduce();
lebron.calcAge();

console.log(lebron.__proto__);
console.log(lebron.__proto__.__proto__);

console.log(lebron instanceof Student);
console.log(lebron instanceof Person);
console.log(lebron instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

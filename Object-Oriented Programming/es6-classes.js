// Class Expression
// const PersonCl = class {}

// Class Declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2025 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const lebron = new PersonCl('Lebron', 1984);
console.log(lebron);
lebron.calcAge();

console.log(lebron.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

lebron.greet();

// 1. Classes aren't hoisted even if they are class declarations.
// 2. Classes are first-class citizens.
// 3. Classes are executed in strict mode.

'use strict';

class PersonBasketball {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2025 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2025 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const lebron = new PersonBasketball('Lebron James', 1984);
console.log(lebron);
console.log(lebron.age);

lebron.greet();

const kobe = new PersonBasketball('Kobe Bryant', 1978);

const account = {
  owner: 'Lebron',
  movements: [350, 200, 500, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 75;
console.log(account.movements);

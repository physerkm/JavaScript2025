'use strict';

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Lebron', 'USD', 1200000);

// acc1.movements.push(350);
// acc1.movements.push(-190);
acc1.deposit(35000);
acc1.withdraw(19000);
acc1.requestLoan(78000);
acc1.approveLoan(78000);

console.log(acc1);
console.log(acc1.pin);
console.log(acc1.movements);

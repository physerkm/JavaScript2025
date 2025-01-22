"use strict";

class Account {
  locale = navigator.language;
  bank = "Bankist";
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface (API)
  getMovements() {
    return this.#movements;
    // Not chainable
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  #approveLoan(val) {
    // Fake method
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }

  static test() {
    console.log("TEST");
  }
}

const acc1 = new Account("Lebron", "USD", 1200000);

acc1
  .deposit(34000)
  .withdraw(40000)
  .deposit(18000)
  .requestLoan(36000)
  .withdraw(17000)
  .getMovements();

console.log(acc1);
// console.log(movements);

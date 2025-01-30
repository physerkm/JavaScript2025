'use strict';

const turkishairlines = {
  airline: 'Turkish Airlines',
  iataCode: 'TK',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const pegasus = {
  airline: 'Pegasus',
  iataCode: 'PC',
  bookings: [],
};

const book = turkishairlines.book;

const ajet = {
  airline: 'AJET',
  iataCode: 'VF',
  bookings: [],
};

const bookTHY = book.bind(turkishairlines);
const bookPGS = book.bind(pegasus);
const bookAJ = book.bind(ajet);

bookPGS(2358, 'Isaac Newton');

const bookPGS2358 = book.bind(pegasus, 2358);
bookPGS2358('Niels Bohr');
bookPGS2358('Michael Faraday');

// With Event Listeners
turkishairlines.planes = 300;
turkishairlines.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// turkishairlines.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', turkishairlines.buyPlane.bind(turkishairlines));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

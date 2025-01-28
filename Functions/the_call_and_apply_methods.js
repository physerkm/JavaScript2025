'use strict';

const turkishairlines = {
  airline: 'Turkish Airlines',
  iataCode: 'IST',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

turkishairlines.book(235, 'Kurt Gödel');
turkishairlines.book(635, 'Albert Einstein');
console.log(turkishairlines);

const pegasus = {
  airline: 'Pegasus',
  iataCode: 'SAW',
  bookings: [],
};

const book = turkishairlines.book;

// Does NOT work
// book(23, 'Werner Heisenberg');

// Call method
book.call(pegasus, 23, 'Werner Heisenberg');
console.log(pegasus);

book.call(turkishairlines, 239, 'Richard Feynman');
console.log(turkishairlines);

const ajet = {
  airline: 'AJET',
  iataCode: 'ESB',
  bookings: [],
};

book.call(ajet, 583, 'Richard Feynman');
console.log(ajet);

// Apply method
const flightData = [583, 'Stephen Hawking'];
book.apply(ajet, flightData); // It is the same as ==> book.call(ajet, ...flightData);
console.log(ajet);

book.call(ajet, ...flightData);

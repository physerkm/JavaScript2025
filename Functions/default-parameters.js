"use strict";

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 50,
  price = 200 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 50;
  // price = price || 200;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 100, 21000);
createBooking("LH123", 100);
createBooking("LH123", 250);
createBooking("LH123", undefined, 12000);

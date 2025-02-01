"use strict";

const runOnce = function () {
  console.log("This will never run again!");
};
runOnce();

// Immediately Invoked Function Expressions (IIFE)
(function () {
  console.log("This will never run again");
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log("This will ALSO never run again"))();

{
  const isPrivateAgain = 23;
  var notPrivate = 46;
}

// console.log(isPrivate);
console.log(notPrivate);

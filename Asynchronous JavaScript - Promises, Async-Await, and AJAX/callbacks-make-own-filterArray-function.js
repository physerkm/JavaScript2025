"use strict";

function handleClick() {
  fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

document.getElementById("new-deck").addEventListener("click", handleClick);

const people = [
  { name: "Jack", hasPet: true },
  { name: "Jill", hasPet: false },
  { name: "Alice", hasPet: true },
  { name: "Bob", hasPet: false },
];

function filterArray(array, callback) {
  const resultingArray = [];
  for (let item of array) {
    const shouldBeIncluded = callback(item);
    if (shouldBeIncluded) {
      resultingArray.push(item);
    }
  }
  return resultingArray;
}

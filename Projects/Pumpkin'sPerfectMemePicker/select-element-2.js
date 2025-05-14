"use strict";

document.addEventListener("submit", logChosenSuperpower);

function logChosenSuperpower(e) {
  e.preventDefault();
  const selected = document.querySelector('input[name="superpower"]:checked');
  if (selected) {
    console.log(selected.value);
  } else {
    console.log("No superpower selected.");
  }
}

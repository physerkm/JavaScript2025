"use strict";

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();

// Why did this work?
// In other words, how does this callback function here get access to the header variable?
// The explanation is the closure.
// In this particular example, the closure is necessary or it's useful
// because by the time this callback is executed

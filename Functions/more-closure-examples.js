let f;

const g = function () {
  const a = 30;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 35;
  f = function () {
    console.log(b * 3);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 2;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 2 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// A closure has priority over the scope chain.
const perGroup = 500;

boardPassengers(200, 6);

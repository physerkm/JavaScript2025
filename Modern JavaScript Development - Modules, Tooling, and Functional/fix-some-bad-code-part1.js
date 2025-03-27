"use strict";

/*
var budget = [
  { value: 250, description: "Sold old TV 📺", user: "lebron" },
  { value: -45, description: "Groceries 🥑", user: "lebron" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "lebron" },
  { value: 300, description: "Freelancing 👩‍💻", user: "lebron" },
  { value: -1100, description: "New iPhone 📱", user: "lebron" },
  { value: -20, description: "Candy 🍭", user: "kobe" },
  { value: -125, description: "Toys 🚂", user: "kobe" },
  { value: -1800, description: "New Laptop 💻", user: "lebrons" },
];

var limits = {
  lebron: 1500,
  kobe: 100,
};

var add = function (value, description, user) {
  if (!user) user = "lebron";
  user = user.toLowerCase();

  var lim;
  if (limits[user]) {
    lim = limits[user];
  } else {
    lim = 0;
  }

  if (value <= lim) {
    budget.push({ value: -value, description: description, user: user });
  }
};
add(10, "Pizza 🍕");
add(100, "Going to movies 🍿", "Kobe");
add(200, "Stuff", "Jay");
console.log(budget);

var check = function () {
  for (var el of budget) {
    var lim;
    if (limits[el.user]) {
      lim = limits[el.user];
    } else {
      lim = 0;
    }

    if (el.value < -lim) {
      el.flag = "limit";
    }
  }
};
check();

console.log(budget);

var bigExpenses = function (limit) {
  var output = "";
  for (var el of budget) {
    if (el.value <= -limit) {
      output += el.description.slice(-2) + " / "; // Emojis are 2 chars
    }
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

*/

const budget = [
  { value: 250, description: "Sold old TV 📺", user: "lebron" },
  { value: -45, description: "Groceries 🥑", user: "lebron" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "lebron" },
  { value: 300, description: "Freelancing 👩‍💻", user: "lebron" },
  { value: -1100, description: "New iPhone 📱", user: "lebron" },
  { value: -20, description: "Candy 🍭", user: "kobe" },
  { value: -125, description: "Toys 🚂", user: "kobe" },
  { value: -1800, description: "New Laptop 💻", user: "lebron" },
];

const spendingLimits = {
  lebron: 1500,
  kobe: 100,
};

const getLimit = (user) => spendingLimits?.[user] ?? 0;

const addExpense = function (value, description, user = "lebron") {
  user = user.toLowerCase();

  if (value <= getLimit(user)) {
    budget.push({ value: -value, description, user });
  }
};
addExpense(10, "Pizza 🍕");
addExpense(100, "Going to movies 🍿", "Kobe");
addExpense(200, "Stuff", "Jay");

const checkExpenses = function () {
  for (const entry of budget)
    if (entry.value < -getLimit(entry.user)) entry.flag = "limit";
};
checkExpenses();

const logBigExpenses = function (bigLimit) {
  let output = "";
  for (const entry of budget)
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : "";

  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(budget);
logBigExpenses(500);

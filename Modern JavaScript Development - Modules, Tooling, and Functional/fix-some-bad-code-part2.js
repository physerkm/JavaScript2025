"use strict";

/*
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

*/

const budget = Object.freeze([
  { value: 250, description: "Sold old TV 📺", user: "lebron" },
  { value: -45, description: "Groceries 🥑", user: "lebron" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "lebron" },
  { value: 300, description: "Freelancing 👩‍💻", user: "lebron" },
  { value: -1100, description: "New iPhone 📱", user: "lebron" },
  { value: -20, description: "Candy 🍭", user: "kobe" },
  { value: -125, description: "Toys 🚂", user: "kobe" },
  { value: -1800, description: "New Laptop 💻", user: "lebron" },
]);

const spendingLimits = Object.freeze({
  lebron: 1500,
  kobe: 100,
});
// spendingLimits.jay = 200;

// const limit = spendingLimits[user] ? spendingLimits[user] : 0;
const getLimit = (limits, user) => limits?.[user] ?? 0;

// PURE FUNCTION
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = "lebron"
) {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

const newBudget1 = addExpense(budget, spendingLimits, 10, "Pizza 🍕");
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  "Going to movies 🍿",
  "Kobe"
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, "Stuff", "Jay");

// const checkExpenses2 = function (state, limits) {
//   return state.map(entry => {
//     return entry.value < -getLimit(limits, entry.user)
//       ? { ...entry, flag: 'limit' }
//       : entry;
//   });
//   // for (const entry of newBudget3)
//   //   if (entry.value < -getLimit(limits, entry.user)) entry.flag = 'limit';
// };

const checkExpenses = (state, limits) =>
  state.map((entry) =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: "limit" }
      : entry
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

// IMPURE FUNCTION
const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter((entry) => entry.value <= -bigLimit)
    .map((entry) => entry.description.slice(-2))
    .join(" / ");
  // .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, '');

  console.log(bigExpenses);

  // let output = "";
  // for (const entry of budget)
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : "";

  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};

logBigExpenses(finalBudget, 500);

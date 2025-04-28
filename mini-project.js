let income = 1000;
let rent = 400;
let groceries = 150;
let savingsRate = 0.2;

let totalExpenses = rent + groceries;
let remaining = income - totalExpenses;
let savings = remaining * savingsRate;
let balance = remaining - savings;

let budget = {
  totalExpenses: totalExpenses,
  remaining: remaining,
  savings: savings,
  balance: balance
};

console.log(budget);
console.log("Balance after savings: $" + budget.balance);

// Test with different values
income = 1500;
rent = 600;
groceries = 200;

totalExpenses = rent + groceries;
remaining = income - totalExpenses;
savings = remaining * savingsRate;
balance = remaining - savings;

budget = {
  totalExpenses: totalExpenses,
  remaining: remaining,
  savings: savings,
  balance: balance
};

console.log(budget);
console.log("Balance after savings: $" + budget.balance);

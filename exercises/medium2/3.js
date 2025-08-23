// What does the following code log? Why is this so?

let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity)); // 40

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity)); // 45

// We see this output because how JavaScript implements lexical scoping through closures. Each time we invoke the `totalPayable` function, JavaScript looks up and uses the current value referenced by the `startingBalance` variable, not just the initial value assigned to `startingBalance` when the closure was created. This is because closures do not retain values of variables, rather they retain access to the reference of a variable. This allows JavaScript to access the current value for that variable at the time of invocation.
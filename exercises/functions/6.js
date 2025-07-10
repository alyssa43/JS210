let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

// This will log to the console: 7
// This is because the locally scoped variable `a` is assigned to a primitive value of `7`. This means that if we pass this variable in as an arugment to a function invocation, nothing performed on that argument will be able to mutate the `a` variable. This demonstrates how variables that hold a primitive value are immutable.
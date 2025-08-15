// 1. What side effects are present in the foo function in the following code?

const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop(); // side effect through mutation
  console.log(`popped ${value} from the array`); // side effect through Output
  return value + bar + baz;
}

foo(qux);

// The array that `arr` points to is mutated because `pop` is being called on it.
// By invoking `console.log` we have a side effect through output

// 2. Which of the following functions are pure functions?

// Function 1
function sum(a, b) { // not a pure function because side effect through output
  console.log(a + b);
  return a + b;
} 

// Function 2
function sum(a, b) { // pure function - will always return `undefined`
  a + b;
}

// Function 3
function sum(a, b) { // pure function - will always return `a + b`
  return a + b;
}

// Function 4
function sum(a, b) { // not a pure function because side effect through other function `Math.random()` - also doesn't have a consistent return value given the same arguments
  return a + b + Math.random();
}

// Function 5
function sum(a, b) { // pure function - will always return `3.1415`
  return 3.1415;
}

// Note: The fact that the return value is always the same regardless of the arguments in Function 2 and Function 5, doesn't change its status as a pure function.
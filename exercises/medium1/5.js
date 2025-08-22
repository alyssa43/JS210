// What will the following code snippets log?

// 1:

var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}

// After hoisting:
// function counter(count) {
//   // ...
// }
// var rate;

// counter = 5;
// rate = 3;

// console.log(`...`)

// A: The total value is 15

// 2:

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;

// After hoisting:
// function counter(count) {
//     // ...
// }
// var rate;

// console.log(`...`);

// counter = 5;
// rate = 3;

// A: The total value is NaN

// 3:

var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// After hoisting:
// function counter(count) {
//   // ...
// }

// var rate;

// counter = 5;
// rate = 3;

// console.log(`...`);

// A: The total value is 15

// 4:

let counter = 5;
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// hoisting doesn't occur because a SyntaxError is raised before hoisting occurs

// A: SyntaxError -> JavaScript will not allow you to declare a variable with `let` (or `const`) and a function with the same name
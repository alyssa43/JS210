function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

// This will log to the console: This is global
// This is because we omitted the keywords `let` `const` or `var` from the declaration of `myVar` within the `someFunction` function definition. This, in turn, has created a global variable that is accessible globally, or throughout the entire program. 
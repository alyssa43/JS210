console.log(a);

var a = 1;

// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

// This code will log to the console: undefined
// This is because how JavaScript hoisting works during the creation phase. When hoisting happens, JavaScript hoists variable (as well as function and class) declarations to the top of their scope. This means that the `a` declaration gets hoisted to the top of the code. And, if you try to access the value assigned to a `var` variable before the `var` declaration gets executed, JavaScript returns a value of `undefined`.
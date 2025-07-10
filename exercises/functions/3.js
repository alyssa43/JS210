var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

// This code will log to the console: This is local
// This is because on line 1 we declare and initialize a global variable called `myVar` that references the string `'This is global'`. Then on line 7 when we invoke the `someFunction()` function, we can see that within the `someFunction` function definition, we are reassigning the value of the globally scoped `myVar` variable on line 4. Which is why, when we invoke `console.log(myVar)` on line 8, we see `This is local`. This demonstrates how globally scoped variables in JavaScript are accessible within function definitions, and can be reassigned values within them as long as the function is able to access them (e.g., no variable shadowing has occurred).
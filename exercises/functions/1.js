// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

// This will log to the console: This is global
// This is because on line 3 we are declaring and initializing a global variable named `myVar` to reference the string `'This is global'`. Then when we invoke the `someFunction()` function on line 9 we can see that we are declaring and initializing a new local variable since we are using the `var` keyword. This will create a new, and totally separate variable from the one we created on line 1 that is within the scope of the `someFunction` funtion. So when we call `console.log` and pass `myVar` to it as the argument, JavaScript will first search the outer most scope for that variable, where it finds it and returns the value `'This is global'`.
var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

// This code will log to the console: This is global

// This is because, like the previous exercise, the globally scoped `myVar` variable is accessible within the `someFunction` function defintion because of JavaScript scoping rules. First it will search the function's scope for the `myVar` variable, where it will not find it. It then searches the outer scopes until that variable is found (or an exception will be raised if it is unable to find a variable by that name).
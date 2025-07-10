var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

// This code will log: This is local
// This is because of where we are invoking `console.log(myVar)`. Because we call this from within the `someFunction()` function, JavaScript will look within that functions scope for the `myVar` variable. And because we have declared and initialized a local variable called `myVar` within the `someFunction` function definition we have created a local variable that is scoped specifically to the `someFunction` functions. That means, if we tried to access the outer scoped `myVar` global variable that was declared and initialized on line 1, we would be unable to because of variable shadowing. 
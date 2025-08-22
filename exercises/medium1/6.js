// Read through the following code. Why will it log 'debugging'?

function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// This code outputs `debugging` because that is what the `debugIt()` function
// does. Within the `debugIt` function definition we first create a variable called
// `status` that references the string `'debugging'`. We then have a nested function
// definition, for a function called `logger`. This function definition includes one
// line of code, that outputs the value of the `status` variable. Finally, on the
// last line of code within the `debugIt` function definition we invoke the `logger`
// function. Which is why we see the output `debugging`. The reason the `logger`
// function has access to the `status` variable is because of JavaScript's scoping
// rule. Specifically, it's lexical scoping rules. The inner nested function
// (`logger`), has access to any variables declared in the scope of its outer
// (parent) function.
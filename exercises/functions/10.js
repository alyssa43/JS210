logValue();

function logValue() {
  console.log('Hello, world!');
}

// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

// This code will log: Hello, world!
// This is because, before the code gets executed, JavaScript has a creation phase in which hoisting is performed. When this happens variable, function, and class declarations get hoisted to the top of their respective scopes. This means that JavaScript is aware of all the variable, function, and class declarations before execution even happens. So in this example, after hoisting the above code looks like this:

function logValue() {
  console.log('Hello, world!');
}

logValue();

// That is how we see the output we do. Because of hoisting the `logValue` function is available throughout the entire program.
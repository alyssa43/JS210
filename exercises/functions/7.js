let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

// This will log to the console: 7
// Similarly to the previous exercise, when we pass our globally scoped local variable `a` as the argument to the `myValue` function invocation on line 7, anything performed on that `a` variable within `myValue` will not mutate the outer scoped `a` variable because it holds a primitive value. It is also important to realize that the globally scoped local variable declared and initialized on line 1, is a completely separate variable from the `a` variable that is within the `myValue` function definition. Because it has a parameter named `a`, this creates variable shadowing and if this function wished to try and access the outer scoped `a` variable it would be unable to. The function scoped `a` variable can only simply reference the value (assuming it is a primitive value) that is passed in as an argument upon invocation. 
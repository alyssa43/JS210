let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);

// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

// This will log to the console: [1, 2, 10]
// This is because on line 1 we declare a globally scoped variable named `a` and initialize it to reference the Array `[1, 2, 3]`. We then pass this `a` variable as the argument to the `myValue` function invocation on line 7. Because of how JavaScript passes objects, means that the `b` function scoped variable within the `myValue` function definition is referencing the same Array object that our globally scoped `a` variable is referencing—they are both pointing to the same object in memory. So, when we perform index assignment on line 4, to the `2` index element of that Array, both variables will see that change because they are both referencing the same Array object. Which is why on line 8, we see the changes that were made within the `myValue` function when it was invoked.
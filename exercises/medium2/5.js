// What will the following code log to the console? Can you explain why?

const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length); // 3
console.log(Object.keys(array).length); // 4

array[-2] = 'Watermelon';
console.log(array.length); // 3
console.log(Object.keys(array).length) // 5

// The reason we see these outputs is because when we use any value other than a non-negative integer within brackets to access or assign a value within an object (Arrays are an object), we are actually referencing a property of the object. In this case we are working with an Array and this could be someone attempting to assign values to an index, however the values passed into the bracket notation are not non-negative integers. So, JavaScript instead creates properties with these name/value pairs. And because the `length` property of an Array doesn't count the array's properties (only the elements), we see `3` both times we log the array's length. However, JavaScript does include the arrays properties (along with string versions of each elements index) when `Object.keys` is called and passed the array as an argument.
// What will the following code log to the console and why?

const myArray = ['a', 'b', 'c'];

console.log(myArray[0]); // a
console.log(myArray[-1]); // undefined

myArray[-1] = 'd'; // creates a '-1' property with value of 'd'
myArray['e'] = 5;  // creates a 'e' property with a value of 5
myArray[3] = 'f';  // assigns 'f' at the '3' index

console.log(myArray[-1]); // d
console.log(myArray['e']); // 5
console.log(myArray); // ['a', 'b', 'c', 'f', '-1': 'd', 'e': 5]

// The reason for these outputs is because when we use array literal syntax
// with a value that is not a vaild index (anything that isn't a non-negative
// integer), then JavaScript treats it as a property of that array, and not
// an element. This means when we we try to access the `-1` property within
// `myArray`, we see `undefined` as the return value because we haven't yet
// assigned a property named `-1` within `myArray`. However, on the next
// line we do define and assign that property with: `myArray[-1] = 'd'`
// This is creating a new property called `'-1'` with a value of `'d'`.
// Note that JavaScript coerces `-1` into a string: `'-1'` when creating the
// property name. This is because property names must be a string.
// We then define and assign another new property called `'e'` with a value
// of 5. Finally, we pass a non-negative integer as the argument to the array
// literal syntax, which JavaScript uses to assign the element at that index
// to the value right of the `=` sign. This means that `myArray[3] = 'f'` will
// assign the `3` index to reference the string `'f'`. In this case, there was
// not an element already at the `3` index, so it creates a new element.
// If there was already an element at the `3` index, that element would have
// been reassigned. Then, when we output the entire array we see the four
// elements within `myArray` as well as the properties we have defined and
// their respective values.
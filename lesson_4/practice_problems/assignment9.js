// In the problems below, we ask you to write functions that work with Arrays. You may use Array's index access ([]), the length property, and any Array Methods you need.

// # 1 Write a function that returns the first element of an array passed in as an argument.

function firstElementOf(arr) {
  return arr[0];
}

console.log(firstElementOf(['U', 'S', 'A']) === 'U');  // returns "U"

// #2 Write a function that returns the last element of an array passed in as an argument.

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

console.log(lastElementOf(['U', 'S', 'A']) === 'A');  // returns "A"

// # 3 Write a function that accepts two arguments, an array and an integer index position, and returns the element at the given index. Can you predict what happens if the index is greater than the length of the array? What about if it is a negative integer?

function nthElementOf(arr, index) {
  return arr[index];
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(nthElementOf(digits, 3) === 16);   // returns 16
console.log(nthElementOf(digits, 8) === undefined);   // what does this return?
console.log(nthElementOf(digits, -1) === undefined);  // what does this return?

// // # 4 Can we insert data into an array at a negative index? If so, why is this possible?

digits[-1] = -42;
console.log(nthElementOf(digits, -1) === -42);
console.log(digits[-1] === -42);
console.log(digits['-1'] === -42);

// Yes, we can insert data into an array using a negative index. However, that data will not become one of the elements of the array, but rather a key-value part of the array object. This is because in JS arrays are objects. This means they can hold properties such as an object literal that has key-value pairs.

// # 5 Write a function that accepts an array as the first argument and an integer value, count, as the second. It should return a new array that contains the first count elements of the array.

function firstNOf(arr, count) {
  return arr.slice(0, count);
}

digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3));    // returns [4, 8, 15]

// # 6 Write a function like the previous one, except this time return the last count elements as a new array.

function lastNOf(arr, count) {
  return arr.slice(arr.length - count);
}

digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 3));    // returns [16, 23, 42]

// // # 7 Using the function from the previous problem, what happens if you pass a count greater than the length of the array? How can you fix the function so it returns a new instance of the entire array when count is greater than the array length?

// function lastNOf(arr, count) {
//   count = count > arr.length ? arr.length : count;
//   return arr.slice(arr.length - count);
// }

// if `count` is greater than the length of the array, the number we would be passing to `slice` would be negative. When a negative index is passed there are two possibilities that could occur:
// if the number passed in is less than 0 but is greater than or equal to the -array.length, the number + array.length is used as the start.
// if the number passed in is less than -array.length, `0` is used as the start, and when no end is passed in (like in this example) that means the entire array is returned.
// For example: 
// arr = [4, 8, 15, 16, 23, 42] => arr.length => 6

//count = 7
// arr.slice(6 - 7) => arr.slice(-1) => arr.slice(-1 + 6) => arr.slice(5) => [42]

// count = 10
// arr.slice(6 - 10) => arr.slice(-4) => arr.slice(-4 + 6) => arr.slice(2) => [15, 16, 23, 42]

// count = 12
// arr.slice(6 - 12) => arr.slice(-6) => arr.slice(-6 + 6) => arr.slice(0) => [4, 8, 15, 16, 23, 42]

// count = 14
// arr.slice(6 - 14) => arr.slice(-8) => arr.slice(0) => [4, 8, 15, 16, 23, 42]

// // # 8 Write a function that accepts two arrays as arguments and returns an array with the first element from the first array and the last element from the second array.

function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]];
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]

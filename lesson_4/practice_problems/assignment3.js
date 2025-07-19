// 1. Write a function named push that accepts two arguments: an Array and any other value. The function should append the second argument to the end of the Array, and return the new length of the Array.

// const push = (array, value) => {
//   array[array.length] = value;
//   return array.length;
// }

// let count = [0, 1, 2];
// console.log(push(count, 3));         // 4
// console.log(count);                  // [ 0, 1, 2, 3 ]

// 2. Write a function named pop that accepts one argument: an Array. The function should remove the last element from the array and return it.

// const pop = array => {
//   if (array.length === 0) return undefined;
  
//   const element = array[array.length - 1];
//   array.length = array.length - 1;
//   return element;
// }

// let count = [1, 2, 3];
// console.log(pop(count));             // 3
// console.log(count);                  // [ 1, 2 ]
// console.log(pop([]));                // undefined

// 3. Write a function named unshift that accepts two arguments: an Array and a value. The function should insert the value at the beginning of the Array, and return the new length of the array. You will need a for loop for this problem.

// const unshift = (array, value) => {
//   for (let index = array.length; index > 0; index--) {
//     array[index] = array[index - 1];
//   }

//   array[0] = value;
//   return array.length;
// }

// let count = [1, 2, 3];
// console.log(unshift(count, 0));      // 4
// console.log(count);                  // [ 0, 1, 2, 3 ]

// 4. Write a function named shift that accepts one argument: an Array. The function should remove the first value from the beginning of the Array and return it.

const shift = array => {
  const value = array[0];
  if (!value) return undefined;

  for (let index = 0; index < array.length - 1; index++) {
    array[index] = array[index + 1];
  }

  array.length = array.length - 1;
  return value;
}

let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]
console.log(shift([]));                     // undefined
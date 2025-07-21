// For the below questions -> You may use functions that were answers to previous practice problems to complete this problem, but do not use any built-in Array methods.

// 1. Write a function named slice that accepts three arguments: an Array, a start index, and an end index. The function should return a new Array that contains values from the original Array starting with the value at the starting index, and including all values up to but not including the end index. Do not modify the original Array.

const slice = (array, startIndex, endIndex) => {
  let result = [];
  for (let index = startIndex; index < endIndex; index++) {
    push(result, array[index]);
  }

  return result;
}

// console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
// console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]

// 2. Write a function named splice that accepts three arguments: an Array, a start index, and the number of values to remove. The function should remove values from the original Array, starting with the start index and removing the specified number of values. The function should return the removed values in a new Array.

function splice(array, startIndex, length) {
  const endIndex = (startIndex + length) - 1;
  let removedValues = [];
  let valuesToKeep = [];

  for (let index = 0; index < array.length; index++) {
    const value = array[index];
    if (index < startIndex || index > endIndex) {
      push(valuesToKeep, value);
    } else {
      push(removedValues, value);
    }
  }

  for (let index = valuesToKeep.length - 1; index >= 0; index--) {
    unshift(array, valuesToKeep[index]);
  }

  array.length = valuesToKeep.length;

  return removedValues;
}

const unshift = (array, value) => {
  for (let index = array.length; index > 0; index--) {
    array[index] = array[index - 1];
  }

  array[0] = value;
  return array.length;
}

const push = (array, value) => {
  array[array.length] = value;
  return array.length;
}

// let count = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
// console.log(count);                                 // [ 1, 2, 8 ]

// Write a function named concat that accepts two Array arguments. The function should return a new Array that contains the values from each of the original Arrays.

function concat(array1, array2) {
  let result = [];
  for (let index = 0; index < array1.length; index++) {
    push(result, array1[index]);
  }

  for (let index = 0; index < array2.length; index++) {
    push(result, array2[index]);
  }

  return result;
}

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// console.log(concat(arr1, arr2));       // [ 1, 2, 3, 4, 5, 6 ]

// Write a function named join that accepts two arguments: an Array and a String. The function should coerce each value in the Array to a String, and then join those values together using the second argument as a separator. You may assume that a separator will always be passed.

// You can call the `String` function on any JavaScript value to get its String representation.

function join(array, string) {
  let result = '';
  for (let index = 0; index < array.length; index++) {
    result += String(array[index]);

    if (index < array.length - 1) {
      result += string;
    }
  }

  return result;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'

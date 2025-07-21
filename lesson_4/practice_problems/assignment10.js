// # 1: Write a function that creates and returns a new array from its array argument. The new array should contain all values from the argument array whose positions have an odd index.

function oddElementsOf(arr) {
  let result = [];
  for (let index = 1; index < arr.length; index += 2) {
    result.push(arr[index]);
  }
  return result;
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(oddElementsOf(digits));    // returns [8, 16, 42]

// # 2: Write a function that takes an array argument and returns a new array that contains all the argument's elements in their original order followed by all the argument's elements in reverse order.

// function addReversed(arr) {
//   let result = arr.slice();
//   for (let index = arr.length - 1; index >= 0; index--) {
//     result.push(arr[index]);
//   }

//   return result;
// }

// LS Solution:
function mirroredArray(arr) {
  return arr.concat(arr.slice().reverse())
}
// arr.slice() => [1, 2, 3]
// [1, 2, 3].reverse => [3, 2, 1]
//arr.concat([3, 2, 1]) => [1, 2, 3, 3, 2, 1]

let arr = [1, 2, 3];
console.log(mirroredArray(arr)); // [1, 2, 3, 3, 2, 1]
console.log(arr);                // [1, 2, 3]

// Use the array sort method to create a function that takes an array of numbers and returns a new array of the numbers sorted in descending order. Do not alter the original array.

function sortDescending(arr) {
  return arr.slice().sort((a, b) => b - a);
}

let array = [23, 4, 16, 42, 8, 15];
let result = sortDescending(array);
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

// # 4: Write a function that takes an array of arrays as an argument, and returns a new array that contains the sums of each of the sub-arrays.

function matrixSums(arr) {
  return arr.map(subArr => {
    return subArr.reduce((acc, num) => acc + num, 0);
  })
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]

// # 5: Write a function that takes an array, and returns a new array with duplicate elements removed.

function uniqueElements(arr) {
  let result = [];
  for (let element of arr) {
    if (!result.includes(element)) {
      result.push(element);
    }
  }
  
  return result;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]
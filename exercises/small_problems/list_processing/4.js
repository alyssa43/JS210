// Problem:
  // Given an array of numbers, find and return the accumulated sum of each number in the array
  // Rules: The array will always contain at least one number

// Example:
  // Given: [3, 5, 2]
  // [ 3 8 10] => 21

// Algorithm:
  // Transform the given array where each element gets transformed into an array of sliced values
  // Reduce each transformed subarray to its sum
  // Reduce transformed array to its sum

// // First solution (second time revisiting):
// function sumOfSums(array) {
//   const sums = array.reverse().map((_, index) => array.slice(index));
//   return sumArray(sums.map(sumArray));
// }

// function sumArray(array) {
//   return array.reduce((sum, num) => sum + num, 0);
// }

// Second solution (second time revisiting):
function sumOfSums(array) {
  return sumArray(array.map((_, index) => sumArray(array.slice(0, index + 1))));
}

function sumArray(array) {
  return array.reduce((acc, num) => acc + num, 0);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
// // Original Solution:

// function runningTotal(array) {
//   const result = [];
//   let currentTotal = 0;

//   for (let num of array) {
//     currentTotal += num;
//     result.push(currentTotal);
//   }

//   return result;
// }

// // Refactored Solution:

// function runningTotal(array) {
//   return array.map(function (num, index) {
//     return array.slice(0, index + 1).reduce(function (acc, value) {
//       return acc + value;
//     }, 0);
//   })
// }

function runningTotal(array) {
  let sum = 0;

  return array.map(num => {
    sum += num;
    return sum;
  })
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
// Write a function that takes a sorted array of integers as an argument, and returns an array that includes all the missing integers (in order) between the first and last elements of the argument.

function createRange(start, end) {
  let range = [];
  for (let num = start; num <= end; num++) {
    range.push(num);
  }

  return range;
}

function missing(arr) {
  const start = arr[0];
  const end = arr[arr.length - 1];

  return createRange(start, end).filter(num => !arr.includes(num));
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []
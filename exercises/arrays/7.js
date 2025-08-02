function shift(array) {
  const element = array[0];
  const newLength = array.length === 0 ? 0 : array.length - 1;
  shiftLeftOne(array);
  array.length = newLength;

  return element;
}

function unshift(array, ...args) {
  const shiftIndex = args.length;
  shiftRight(array, shiftIndex);
  addArgs(array, args);

  return array.length;
}

function shiftLeftOne(array) {
  for (let index = 0; index < array.length - 1; index++) {
    array[index] = array[index + 1];
  }
}

function shiftRight(array, shiftIndex) {
  for (let index = array.length - 1; index >= 0; index--) {
    array[index + shiftIndex] = array[index];
  }
}

function addArgs(array, args) {
  for (let index = 0; index < args.length; index++) {
    array[index] = args[index];
  }
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]
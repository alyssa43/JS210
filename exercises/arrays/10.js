function countOccurrences(array, element) {
  return array.filter(el => el === element).length;
}

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    const element = array1[index];
    const array1Count = countOccurrences(array1, element);
    const array2Count = countOccurrences(array2, element);

    if (array1Count !== array2Count) {
      return false;
    }

  }

  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));             // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));             // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a'])); // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));           // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));       // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));       // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));       // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));             // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                // false
console.log(areArraysEqual([1, 1], [1, 1]));                   // true
console.log(areArraysEqual([1, '1'], ['1', 1]));               // true
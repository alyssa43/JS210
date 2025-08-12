function countOccurrances(array, element) {
  return array.filter(el => el === element).length;
}

function areArraysEqual(array1, array2) {
  for (let index = 0; index < array1.length; index++) {
    const el1 = array1[index];
    const el2 = array2[index];
    
    const el1Arr1Count = countOccurrances(array1, el1);
    const el1Arr2Count = countOccurrances(array2, el1);

    const el2Arr1Count = countOccurrances(array1, el2);
    const el2Arr2Count = countOccurrances(array2, el2);

    if (el1Arr1Count !== el1Arr2Count || el2Arr1Count !== el2Arr2Count) {
      return false;
    }

  }

  return true;
}

// console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));             // true
// console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));             // true
// console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a'])); // true
// console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));           // false
// console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));       // true
// console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));       // false
// console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));       // false
// console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));             // false
// console.log(areArraysEqual([1, 1, 1], [1, 1]));                // false
// console.log(areArraysEqual([1, 1], [1, 1]));                   // true
console.log(areArraysEqual([1, '1'], ['1', 1]));               // true
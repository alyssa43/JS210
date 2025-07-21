// turns objects into arrays of keys and values and compares their values
function objectsAreEqual(obj1, obj2) {
  const obj1Keys = Object.keys(obj1).sort();
  const obj2Keys = Object.keys(obj2).sort();
  const obj1Values = Object.values(obj1).sort();
  const obj2Values = Object.values(obj2).sort();

  if (arraysAreEqual(obj1Keys, obj2Keys) && arraysAreEqual(obj1Values, obj2Values)) {
    return true;
  } else {
    return false;
  }
}

function arraysAreEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    const arr1Value = array1[index];
    const arr2Value = array2[index];

    if (arr1Value === arr2Value) {
      continue; // if both values have strict equality continue
    } else if (Object.is(arr1Value, NaN) && Object.is(arr2Value, NaN)) {
      continue; // if both values are NaN continue 
    } else if (Array.isArray(arr1Value) && Array.isArray(arr2Value)) {
      if (arraysAreEqual(arr1Value, arr2Value)) {
        continue; // if both values are array and are equal continue
      } else {
        return false; // else return false and exit function
      }
    } else if (typeof arr1Value === 'object' && typeof arr2Value === 'object') {
      if (objectsAreEqual(arr1Value, arr2Value)) {
        continue; // if both values are objects and equal continue
      } else {
        return false; // else if both values are object but not equal return false and exit function
      }
    }
    else {
      return false; // if no conditions were true values are not equal, return false and exit function
    }
  }

  return true; // if all values passed iteration without returning false, return true;
}

console.log(arraysAreEqual([1, 2, 3], [1, 2])) // false
console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])) // true
console.log(arraysAreEqual([1, 2, 3], [1, 2, 4])) // false
console.log(arraysAreEqual([1, [1, 2], 3], [1, [1, 2], 3])) // true
console.log(arraysAreEqual([NaN], [NaN])); // true
console.log(arraysAreEqual([{name: 'Alyssa', age: 36}, 2, 3], [{age: 36, name: 'Alyssa'}, 2, 3])); // true
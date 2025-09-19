function union(...arrays) {
  const values = [].concat(...arrays);
  return uniqueElements(values);
}

function uniqueElements(array) {
  const result = []

  array.forEach(element => {
    if (!result.includes(element)) {
      result.push(element);
    }
  });

  return result;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union([1, 2, 3], [2, 3, 4], [4, 5, 6])); // [ 1, 2, 3, 4, 5, 6 ]
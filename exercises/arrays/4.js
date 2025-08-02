function addArgument(array, argument) {
  if (Array.isArray(argument)) {
    for (let element of argument) {
      array.push(element);
    }
  } else {
    array.push(argument);
  }

  return array;
}

function concat(array, ...args) {
  const result = array.slice();
  for (let arg of args) {
    addArgument(result, arg);
  }

  return result;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]
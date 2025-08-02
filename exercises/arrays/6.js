function reverse(input) {
  const isArray = Array.isArray(input);
  return isArray ? reverseArray(input) : reverseString(input);
}

function reverseArray(array) {
  let result = [];
  for (let index = array.length - 1; index >= 0; index--) {
    result.push(array[index]);
  }

  return result;
}

function reverseString(string) {
  const stringArray = string.split('');
  return reverseArray(stringArray).join('');
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]
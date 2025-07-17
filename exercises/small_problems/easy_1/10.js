// function utf16Value(string) {
//   let characters = string.split('');
//   let values = characters.map(char => char.charCodeAt(0));

//   return arraySum(values);
// }

// function arraySum(array) {
//   return array.reduce((acc, number) => acc + number, 0);
// }

// Using `for..of` loop:

function utf16Value(string) {
  let sum = 0;

  for (let char of string) {
    sum += char.charCodeAt(0);
  }

  return sum;
}

// After consulting LSBot:

// function utf16Value(string) {
//   let characters = string.split('');

//   return characters.reduce((sum, char) => {
//     return sum + char.charCodeAt(0);
//   }, 0);
// }

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811
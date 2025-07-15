// function splitString(string) {
//   let result = [];
//   let substring = '';

//   for (let i = 0; i <= string.length; i++) {
//     if (string[i] === ' ') {
//       result.push(substring);
//       substring = '';
//     } else if (i === string.length - 1) {
//       substring += string[i];
//       result.push(substring);
//     } 
//     else {
//       substring += string[i];
//     }
//   }

//   return result;
// }

// function startsWith(string, searchString) {
//   let words = splitString(string);
//   let word_count = splitString(searchString).length
//   return words.slice(0, word_count).join(' ') === searchString;
// }

// After reading Logic & Structure:

function startsWith(string, searchString) {
  for (let i = 0; i < searchString.length; i++) {
    if (string[i] !== searchString[i]) {
      return false;
    }
  }

  return true;
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false
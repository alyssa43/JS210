// Problem: Given an Array of integers, return a new array with the same integers that are sorted alphabetically based on their English word
  // Rules:
    // numbers can be 0 through 19

// Example:
// Given: [0, 1, 2, 3, 4]
// [zero, one, two, three, four]
// [four, one, three, two, zero]
// [4, 1, 3, 2, 0]

// Data Structure:
  // start: array of numbers
  // intermediate: array of string numbers & lookup table object
  // end: array of numbers

// Algorithm:
// STEP 1: Create a lookup table to find a numbers first character
// STEP 2: Transform numbers into their respective words
// STEP 3: Sort word numbers alphabetically
// STEP 4: Transform words back into their respective numbers

const numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
  'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 
  'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function alphabeticNumberSort(numbers) {
  return numbers
  .map(num => numberWords[num])
  .sort()
  .map(word => numberWords.indexOf(word));
}

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
// Problem: Given a positive integer, find and return the sum of its digits. 
  // Rules:
    // Cannot use a `for`, `while`, or `do...while` loop
    // Must use a series of method calls

// Example:
// Given 496
// digits = [4 9 6]
// 4 + 9 + 6 => 19

// Data Structure:
  // starting: number
    // intermediate: array of digits
  // ending: number

// Algorithm:
// STEP 1: transform number into a string
// STEP 2: transform string number into array of digits
// STEP 3: transform each string digit back into a number
// STEP 4: find the sum of all digits

function sum(number) {
  return String(number)
  .split('')
  .map(stringDigit => Number(stringDigit))
  .reduce((total, num) => total + num, 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
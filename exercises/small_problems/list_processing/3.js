// Problem: 
  // Given two arrays containing numbers, return a new array of products of all combinations between the first and second array that is sorted in numerical order from lowest to highest.
  // Rules: There will never be an empty array

// Example:
  // Given => [2, 4] & [4, 3, 1, 2]
  // 2 * 4 => 8
  // 2 * 3 => 6
  // 2 * 1 => 2
  // 2 * 2 => 4
  // 4 * 4 => 16
  // 4 * 3 => 12
  // 4 * 1 => 4
  // 4 * 2 => 8
  // [8, 6, 2, 4, 16, 12, 4, 8]
  // sorted => [2, 4, 4, 6, 8, 8, 12, 16]

// Data Structure:
  // start: two array object containing numbers
    // intermediate: 
  // end: new array object containing sorted numbers

// Algorithm:
  // Create result variable to reference an empty array
  // Iterate through the elements of the first array, passing in each number
    // Transform the second array by multiplying each value with the current number
    // Push transformed array into the result variable
  // Flatten nested array into one layer
  // Sort result array smallest to largest value
  // Return result array

function multiplyAllPairs(array1, array2) {
  return array1.map(num1 => {
    return array2.map(num2 => num1 * num2)}).flat().sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
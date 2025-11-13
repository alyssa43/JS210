// ---- PROBLEM 1 ----
// Given a number n, return an array containing several arrays. Each array increments in size, from range 1 to n inclusive, contaning its length as the elements.

// Examples
// pyramidArrays(1) ➞ [[1]]

// pyramidArrays(3) ➞ [[1], [2, 2], [3, 3, 3]]

// pyramidArrays(5) ➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]]

// Notes
// n will be a positive integer.

/*
---- PROBLEM ----
input: a positive integer
output: array containing subarrays containing positive integers

Rules:
  --> There always be precisely one argument.
  --> The argument will always be a positive integer
  --> The returned array will always have a length equal to `n`
  --> `n` is inclusive

---- EXAMPLES ----
n => 3
range => [1, 2, 3]
1 => [1]
2 => [2, 2]
3 => [3, 3, 3]

---- DATA STRUCTURES ----
starting: positive integer
  intermediate:
    -- array where each element is a number in the range (1 through `n`)
ending: array containing subarrays with positive integers

---- ALGORTITHM ----
1. Create a range starting at 1 going through `n`
2. Iterate through the range using `map`
3. Build an array that contains the current `num`, `num` times
4. return transformed array
*/

// function pyramidArrays(n) {
//   const result = [];

//   for (let i = 1; i <= n; i += 1) {
//     result.push(buildRepeatingArray(i));
//   }

//   return result;
// }

// function buildRepeatingArray(num) {
//   const result = [];

//   for (let i = 0; i < num; i += 1) {
//     result.push(num);
//   }

//   return result;
// }

// console.log(pyramidArrays(1)); // [[1]]
// console.log(pyramidArrays(3)); // [[1], [2, 2], [3, 3, 3]]
// console.log(pyramidArrays(5)); // [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]]
// console.log(pyramidArrays(2)); // [[1], [2, 2]];
// console.log(pyramidArrays(10)); // [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [6, 6, 6, 6, 6, 6], [7, 7, 7, 7, 7, 7, 7], [8, 8, 8, 8, 8, 8, 8, 8], [9, 9, 9, 9, 9, 9, 9, 9, 9], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]]

// ---- PROBLEM 2 ----
// Create a function that takes three arrays and returns one array where all passed arrays are combined into nested arrays.

// These arrays should be combined based on indexes: the first nested array should contain only the items on index 0, the second array on index 1, and so on.

// If any array contains fewer items than necessary, supplement the missing item with "*".

// Examples

// combineArrays([false, "false"], ["true", true, "bool"], ["null", "undefined"]) ➞ [[false, "true", "null"], ["false", true, "undefined"], ["*", "bool", "*"]]

// combineArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]) ➞ [[1, 4, 7], [2, 5,  8], [3, 6, 9]]

// combineArrays(["Jack", "Joe", "Jill"], ["Stuart", "Sammy", "Silvia"], ["Rick", "Raymond", "Riri"]) ➞ [["Jack", "Stuart", "Rick"], ["Joe", "Sammy",  "Raymond"], ["Jill", "Silvia", "Riri"]]

/*
---- PROBLEM ----
input: 3 arrays
output: 1 array containing subarrays

Questions: 
  -- Will there always be precisely 3 arguments?
    --> Yes, there will always be 3 arguments
  -- Will all three arguments always be arrays?
    --> Yes, the 3 arguments will always be arrays
  -- Will any of the arrays ever be empty?
    --> Yes, it is possible for any - or all - of the arrays to be empty
  -- In the case of all three arrays being empty; what shall I return?
    --> return an empty array
  -- Will the arrays only ever contain a maximum of 3 elements?
    --> No, the arrays can be any length
  -- Will the input arrays ever contain non-primitives?
    --> No, the input arrays will only ever contain strings, numbers, booleans, undefined, or null values
  -- Can the input arrays be mutated?
    --> No, do not mutate the input arrays
  -- Will an input array ever be sparse? If so, how to proceed?
    --> Yes, it is possible to have a sparse array. Holes in an array should be supplemented with '*'
  
Rules:
  --> If all three input arrays are empty; return an empty array
  --> The input arrays can vary in length
  --> All returned subarrays will have a length of 3
  --> The length of returned array will always be equal to the length of the longest input array
  --> Do not mutate the input arrays

---- EXAMPLES ----
[1, 2, 3], [4], [5, 6, 7, 8] =>  [[1, 4, 5], [2, '*', 6], [3, '*', 7], ['*', '*', 8]]
array 1 => [1, 2, 3]
array 2 => [4]
array 3 => [5, 6, 7, 8]
longest = [5, 6, 7, 8] => 4
iterating 0 up to 4 =>
    gather all elements at 0 index =>
      is array1 has element at current index (0) true; then retrieve array1[i] => 1
      is array2 has element at current index (0) true; then retrievearray2[i] => 4
      is array3 has element at current index (0) true; then retrievearray3[i] => 5
      [1, 4, 5]
    gather all elements at 1 index =>
      is array1 has element at current index (1) true; then retrieve array1[i] => 2
      is array2 has element at current index (1) false; then use '*'
      is array3 has element at current index (1) true then retrievearray3[i] => 6
    ... continue through end

---- DATA STRUCTURES ----
starting: 3 separate arrays
  intermediate: 
    -- create a new array that we will push subarrays into and return as result
    -- subarray that contains all elements at a specific index to be pushed into result array
ending: 1 nested array

---- ALGORITHM ----
High Level:
1. Create an empty `result` array
2. Determine the length of the longest input array
3. Create an interator (`i`) that begins at 0 and ends when it gets to the longest length
  4. Gather all elements from input arrays at `i` index => HELPER gatherElements(index, array1, array2, array3)
  5. Push the gathered elements array into the `result` array
6. Return `result`

HELPER: gatherElements(index, ...arrays)
1. Using `map` iterate over all arrays, passing in each `arr`
  2. If `arr` has an element at `index` transform to that element
  3. Else transform to '*'
4. Return transformed array
*/

// function combineArrays(a, b, c) {
//   const result = [];
//   const longest = Math.max(a.length, b.length, c.length);
//   for (let i = 0; i < longest; i += 1) {
//     result.push(gatherElementsAtIndex(i, a, b, c));
//   }
//   return result;
// }

// function gatherElementsAtIndex(index, ...arrays) {
//   return arrays.map(arr => {
//     // return arr.hasOwnProperty(index) ? arr[index] : '*');
//     return Object.hasOwn(arr, index) ? arr[index] : '*'; // LSBot suggested
//   });
// }

// console.log(combineArrays([], [], [])); // []

// console.log(combineArrays([1, 2, 3], [4], [5, 6, 7, 8])); 
// // [[1, 4, 5], [2, '*', 6], [3, '*', 7], ['*', '*', 8]]

// console.log(combineArrays([false, "false"], ["true", true, "bool"], ["null", "undefined"])); 
// // [[false, "true", "null"], ["false", true, "undefined"], ["*", "bool", "*"]]

// console.log(combineArrays([1, 2, 3], [4, 5, 6], [7, 8, 9])); 
// // [[1, 4, 7], [2, 5,  8], [3, 6, 9]]

// console.log(combineArrays(["Jack", "Joe", "Jill"], ["Stuart", "Sammy", "Silvia"], ["Rick", "Raymond", "Riri"])); 
// // [["Jack", "Stuart", "Rick"], ["Joe", "Sammy",  "Raymond"], ["Jill", "Silvia", "Riri"]]

// console.log(combineArrays(['hello', 1, false], ['world', 2, true], ['!', 3, undefined])); 
// // [['hello', 'world', '!'], [1, 2, 3], [false, true, undefined]]

//  console.log(combineArrays([1, 2], [], [])); 
//  // [[1, '*', '*'], [2, '*', '*']]

//   console.log(combineArrays([1, 2], [3, , , 6], [ , 8, , 10])); 
//  // [[1, 3, '*'], [2, '*', 8], ['*', '*', '*'], ['*', 6, 10]]

//  const a1 = [1]; 
//  const a2 = [2]; 
//  const a3 = [3]; 
//  const res = combineArrays(a1, a2, a3); 
//  res[0][0] = 99; 
//  console.log(a1[0] === 1); // true

// ----PROBLEM 3---- 
// YouTube currently displays a like and a dislike button, allowing you to express your opinions about particular content. It's set up in such a way that you cannot like and dislike a video at the same time.

// There are two other interesting rules to be noted about the interface:

// Pressing a button, which is already active, will undo your press.
// If you press the like button after pressing the dislike button, the like button overwrites the previous "dislike" state. The same is true for the other way round.
// Create a function that takes an array of button inputs and returns the final state.

// Examples
// likeOrDislike(["Dislike"]) ➞ "Dislike"
// likeOrDislike(["Like", "Like"]) ➞ "Nothing"
// likeOrDislike(["Dislike", "Like"]) ➞ "Like"
// likeOrDislike(["Like", "Dislike", "Dislike"]) ➞ "Nothing"

// Notes
// If no button is currently active, return "Nothing".
// If the array is empty, return "Nothing".

/*
---- PROBLEM ----
input: array containing any number and combination of the strings "Dislike" and "Like"
output: string referencing the "status" of the like/dislike button

Quesitons:
  -- Will we always be given precisely one argument?
    --> Yes, we can expect to only get one argument, which will be an array
  -- Will the input string always have the same case? (capitalized)
    --> Yes, all strings will always be capitalized

Rules:
  --> When the input array is empty; return the string "Nothing"
  --> All input strings will be capitalized, and the output string needs to also be capitalized
  --> There are 3 states the Like/Dislike button can have:
    -- "Like"
    -- "Dislike"
    -- "Nothing"
  --> If the button gets a "Like"/"Dislike" and then another "Like"/"Dislike" it resets the status to "Nothing"
  --> If the button gets changed to one status and then to another, the latter overwrite the former

---- EXAMPLES ----
// likeOrDislike(["Like", "Like"]) ➞ "Nothing"
// likeOrDislike(["Dislike", "Like"]) ➞ "Like"
// likeOrDislike(["Like", "Dislike", "Dislike"]) ➞ "Nothing"

["Dislike", "Dislike", "Like", "Like", "Dislike", "Like"] ==> "Like"
status = "Nothing" => starts at "Nothing"
Iterate through input array, passing in `button`
  RULES:
    --> if `status` is equal to `button` change `status` to "Nothing"
    --> else change `status` to `button`
  --> `status` ("Nothing") != `button` ("Dislike") ==> `status = "Dislike"
  --> `status` ("Dislike") === `button` ("Dislike") ==> `status = "Nothing"
  --> `status` ("Nothing") != `button` ("Like") ==> `status = "Like"
  --> `status` ("Like") === `button` ("Like") ==> `status = "Nothing"
  --> `status` ("Nothing") != `button` ("Dislike") ==> `status = "Dislike"
  --> `status` ("Dislike") != `button` ("Like") ==> `status = "Like"
Return `status` ==> "Like"

---- DATA STRUCTURES ----
starting: array of strings
  intermediate: 
    -- iterate through input array
    -- a variable called `status` that will have a string value
ending: string

---- ALGORITHM ----
1. Create a variable called `status` and assign it to the value "Nothing"
2. Iterate through the input array `buttons`, passing in each `button`
  -- if `status` is equal to `button`; reassign `status` to "Nothing"
  -- else; reassign `status` to `button`
3. Return `status`
*/

// function likeOrDislike(buttons) {
//   let status = "Nothing";
//   buttons.forEach(button => status = status === button ? "Nothing" : button);
//   return status;
// }

// console.log(likeOrDislike(["Like"])); // "Like"
// console.log(likeOrDislike(["Dislike", "Like"])); // "Like"
// console.log(likeOrDislike(["Like", "Like", "Like"])); // "Like"
// console.log(likeOrDislike(["Dislike", "Dislike", "Like", "Like", "Dislike", "Like"])); // "Like"
// console.log(likeOrDislike(["Like", "Like", "Like", "Like", "Like", "Like", "Like"])); // "Like"

// console.log(likeOrDislike(["Dislike"])); // "Dislike"
// console.log(likeOrDislike(["Dislike"])); // "Dislike"
// console.log(likeOrDislike(["Dislike", "Dislike", "Dislike"])); // "Dislike"
// console.log(likeOrDislike(["Dislike", "Dislike", "Like", "Like", "Dislike", "Like", "Dislike"])); // "Dislike"
// console.log(likeOrDislike(["Dislike", "Dislike", "Dislike", "Dislike", "Dislike", "Dislike", "Dislike"])); // "Dislike"

// console.log(likeOrDislike(["Like", "Like"])); // "Nothing"
// console.log(likeOrDislike(["Like", "Dislike", "Dislike"])); // "Nothing"
// console.log(likeOrDislike([])); // "Nothing"
// console.log(likeOrDislike(["Dislike", "Dislike", "Like", "Like", "Dislike", "Dislike"])); // "Nothing"
// console.log(likeOrDislike(["Dislike", "Dislike", "Like", "Like", "Like", "Like"])); // "Nothing"
// console.log(likeOrDislike(["Dislike", "Dislike", "Dislike", "Dislike", "Dislike", "Dislike"])); // "Nothing"

// ---- PROBLEM 4 ----
// This challenge concerns square matrices (same number of rows and columns) as the below example illustrates:
// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// The entries in the diagonal line from the top left to the bottom right form the main diagonal of the matrix. In this case, 1,5,9 form the main diagonal.
// Write a function that returns the matrix obtained by replacing the entries above the main diagonal with 0s.
// For example, for the matrix above you should return:
// [
//   [1, 0, 0],
//   [4, 5, 0],
//   [7, 8, 9]
// ]
// Notes
// As in the examples, the size of the matrices will vary (but they will always be square).
// In Linear Algebra, matrices with 0s above the diagonal are called lower triangular matrices.

/*
---- PROBLEM ----
input: a nested array representing a nxn matrix
output: a nested array --> the transformed matrix

Rules:
  --> The argument will always be an array
  --> If the given array is empty; return an empty array
  --> Will the given array subarrays only contain numbers? No, it can contain any other non-primitive value
  --> The matrix will always be sqaure(EX: array length === all subarrays length)
  --> Only transform "above" the diagonal

Definitions:
  --> Matrix: an n X n grid
  --> The diagonal: an imaginary line from top left to bottom right (EX: arr[0][0], arr[1][1], arr[2][2]...)

*/

console.log(lowerTriang([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); 
// [[1, 0, 0],[4, 5, 0], [7, 8, 9]]

console.log(lowerTriang([[5, 7], [7, 9]])); 
// [[5, 0], [7, 9]]

console.log(lowerTriang([[1, 8, 8, 1], [2, 7, 7, 2], [3, 6, 6, 3],[4, 5, 5, 4]])); 
// [[1, 0, 0, 0], [2, 7, 0, 0], [3, 6, 6, 0], [4, 5, 5, 4]]




//// SPOT SESSION ////

// Create a function that takes three arrays and returns one array where all passed arrays are combined into nested arrays.

// These arrays should be combined based on indexes: the first nested array should contain only the items on index 0, the second array on index 1, and so on.

// If any array contains fewer items than necessary, supplement the missing item with "*".

// Examples

// combineArrays([false, "false"], ["true", true, "bool"], ["null", "undefined"]) ➞ [[false, "true", "null"], ["false", true, "undefined"], ["*", "bool", "*"]]

// combineArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]) ➞ [[1, 4, 7], [2, 5,  8], [3, 6, 9]]

// combineArrays(["Jack", "Joe", "Jill"], ["Stuart", "Sammy", "Silvia"], ["Rick", "Raymond", "Riri"]) ➞ [["Jack", "Stuart", "Rick"], ["Joe", "Sammy",  "Raymond"], ["Jill", "Silvia", "Riri"]]
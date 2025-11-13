// A collection of spelling blocks has two letters per block, as shown in this list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
// This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

// Write a function that takes a word string as an argument and returns true if the word can be spelled using the set of blocks, false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

/* 
---- PROBLEM ----
input: string
output: Boolean

Rules:
  --> A "spelling block" are a specific pair of letters 
  --> The input string can only contain one of the letters in the "spelling block"
  --> The input string can only contain one instance of that letter from the spelling block
  --> Case is insensitive
  --> Will the input string ever be empty? Assume no, it will always contain at least one character
  --> Will the input string ever contain any character other than alphabetic? Assume no, it will always contain only alphabetic characters

---- EXAMPLES ----
A B C D E F G H I J K L M
N O P Q R S T U V W X Y Z
isBlockWord('BATCH'); ==> true
isBlockWord('BUTCH'); ==> false
isBlockWord('jest');  ==> true

firstHalf = [ A B C D E F G H I J K L M ]
lastHalf =  [ N O P Q R S T U V W X Y Z ]
'BATCH' --> iterate through each character transforming each into it's index from either firstHalf or lastHalf:
  'B' --> 1
  'A' --> 0
  'T' --> 6
  'C' --> 2
  'H' --> 7
  --> if all indexes are different return true; else return false

---- DATA STRUCTURES ----
starting with: string
  intermediate:
    - one array that contains the first 13 characters of the alphabet
    - one array that contains the last 13 character of the alphabet
    - an array of characters, transformed into their respective indices
ending with: Boolean

---- ALGORITHM ----
1. Create an array where each element is a character from the first half of the alphabet (UPPERCASE)
2. Create an array where each element is a character from the last half of the alphabet (UPPERCASE)
3. Transform the chracters of the input string to an array where each char is an element and they are all uppercase
4. Iterate through array of character using `map`
  5. Transform each character to their respective index from either firstHalf or lastHalf
6. Determine if all indices are different; if they are return true; otherwise return false.
*/

// function isBlockWord(string) {
//   const firstHalf = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
//   const lastHalf = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//   const chars = string.split('').map(char => char.toUpperCase());
//   const indices = chars.map(char => {
//     return firstHalf.includes(char) ? firstHalf.indexOf(char) : lastHalf.indexOf(char);
//   });

//   return isUnique(indices);
// }

// function isUnique(array) {
//   const seen = [];
//   for (const element of array) {
//     if (seen.includes(element)) return false;
//     seen.push(element);
//   }
//   return true;
// }

function isBlockWord(word) {
  const first = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
  const last = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const chars = (word.match(/[a-z]/ig) || []).map(c => c.toUpperCase());
  const seenIndices = [];
  for (const char of chars) {
    const index = first.includes(char) ? first.indexOf(char) : last.indexOf(char);
    if (seenIndices.includes(index)) return false;
    seenIndices.push(index);
   }

   return true;
}

console.log(isBlockWord('BATCH'));  // true
console.log(isBlockWord('BUTCH'));  // false
console.log(isBlockWord('jest'));   // true
console.log(isBlockWord('JEST'));   // true
console.log(isBlockWord('a'));      // true
console.log(isBlockWord('Hello'));  // false


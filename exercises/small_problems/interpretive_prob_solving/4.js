// Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

// The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.

/*
--- PROBLEMS ---
input: 
  - string of words - may contain any variation of characters
  - a number representing the "key" (how many places to shift)

Defintions:
  -- Key: the number value passed in as the argument. Determines how many spaces we right-shift

Questions: 
  -- Will we always have precisely two arguments? 
    --> No, sometimes you may only recieve one argument, a string. In this case assume the number is `0`
  -- Will the input string ever be empty?
    --> Yes, the input string could be empty. In this case return an empty string
  -- Will the input string ever NOT contain any alphabetic characters?
    --> Yes, it is possible the input string doesn't contain any alphabetic characters. In this case return the string as-is
  -- Will the input number ever be negative?
    --> No, the input number will always be greater than OR equal to 0
  
Rules:
  --> When the number argument is omitted; assign it a value of `0`
  --> If the input string is empty; return an empty string
  --> If the input string doesn't contain alphabetic characters; return the string as-is
  --> If the key value exceeds the length of the alphabet, it wraps back around to the beginning
  --> We always shift right
  --> Case needs to be maintained
  --> We only encrypt alphabetic characters

--- EXAMPLES ---
simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

wrap around
text => 'y' key =>  5 returns => "d"
text => 'a' key =>  47 returns => "v"
[a b c d e f g h i j k l m n o p q r s t u v w x y z]
[0 1 2 3 4 5 6 7 8 9 .............................25]
'y' index => 24 
  -- shift right 1 (25)
  -- shift right 1 (26) --> When shifting if we reach 26 go back to 0 -> (0)
  -- shift right 1 (1)
  -- shift right 1 (2)
  -- shift right 1 (3) ==> d

--- DATA STRUCTURES ---
starting: text (and a number key)
  intermediate:
    -- an array of all alphabetic letters
    -- split the input string into an array of characters to transform
ending: string

--- ALGORITHM ---
High Level:
1. If the input string OR the key is equal to 0; return text
2. Create an array that contains all the alphabetic characters (all lowercase);
3. Split the input string into an array of characters
4. Iterate through the array of characters passing in each `char`
  5. if the `char` is NOT an alphabetic character; return `char`
  6. else determine the encrypted value of the `char` (call `shiftChar`); return
7. Join the transformed array back together into a string and return

HELPER: shiftChar(char, key)
  -- Find the index of the `char` from `alphabet` array (make sure to call `toLowerCase` on `char) (`index`)
  -- create an iterator called `i` that begins at 1 and end when greater than `key` (incrementing by 1 each iteration)
    -- increment `index` by 1
    -- if `index` === 26; reassign `index` to 0
  -- Find the char at `alphabet[index]`
  -- If `char` is lowercase; return the found char: else call `toUpperCase()` on found char and return
*/

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
   'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function caesarEncrypt(text, key = 0) {
  if (text.length === 0 || key === 0) return text;
  const chars = text.split('');
  return chars.map(char => /[^a-z]/i.test(char) ? char : shiftChar(char, key)).join('');
}

function shiftChar(char, key) {
  let index = alphabet.indexOf(char.toLowerCase());
  for (let i = 1; i <= key; i += 1) {
    index += 1;
    if (index === alphabet.length) index = 0;
  }

  const shiftedChar = alphabet[index];
  return char === char.toLowerCase() ? shiftedChar : shiftedChar.toUpperCase();
}

console.log(caesarEncrypt('', 4)); // ""
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!')); // "The quick brown fox jumps over the lazy dog!"
console.log(caesarEncrypt('$#%^ ??', 3)); // '$#%^ ??'

console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25)); // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5)); // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
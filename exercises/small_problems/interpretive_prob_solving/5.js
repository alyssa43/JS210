// The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. It uses a series of Caesar Ciphers based on the letters of a keyword. Each letter of the keyword is treated as a shift value. For instance, the letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds to a shift value of 3. In other words, the shift value used for a letter is equal to its index value in the alphabet. This means that the letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.

// Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to a Caesar Cipher for that particular character. To make this more concrete, let's look at the following example:

// plaintext: Pineapples don't go on pizzas!
// keyword: meat

// Applying the Vigenere Cipher for each alphabetic character:
// plaintext : Pine appl esdo ntgo onpi zzas
// shift     : meat meat meat meat meat meat
// ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

// result: Bmnxmtpeqw dhz'x gh ar pbldal!
// Notice that in the example, the key isn't moved forward if the character isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.

// Write a function that implements the Vigenere Cipher. The case of the keyword doesn't matter—in other words, the resulting encryption won't change depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').

/*
---- PROBLEM ----
input: 
Rules:
  --> Only consider alphabetic characters when determining which "key" to use
  --> Case does not matter when determining number of times to shift EX: 'b' and 'B' both shift 1 times
  --> We only shift a character not based on it's own index, but the key's index
  --> If `plaintext` is undefined OR an empty string; return an empty string
  --> If the `keyword` contains any non-alphabetic character(s); ignore them

Questions:
  -- Will the amount of alphabetic character in the `plaintext` always be evenly divisible by the length of the `keyword`
    --> Assume no. In this case, when the last `n` amount of characters are being transformed, just go off of what is available
      EX: plaintext => 'hi' keyword => 'bye' => the 'h' uses the 'b' as its key, and the 'i' uses the 'y' as its key -- ignore the 'e' in 'bye'
  -- Will we always receive two arguments--a plaintext and a keyword?
    --> Assume yes
  -- Are we to return a string?
    --> Assume yes.
  -- Will the `plaintext` always be a string?
    --> Assume no, `plaintext` may be either a string or `undefined`
    --> In the case of `plaintext` being `undefined` -- return an empty string
    --> In the case of `plaintext` being an empty string -- return an empty string
  -- Will the `keyword` always be a string?
    --> Assume yes, it will always be a string with at least 1 alphabetic character.
  -- Will the `keyword` ever contain a character that isn't an alphabetic character--if so how to proceed?
    --> Assume yes, it is possible the keyword may contain non-alphabetic characters; these are to be ignored.

---- EXAMPLES ----
plaintext: Pineapples don't go on pizzas!
keyword: meat
alphabet => 'abcdefghijklmnopqrstuvwxyz'
breaking down `plaintext` into groups equal in length as the length of the `keyword`:
  =>[ [Pine] [appl] [esdo] [ntgo] [onpi] [zzas] ]
  iterate through each group of 4 and shift using the key `meat`
  P => key is `m` index == 12 --> shift 'P' 12 times => 'B'
  i => key is `e` index == 4  --> shift 'i' 4 times  => 'm'
  n => key is `a` index == 0  --> shift 'n' 0 times  => 'n'
  e => key is `t` index == 19 --> shift 'e' 19 times => 'x'
  => result Bmnx

---- DATA STRUCTURES ----
starting with: 
  -- string representing some plaintext word(s) to be encrypted
  -- string representing a keyword to be used to shift characters

intermediate: 
  -- build a new `result` string to be returned
  -- build a string to represent the `alphabet` and each characters index

ending: a string representing the encrypted plaintext

---- ALGORITHM ----
High Level:
1. If the input `plainText` is empty or undefined -- return an empty string
2. Remove any non-alphabetic characters from the input `keyword` and save as new value of `keyword`
3. Create a variable called `alphabet` with a value of all alphabetic character in a-z order
4. Create a variable called `result` with a value of an empty string
5. Create a variable called `maxKeyIndex` and set it to a value equal to the length of `keyword` - 1
6. Create a variable called `keyIndex` and set it to a value of `0`
7. Iterate through each character of the `plainText`, passing in each `char`
  8. If the `char` is a non-alphabetic character; add it to the end of `result` variable. ELSE:
  9. Determine the current `key` by finding the character of `keyword` at `keyIndex` => `keyword[keyIndex]`
  10. Determine the number of times to shift `char` by finding the index` of `key` within `alphabet` => `alphabet.indexOf(key)`
  11. Use HELPER: `shiftChar` passing in the current `char` and number of times to `shift`
  12. Add returned value of `shiftChar` to the end of `result`
  13. Increment the value of `keyIndex` by 1. If the `keyIndex` > `maxKeyIndex` ; reassign to `0`
14. return result

HELPER: shiftChar(char, shift) ==> return a new char          char => 'p' shift => 12 | return => 'B'
1. Determine the current index of `char` within `alphabet` as save into variable called `index`  => 15 
2. Create an iterator that starts at 1 and ends when greater than `shift`
  3. increment `index` by 1
  4. If `index` is equal to the length of `alphabet` reassign `index` to `0`
5. Find the character at the `index` of `alphabet` => alphabet[index]
6. If `char` is lowercase, return the found character; otherwise return the found character uppercased
*/

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function vigenereCipher(plainText, keyword) {
  if (!plainText) return "";
  keyword = keyword.replace(/[^a-z]/ig, '');
  let result = '';
  const maxKeyIndex = keyword.length - 1;
  let keyIndex = 0;

  for (let char of plainText) {
    if (keyIndex > maxKeyIndex) keyIndex = 0;

    if (/[^a-z]/i.test(char)) {
      result += char;
    } else {
      let key = keyword[keyIndex];
      let shift = alphabet.indexOf(key);
      result += shiftChar(char, shift);
      keyIndex += 1;
    }
  }
  return result;
}

function shiftChar(char, shift) {
  let index = alphabet.indexOf(char.toLowerCase());
  for (let i = 1; i <= shift; i += 1) {
    index += 1
    if (index === alphabet.length) index = 0;
  }
  
  let newChar = alphabet[index];
  return char === char.toLowerCase() ? newChar : newChar.toUpperCase();
}

console.log(vigenereCipher("Pineapples don't go on pizzas!", "meat")); // "Bmnxmtpeqw dhz'x gh ar pbldal!"
console.log(vigenereCipher("pineapples don't go on pizzas!", "meat")); // "bmnxmtpeqw dhz'x gh ar pbldal!"
console.log(vigenereCipher("PINEAPPLES DON'T GO ON PIZZAS!", "meat")); // "BMNXMTPEQW DHZ'X GH AR PBLDAL!"

console.log(vigenereCipher("PINEAPPLES DON'T GO ON PIZZAS!", "m e. a?> !(t*")); // "BMNXMTPEQW DHZ'X GH AR PBLDAL!"
console.log(vigenereCipher("Pineapples don't go on pizzas!", "m e a t")); // "Bmnxmtpeqw dhz'x gh ar pbldal!"
console.log(vigenereCipher("Hello World!", "a")); // "Hello World!"
console.log(vigenereCipher("Hello World!", "aaaa")); // "Hello World!"
console.log(vigenereCipher("Hello!", "aaaaaaaaaa")); // "Hello!"

console.log(vigenereCipher("", "empty")); // ""
console.log(vigenereCipher(undefined, "a")); // ""
console.log(vigenereCipher('hello', "---")); // ""

const p = console.log;

function repeatedCharacters(string) {
  const charCount = countChars(string.toLowerCase());
  const chars = Object.keys(charCount);
  let result = {};

  for (const char of chars) {
    if (charCount[char] >= 2) {
      result[char] = charCount[char];
    } 
  }

  return result;
}

function countChars(string) {
  const chars = string.split('');
  let result = {};

  for (const char of chars) {
    if (Object.keys(result).includes(char)) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }

  return result;
}

p(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
p(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
p(repeatedCharacters('Pet'));            // {}
p(repeatedCharacters('Paper'));          // { p: 2 }
p(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }

['p', 'r', 'o', 'g', 'r', 'a', 'm', 'm','i', 'n', 'g']
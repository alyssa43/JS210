function substrings(string) {
  const allSubstrings = [];
  for (let index in string) {
    allSubstrings.push(...leadingSubstrings(string.slice(index)));
  };

  return allSubstrings;
}

function leadingSubstrings(string) {
  return string.split('').map((char, index) => string.slice(0, index) + char);
}
 

console.log(substrings('abcde'));
// console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]

// returns
// [ "a", "ab", "abc", "abcd", "abcde", => slice(0,)
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
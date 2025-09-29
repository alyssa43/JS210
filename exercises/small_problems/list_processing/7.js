function palindromes(string) {
  // First solution:
  // const substringsArray = substrings(string);
  // return substringsArray.filter(str => isPalindrome(str));

  return substrings(string).filter(isPalindrome);
}

function isPalindrome(string) {
  const reversed = string.split('').reverse().join('');
  return string.length > 1 && reversed === string;
}

function leadingSubstrings(string) {
  return string.split('').map((char, index) => {
    return string.slice(0, index) + char;
  });
}

function substrings(string) {
  const result = [];
  for (let i = 0; i < string.length; i += 1) {
    result.push(...leadingSubstrings(string.slice(i, string.length)))
  }

  return result;
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

// console.log(palindromes('hello-madam-did-madam-goodbye'));
// // returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

// console.log(palindromes('knitting cassettes'));
// // returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
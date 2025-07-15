function trimLeadingWhitespace(string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (result === '' && string[i] === ' ') {
      continue;
    } else {
      result += string[i];
    }
  }

  return result;
}

function reverseString(string) {
  let result = '';
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }

  return result;
}

function trim(string) {
  let result = trimLeadingWhitespace(string); // trims leading whitespace
  result = trimLeadingWhitespace(reverseString(result));  // reverses and trims (now) leading whitespace
  result = reverseString(result); // reverses result back to correct position
  return result;
}

console.log(trim('  abc  ') ===   "abc");
console.log(trim('abc   ') ===    "abc");
console.log(trim(' ab c') ===     "ab c");
console.log(trim(' a b  c') ===   "a b  c");
console.log(trim('      ') ===    "");
console.log(trim('') ===          "");
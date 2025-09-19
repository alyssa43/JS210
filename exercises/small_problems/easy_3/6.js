function isPalindromicNumber(number) {
  const stringNumber = String(number);
  return isPalindrome(stringNumber);
}

function reverseString(string) {
  let reversed = '';

  for (let i = string.length - 1; i >= 0; i -= 1) {
    reversed += string[i];
  }
  
  return reversed;
}

function isPalindrome(string) {
  const reversedString = reverseString(string);

  return string === reversedString;
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
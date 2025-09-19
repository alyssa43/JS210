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

console.log(isPalindrome('madam'));           // true
console.log(isPalindrome('Madam'));           // false
console.log(isPalindrome("madam i'm adam"));  // false
console.log(isPalindrome('356653'));          // true
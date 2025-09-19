function isRealPalindrome(string) {
  const downCased = string.toLowerCase();
  const whiteSpaceRemoved = downCased.match(/[a-z0-9]/g).join('');

  return isPalindrome(whiteSpaceRemoved);
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

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
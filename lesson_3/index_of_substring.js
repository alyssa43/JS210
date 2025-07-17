function reverseString(string) {
  let result = '';

  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }

  return result;
}

function getSubstring(string, start, substringLength) {
  let result = '';

  for (let i = start; result.length < substringLength; i++) {
    result += string[i]
  }

  return result;
}

function indexOf(firstString, secondString) {
  let limit = firstString.length - secondString.length;

  for (let i = 0; i <= limit; i++) {
    let substring = getSubstring(firstString, i, secondString.length)
    if (substring === secondString) return i;
  }

  return -1;
}

function lastIndexOf(firstString, secondString) {
  let reverseStartIndex = indexOf(reverseString(firstString), reverseString(secondString));
  let reverseEndIndex = reverseStartIndex + secondString.length - 1;
  
  return reverseStartIndex === -1 ? -1 : (firstString.length - 1) - reverseEndIndex;
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1
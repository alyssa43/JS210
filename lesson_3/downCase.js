// const MIN_UPPERCASE_ASCII_NUMERIC = 'A'.charCodeAt(0);
// const MAX_UPPERCASE_ASCII_NUMERIC = 'Z'.charCodeAt(0);

// function isUpperCaseLetter(character) {
//   asciiValue = character.charCodeAt(0);

//   if (asciiValue < MIN_UPPERCASE_ASCII_NUMERIC || asciiValue > MAX_UPPERCASE_ASCII_NUMERIC) {
//     return false;
//   } else {
//     return true;    
//   }
// }

// function toLowerCase(string) {
//   const CONVERSION_OFFSET = 32;
//   let result = '';

//   for (let i = 0; i < string.length; i++) {
//     let char = string[i];

//     if (isUpperCaseLetter(char)) {
//       let asciiValue = char.charCodeAt(0);
//       result += String.fromCharCode(asciiValue + CONVERSION_OFFSET);
//     } else {
//       result += char;
//     }
//   }
  
//   return result;
// }

// Using `>=` and `<=`

function toLowerCase(string) {
  const CONVERSION_OFFSET = 32;
  let result = '';

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (char >= 'A' && char <= 'Z') {
      let asciiValue = char.charCodeAt(0);
      result += String.fromCharCode(asciiValue + CONVERSION_OFFSET);
    } else {
      result += char;
    }
  }

  return result;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"

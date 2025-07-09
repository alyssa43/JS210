const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(integer) {
  let digits = [];

  do {
    digits.unshift(DIGITS[integer % 10]);
    integer = Math.floor(integer / 10);
  } while (integer > 0);

  return digits.join("");
}

function signedIntegerToString(integer) {
  let symbol = integer > 0 ? "+" : integer < 0 ? "-" : "";
  let result = integerToString(Math.abs(integer));
  
  return symbol + result;
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"
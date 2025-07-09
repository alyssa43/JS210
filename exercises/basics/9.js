const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(integer) {
  let digits = [];

  do {
    digits.unshift(DIGITS[integer % 10]);
    integer = Math.floor(integer / 10);
  } while (integer > 0);

  return digits.join("");
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
const DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};

function stringToInteger(string) {
  let result = 0;
  let numbers = string.split("").map(str_digit => DIGITS[str_digit]);
  numbers.forEach(number => result = 10 * result + number);
  return result;
}

function stringToSignedInteger(string) {
  let result = stringToInteger(string.replace(/^[+-]/, ""));
  return string[0] === '-' ? result * -1 : result;
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100
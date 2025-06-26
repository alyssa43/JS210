function getTwoNumbers() {
  let rlSync = require('readline-sync');
  let number1 = Number(rlSync.question("==> Enter the first number:\n"));
  let number2 = Number(rlSync.question("==> Enter the second number:\n"));
  return [number1, number2];
}

function outputOperations(number1, number2) {
  console.log(`${number1} + ${number2} = ${number1 + number2}`);
  console.log(`${number1} - ${number2} = ${number1 - number2}`);
  console.log(`${number1} * ${number2} = ${number1 * number2}`);
  console.log(`${number1} / ${number2} = ${Math.floor(number1 / number2)}`);
  console.log(`${number1} % ${number2} = ${number1 % number2}`);
  console.log(`${number1} ** ${number2} = ${number1 ** number2}`);
}

let [number1, number2] = getTwoNumbers();
outputOperations(number1, number2);

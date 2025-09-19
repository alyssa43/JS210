const rlSync = require('readline-sync');

function getFiveNumbers() {
  const numberIterators = ['1st', '2nd', '3rd', '4th', '5th'];
  const collectedNumbers = [];

  numberIterators.forEach(number => {
    collectedNumbers.push(rlSync.question(`Enter the ${number} number: `));
  });

  return collectedNumbers;
}

const numbers = getFiveNumbers();
const num = rlSync.question('Enter the last number: ');

if (numbers.includes(num)) {
  console.log(`The number ${num} appears in [${numbers.join(', ')}].`);
} else {
  console.log(`The number ${num} does not appear in [${numbers.join(', ')}].`);
}
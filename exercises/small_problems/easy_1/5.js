let rlSync = require('readline-sync');

function calculateSumOrProduct() {
  let start = 1;
  let end = getPositiveInteger();
  let operation = getOperation();
  let numberRange = [];
  let result;

  for (let i = start; i <= end; i++) {
    numberRange.push(i); 
  }

  if (operation === 's') {
    result = arraySum(numberRange);
    console.log(`The sum of the integers between ${start} and ${end} is ${result}.`);
  } else {
    result = arrayProduct(numberRange);
    console.log(`The product of the integers between ${start} and ${end} is ${result}.`);
  }
}

function logError() {
  console.log('Invalid input. Please try again.');
}

function getPositiveInteger() {
  let number = parseInt(rlSync.question('Please enter an integer greater than 0: '));

  if (number > 0) {
    return number;
  } else {
    logError();
    return getPositiveInteger();
  }
}

function getOperation() {
  let operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');
  
  if (operation === 's' || operation === 'p') {
    return operation;
  } else {
    logError();
    return getOperation();
  }
}

function arraySum(array) {
  return array.reduce((acc, number) => acc + number, 0);
}

function arrayProduct(array) {
  return array.reduce((acc, number) => acc * number, 1);
}

calculateSumOrProduct();

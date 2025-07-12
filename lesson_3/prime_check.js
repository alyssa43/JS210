function isDivisible(number, divisor) {
  return number % divisor === 0;
}

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (isDivisible(number, i)) return false;
  }

  return number != 0 && number != 1;
}

// Further Exploration:

function isPrime(number) {
  if (number <= 1 || number > 2 && isDivisible(number, 2)) return false;

  for (let i = 3; i < number; i += 2) {
    if (isDivisible(number, i)) return false;
  }

  return true;
}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false
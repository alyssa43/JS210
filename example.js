function isDivisible(number, divisor) {
  return number % divisor === 0;
}

function isPrime(number) {
  if (number <= 1 || number > 2 && isDivisible(number, 2)) return false;

  for (let i = 3; i < number; i += 2) {
    if (isDivisible(number, i)) return false;
  }

  return true;
}

function checkGoldbach(expectedSum) {
  if (expectedSum % 2 != 0 || expectedSum < 4) return null;

  let range = [];

  for (let i = 2; i <= expectedSum - 2; i++) {
    if (isPrime(i)) range.push(i);
  }

  let logged_numbers = [];

  range.forEach(num => {
    let num2 = expectedSum - num;
    if (range.includes(num2) && !logged_numbers.includes(num2)) {
      console.log(`${num} ${num2}`);
      logged_numbers.push(num2);
    }
  });
}

checkGoldbach(12);
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
  if (expectedSum % 2 != 0 || expectedSum < 4) {
    console.log(null);
    return;
  };

  let range = [];
  for (let i = 2; i <= expectedSum - 2; i++) {
    if (isPrime(i)) range.push(i);
  }

  for (let num of range) {
    let num2 = expectedSum - num;
    if (num > num2) {
      break;
    } else if (range.includes(num2)) {
      console.log(`${num} ${num2}`);
    }
  }
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53

// every even integer greater than 2 is the sum of two prime numbers
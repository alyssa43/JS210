function divisors(num) {
  let divisors = [];
  let n = num;

  while (n > 0) {
    if (num % n === 0) {
      divisors.push(n);
    }
    n--;
  }

  return divisors;
}

function gcd(num1, num2) {
  let num1Divisors = divisors(num1);
  let num2Divisors = divisors(num2);
  let commonDivisors = num1Divisors.filter(num => num2Divisors.includes(num));
  
  return Math.max(...commonDivisors);
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1
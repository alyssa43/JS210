// function fizzbuzz() {
//   for (let num = 1; num <= 100; num++) {
//     let multiple_of_three = num % 3 === 0;
//     let multiple_of_five = num % 5 === 0;

//     if (multiple_of_three && multiple_of_five) {
//       console.log('FizzBuzz');
//     } else if (multiple_of_three) {
//       console.log('Fizz');
//     } else if (multiple_of_five) {
//       console.log('Buzz');
//     } else {
//       console.log(num);
//     }
//   }
// }

// Further Exploration:

function isDivisible(number, divisor) {
  return number % divisor === 0;
}

function fizzbuzz() {
  for (let num = 1; num <= 100; num++) {
    let result = '';
    if (isDivisible(num, 3)) result += 'Fizz';
    if (isDivisible(num, 5)) result += 'Buzz';
    console.log(result || num);
  }
}

fizzbuzz();

// console output
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// … rest of output omitted for brevity
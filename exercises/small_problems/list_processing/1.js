// function sum(number) {
//   const digits = String(number).split('').map(stringNum => Number(stringNum));
//   return digits.reduce((acc, value) => acc + value, 0);
// }

function sum(number) {
  return String(number).split('').reduce((acc, digit) => {
    return acc + Number(digit)
  }, 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
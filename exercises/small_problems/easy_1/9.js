function multisum(number) {
  let range = createRange(1, number)
  let multiples = range.filter(isMultipleOf3Or5);

  return arraySum(multiples);
}

function createRange(start, end) {
  let range = [];

  for (let i = start; i <= end; i++) {
    range.push(i);
  }

  return range;
}

function isMultipleOf3Or5(number) {
  return number % 3 === 0 || number % 5 === 0;
}

function arraySum(array) {
  return array.reduce((acc, number) => acc + number, 0);
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
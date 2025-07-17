for (let number = 1; number <= 99; number++) {
  if (number % 2 !== 0) {
    console.log(number);
  }
}

// Further Exploration:

function logOddNumbers(min, max) {
  let number = min

  while (number <= max) {
    if (number % 2 !== 0) console.log(number);
    number++;
  }
}

logOddNumbers(1, 99);
logOddNumbers(2, 99);
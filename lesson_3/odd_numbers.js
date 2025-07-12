function logOddNumbers(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 2 != 0) console.log(i);
  }
}

logOddNumbers(19);

// output on console
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19

// further exploration #1:

function logOddNumbers(number) {
  for (let i = 1; i <= number; i += 2) {
    console.log(i);
  }
}

logOddNumbers(19);

// further exploration #2:

function logOddNumbers(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
  }
}

logOddNumbers(19);
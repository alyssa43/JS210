function padLeft(number) {
  const stringNumber = String(number);
  switch (stringNumber.length) {
    case 1:  return `  ${stringNumber}`;
    case 2:  return ` ${stringNumber}`;
    default: return stringNumber;
  }
}

for (let i = 1; i < 10; i += 1) {
  let row = '';
  for (let j = 1; j <= 10; j += 1) {
    row += `${padLeft(i * j)} `;
  }

  console.log(row);
}

// i = 1; j = 1
  // row = '  1'
// i = 1; j = 2
  // row = '  1  2'
// i = 1; j = 3
  // row = '  1  2  3'
// i = 1; j..continues until === 10
  // row = '  1  2  3  4  5  6  7  8  9 10' <- output
// i = 2; j = 1
  // row = '  2'
// i = 2; j = 2
  // row = '  2  4'
// i = 2; j = 3
  // row = '  2  4  6'
// i = 2; j..continues until === 10
  // row = '  2  4  6  8 10 12 14 16 18 20' <- output
// continues..
// when i = 3
  // row = '  3  6  9 12 15 18 21 24 27 30' <- output
// when i = 4
  // row = '  4  8 12 16 20 24 28 32 36 40' <- output
// ..continues until i === 9
  // row = '  9 18 27 36 45 54 63 72 81 90' <- output

// No, this will not log a multiplication table for the numbers 1 to 10. This is
// because the first `for` condition only increments `i` up to `9`. This means
// our output will be a multiplication table for numbers 1 - 9.
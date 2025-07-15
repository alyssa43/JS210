// function generatePattern(nStars) {
//   let string_digits = '';
//   let stars = '';

//   for (let digit = 1; digit <= nStars; digit++) {
//     string_digits += digit;
//     stars = '*'.repeat(nStars - digit);
//     console.log(string_digits + stars);
//   }
// }

// generatePattern(7);

// console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567

// Further Exploration:

function generatePattern(nStars) {
  let string_digits = '';
  let stars = '';
  let length = 0;

  for (let i = 1; i <= nStars; i++) {
    length += String(i).length;
  }

  for (let digit = 1; digit <= nStars; digit++) {
    string_digits += digit;
    stars = '*'.repeat(length - string_digits.length);
    console.log(string_digits + stars);
  }
}

generatePattern(20);
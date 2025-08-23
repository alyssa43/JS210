// function doubler(number, caller) {
//   console.log(`This function was called by ${caller}.`);
//   return number + number;
// }

// doubler(5, 'Victor'); // returns 10
// logs:
// This function was called by Victor.


// Solution using function expression:
function makeDoubler(caller) {
  return function(num) {
    console.log(`This function was called by ${caller}.`);
    return num + num;
  }
}

// Solution using anonymous function expression:
function makeDoubler(caller) {
  return number => {
    console.log(`This function was called by ${caller}.`);
    return number + number;
  };
}

const doubler = makeDoubler('Victor');
let result = doubler(5);
console.log(result);
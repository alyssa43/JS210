// Implementation 1:
// let myArray = [1, 2, 3, 4];
// const myOtherArray = myArray.slice();

// myArray.pop();
// console.log(myOtherArray);

// myArray = [1, 2];
// console.log(myOtherArray);

// Implementation 2:
let myArray = [1, 2, 3, 4];
const myOtherArray = [...myArray];

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);
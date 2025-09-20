// function sequence(count, start) {
//   const result = [];
//   let nextValue = start;

//   for (let i = 0; i < count; i += 1) {
//    result.push(nextValue);
//    nextValue += start;
//   }

//   return result;
// }


function sequence(count, start) {
  const result = [];
  
  for (let i = 1; i <= count; i += 1) {
    result.push(i * start);
  }

  return result;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []
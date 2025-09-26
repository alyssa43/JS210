// Solution #1:
// function sumOfSums(numbers) {
//   const result = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const slice = numbers.slice(0, i + 1);
//     result.push(sumArray(slice));
//   }

//   return sumArray(result);
// }


// Solution #2:
function sumOfSums(nums) {
  return sumArray(nums.map((_, i) => sumArray(nums.slice(0, i + 1))));
}

function sumArray(array) {
  return array.reduce((acc, value) => acc + value, 0);
}

console.log(sumOfSums([3, 5, 2])); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3])); // 36
console.log(sumOfSums([4])); // 4
console.log(sumOfSums([1, 2, 3, 4, 5])); // 35

// [ [3] [ 3 5 ] [3 5 2]]
  // slice(0, 1)
  // slice(0, 2)
  // slice(0, 3)
// [   3    8      10   ]
// 21 
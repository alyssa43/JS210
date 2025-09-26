// function alphabeticNumberSort(numbers) {
//   const stringNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
//     'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
//     'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];


//     return numbers.map(num => {
//       return stringNumbers[num]}).toSorted().map(stringNum => {
//         return stringNumbers.indexOf(stringNum)});
// }


// Solution using `sort`:
const stringNums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
  'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
  'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function sortStrings(stringA, stringB) {
  if (stringA < stringB) {
    return -1;
  } else if (stringA > stringB) {
    return 1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(nums) {
  return [...nums].sort((a, b) => sortStrings(stringNums[a], stringNums[b]));
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
console.log(alphabeticNumberSort(arr));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

console.log(arr);
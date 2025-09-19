function showMultiplicativeAverage(array) {
  const product = array.reduce((acc, value) => acc * value, 1);
  return (product / array.length).toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
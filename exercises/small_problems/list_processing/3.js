function multiplyAllPairs(multiples, values) {
  const result = [];

  multiples.forEach(multiple => {
    values.forEach(value => {
      result.push(multiple * value);
    });
  });

  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]

// Example:
// 2 * 4 => 8
// 2 * 3 => 6
// 2 * 1 => 2
// 2 * 2 => 4

// 4 * 4 => 16
// 4 * 3 => 12
// 4 * 1 => 4
// 4 * 2 => 8
// [8, 6, 2, 4, 16, 12, 4, 8]
// [2, 4, 4, 6, 8, 8, 12, 16]
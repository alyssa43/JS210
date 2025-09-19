function average(numbers) {
  const sum = numbers.reduce((acc, value) => acc + value, 0);
  return Math.floor(sum / numbers.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40
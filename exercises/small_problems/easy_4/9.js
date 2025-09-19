const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1

function countOccurrences(array) {
  const counts = {};
  for (const element of array) {
    counts[element] = counts[element] + 1 || 1;
  }

  displayObj(counts);
}

function displayObj(obj) {
  for (const key in obj) {
    console.log(`${key} => ${obj[key]}`);
  }
}
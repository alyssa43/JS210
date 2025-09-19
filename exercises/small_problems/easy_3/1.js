function generateRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function displayAge(name, age) {
  console.log(`${name} is ${age} years old!`);
}

displayAge('Teddy', generateRandomNumber(20, 200));
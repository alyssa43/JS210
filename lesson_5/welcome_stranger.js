function greetings(nameArray, occupationObject) {
  const name = nameArray.join(' ');
  const occupation = Object.values(occupationObject).join(' ');

  console.log(`Hello, ${name}! Nice to have a ${occupation} around.`)
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.
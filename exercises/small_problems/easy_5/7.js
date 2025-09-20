// function swapName(fullName) {
//   const [firstName, lastName] = fullName.split(' ');
//   return `${lastName}, ${firstName}`;
// }

// Further Exploration:

function swapName(fullName) {
  const splitNames = fullName.split(' ');
  const lastName = splitNames.pop();
  
  return `${lastName}, ${splitNames.join(' ')}`;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Von Mises')); // "Mises, Karl Von"
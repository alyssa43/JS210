// const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
// const isMidnight = true;
// const isFullmoon = true;

// function isTransformable(species) {
//   return species[0] === 'w';
// }

// function transform(species) {
//   return `were${species}`;
// }

// for (let index = 0; index < species.length; index++) {
//   const thisSpecies = species[index];
//   var newSpecies;

//   if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
//     newSpecies = transform(thisSpecies);
//   }

//   if (newSpecies) {
//     console.log(`Beware of the ${newSpecies}!`);
//   }
// }

// The reason this isn't working as expected, is because of how JavaScript handles variables declared with `var`. This creates a function scoped, or in this case (because it is not within a function), a globally scoped variable. Because of this JavaScript hoists the `var newSpecies` declaration to the top, outside of the `for` loop. By doing this we do not create a new `newSpecies` variable with each iteration of the `for` loop. This, in turn makes the last `if` block to evaluate as true for all iterations of this loop.

// We can resolve this a couple ways. Most simply, we can just change the variable declaration with the `let` keyword, like so:

const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
const isMidnight = true;
const isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return `were${species}`;
}

for (let index = 0; index < species.length; index++) {
  const thisSpecies = species[index];
# highlight
  let newSpecies;
# endhighlight

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
    newSpecies = transform(thisSpecies);
  }

  if (newSpecies) {
    console.log(`Beware of the ${newSpecies}!`);
  }
}

// Another way to resolve this issue is to avoid using the `newSpecies` variable entirely. We can combine both `if` blocks into the same block, since the last `if` blocks currently (should) only execute if all three of the first `if` block conditions evaluate as true. Like so:

const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
const isMidnight = true;
const isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return `were${species}`;
}

for (let index = 0; index < species.length; index++) {
  const thisSpecies = species[index];

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
    console.log(`Beware of the ${transform(thisSpecies)}!`);
  }
}
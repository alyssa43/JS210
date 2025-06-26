let names = ['bob', 'joe', 'steve', undefined, 'frank'];

names.forEach(name => {
  try {
    console.log(`${name}'s name has ${name.length} letters in it.`);
  } catch (exception) {
    console.log('Something went wrong.');
  }
});

// It's also possible to raise your own exceptions:
function foo(number) {
  if (typeof number !== "number") {
    throw new TypeError("expected a number");
  }

  // we're guaranteed to have a number here
}


const person = {
  firstName () {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`);

// This code will iterpolate the function objects into our output because we are invoking the functions `firstName` and `lastName` without the parentheses. This means that instead of seeing the values returned by these function calls, we see the function definitions.
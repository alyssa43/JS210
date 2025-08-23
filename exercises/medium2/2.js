// Read through the following code. Currently, it does not log the expected result. Explain why this happens, then refactor the code so that is works as expected.

const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person === otherPerson); // false -- expected: true

// This logs `false` because the strict equality operator (as well as the loose equality operator) only returns true when comparing objects, if the two objects being compared are the same object. There are two ways for this code to return `true`. 
// We could make sure `otherPerson` is assigned to the same object literal reference as the `person` variable, like so:

const person = { name: 'Victor' };
const otherPerson = person;

console.log(person === otherPerson); // true

// Or, probably more accurately to what we wanted to do. We could compare the value of each object literals `name` property, like so:

const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person.name === otherPerson.name); // true
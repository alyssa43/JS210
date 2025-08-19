const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2); // ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo']

// The output of `array2` is because when we call `toUpperCase()` on the `array1[i]` elements that begin with `'C'`, this has no effect on the strings that are referenced in `array2`. This is because strings are a primitive data type and therefore cannot be mutated. The `toUpperCase` method invocation returns a new string, rather than mutating the calling object. This means that the elements that do receive this method call, will be reassigned - rather than mutated.

// Further Exploration:
// Q: What would happen if an object literal was part of the `array1` elements pushed to `array2`? Would changes made to the object literal in `array1` be reflectd in `array2`?
// A: Yes, because objects (arrays and object literals) are mutable, meaning that they can be mutated. This means that if `array1` and `array2` both have an element that references the same object literal in memory - both arrays will see any mutations made to that object literal.

// Q: How would you change the code so that any changes made to `array1` in the second `for` loop get refelected to `array2`?
// A: We could add this line:

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
// highlight
    array2[i] = array1[i];
// endhighlight
  }
}

// This would reassign the element's in the `array2` array to also reference the newly assigned `array1` elements.
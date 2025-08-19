const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

let a = 'a'

console.log(myObject[1]); // d - When using bracket notation with an Integer, JS uses `toString()` to convert it to a String.
console.log(myObject[a]); // Raises an exception because `a` is not a variable, and when using bracket notation JS searches for a local variable 
console.log(myObject.a); // name


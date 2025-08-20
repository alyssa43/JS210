// What will the following code log to the console and why?
const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456'; // reassigns `prop2`:
// myObject => {prop1: '123', prop2: '456', 'prop 3': '345'}
myObject[prop2] = '678'; // creates new property `456`:
// myObject => {prop1: '123', prop2: '456', 'prop 3': '345, 456: '678'}

console.log(myObject[prop2]); // '678'
console.log(myObject.prop2);  // '456'

// The reason we are seeing the outputs we are is because of the differences
// in bracket and dot noation. When we access a property with bracket notation
// JavaScript will evaluate the expression within the brackets. This means that
// if the contents are a String, it will search for a property with that name
// (since all property names are strings). If the contents of the brackets are 
// a local variable, then JavaScript will use the value that local variable 
// references as the property name. So, in this case `myObject[prop2]` is 
// essentially the same as `myObject['456']`, since `prop2 references the String
// '456'`. If we use dot notation JavaScript searchs the object for a property 
// with that name. For a property name to be able to be referenced with dot 
// notation the name needs to be a one-word string (no space).

// Further Exploration:
// Here is another example. What do you think will be logged to the console this
// time, and why?

const myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj); // => {'funcProp': 'hello, '}
myObj[myFunc()] = 'world!';
console.log(myObj); // => {'funcProp': 'world!'}

// In this code we start with `myObj` referencing an empty object literal. Then
// on the next line, we are using bracket notation to assign a new property/value
// within `myObj`. Because we are using bracket notation JavaScript will evaluate
// the expression within the brackets, which in this case is the function call
// `myFunc()`, which returns the string `'funcProp'`. This means the property 
// name will be `'funcProp'` and the value will be the string `'hello, '`. The is
// why we see the first input we do. We then reassign the value the `funcProp` 
// property references to now reference the string `'world!'`, which is why we 
// see the second input we do.
let p = console.log;

// 1. Write a function named objectHasProperty that takes two arguments: an Object and a String. The function should return true if the Object contains a property with the name given by the String, false otherwise.

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

function objectHasProperty(object, string) {
  const keys = Object.keys(object);
  return keys.includes(string);
}

p(objectHasProperty(pets, 'dog'));       // true
p(objectHasProperty(pets, 'lizard'));    // false
p(objectHasProperty(pets, 'mice'));      // true

// 2. Write a function named incrementProperty that takes two arguments: an Object and a String. If the Object contains a property with the specified name, the function should increment the value of that property. If the property does not exist, the function should add a new property with a value of 1. The function should return the new value of the property.

let wins = {
  steve: 3,
  susie: 4,
};

function incrementProperty(object, string) {
  if (objectHasProperty(object, string)) {
    return object[string] += 1;
  } else {
    return object[string] = 1;
  }
}

p(incrementProperty(wins, 'susie'));   // 5
p(wins);                               // { steve: 3, susie: 5 }
p(incrementProperty(wins, 'lucy'));    // 1
p(wins);                               // { steve: 3, susie: 5, lucy: 1 }

// 3. Write a function named copyProperties that takes two Objects as arguments. The function should copy all properties from the first object to the second. The function should return the number of properties copied.

let hal = {
  model: 9000,
  enabled: true,
};

function copyProperties(obj1, obj2) {
  let count = 0;
  for (let property in obj1) {
    obj2[property] = obj1[property];
    count += 1;
  }

  return count;
}

let sal = {};
p(copyProperties(hal, sal));  // 2
p(sal);                       // { model: 9000, enabled: true }

// 4. Write a function named wordCount that takes a single String as an argument. The function should return an Object that contains the counts of each word that appears in the provided String. In the returned Object, you should use the words as keys, and the counts as values.

function wordCount(string) {
  const words = string.split(' ');
  let result = {};
  words.forEach(word => incrementProperty(result, word));

  return result;
}

p(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }
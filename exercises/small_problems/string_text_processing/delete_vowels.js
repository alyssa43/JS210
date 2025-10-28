function removeVowels(stringArray) {
  const VOWELS = /[aeiou]/ig;
  return stringArray.map(str => str.replace(VOWELS, ''));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         
// ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  
// ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                
// ["BC", "", "XYZ"]
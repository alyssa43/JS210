function swap(string) {
  const words = string.split(' ');
  
  return words.map(word => {
    if (word.length === 1) return word;

    const endIndex = word.length - 1;

    return word[endIndex] + word.slice(1, endIndex) + word[0];
  }).join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
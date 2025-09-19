// Original:
// function wordSizes(string) {
//   const result = {};
//   if (string.length === 0) return result;

//   string.split(' ').forEach(word => {
//     const wordLength = String(word.length);

//     if (result.hasOwnProperty(wordLength)) {
//       result[wordLength] += 1;
//     } else {
//       result[wordLength] = 1;
//     }
//   });

//   return result;
// }

// Refactored:

function wordSizes(string) {
  const result = {};

  string.split(' ').forEach(word => {
    if (word.length > 0) {
      result[word.length] = (result[word.length] || 0) + 1;
    }
  });

  return result;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
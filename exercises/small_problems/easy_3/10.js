function wordSizes(string) {
  const result = {};

  string.split(' ').forEach(word => {
    const chars = word.match(/[a-zA-Z]/g);

    if (chars) {
      result[chars.length] = (result[chars.length] || 0) + 1;
    }
  });

  return result;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}
console.log(wordSizes(' -- '))                                         // {}
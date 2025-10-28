// function wordCap(string) {
//   return string.split(' ').map(word => {
//     return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
//   }).join(' ');
// }

// Using RegEx

function wordCap(words) {
  return words.replace(/\S+/g, capitalizeString);
}

function capitalizeString(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
console.log(wordCap('line1\tline2'));

// const result = string.replace(/\S+/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
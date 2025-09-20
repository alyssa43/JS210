function reverseWords(string) {
  return string.split(' ').map(word => {
    return word.length >= 5 ? reverseString(word) : word;
  }).join(' ');
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
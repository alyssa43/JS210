function doubleConsonants(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return string.split('').map(char => {
    const isAlphabetical = /[a-z]/i.test(char);
    const isVowel = vowels.includes(char.toLowerCase());
    
    return isAlphabetical && !isVowel ? char + char : char;
  }).join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
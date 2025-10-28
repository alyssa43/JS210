// even indexed alphabetic characters should be uppercase
// odd indexed alphabetic characters should be lowercase

// function staggeredCase(text) {
//   let result = '';

//   for (let i = 0; i < text.length; i += 1) {
//     const char = text[i];
//     result += i % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
//   }

//   return result;
// }

// Solution using map

// function staggeredCase(text) {
//   return [...text].map(determineCase).join('');
// }

// function determineCase(char, index) {
//   return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
// }

// Another solution using replace

function staggeredCase(text) {
  return text.replace(/[a-z]/gi, determineCase);
}

function determineCase(char, index) {
  return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
}

console.log(staggeredCase('I Love Launch School!'));        
// "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     
// "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   
// "IgNoRe 77 ThE 4444 nUmBeRs"
// First Solution:

// function staggeredCase(text) {
//   let letterIndex = 0;

//   return [...text].map(char => {
//     if (/[a-z]/i.test(char)) {
//       const newChar = determineCase(char, letterIndex);
//       letterIndex += 1;
//       return newChar;
//     } else {
//       return char;
//     }
//   }).join('');
// }

function staggeredCase(text) {
  let capitalizeNext = true;

  return text.replace(/[a-z]/gi, char => {
    const newChar = capitalizeNext ? char.toUpperCase() : char.toLowerCase();
    capitalizeNext = !capitalizeNext;
    return newChar;
  });
}

console.log(staggeredCase('I Love Launch School!'));        
// "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     
// "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    
// "IgNoRe 77 ThE 444 nUmBeRs"
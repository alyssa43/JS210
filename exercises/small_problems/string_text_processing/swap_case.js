function swapCase(text) {
  return text.replace(/[a-z]/ig, changeCharCase);
}

function changeCharCase(char) {
  const charIsUpperCase = char === char.toUpperCase();
  return charIsUpperCase ? char.toLowerCase() : char.toUpperCase();
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
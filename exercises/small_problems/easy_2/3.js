function stringy(stringLength) {
  let string = '';
  
  for (let i = 1; i <= stringLength; i++) {
    if (string.endsWith('1')) {
      string += '0';
    } else {
      string += '1';
    } 
  }

  return string;
}

console.log(stringy(6) === "101010");
console.log(stringy(9) === "101010101");
console.log(stringy(4) === "1010");
console.log(stringy(7) === "1010101");
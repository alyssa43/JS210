function crunch(string) {
  let result = '';

  for (let char of string) {
    if (char !== result[result.length - 1]) {
      result += char;
    }
  }

  return result;
}

// Further Exploration:

function crunch(string) {
  let result = '';

  for (let char of string) {
    if (!result.endsWith(char)) {
      result += char;
    }
  }

  return result;
}

// Using regex:

function crunch(string) {
  let result = '';

  for (let char of string) {
    let regex = new RegExp(`${char}$`);

    if (!regex.test(result)) {
      result += char;
    }
  }

  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee')    === "daily double");
console.log(crunch('4444abcabccba')              === "4abcabcba");
console.log(crunch('ggggggggggggggg')            === "g");
console.log(crunch('a')                          === "a");
console.log(crunch('')                           === "");
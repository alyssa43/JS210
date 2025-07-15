function splitChars(string) {
  let result = [];

  for (let i = 0; i < string.length; i++) {
    result.push(string[i]);
  }

  return result;
}

function splitByDelimiter(string, delimiter) {
  let result = [];
  let new_string = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] === delimiter) {
      result.push(new_string);
      new_string = '';
    } else if (i === string.length - 1) {
      new_string += string[i];
      result.push(new_string);
    } else {
      new_string += string[i];
    }
  }

  return result;
}

function splitString(string, delimiter) {
  let result;

  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  } else if (delimiter === '') {
    result = splitChars(string);
  } else {
    result = (splitByDelimiter(string, delimiter));
  }

  result.forEach(string => console.log(string));
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello
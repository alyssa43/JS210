const UPPERCASE_RANGE = createRange(asciiValue('A'), asciiValue('Z'));
const LOWERCASE_RANGE = createRange(asciiValue('a'), asciiValue('z'));

function createRange(start, end) {
  let range = [];
  for (let i = start; i <= end; i++) range.push(i);

  return range;
}

function asciiValue(char) {
  return char.charCodeAt(0);
}

function isUpperCase(char) {
  return char === char.toUpperCase();
}

function rotCharacter(char) {
  const OFFSET = 13;
  let range = isUpperCase(char) ? UPPERCASE_RANGE : LOWERCASE_RANGE;
  let index = range.indexOf(asciiValue(char));
  let middleIndex = (range.length / 2) - 1;
  let newIndex = index <= middleIndex ? index + OFFSET : index - OFFSET;

  return String.fromCharCode(range[newIndex]);
}

function rot13(string) {
  let result = '';

  for (let char of string) {
    result += /[^a-zA-Z]/.test(char) ? char : rotCharacter(char);
  }

  return result;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.') === 'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.');

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')) === 'Teachers open the door, but you must enter by yourself.');

// logs:
// Teachers open the door, but you must enter by yourself.
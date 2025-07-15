function findStart(string, start) {
  return start < 0 ? start + string.length : start;
}

function findLength(string, start, length) {
  if (length > string.length || length === undefined) { 
    return string.length - start;
  } else {
    return length;
  }
}

function substr(string, start, length) {
  start = findStart(string, start);
  length = findLength(string, start, length);
  let result = '';

  for (let i = start; length > 0; i++) {
    result += string[i];
    length--;
  }

  return result;
}

let string = 'hello world';

console.log(substr(string, 2, 4) === "llo ");
console.log(substr(string, -3, 2) === "rl");
console.log(substr(string, 8, 20) === "rld");
console.log(substr(string, 0, -20) === "");
console.log(substr(string, 0, 0) === "");
console.log(substr('hello world', 2, 5) === 'llo w');
console.log(substr(string, 1) === 'ello world');

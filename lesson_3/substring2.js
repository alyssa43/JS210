function findIndex(stringLength, index) {
  if (index === undefined || index > stringLength) {
    return stringLength;
  } else if (Number.isNaN(Number(index)) || index < 0) {
    return 0;
  } else {
    return index;
  }
}

function substring(string, start, end) {
  let result = '';
  start = findIndex(string.length, start);
  end = findIndex(string.length, end);

  if (start > end) [start, end] = [end, start]

  for (let i = start; i < end; i++) {
    result += string[i];
  }

  return result;
}

let string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"
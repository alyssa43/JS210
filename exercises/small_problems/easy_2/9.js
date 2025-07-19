function cleanUp(string) {
  let result = '';

  for (let char of string) {
    if (/[a-zA-Z]/.test(char)) {
      result += char;
    } else if (!result.endsWith(' ')) {
      result += ' ';
    }
  }

  return result;
}

cleanUp("---what's my +*& line?");    // " what s my line "
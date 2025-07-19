function logInBox(string) {
  let topAndBottomLine = '+-' + '-'.repeat(string.length) + '-+';
  let emptyLine = '| ' + ' '.repeat(string.length) + ' |';
  let stringLine = '| ' + string + ' |';

  console.log(topAndBottomLine);
  console.log(emptyLine);
  console.log(stringLine);
  console.log(emptyLine);
  console.log(topAndBottomLine);
}

// Further Exploration:

function calculateAdjustedWidth(string, maxWidth) {
  return maxWidth ? maxWidth - 4 : string.length;
}

function logInBox(string, maxWidth) {
  let adjustedWidth = calculateAdjustedWidth(string, maxWidth); 
  let topAndBottomLine = '+-' + '-'.repeat(adjustedWidth) + '-+';
  let emptyLine = '| ' + ' '.repeat(adjustedWidth) + ' |';

  if (string.length > maxWidth) {
    string = string.slice(0, adjustedWidth);
  }

  let stringLine = '| ' + string + ' |';

  console.log(topAndBottomLine);
  console.log(emptyLine);
  console.log(stringLine);
  console.log(emptyLine);
  console.log(topAndBottomLine);
 }

logInBox('To boldly go where no one has gone before.', 35);
logInBox('To boldly go where no one has gone before.');
logInBox('');
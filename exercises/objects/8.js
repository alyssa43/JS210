function penultimate(string) {
  return string.split(' ')[-2];
}

penultimate('last word');                    // expected: "last"
penultimate('Launch School is great!');      // expected: "is"

// These two function invocations will both return `undefined`. The reason we are seeing that is because we have the `-2` within the bracket notation. The first part of our chained code: `string.split(' ')` splits the input string up by the spaces within the string, returning an array where each element is a word:
//'last word' => ['last', 'word']
// 'Launch School is great!' => ['Launch', 'School', 'is', 'great!']
// The issue is that we are trying to use a negative integer to access an element via index. In JavaScript, indexes are only non-negative integers. So, when JavaScript gets a negative integer inside bracket notation, it searches that object for a property with that name (if it is a number it get's coerced into a string). This means that we are searching the returned array for a property with the name `'-2'`, which there is not one and why `undefined` is returned.
// To properly access the second to last element in an array we should calculate the index by using `array.length - 2`. The corrected code would be:

function penultimate(string) {
  const words = string.split(' ');
  return words[words.length - 2];
}
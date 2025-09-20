function centerOf(string) {
  const mid = Math.floor(string.length / 2);
  const isEven = string.length % 2 === 0;
  const char = string[mid];

  return isEven ? string[mid - 1] + char : char;
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"

// mid = floor(string.length / 2)
// odd length => 1 char => string.slice(mid, mid + 1)
// even length => 2 chars => string.slice(mid - 1, mid + 1)
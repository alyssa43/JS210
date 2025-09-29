// Problem: Given a string, return an array that contains all substrings that exist from the starting point of the 0 index.
  // Rules: The substrings should be ordered from shortest to longest

// Examples & Algorithm:
  // Given string => 'abc'
  // Transform to array of charaters => ['a' 'b' 'c']
  // Transform array of characters passing in index 
    // char = 'a' & index = 0 => slice string 0, 0 =>  '' + 'a' => 'a'
    // char = 'b' & index = 1 => slice string 0, 1 => 'a' + 'b' => 'ab'
    // char = 'c' & index = 2 => slice string 0, 2 => 'ab' + 'c'

function leadingSubstrings(string) {
  return string.split('').map((char, index) => string.slice(0, index) + char);
}
 
console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
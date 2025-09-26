// Solution w/o helper
// function substrings(string) {
//   const result = [];

//   for (let index1 = 0; index1 < string.length; index1 += 1) {
//     for (let index2 = index1; index2 < string.length; index2 += 1) {
//       result.push(string.slice(index1, index2 + 1));
//     }
//   }

//   return result;
// }

// Solution using `substrings`
function leadingSubstrings(string) { // 'abc' => ["a", "ab", "abc"]
  return string.split('').map((char, index) => {
    return string.slice(0, index) + char;
  });
}

function substrings(string) {
  const result = [];
  for (let i = 0; i < string.length; i += 1) {
    result.push(...leadingSubstrings(string.slice(i, string.length)))
  }

  return result;
}

// 'abcde' => [a,ab,abc,abd,abcd,abcde]
// 'bcde'  => [b,bc,bcd,bcde]
// 'cde'   => [c,cd,cde]
// 'de'    => [d,de]
// 'e'     => [e]


console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
  // 
  
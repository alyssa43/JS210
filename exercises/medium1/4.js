function getSelectedColumns(numbers, cols) {
  var result = [];

  for (var i = 0, length = numbers.length; i < length; i += 1) {
    for (var j = 0, length = cols.length; j < length; j += 1) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}

// given the following arrays of number arrays
const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// `array1` in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

getSelectedColumns(array1, [0]);     // [[1]];            expected: [[1, 4, 7]]
getSelectedColumns(array1, [0, 2]);  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
getSelectedColumns(array2, [1, 2]);  // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]

// first iteration:
  // i = 0 ; length = 3
    // j = 0 ; (length gets reassigned) length = 1
      // result [0] => undefined => !undefined === true
        // result[0] => [] => result === [ [] ]

        // result[0][0] = numbers[0][cols[0]]
        // result[0][0] = 1
        // result = [ [1] ]
// seconds iteration:
  // j = 1 ; length = 1 ; j < length => 1 < 1 === false (inner for loop breaks out)

// next iteration:
  // i gets incremented
  // i = 1 ; length = 1 (becasue it was reassigned)
  // i < length => 1 < 1 === false (outer for loop breaks out)

// result = [ [1] ] <= returned value

// The issue with this code is that we have initialized a `length` variable in the first `for` loop that is used as the condition to break from the loop. We then create another `for` loop nested within the first `for` loop where we attempt to create another `length` variable as the condition to break from the inner loop. However, because we used `length` for both variables, `length` ends up getting reassigned in the inner most `for` loop, which causes the outer for loop to exit before we intended to.

// By declaring the `length` variable with `var` the `length` variable has function scope. This is why it ends up getting reassigned. If we had used the `let` keyword to declare `length` we would have two separate `length` variables that are block scoped (think variable shadowing).

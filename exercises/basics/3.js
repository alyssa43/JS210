// One of the ways to manage the flow of a program is through the use of conditionals. Go over the code below and specify how many unique execution paths are possible.

if (condition1) {
  // ... if condition 1 is truthy this path will execute
  if (condition2) {
    // ... if condition 1 and condition 2 are truthy this path will execute
  } else {
    // ... if condition 1 is truthy and condition 2 is falsy this path will execute
  }
} else {
  // if condition 1 is falsy this path will execute
  if (condition4) {
    // ... if condition 1 is falsy and condition 4 is truthy this path will execute
    if (condition5) {
    // ... if condition 1 is falsy and condition 4 and condition 5 are truthy this path will execute
    }
  }
}
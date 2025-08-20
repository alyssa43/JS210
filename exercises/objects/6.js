// A user wrote a function that takes an array as an argument and returns its average. Given the code below, the user expects the `average` function to return `5`. Is the user's expectation correct? Why or why not?

const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

average(myArray);

// No, this code will return `10` instead of `5`. This is because within the `for` loop we are initializing our iterator `i` to reference `-2`. By doing so we are getting adding the values at the `-2` and `-1` properties into the `sum`. But then we are divinding by the length of `myArray`, which doesn't count the arrays properties, only the elements. This is why we see `10` as the result, because `20 / 2` (`sum / array.length`) is `10`.
// To correct this error, we should either assign our iterator `i` to reference `0`, or keep the `for` loop as is but divide `sum` by the total number of elements AND properties by using `Object.keys(myArray).length`.

// Further Exploration:
// Refactor the `average` function so that it returns the result the the user expected, `5`.

function average(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}
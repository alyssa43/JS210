// The `productOfSums` function shown below is expected to return the product of the sums of two arrays of numbers. Read through the following code. Will it produce the expected result? Wny or why not?

function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}

// No, it will not return the expected result. Our `total` function has multiple issues that need to be corrected for it to work as expected. First, the first line of code within the `total` function definition body declares the `sum` variable, but does not assign it. This means that when we try to increment `sum` in the `for` loop with `sum += numbers[i]` we are trying to add a numeric value to `sum` which is currently unset and therefore when we try to add a numeric value to it, we get a return value of `NaN`. To avoid this from happening we should declare `sum` *and* assign it to reference `0` on that first line within the `total` function definition. Secondly, we do not return the value of `sum` from the `total` function. We must add the `return` keyword before `sum` for that value to be returned. The corrected code looks like:

function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  return sum;
}
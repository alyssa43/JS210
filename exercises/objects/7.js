function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

calculateBonus(2800, true);               // 1400
calculateBonus(1000, false);              // 0
calculateBonus(50000, true);              // 25000

// By using `arguments` it allows us to access the values passed in as the arguments upon invocation of the function. `arguments` is an "Array-like" object that allows us to access the arguments passed into the function invocation by using the indexes of the elements we wish to access. Meaning, the first argument passed in would be `arguments[0]` and the next argument passed in would be `arguments[1]` and so on.
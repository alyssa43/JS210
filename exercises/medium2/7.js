function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne(...args) {
    let result = '';
    for (let i = 0; i < args.length; i += 1) {
      result += String.fromCharCode(args[i]);
    }

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101));
    anotherOne(116, 111);
  }

  anotherAnotherOne();
  anotherOne(116, 104, 101);
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33);

// Execution of this code is as follows:
// line 25: we invoke `one()`
  // line 20: invoke `anotherAnotherOne()`:
    // line 16: console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101))
      // => outputs => Welcome
    // line 17: invoke `anotherOne(116, 111)
      // lines 7-10: creates a string: `result = 'to'`
      // line 12: invoke `log(result)`
        // line 3: console.log(result)
          // => outputs => to
        // exits `log` function
    // exits `anotherOne` function
  // exits `anotherAnotherOne` function
  // line 21: invoke `anotherOne(116, 104, 101)`
    // lines 7-10: creates a string: `result = 'the'`
    // line 12: invoke `log(result)`
      // line 3: console.log(result)
        // => outputs => the
      // exits `log` function
    // exits `anotherOne` function
  // line 22: returns function object => [Function: anotherOne]
// The function object returned (`[Function: anotherOne]`) returned by `one()` on line 25 then uses the arguments `(77, 97, 116, 114, 105, 120, 33)`
// This invokes the `anotherOne` function and passes the previously listed arguments to it.
  // lines 7-10: creates a string: `result = 'Matrix!'`
  // line 12: invoke `log(result)`
    // line 3: console.log(result)`
      // => output => Matrix!
    // exits `log` function
  // exits `anotherOne` function
// returns to outer most scope - end of code
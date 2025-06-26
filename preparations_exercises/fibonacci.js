function fibonacci(number) {
  if (number < 2) return number;
  return fibonacci(number -1) + fibonacci(number -2);
}

console.log(fibonacci(6)); // => 8
// number => 6

// fib(5) => 5
  // fib(4) => 3
    // fib(3) => 2
      // fib(2) => 1 
        // fib(1) => 1
        // fib(0) => 0 => 1+0 => 1
      // fib(1) => 1+1 => 2
    // fib(2) => 1+2 => 3
      // fib(1) => 1
      // fib(0) => 0 => 1+0 => 1
  // fib(3) => 2+3 => 5
    // fib(2) => 1
      // fib(1) => 1
      // fib(0) => 0 => 1+0 => 1 
    // fib(1) => 1+1 => 2

// fib(4) => 3+5 => 8 <---- Answer
  // fib(3) => 2
    // fib(2) => 1
      // fib(1) => 1
      // fib(0) => 0 => 1+0 => 1
    // fib(1) => 1+1 => 2
  // fib(2) => 1+2 => 3
    // fib(1) => 1
    // fib(0) => 1+0 => 1
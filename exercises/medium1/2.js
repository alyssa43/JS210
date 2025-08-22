let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}
/*
No, this will produce an infinite loop.
Because we have the incrementation of `i` in the else block, `i` would only get incremented when `i % 3` doesn't equal zero. So, because initially `i` is assigned to reference the value `0`, when we get to the `if` condition `i % 3 === 0` will evaluate as true, which logs `0`. Then the `else` block gets passed over and the `if` block will just keep executing, never incrementing `i`.
*/
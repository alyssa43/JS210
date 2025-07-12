function logMultiples(number) {
  for (let current_num = 100; current_num >= number; current_num--) {
    if (current_num % number === 0 && current_num % 2 != 0) {
      console.log(current_num);
    }
  }
}

logMultiples(17);
// output (5x, 3x and 1x)
85
51
17

logMultiples(21);
// output (3x and 1x)
63
21

// Further Exploration:

function logMultiples(number) {
  for (let multiple = Math.floor(100/ number) * number; multiple >= 0; multiple -= number) {
    if (multiple % 2 != 0) {
      console.log(multiple);
    }
  }
}
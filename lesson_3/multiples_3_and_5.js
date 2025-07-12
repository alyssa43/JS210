function multiplesOfThreeAndFive() {
  for (let num = 1; num <= 100; num++) {
    let multiple_of_three = num % 3 === 0;
    let multiple_of_five = num % 5 === 0;
    if (multiple_of_three && multiple_of_five) {
      console.log(`${num}!`);
    } else if (multiple_of_five || multiple_of_three) {
      console.log(`${num}`);
    }
  }
}

multiplesOfThreeAndFive();

// output on console
'3'
'5'
'6'
'9'
'10'
'12'
'15!'
// … remainder of output omitted for brevity

// Further Exploration:

function multiplesOfThreeAndFive(min, max) {
  for (let num = min; num <= max; num++) {
    let multiple_of_three = num % 3 === 0;
    let multiple_of_five = num % 5 === 0;
    if (multiple_of_three && multiple_of_five) {
      console.log(`${num}!`);
    } else if (multiple_of_five || multiple_of_three) {
      console.log(`${num}`);
    }
  }
}

multiplesOfThreeAndFive(1, 100);

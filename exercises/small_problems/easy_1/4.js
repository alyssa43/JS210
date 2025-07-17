let rlSync = require('readline-sync');

function calculateTip() {
  let bill = parseFloat(rlSync.question('What is the bill? '));
  let percentage = parseInt(rlSync.question('What is the tip percentage? '));

  let tip = bill * (percentage / 100);
  let total = bill + tip;

  console.log(`The tip is $${tip.toFixed(2)}`);
  console.log(`The total is $${total.toFixed(2)}`);
}

calculateTip();
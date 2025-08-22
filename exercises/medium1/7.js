// function invoiceTotal(amount1, amount2, amount3, amount4) {
//   return amount1 + amount2 + amount3 + amount4;
// }

invoiceTotal(20, 30, 40, 50);         // works as expected
invoiceTotal(20, 30, 40, 50, 40, 40); // does not work; how can you make it work?

// To make this function work with any number of arguments we can use rest parameters. This will put all of the arguments into an array. We can then use the `reduce` method to sum all of the values:

function invoiceTotal(...amounts) {
  return amounts.reduce((sum, amount) => sum + amount, 0);
}
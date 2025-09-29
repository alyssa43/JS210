// Problem: 
  // Given two arguments; a number that represents an items id and an array of transaction objects, return `true` or `false` if that item is available.
  // Rules:
    // Each transaction object has the following properties:
      // `id`
      // `movement`
      // `quantity`
    // A `movement` of `'in'` with a quantity of `5` means inventory +5 for that item
    // A `movement` of `'out'` with a quantity of `5` means inventory -5 for that item
    // Use the previous `transactionsFor` function 

function transactionsFor(itemId, transactions) {
  return transactions.filter(transaction => transaction.id === itemId);
}

function inventoryCount(itemId, transactions) {
  const itemTransactions = transactionsFor(itemId, transactions);

  return itemTransactions.reduce((count, {movement, quantity}) => {
    return count + (movement === 'in' ? quantity : -quantity);
  }, 0);
}

function isItemAvailable(itemId, transactions) {
  return inventoryCount(itemId, transactions) > 0;
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
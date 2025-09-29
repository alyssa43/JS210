// Problem: Given two arguments; a number representing an inventory item ID and an array where each element in an Object literal that represents a transaction, return an array that contains only the transactions that match the iventory item ID.
// Rules:
  // The transaction object will have three properties, `id`, `movement`, and `quantity`.

// Algorithm:
  // Filter through the transactions
    // Retrieve the value of the current transactions `id` property
    // Select object is current transactions id is equal to given item id

function transactionsFor(itemId, transactions) {
  return transactions.filter(transaction => transaction.id === itemId);
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

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
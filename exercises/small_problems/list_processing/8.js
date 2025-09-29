// Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array. Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit. The output array is such that each fruit name appears the number of times equal to its desired quantity.

// First Result:
// function buyFruit(list) {

//   const result = [];
//   for (let [fruit, quantity] of list) {
//     times(quantity, () => addItemToArray(fruit, result));
//   }

//   return result;
// }

// Result using `reduce`:

function addItems(item, array) {
  array.push(item);
}

function times(n, func) {
  for (let i = 0; i < n; i += 1) {
    func(i);
  }
}

function buyFruit(list) {
  return list.reduce((result, [fruit, quantity]) => {
    times(quantity, () => addItems(fruit, result));
    return result;
  }, []);
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// let shoppingCart = [
//   { category: 'produce', items: ['apple', 'banana', 'carrot'] },
//   { category: 'dairy', items: ['milk', 'cheese'] },
//   { category: 'pantry', items: ['bread'] }
// ];

// // Our goal is to get this array: ['apple', 'banana', 'carrot', 'milk', 'cheese', 'bread'].

// let itemsArrays = shoppingCart.map(cart => cart.items);
// console.log(itemsArrays); 
// // [ [ 'apple', 'banana', 'carrot' ], [ 'milk', 'cheese' ], [ 'bread' ] ]

// let allItems = itemsArrays.reduce((result, currentItems) => {
//   return result.concat(currentItems);
// }, []);

// console.log(allItems); 
// // [ 'apple', 'banana', 'carrot', 'milk', 'cheese', 'bread' ]

// Solution using custom `times` function
// function buyFruit(groceryList) {
//   const result = [];

//   groceryList.forEach(itemArr => {
//     const [ item, quantity ] = itemArr;
//     times(quantity, () => result.push(item));
//   });

//   return result;
// }

// function times(n, callback) {
//   for (let i = 0; i < n; i += 1) {
//     callback(i);
//   }
// }


function  buyFruit(groceryList) {
  const result = [];

  for (let i = 0; i < groceryList.length; i += 1) {
    const [ item, quantity ] = groceryList[i];
    for (let i = 0; i < quantity; i += 1) {
      result.push(item);
    };
  };

  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
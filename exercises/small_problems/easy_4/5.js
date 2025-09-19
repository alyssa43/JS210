function interleave(...arrays) {
  const result = [];

  for (let i = 0; i < arrays[0].length; i += 1) {
    arrays.forEach(array => {
      result.push(array[i]);
    })
  }

  return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
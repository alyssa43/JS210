const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); // ['JavaScript', 'Ruby', 'Python']
console.log(languages.length); // 3

languages.length = 4;
console.log(languages); // ['JavaScript', 'Ruby', 'Python', <1 empty item> ]
console.log(languages.length); // 4

languages.length = 1;
console.log(languages); // ['JavaScript']
console.log(languages.length); // 1

languages.length = 3;
console.log(languages); // ['JavaScript', <2 empty items> ]
console.log(languages.length); // 3

languages.length = 1;
languages[2] = 'Python';
console.log(languages);  // ['JavaScript', <1 empty item>, 'Python']
console.log(languages[1]); // undefined
console.log(languages.length); // 3

// These results occur because how JavaScript's array `length` property behaves. We are able to adjust the length of an Array by calling `length` on the array and assigning it a value. When you adjust the length of a 3 element array to a new length of 4, it will create an empty slot in the last index. An Array that has an empty slot(s) is known as a sparse array. When you reference an empty slot in an array, the returned value will be `undefined`.
//  And likewise, when you adjust a 3 element array to a new length of 1, it will permanently remove the last two elements (1 and 2 index) from the array. 
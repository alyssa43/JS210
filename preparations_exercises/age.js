let rlSync = require('readline-sync');
let age = Number(rlSync.question("How old are you?\n"))

console.log(`You are ${age} years old.`);

for (let increment = 10; increment <= 40; increment += 10) {
  console.log(`In ${increment} years, you will be ${age + increment} years old.`);
}

// console.log(`In 10 years, you will be ${age + 10} years old.`);
// console.log(`In 20 years, you will be ${age + 20} years old.`);
// console.log(`In 30 years, you will be ${age + 30} years old.`);
// console.log(`In 40 years, you will be ${age + 40} years old.`);
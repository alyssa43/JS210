const rlSync = require('readline-sync');

function getAge() {
  return Number(rlSync.question('What is your age? '));
}

function getDesiredRetirementAge() {
  return Number(rlSync.question('At what age would you like to retire? '));
}

function displayRetirement() {
  const age = getAge();
  const retirementAge = getDesiredRetirementAge();
  const currentYear = (new Date).getFullYear();
  const yearsRemaining = retirementAge - age;
  const retirementYear = currentYear + yearsRemaining;


  console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
  console.log(`You only have ${yearsRemaining} years of work to go!`);
}

displayRetirement()
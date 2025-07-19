let rlSync = require('readline-sync');

function madLibs() {
  let noun = getWord('noun');
  let verb = getWord('verb');
  let adjective = getWord('adjective');
  let adverb = getWord('adverb');

  console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
}

function getWord(type) {
  let word = rlSync.question(`Enter a ${type}: `);

  return word ? word : getWord(type);
}

madLibs();
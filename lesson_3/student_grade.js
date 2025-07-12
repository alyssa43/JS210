function getScores(numberOfScores) {
  let rlSync = require('readline-sync');
  let scores = [];

  for (let i = 1; i <= numberOfScores; i++) {
    scores.push(Number(rlSync.question(`Enter score ${i}: `)));
  }

  return scores;
}

function getLetterGrade(score) {
  if (score >= 90) {
    return 'A';
  } else if (score >= 70) {
    return 'B';
  } else if (score >= 50) {
    return 'C';
  } else {
    return 'F';
  }
}

function displayAverageScore(scores) {
  let total = scores.reduce((acc, score) => acc + score, 0);
  let average = Math.floor(total / scores.length)
  let grade = getLetterGrade(average);
  console.log(`Based on the average of your ${scores.length} scores your letter grade is "${grade}".`);
}

displayAverageScore(getScores(3));

// // prompts to get the 3 scores
// Enter score 1: 90
// Enter score 2: 50
// Enter score 3: 78

// // log to the console
// Based on the average of your 3 scores your letter grade is "B".
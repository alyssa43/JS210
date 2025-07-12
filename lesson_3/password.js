function isPasswordValid(attempted_password, password) {
  return attempted_password === password;
}

function enterPassword() {
  let rlSync = require('readline-sync');
  let password = rlSync.question("What is the password: ");
  return password;
}

function logInUser(password) {
  for (let attempts = 0; attempts < 3; attempts++) {
    if (isPasswordValid(enterPassword(), password)) {
      console.log('You have successfully logged in.');
      return;
    }
  }

  console.log('You have been denied access.')
}

logInUser('password');

// // password = 'password'

// // The program displays a dialog that asks the user to enter a password.
// // If the user enters the wrong password, keep asking up to three times. After
// // three failures, log the access denied.

// What is the password: 123
// What is the password: opensesame
// What is the password: letmein

// // message on the console
// You have been denied access.

// // If the user enters the right password, report login success.
// What is the password: password

// // message on the console
// You have successfully logged in.
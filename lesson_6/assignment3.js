// Identify the code that violates the Airbnb JavaScript style guide, and update the code to fix the issues you identify. There may be more than one issue in each code snippet.

// 1. 
// let title = "The Three-Body Problem";
// used double quotes when no single quotes are included in string

//

// 2.
let title = 'The Three-Body Problem',
    author = 'Cixin Liu',
    page_count = 400;
// use one let declaration per variable
// variable names should be camelCase
 
// 3.
let completed = lastPageRead == 400;
// didn't use strict equality operator
 
// 4.
if (finishedBook())
  console.log('You have finished reading this book');
// no brackets with multi-line if statement
 
// 5.
function read(pages) {
      console.log('You started reading.');
      for (let page=0; page<pages; page++) {
              let message = 'You read page '+page;
              console.log(message);
      }
}

read(400);

// identation is not two spaces
// did not use spaces on either side of operators
// did not explicitly coerce page into a string
// didn't avoid using the ++ and -- operators
// didn't use a named function expression instead of function declaration
// Should be:

let read = function read(pages) {
  console.log('You started reading.');
  for (let page = 0; page < pages; page += 1) {
    let message = 'You read page ' + String(page);
    console.log(message);
  }
};

read(400);
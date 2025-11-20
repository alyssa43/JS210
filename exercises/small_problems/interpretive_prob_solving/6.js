// Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

// Examples:

// star(7);
// // logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

// star(9);
// // logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

/*
---- PROBLEM ----
input: an odd integer greater than or equal to 7
output: logging an 8-pointed star to the console

Rules:
  --> There will always only be one argument; a odd integer greater than or equal to 7
  --> The rows mirror each other EX: first and last row are the same..the second and second to last rows are the same
  --> The middle row will contain `n` stars and no spaces
  --> All other rows will always contain 3 stars

---- EXAMPLE ----
n => 7
*  *  *  => '*' + space + space + '*' + space + space + '*'
 * * *   => sapce + '*' + space + '*' + space + '*'
  ***    => space + '*' + '*' + '*'
*******  => '*' + '*' + '*' + '*' + '*' + '*' + '*'
  ***    => space + '*' + '*' + '*'
 * * *   => sapce + '*' + space + '*' + space + '*'
*  *  *  => '*' + space + space + '*' + space + space + '*'

--> We need to build rows 1, 2 and 3
n => 7
stars = 3
leadingSpaces = 0
middleSpaces = (n - stars - leadingSpaces) / 2 => 2
row1 => ' '.repeat(leadingSpaces) + '*' + ' '.repeat(middleSpaces) + '*' + ' '.repeat(middleSpaces) + '*'
  -- increment leadingSpaces += 1
  -- decrement middlesSpaces -= 1

row2 => ' '.repeat(leadingSpaces) + '*' + ' '.repeat(middleSpaces) + '*' + ' '.repeat(middleSpaces) + '*'
  -- increment leadingSpaces += 1
  -- decrement middlesSpaces -= 1

row3 => ' '.repeat(leadingSpaces) + '*' + ' '.repeat(middleSpaces) + '*' + ' '.repeat(middleSpaces) + '*'
  -- increment leadingSpaces += 1
  -- decrement middlesSpaces -= 1

---- DATA STRUCTURES ----
starting: an odd integer
  intermediate:
    -- We could build our rows by using an array where each element represents a row

ending: displaying an 8-pointed star to the console

---- ALGORITHM ----
-- Create a variable called `allRows` and assign a value of an empty array
1. Determine the number of rows to build and save into variable called `rows`
  -- We are only building the first (n / 2) rows EX: Math.floor(7 / 2) ==> 3
  -- This means we are building the first 3 rows
2. Build the rows
  -- create a variable called `leadingRows` and assign a value of an empty array 
  -- create a variable called `leadingSpaces` and assign a value of `0`
  -- create a variable called `middleSpaces` and assign a value of `(n - stars - leadingSpaces) / 2` EX: (7-3-0) => 2
  -- create an iterator that starts at 0 and ends when no longer less than `rows` EX: for (let i = 0; i < rows; i += 1)
    -- create the row structure:
      -- ' '.repeat(leadingSpaces) + '*' + ' '.repeat(middleSpaces) + '*' + ' '.repeat(middleSpaces) + '*'
      -- increment `leadingSpaces` by 1 each iteration
      -- decrement `middleSpaces` by 1 each iteration
    -- push the row into `leadingRows`
  -- This will give us the first `rows` rows
3. Add each of the `leadingRows` into the `allRows` array
4. Add the middle row into the `allRows` array
  -- `allRows.push('*'.repeat(n))`
5. Add the `leadingRows` into the `allRows` array, but in reverse order
  -- `allRows.concat(...middleRows.reverse())`
6. Display all the rows to the console
*/

function star(n) {
  const allRows = [];
  const leadingRows = buildLeadingRows(n);
  allRows.push(...leadingRows);
  allRows.push('*'.repeat(n));
  allRows.push(...leadingRows.reverse());
  allRows.forEach(row => console.log(row));
}

function buildLeadingRows(n) {
  const rows = Math.floor(n / 2);
  const stars = 3;
  const leadingRows = [];
  let leadingSpaces = 0;
  let middleSpaces = (n - stars - leadingSpaces) / 2;

  for (let i = 0; i < rows; i += 1) {
    const row = ' '.repeat(leadingSpaces) + '*' + ' '.repeat(middleSpaces) + '*' + ' '.repeat(middleSpaces) + '*';
    leadingRows.push(row);
    leadingSpaces += 1;
    middleSpaces -= 1;
  }

  return leadingRows;
}


star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

star(11);
// logs
// *    *    * 
//  *   *   *
//   *  *  *
//    * * *
//     ***
// ***********
//     ***
//    * * *
//   *  *  *
//  *   *   *
// *    *    *
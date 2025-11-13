// Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

/* 
---- PROBLEM ----
input: integer (always odd)
output: log a four-pointed diamond to the console

Rules:
  -- Will there always be precisely one argument? --> Assume yes.
  --> The argument will always be an odd integer
  -- Will the odd integer ever be negative? If so, how to proceed?
    --> Assume yes, use the absolute value of the negative integer.
  --> The number diamond rows will always be equal to `n`
  --> The width of the diamond rows will always be equal to `n`
  --> row 1 and row `n` will always be the same
  --> The middle row will always have `n` stars 
  --> the first and last rows will always have 1 star
  --> Each subsequent row increases/decreases the amount of stars by 2

---- EXAMPLES ----
diamond(3);
// logs
// find the middle index by dividing `n` - 1 by 2 ==> 1
//  *   --> row 0: space + '*' + space
// ***  --> row 1: '*' + '*' + '*'
//  *   --> row 2: space + '*' + space

n = 5 log:
middle index ==> 5 - 1 (4 / 2) => 2
create the structure for the rows of grid: [ ]
let `stars = 1 to begin
iterate start at 0, up to middle index (2)
  i = 0 ==>
    stars = 1
    spaces = (n - stars) / 2 => 2
    create row => ' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces)
    increment `stars` by 2
    '  *  ' -> push into grid
  ...continue through row 2 

---- DATA STRUCTURES ----
starting: number
  intermediate: 
    -- an array that contains the rows of the grid (up to the halfway point)
ending: outputting to the console

---- ALGORITHM ----
High Level:
1. Find the number (index) that will be the middle of our grid
2. Create the structure to represent our grid
3. Create a variable called `stars` and assign it an inital value of 1
4. Iterate starting at 0 and ending at the middle index
  -- calculate the number of spaces in the current row
  -- create the row
  -- push row into the grid at the appropriate index
  -- increment the value of `stars` by 2
5. Output all the rows of the grid starting at the 0 index ending at the second to last index (omitting the last row)
6. Output all the rows of the grid starting at the last index ending at the 0 index
*/

function diamond(n) {
  if (n < 1) n = Math.abs(n);
  const grid = createGrid(n);
  const fullGrid = grid.concat(grid.slice(0, -1).reverse());
  fullGrid.forEach(row => console.log(row));
}

function createGrid(n) {
  const grid = [];
  for (let stars = 1; stars <= n; stars += 2) {
    const spaces = (n - stars) / 2;
    grid.push(' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces));
  }
  return grid;
}

diamond(1);
diamond(3);
diamond(9);
diamond(-1);
diamond(-3);
diamond(-9);
diamond(31);
function triangle(n) {
  for (let row = 1; row <= n; row++) {
    let spaces = ' '.repeat(n - row);
    let stars = '*'.repeat(row);
    console.log(spaces + stars);
  }
}

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********
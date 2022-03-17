/*  You're given a two-dimensional array (a matrix) of potentially unequal height and width containing only 0s and
1s. Each 0 represents land, and each i represents part of a river. A river consists of any number of is that are either horizontally or vertically adjacent (but not diagonally adjacent). The number of adjacent is forming a river determine its size.
Note that a river can twist. In other words, it doesn't have to be a straight vertical line or a straight horizontal line; it can be L-shaped, for example.
Write a function that returns an array of the sizes of all rivers represented in the input matrix. The sizes don't need to be in any particular order.*/

function riverSizes(matrix) {
  return matrix;
}

// Test Case:

const testInput = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0],
  ];


console.log('riverSizes: ', riverSizes(testInput)); // -> [1, 2, 2, 2, 5] the numbers could be ordered differently




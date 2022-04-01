/*

Basic or Fundamental Programming Concepts:

-> Variables
-> Data Types
-> Strings
-> Numbers
-> Booleans
-> Arrays
-> Objects
-> Loops
-> Control Flow
-> Functions and Execution Context

*/

// Variables:

/*
 * Variables are like boxes with a label/name taped on it. The box can start off empty(undefined) or with any value you want.
 * There are 3 ways to create a variable using the keywords var, let and const. Each have there own uses (exepct var, never use var!)
 * The const and let variables are locally scoped, which means if you create a variable inside a function, the global scope won't have access to that variable, just one example.
*/

var label1 = 4; // Ewww stay away! Also uses hoisting, whatever that means, right?
let labelB = 'hi'; // Much better! the let variables value can be reassigned later
const labelThird = true; // const stands for constant which is also how this keyword treats its values. Once there, alwyas there.

function immaFunction() {
  const ninjaVariable = 'some value was returned';
  return ninjaVariable;
}

console.log(immaFunction()); // make sure to use the almighty () to call that function! will get what is expected
console.log(ninjaVarieble); // this will be undefined from the globalScope because the variable was created from another scope





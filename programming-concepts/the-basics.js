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
// console.log(ninjaVarieble); // this will be undefined from the globalScope because the variable was created from another scope

// Data Types:

/*
 * Primitive Data Types:
 * 1) Number: whole integer or floating point
 * 2) String: series of characters or plain text
 * 3) Boolean: true or false
 * 4) Undefined: variable with no set value
 * 5) Null: an empty object that represents empty space, not the same as undefined
 *
 * Composite Data Types:
 * 1) Array: a list of values starting from 0
 * 2) Object: structuring data for key:value pairs
*/

const name = "John Doe"; // string
let age = 44; // number
const isHuman = true; // boolean
let timeOfDeath; // undefined
let casket = null // well obviously it's null, right? YES!

// if you wanted to have all this info in an orginzed list you could add all the variables into an array
const allTheInfo = [name, age, isHuman, timeOfDeath, casket];

// or an object could be even more useful, depending on your needs!
const allTheInfoPart2 = {
  name: "John Doe",
  age: 44,
  isHuman: true,
  timeOfDeath: undefined,
  casket: null
};

// Arrays and Objects basics:

/*
 * Use "[]" square brackets for arrays and "{}" curly braces for objects
 * Everything is an object in JavaScript, even functions are objects
 * Objects have something called methods, which are functions that are defined within an object
 * Objects also have properties which contains data and has no functionality
 * One way to access values from arrays or objects is by using their properties (index for arrays)
 * To access an objects value from a property use the "." period at the end of the objects name then followed by the property
 * You would also use a period(.) to access a method then use the "()" parenthesis to call it
*/

console.log('length of allTheInfo array: ', allTheInfo.length); // will return the length of the array
console.log('length of allTheInfoPart2 object? ', allTheInfoPart2.length); // will return undefined because length is not a property for an object only arrays.

// Looping:

/*
 * Arrays and objects are values known as iterables, which means you can loop through them
 * Looping is the process of repeating code on each value or specified values of an array or object
 * An array is an object, main difference is the properties of an array are already set from 0 to however long the array is.
 * There are 3 diffirent types of loops for arrays: for, while and do...while loops
 *
*/

// 3 loops doing the same thing:

// loop1: for

console.log('for loop start');
    // initializer, condition, and incrementor are all in the same line or ()
for (let i = 0; i < allTheInfo.length; i += 1) {

  console.log(allTheInfo[i]);

}
console.log('for loop end');

// loop2: while

let idx = 0; // initial iterator value declared

console.log('while loop start');

      // do somthing while condition is true
while (idx < allTheInfo.length) {

  console.log(allTheInfo[idx]);
  idx += 1; // increment iterator to avoid infinite loop

}

console.log('while loop end');

// loop2: do...while

console.log('do...while start');

let index = 0; // initial iterator value declared

do { // do somthing first

  console.log(allTheInfo[index]);
  index += 1; // increment iterator to avoid infinite loop

} while (index < allTheInfo.length); // then at end check if condition is true to start/continue loop

console.log('do...while end');

/*
 * Each loop has their own benefits and use cases
 * Like how the for loop is probably the best for a simple linear approach when needing to loop through an array
 * While loops tend to have a bit more flexibility since you declare the iterator outside the scope of the loop and...
 * ... they are used a lot when creating a two pointer algorithm (look up examples)
 * Do While loops are useful for whenever you need to run a statement before checking the conditions to see if...
 * ... you need to continue looping, but for most cases while loops are preferred
 *
 * These are the 3 main ways you can loop/iterate through arrays:
 * 1) for
 * 2) while
 * 3) do...while
 *
 * And then there is the for...of and for...in loops
 * The for...of loop can be used as a replacement for the linear loop approach when it comes to arrays
 * The for...in loop accomplishes something similar when it comes looping through objects
*/

// for...of
console.log('start for...of');

for (let value of allTheInfo) {
  console.log(value);
}

console.log('end for...of');

// for...in
console.log('start for...in');

for (let key in allTheInfoPart2) {
  console.log('key/value pairs');
  console.log(`key: ${key}`);
  console.log(`value: ${allTheInfoPart2[key]}`);
}

console.log('end for...in');

// Control Flow:

/*
 *
*/















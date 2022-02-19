// Callbacks & High-Order Functions
// A Function that takes in a function as an input and/or returns a function

// Higher-Order Functions:
// A higher-order function is an immutable function that either takes in another function and/or returns a function definition
// Avoid mutations, mutating an input is not part of the functional programming paradigm
// Make copies of the input, store in new variable or use Persistent Data Structures for efficient immutability (ex. Mori, Immutable.js)
// Any array method that takes in a callback/function is a higher-order function, ex. map, reduce, filter, forEach are all higher-order functions

// forEach: should invoke callback on each value of array
function forEach( array, callback ) {

  for (let value of array) {
    callback(value);
  }

}

// map: should invoke callback on each value of array and return a new array that has the returned callback values
function map( array, callback ) {

  const mappedArray = [];

  for ( let i = 0; i < array.length; i += 1 ) {
    mappedArray.push(callback(array[i]));
  }

  return mappedArray;
}

// reduce: should accumulate all values of array and return a single value
function reduce(array, callback, initialValue) {
  let acc;
  let i;

  if (initialValue) {
    i = 0;
    acc = initialValue;
  }
  else {
    i = 1;
    acc = array[0];
  }

  while (i < array.length) {
    acc = callback(acc, array[i]);
    i += 1;
  }

  return acc;
}

// filter: should invoke callback on each value and return new array with values that passed callbacks conditions
function filter(array, callback) {
  const filteredArray = [];

  for (let value of array) {
    if (callback(value)) filteredArray.push(value);
  }

  return filteredArray;
}

// Callback Functions:
// A callback function is usually a pure function that is been called within the body or definition of the higher-order function
// A callback can also be an arrow function, great for when passing an anonymous callback function as input
// Some callback functions are meant to just return a new value to modify current values and others have specific roles for example; reduce's callback uses a "reducer" function which usually takes in an accumulator value and the following value of the array, and filter's callbacks are based off conditions and return true or false

function multiplyBy2( num ) {
  return num * 2;
}

function add10(num) {
  return num + 10;
}

function stringify(num) {
  return num.toString();
}

const reducer = (prevVal, currVal) => prevVal + currVal;

function greaterThan4(num) {
  return num > 4;
}

// Test cases:

const list = [1, 2, 3, 4, 5, 6, 7];

const mapExample = map(list, multiplyBy2);
const reduceExample = reduce(list, reducer, 5);
const filterExample = filter(list, greaterThan4);

console.log({reduceExample});
console.log({mapExample});
console.log({filterExample});



































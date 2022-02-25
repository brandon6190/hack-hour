/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9.
    X can be placed before L (50) and C (100) to make 40 and 90.
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.



Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.



Constraints:

    1 <= s.length <= 15
    s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
    It is guaranteed that s is a valid roman numeral in the range [1, 3999].


 * */

function romanToInt(str) {
  const romanSymbols = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let myInt = 0;
  let i = 0;

  while (i < str.length) {
    let currSymbol = str[i];
    let nextSymbol = str[i+1];

    console.log(`currSymbol: ${currSymbol}, nextSymbol: ${nextSymbol}`);

    if (currSymbol === 'I') {
      if (nextSymbol === 'V' || nextSymbol === 'X') {
        myInt += (romanSymbols[nextSymbol] - romanSymbols[currSymbol]);
        i += 2;
      } else {
        myInt += romanSymbols[currSymbol];
        i += 1;
      }
    }

    else if (currSymbol === 'X') {
      if (nextSymbol === 'L' || nextSymbol === 'C') {
        myInt += (romanSymbols[nextSymbol] - romanSymbols[currSymbol]);
        i += 2;
      } else {
        myInt += romanSymbols[currSymbol];
        i += 1;
      }
    }

    else if (currSymbol === 'C') {
      if (nextSymbol === 'D' || nextSymbol === 'M') {
        myInt += (romanSymbols[nextSymbol] - romanSymbols[currSymbol]);
        i += 2;
      } else {
        myInt += romanSymbols[currSymbol];
        i += 1;
      }
    }

    else {
      myInt += romanSymbols[currSymbol];
      i += 1;
    }

  }// end for loop

  return myInt;
}


// Test Cases:

const s1 = "III";
const s2 = "MCMXCIV";
const s3 = "LVIII";

console.log('s1: ', romanToInt(s1));
console.log('s2: ', romanToInt(s2));
console.log('s3: ', romanToInt(s3));













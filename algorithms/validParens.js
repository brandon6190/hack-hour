/*Given a string str containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    1. Open brackets must be closed by the same type of brackets.
    2. Open brackets must be closed in the correct order.

Example 1:

Input: str = "()"
Output: true

Example 2:

Input: str = "()[]{}"
Output: true

Example 3:

Input: str = "(]"
Output: false

Constraints:

    1 <= str.length <= 104
    s consists of parentheses only '()[]{}'.

*/


function isValid(str) {
  const stack = [];

  for (let parens of str) {
    if (parens === '(' || parens === '[' || parens === '{') {
      stack.push(parens);
    } else {
      let openedParens = stack.pop();

      if (parens === ')' && openedParens !== '(') return false;
      if (parens === ']' && openedParens !== '[') return false;
      if (parens === '}' && openedParens !== '{') return false;
    }
  }

  return stack.length === 0;
}

// Test Cases:

const str1 = "()";
const str2 = "()[]{}";
const str3 = "(]";

console.log(isValid(str1));
console.log(isValid(str2));
console.log(isValid(str3));



















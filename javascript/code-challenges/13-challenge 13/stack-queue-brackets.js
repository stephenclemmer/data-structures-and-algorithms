'use strict';

let string = 'The quick brown fox: (has a big leaf)';

let count1 = 0;
let count2 = 0;
let count3 = 0;

function validateBrackets(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      count1++;
    } else if (string[i] === '{') {
      count2++;
    } else if (string[i] === '[') {
      count3++;
    } else if (string[i] === ')') {
      count1--;
    } else if
    (string[i] === '}') {
      count2--;
    } else if
    (string[i] === ']') {
      count3--;
    }
  }

  if (count1 === 0 && count2 === 0 && count3 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(validateBrackets(string));

module.exports = (validateBrackets);

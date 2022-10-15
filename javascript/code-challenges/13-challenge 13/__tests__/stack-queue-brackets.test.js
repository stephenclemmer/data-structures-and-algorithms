'use strict';

const validateBrackets = require('../stack-queue-brackets');

describe('Validate Brackets', () => {

  it('Validates that the brackets are balanced', () => {
    let string = 'The quick brown fox: (has a big leaf)';
    let stringTwo = 'The {qu)ick (brown} fox: (has a big leaf)';
    let stringThree = 'The {qu)ick (brown fox: (has a big leaf)';

    let testOne = validateBrackets(string);
    let testTwo = validateBrackets(stringTwo);
    let testThree = validateBrackets(stringThree);


    expect(testOne).toEqual(true);
    expect(testTwo).toBe(true);
    expect(testThree).toBe(false);
  });


});

'use strict';

const { first_repeating_word, removePunctuation } = require('../hashmap-repeated-word.js');

describe('Testing the hashmap-repeated-word.js file', () => {
  test('Testing the first_repeating_word function', () => {
    let test = 'Ravi, Had been! \'saying\' that he had! been there.';
    expect(first_repeating_word(test)).toEqual('had');
  });

  test('Testing the removePunctuation function', () => {
    let test = 'Ravi, Had been! \'saying\' that he had! been there.';
    expect(removePunctuation(test)).toEqual('Ravi Had been saying that he had been there');
  });
});

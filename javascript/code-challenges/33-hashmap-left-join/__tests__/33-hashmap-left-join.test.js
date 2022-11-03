'use strict';
const { describe } = require('eslint/lib/rule-tester/rule-tester');
const leftJoin = require('../hashmap-left-joinhashmap-left-join');

describe('hashmap-left-join', () => {
  it('should return an array of arrays', () => {
    let hashmap1 = {
      'fond': 'enamored',
      'wrath': 'anger',
      'diligent': 'employed',
      'outfit': 'garb',
      'guide': 'usher'
    };
    let hashmap2 = {
      'fond': 'averse',
      'wrath': 'delight',
      'diligent': 'idle',
      'guide': 'follow',
      'flow': 'jam'
    };
    expect(leftJoin(hashmap1, hashmap2)).toEqual([['fond', 'enamored', 'averse'], ['wrath', 'anger', 'delight'], ['diligent', 'employed', 'idle'], ['outfit', 'garb', undefined], ['guide', 'usher', 'follow']]);
  });
});

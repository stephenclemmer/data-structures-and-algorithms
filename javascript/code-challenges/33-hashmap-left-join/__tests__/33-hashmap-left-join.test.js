'use strict';
const { describe } = require('eslint/lib/rule-tester/rule-tester');
const leftJoin = require('../hashmap-left-join.js');

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

  it('should return an empty array if the first hashmap is empty', () => {
    let hashmap1 = {};
    let hashmap2 = {
      'fond': 'averse',
      'wrath': 'delight',
      'diligent': 'idle',
      'guide': 'follow',
      'flow': 'jam'
    };
    expect(leftJoin(hashmap1, hashmap2)).toEqual([]);
  });

  it('should return the word, synonyms, and undefined values if the second hashmap is empty', () => {
    let hashmap1 = {
      'fond': 'enamored',
      'wrath': 'anger',
      'diligent': 'employed',
      'outfit': 'garb',
      'guide': 'usher'
    };
    let hashmap2 = {};
    expect(leftJoin(hashmap1, hashmap2)).toEqual([['fond', 'enamored', undefined], ['wrath', 'anger', undefined], ['diligent', 'employed', undefined], ['outfit', 'garb', undefined], ['guide', 'usher', undefined]]);
  });

});

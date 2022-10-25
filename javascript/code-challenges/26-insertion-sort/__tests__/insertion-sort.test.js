'use strict';

const insertionSort = require('../insertion-sort');

describe('insertion-sort', () => {
  it('can sort through a tree of any size', () => {

    let array = [8,4,23,42,16,15];


    let answer = insertionSort(array);


    expect(answer).toEqual([4,8,15,16,23,42]);

  });
});

'use strict';

const {mergeSort} = require('../merge-sort');

describe('insertion-sort', () => {
  it('can sort through an array', () => {

    let array = [8, 4, 23, 42, 16, 15];

    let answer = mergeSort(array);

    expect(answer).toEqual([4, 8, 15, 16, 23, 42]);

  });


  it('can sort through an array with negative numbers', () => {

    let array = [8, 4, -23, 42, -16, 15];

    let answer = mergeSort(array);

    expect(answer).toEqual([-23, -16, 4, 8, 15, 42]);

  });

  it('can sort through a reverse-sorted array', () => {

    let array = [20, 18, 12, 8, 5, -2];

    let answer = mergeSort(array);

    expect(answer).toEqual([-2, 5, 8, 12, 18, 20]);

  });

  it('can sort through an array with few uniques', () => {

    let array = [5, 12, 7, 5, 5, 7];

    let answer = mergeSort(array);

    expect(answer).toEqual([5, 5, 5, 7, 7, 12]);

  });

  it('can sort through a nearly-sorted array', () => {

    let array = [2, 3, 5, 7, 13, 11];

    let answer = mergeSort(array);

    expect(answer).toEqual([2, 3, 5, 7, 11, 13]);

  });

});

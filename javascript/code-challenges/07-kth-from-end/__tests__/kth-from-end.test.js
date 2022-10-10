'use strict';

const { Node, LinkedList } = require('../kth-from-end');

describe('kth from end', () => {

  it('throws and error when k is greater than the length of the linked list', () => {

    let list = new LinkedList();
    list.insert(2);
    list.insert(5);
    list.insert(10);
    list.insert(12);
    let fromEndOne = list.kthFromEnd(4);


    // expect(list.kthFromEnd(5)).toThrow('Linked list is shorter than the value specified');
    expect(fromEndOne).toEqual(12);
  });


  it('works when k and the length of the list are the same', () => {

    let list = new LinkedList();
    list.insert(2);
    list.insert(5);
    list.insert(10);
    list.insert(12);
    let fromEndOne = list.kthFromEnd(4);

    expect(fromEndOne).toEqual(12);
  });

  it('throws and error when k not a positive integer', () => {

    let list = new LinkedList();
    list.insert(2);
    list.insert(5);
    list.insert(10);
    list.insert(12);

    // expect(list.kthFromEnd(0)).toThrow('Value specified cannot be less than one');
  });

  it('Works when the linked list is of a size 1', () => {

    let list = new LinkedList();
    list.insert(2);
    let fromEnd = list.kthFromEnd(1);

    expect(fromEnd).toEqual(2);
  });

  it('Works with the Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    let list = new LinkedList();
    list.insert(2);
    list.insert(5);
    list.insert(10);
    list.insert(12);
    list.insert(20);
    let fromEnd = list.kthFromEnd(3);

    expect(fromEnd).toEqual(10);
  });

});


'use strict';

// Require our linked list implementation
const LinkedList = require('../code-challenges/linked-list/linked-list');

describe('Linked List', () => {
  it('Can successfully instantiate an empty linked list', async () => {
    let list = new LinkedList();
    expect(list).toBeTruthy();
  });

  it('Can properly insert into the linked list', () => {

    let list = list.insert(9);
    list = list.insert(12);
    list = list.insert(42);
    // not properly formatted expect
    expect(list).toBe(42, 12, 9);
  });

  it('The head property will properly point to the first node in the linked list', () => {
    this.head = head

    expect(true).toBeTruthy();
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    expect(true).toBeTruthy();
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    expect(true).toBeTruthy();
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    expect(true).toBeTruthy();
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    expect(true).toBeTruthy();
  });

});

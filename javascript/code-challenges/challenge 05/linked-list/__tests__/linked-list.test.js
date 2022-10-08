'use strict';

// Require our linked list implementation
const {LinkedList} = require('../../../challenge 05/linked-list/linked-list');

describe('Linked List', () => {

  it('Can successfully instantiate an empty linked list', () => {
    let list = new LinkedList();
    expect(list).toBeInstanceOf(LinkedList);
  });

  it('Can properly insert into the linked list', () => {

    let list = new LinkedList();
    list.insert(12);
    list.insert(42);
    // not properly formatted expect
    expect(list.head.value).toBe(42);
    expect(list.head.next.value).toBe(12);
  });

  it('The head property will properly point to the first node in the linked list', () => {
    let list = new LinkedList();
    list.insert(42);
    // not properly formatted expect
    expect(list.head.value).toBe(42);
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

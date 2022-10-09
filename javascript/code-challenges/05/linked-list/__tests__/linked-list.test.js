'use strict';

// Require our linked list implementation
const {LinkedList} = require('../linked-list');

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
    let list = new LinkedList();
    list.insert(12);
    list.insert(42);
    // not properly formatted expect
    expect(list.head.value).toBe(42);
    expect(list.head.next.value).toBe(12);
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    let list = new LinkedList();
    list.insert(12);
    list.insert(42);

    expect(list.includes(12)).toBe(true);
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    let list = new LinkedList();
    list.insert(12);
    list.insert(42);

    expect(list.includes(9)).toBe(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    let list = new LinkedList();
    list.insert(12);
    list.insert(42);

    expect(list.toString()).toBe('{ 42 } -> { 12 } -> NULL');
  });

});

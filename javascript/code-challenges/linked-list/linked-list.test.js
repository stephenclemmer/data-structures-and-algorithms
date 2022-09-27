'use strict';

// Require our linked list implementation
const LinkedList = require('./linked-list');

describe('Linked List', () => {
  it('Can successfully instantiate an empty linked list', async () => {
    let list = new LinkedList();
    expect(list).toBeInstanceOf(LinkedList);
    expect(list.head).toBeNull();
  });

  it('Can properly insert into the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(1);
  });

  it('The head property will properly point to the first node in the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    expect(list.head.value).toEqual(1);

    list.insert(2);
    expect(list.head.value).toEqual(2);

    list.insert(3);
    expect(list.head.value).toEqual(3);
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(1);
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {

  });

});

'use strict';

const {LinkedList} = require('../linked-list-insertions');


describe('Linked List Insertions', () => {

  it('Can successfully add a node to the end of the linked list', () => {
    let list = new LinkedList();
    list.insert(9);
    list.insert(12);
    list.insert(42);
    list.append(22);

    expect(list.toString()).toBe('{ 42 } -> { 12 } -> { 9 } -> { 22 } -> NULL');
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    let list = new LinkedList();
    list.insert(9);
    list.insert(12);
    list.insert(42);
    list.append(22);
    list.append(23);

    expect(list.toString()).toBe('{ 42 } -> { 12 } -> { 9 } -> { 22 } -> { 23 } -> NULL');

  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    let list = new LinkedList();
    list.insert(9);
    list.insert(12);
    list.insert(42);
    list.insertBefore(12, 27);

    expect(list.toString()).toBe('{ 42 } -> { 27 } -> { 12 } -> { 9 } -> NULL');

  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    let list = new LinkedList();
    list.insert(9);
    list.insert(12);
    list.insert(42);
    list.insertBefore(42, 27);

    expect(list.toString()).toBe('{ 27 } -> { 42 } -> { 12 } -> { 9 } -> NULL');

  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    let list = new LinkedList();
    list.insert(9);
    list.insert(12);
    list.insert(42);
    list.insertAfter(12, 27);

    expect(list.toString()).toBe('{ 42 } -> { 12 } -> { 27 } -> { 9 } -> NULL');

  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    let list = new LinkedList();

    list.insert(9);
    list.insert(12);
    list.insert(42);
    list.append(27);

    expect(list.toString()).toBe('{ 42 } -> { 12 } -> { 9 } -> { 27 } -> NULL');

  });



});

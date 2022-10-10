'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.length = 0;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // INSERT
  insert(value) {
    let node = new Node(value);
    if (this.head) {
      node.next = this.head;
      this.head = node;
      this.length++;
      return node;
    }
    this.head = this.tail = node;
    this.length++;
    return node;
  }

  // INCLUDES
  includes(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      } else if (current.value !== value) {
        current = current.next;
      }
    }
    return false;
  }

  // TO STRING
  toString() {
    let current = this.head;
    let string = '';

    while (current) {
      string = string + `{ ${current.value} } -> `;
      current = current.next;
    }
    string = string + 'NULL';
    return string;
  }

  // APPEND: adds a node with a given value to the end of the linked list.

  append(value) {

    let node = new Node(value);
    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
    this.length++;
  }


  // INSERT BEFORE arguments: value, new value
  // adds a new node with the given new value immediately before the first node that has the value specified

  insertBefore(value, newValue) {
    if (!this.head) {
      throw new Error('Linked List is Empty');
    }

    let current = this.head;

    while (current) {
      if (current.next.value === value) {
        let node = new Node(newValue);
        node.next = current.next;
        current.next = node;
        this.length++;
        return;
      } else {
        current = current.next;
      }
    }
  }

  insertAfter(value, newValue) {

    if (!this.head) {
      throw new Error('Linked List is Empty');
    }

    let current = this.head;

    while (current) {
      if (current.value === value) {
        let node = new Node(newValue);
        node.next = current.next;
        current.next = node;
        this.length++;
        return;
      } else {
        current = current.next;
      }
    }
  }

  kthFromEnd(k) {
    // if (k > this.length) {
    //   throw 'Linked list is shorter than the value specified';
    // }
    // else if (k < 1) {
    //   throw 'Value specified cannot be less than one';
    // } else {

    let nodeIndex = (this.length - k);
    let current = this.head;
    for (let i = 0; i < nodeIndex; i++) {
      current = current.next;
    }
    return current.value;

  }

}

module.exports = { Node, LinkedList };

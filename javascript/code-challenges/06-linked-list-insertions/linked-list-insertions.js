'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
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
    let string = "";

    while (current) {
      string = string + `{ ${current.value} } -> `;
      current = current.next;
    }
    string = string + "NULL";
    return string;
  }

  // INSERT a node at the front of the linked list
  insert(value) {
    this.length++;

    let node = new Node(value);
    if (this.head) {
      node.next = this.head;
      this.head = node;
      return node;
    }
    this.head = this.tail = node;
    return node;
  }

  // APPEND: adds a node with a given value to the end of the linked list.

  append(value) {
    this.length++;

    let node = new Node(value);
    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = node;
  }

  insertBefore(value, newValue) {
    if (!this.head) {
      throw new Error('Linked List is Empty');
    }

    let current = this.head;

    while (current) {
      if (current.value === value) {
        let node = new Node(newValue);
        node.next = current;
        this.head = node;
        return;
      } else if (current.next.value === value) {
        let node = new Node(newValue);
        node.next = current.next;
        current.next = node;
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
        return;
      } else {
        current = current.next;
      }
    }
  }

}

module.exports = { Node, LinkedList };

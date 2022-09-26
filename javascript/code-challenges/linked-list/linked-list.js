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

  // INSERT
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
    console.log('you are in it');
    let current = this.head;
    let string = "";

    while (current) {
      console.log(current.value);
      string = string + `{ ${current.value} } -> `;
      current = current.next;
    }
    string = string + "NULL";
    return string;
  }

}

// let list = new LinkedList();
// // console.log(list);
// list.insert(9);
// // console.log(list);
// list.insert(14);
// // console.log(list);
// list.insert(43);
// // console.log(list);
// list.includes(41);
// // console.log('this is it', booyah);
// console.log(list.toString());

module.exports = { Node, LinkedList };

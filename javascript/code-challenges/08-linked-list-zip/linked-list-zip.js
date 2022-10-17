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
  }

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

  append(value) {

    let node = new Node(value);
    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
    this.length++;
  }

  toString() {
    // console.log('you are in it');
    let current = this.head;
    let string = "";

    while (current) {
      // console.log(current.value);
      string = string + `{ ${current.value} } -> `;
      current = current.next;
    }
    string = string + "NULL";
    return string;
  }
}

function zipNode(originalList, pointer) {


  let current = originalList.head;
  originalList.head = current.next;
  current.next = null;
  pointer.next = current;
  pointer = pointer.next;
  pointer.next = null;

  return pointer;

}


function zipLists (L1, L2) {
  let L3 = new LinkedList;
  let P = new Node;
  let C1;

  C1 = L1.head;
  L1.head = C1.next;
  C1.next = null;
  L3.head = C1;
  P = L3.head;

  while (L1.head !== null && L2.head !== null) {
    P = zipNode(L2, P);
    P = zipNode(L1, P);
  }

  if (L1.head !== null) {
    P.next = L1.head;
  } else if (L2.head !== null) {
    P.next = L2.head;
  }
  return L3.toString();
}

module.exports = {Node, LinkedList, zipNode, zipLists};

'use strict';

const { add } = require("cheerio/lib/api/traversing");

// Create a Linked List class
// Within your Linked List class, include a head property.
// Upon instantiation, an empty Linked List should be created.


class Node {
  constructor(value) {
    // data in the node
    this.data = value;
    // pointer to the next node
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }


  // the size method returns the number of nodes present in the linked list
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
}

// create a node
let node1 = new Node(2);
// create another node
let node2 = new Node(5);
// make a pointer from node1 to node2
node1.next = node2;
// make a linked list with node 1 as the head
let list = new LinkedList(node1);
// access the data on the second node of the linked list
console.log(list.head.next.data);
// returns 5

module.exports = LinkedList;

// // add a value to the linked list
// add(value) {
//   // create a new node with the inputted value
//   const node = new Node(value);

//   // If the head does not exist...
//   if (!this.head){
//     // ...then the node will become the head
//     this.head = node;
//     return;
//   } else {
//     // The head will be considered the current node
//     currentNode = head;
//     // While there is a next method (iu.e. not null) to be called on the current node ....
//     while (currentNode.next) {
//       // the value of currentNode will be passed down the line, allowing us to traverse the linked-list, which will bring us to the end of the linked list
//       currentNode = currentNode.next;
//     }
//     // make node the next value of the linked list
//     currentNode.next = node
//   }
// }


// Repl

'use strict';

class Node {
  constructor(value) {
    // data in the node
    this.value = value;
    // pointer to the next node
    this.next = null;
  }
}

// let newNode = new Node('hello');
// console.log(newNode);

class LinkedList {
  constructor()
  {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }


  insertEnd (value){
    this.length++;

    let node = new Node(value);

    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
      return node;
    }
    this.head = this.tail = node;
    return node;
  }

  insertHead (value) {
    this.length++;

    let node = new Node(value);
    if(this.head){
      node.next = this.head;
      this.head = node;
      return node;
    }
    this.head = this.tail = node;
    return node;
  }

  // INCLUDES
  includes(value){
    let current = this.head;

    while(current){
      if (current.value === value){
        return true;
      } else if (current.value !== value){
      current = current.next;
      }
    }
    return false;
  }

  // TO STRING
  toString(){
    let current = this.head;

    while(current){
      console.log(JSON.stringify(current.value));

      current = current.next;
    }
  }

  // create an empty array to hold the values of the linked list?
  // start at the head of the linked list;
// traverse the linked list
  //





}


  // size()
  //   let count = 0;
  //   let node = this.head;
  //   while (node) {
  //     count++;
  //     node = node.next;
  //   }
  //   return count;



// create a node
let node1 = new Node(7);
// console.log(node1);
// create another node
let node2 = new Node(5);
// console.log(node2);
// make a pointer from node1 to node2
node1.next = node2;


let list = new LinkedList();
// console.log(list);
list.insertEnd(9);
// console.log(list);
list.insertEnd(14);
// console.log(list);
list.insertHead(43);
// console.log(list);
list.includes(41);
// console.log('this is it', booyah);
list.toString();

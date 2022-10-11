'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.top === null) {
      return 'this stack is empty';
    } else {
      let temp = new Node();
      temp.next = this.top;
      this.top = this.top.next;
      temp.next.next = null;
      return temp.next.value;
    }
  }

  peek() {
    if (this.top === null) {
      return 'this stack is empty';
    } else {
      return this.top.value;
    }
  }

  isEmpty() {
    return this.top === null;
  }

}


class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.front) {
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    this.back = newNode;
  }

  dequeue() {
    if (this.front === null) {
      return 'this queue is empty';
    } else {
      let temp = new Node();
      temp.next = this.front;
      this.front = this.front.next;
      temp.next.next = null;
      return temp.next.value;
    }
  }

  peek() {
    if (this.front === null) {
      return 'this queue is empty';
    } else {
      return this.front.value;
    }
  }

  isEmpty() {
    return this.front === null;
  }

}


class PseudoQueue {
  constructor() {
    this.loadQueue = new Stack();
    this.unloadQueue = new Stack();
  }

  enqueue(value) {
    if (this.loadQueue.isEmpty() && this.unloadQueue.isEmpty()) {
      this.loadQueue.push(value);
    }
    if (this.loadQueue.isEmpty() && this.unloadQueue.isEmpty()) {
      while (!this.unloadQueue.isEmpty()) {
        value.push(this.unloadQueue.pop());
      }
    }
  }

  dequeue() {
    if (this.loadQueue.isEmpty() && this.unloadQueue.isEmpty()) {
      throw new Error('PsedoQueue is empty');
    }
    if (this.unloadQueue.isEmpty() && !this.loadQueue.isEmpty()) {
      while (!this.loadQueue.isEmpty()) {
        this.unloadQueue.push(this.input.pop());
      }
      return this.output.pop();
    }
    if (!this.unloadQueue.isEmpty()) {
      return this.unloadQueue.pop();
    }
  }

  pop() {
    if (this.top === null) {
      return 'this stack is empty';
    } else {
      let temp = new Node();
      temp.next = this.top;
      this.top = this.top.next;
      temp.next.next = null;
      return temp.next.value;
    }
  }

  peek() {
    if (this.top === null) {
      return 'this stack is empty';
    } else {
      return this.top.value;
    }
  }

  isEmpty() {
    return this.top === null;
  }

  unload() {
    while (this.loadqueue.top !== null) {
      this.loadQueue.pop();
    }
  }
}

module.exports = {Node, Stack, Queue, PseudoQueue};

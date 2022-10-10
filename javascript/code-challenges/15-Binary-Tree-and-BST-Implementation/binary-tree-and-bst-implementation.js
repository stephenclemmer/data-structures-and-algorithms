'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class KaryNode {
  constructor(value, k) {
    this.value = value;
    this.k = k;
    this.children = [];
    // Google: MDN Capital Array JS
    // this.children = new Array(k).fill(null);
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let arr = [];
    const traverse = (node) => {
      // array.push(node.value);
      arr.push(node.value);

      // recursive cases
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return arr;
  }

  inOrder() {
    let arr = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      arr.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return arr;
  }

  postOrder() {
    let arr = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      arr.push(node.value);
    };
    traverse(this.root);
    return arr;
  }

  breadthFirst() {
    // [root] -> pop out the first, do the thing, unshift its children.
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (current) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    if (!this.root) {
      return 'this tree is empty';
    }

    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = current;
      }

    }

    if (!found) return 'false';
    if (found) return 'true';


  }
}

module.exports = { Node, KaryNode, BinaryTree, BinarySearchTree };

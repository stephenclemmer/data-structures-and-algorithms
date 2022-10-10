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
    let arr = []
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
    }
    traverse(this.root);
    return arr;
  }

  inOrder() {
    let arr = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      arr.push(node.value);
      if (node.right) traverse(node.right);
    }
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

  treeMax() {

    if (!this.root) {
      throw new Error('this tree is empty');
    }

    let temp = new Node(this.root.value);

    const traverse = (node) => {

      if (node.value > temp.value) {
        temp.value = node.value;
      }

      if (node.left) {
        traverse(node.left);

      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return temp.value;
  }
}

module.exports = {Node, BinaryTree};

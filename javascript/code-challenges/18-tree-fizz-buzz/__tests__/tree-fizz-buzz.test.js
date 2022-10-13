'use strict';

class KaryNode {
  constructor(value, k) {
    this.value = value;
    this.k = k;
    this.children = [];
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
}

function fizzBuzzTree(tree) {
  let newTree = new BinaryTree();
  newTree.root = new KaryNode(changeValue(tree.root.value), tree.root.children.length);
  let node = tree.root;

  console.log(newTree)
  // let oldNode = node;
  // let newNode = ;

  console.log('initial node value', node.value);
  // console.log(node.children.length);

  function inorder(node) {

    let newNode = new KaryNode(changeValue(node.value), node.children.length);


    if (node === null) {
      return;
    }
    // Total children count
    if (node.children.length) {
      // console.log(node.value);

      let total = node.children.length;
      // console.log('TOTAL:', total);
      // All the children except the last

      for (let i = 0; i < total - 1; i++) {
        inorder(node.children[i]);
      }
      inorder(node.children[total - 1]);
    }

    if (node.children.length === null) {
      console.log('End of loop', node.value);
    }

  }

  // Initial call of the function to start at the root
  inorder(node);
}

function changeValue(value) {
  if (value % 15 === 0) {
    return 'fizzbuzz';
  }
  if (value % 5 === 0) {
    return 'buzz';
  }
  if (value % 3 === 0) {
    return 'fizz';
  }
  return value.toString();
}

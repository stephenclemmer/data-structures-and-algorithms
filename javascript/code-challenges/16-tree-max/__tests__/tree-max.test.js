'use strict';

const {Node, BinaryTree} = require('../tree-max');

describe('Tree Max', () => {

  it('Can find the highest value in a binary tree', () => {

    let tree = new BinaryTree();
    tree.root = new Node(20);
    tree.root.left = new Node(15);
    tree.root.right = new Node(7);
    tree.root.left.left = new Node(9);
    tree.root.left.right = new Node(42);
    tree.root.right.left = new Node(2);
    tree.root.right.right = new Node(17);

    let answer = tree.treeMax();

    expect(answer).toEqual(42);
  });

  it('Can find the highest value in a binary tree when the values are negative', () => {

    let tree = new BinaryTree();
    tree.root = new Node(-20);
    tree.root.left = new Node(-15);
    tree.root.right = new Node(-7);
    tree.root.left.left = new Node(-9);
    tree.root.left.right = new Node(-42);
    tree.root.right.left = new Node(-2);
    tree.root.right.right = new Node(-17);

    let answer = tree.treeMax();

    expect(answer).toEqual(-2);
  });

  it('Will throw an error if the binary tree is empty', () => {

    let tree = new BinaryTree();

    let answer = tree.treeMax;

    expect(answer).toBe();
  });

});

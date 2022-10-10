'use strict';

const {Node, KaryNode, BinaryTree, BinarySearchTree} = require('../binary-tree-and-bst-implementation');


describe('Binary Tree and Binary Search Tree Insertions', () => {

  it('Can successfully instantiate an empty tree', () => {

    let tree = new BinaryTree();

    expect(tree.root).toBeNull();
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);

    expect(tree.root.value).toEqual(10);
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
  });

  it('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {

    let bst = new BinarySearchTree();
    bst.add(20);
    bst.add(33);
    bst.add(15);
    bst.add(17);
    bst.add(8);
    bst.add(47);
    bst.add(21);

    expect(bst.root.value).toEqual(20);
    expect(bst.root.left.value).toEqual(15);
    expect(bst.root.right.value).toEqual(33);
    expect(bst.root.left.left.value).toEqual(8);
    expect(bst.root.left.right.value).toEqual(17);
    expect(bst.root.right.left.value).toEqual(21);
    expect(bst.root.right.right.value).toEqual(47);
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);

    let answer = tree.preOrder();

    expect(answer).toStrictEqual([10, 5, 1, 8, 15, 17]);
  });

  it('Can successfully return a collection from an inorder traversal', () => {

    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);

    let answer = tree.inOrder();

    expect(answer).toStrictEqual([1, 5, 8, 10, 15, 17]);
  });

  it('Can successfully return a collection from a postorder traversal', () => {

    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);

    let answer = tree.postOrder();

    expect(answer).toStrictEqual([1, 8, 5, 17, 15, 10]);
  });

  it('Returns true or false for the contains method, given an existing or non-existing node value', () => {
    let bst = new BinarySearchTree();
    bst.add(20);
    bst.add(33);
    bst.add(15);
    bst.add(17);
    bst.add(8);
    bst.add(47);
    bst.add(21);

    let trueSearch = bst.contains(21);
    let falseSearch = bst.contains(22);

    expect(trueSearch).toBe('true');
    expect(falseSearch).toBe('false');
  });

});

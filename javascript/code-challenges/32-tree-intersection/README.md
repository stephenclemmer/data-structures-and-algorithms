# Code Challenge 32

## Problem Domain

Write a function called tree_intersection that takes two binary trees as parameters.

Using your Hashmap implementation as a part of your algorithm, return a set of values found in both trees.

## Inputs and Outputs

Input: two parameters, each a binary tree

Output: A set of values that are present in both trees

## Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

## Testing

- What if there are null values in the trees, should I return null as a value present oin both?
- Can any of the trees be empty?
- What will the data type be in the trees? Strings, integers, arrays, etc?
- Can the same value be present  more than once within a tree, and if so, should that be counted as a new instamce of a value, i.e. if it is present twice in treeOne, will it need to be present in treeTwo twice to be returned as a second occurrence, or do we just care about the value being present at all so duplcates would only be listed once if they are present anywhere within both trees in any quantity?

## Visual

![tree-intersection whiteboard](./assets/Code%20Challenge%2032%20Whiteboard.png)

## Algorithm

- define a function called tree_intersection that takes two trees as its parameters, treeOne and treeTwo
- Create an answer array to hold the values to be returned
- While traversing treeOne:
  - Map its values as the key for each hashmap
- While traversing treeTwo:
  - Check to see if the key matches any of the keys in the hashmap.
  - if its key matches the key in the hashmap, then push the key into the answer array.
  - If its key does not match a key in the hashmap, then continue traversing the tree

## Code

<!-- Taking two binary trees as parameters and using a Hashmap implementation as a part of the algorithm,
returns a set of values found in both trees. -->

function tree_intersection(tree1, tree2) {

  <!-- Creating an array of the values of the tree. -->

  let tree1Values = tree1.preOrder();

  <!-- Creating an array of the values of the tree. -->

  let tree2Values = tree2.preOrder();

  <!-- Creating an empty array to store the values of the tree intersection. -->

  let treeIntersection = [];

 <!-- Comparing the values of the two trees and pushing the values that are the same into the
 treeIntersection array. -->

  for (let i = 0; i < tree1Values.length; i++) {
    for (let j = 0; j < tree2Values.length; j++) {
      if (tree1Values[i] === tree2Values[j]) {
        treeIntersection.push(tree1Values[i]);
      }
    }
  }

  return treeIntersection;
}

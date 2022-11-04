'use strict';

/* Taking two binary trees as parameters and using a Hashmap implementation as a part of the algorithm,
returns a set of values found in both trees. */

function tree_intersection(tree1, tree2) {
 /* Creating an array of the values of the tree. */
  let tree1Values = tree1.preOrder();
/* Creating an array of the values of the tree. */
  let tree2Values = tree2.preOrder();
/* Creating an empty array to store the values of the tree intersection. */
  let treeIntersection = [];

 /* Comparing the values of the two trees and pushing the values that are the same into the
 treeIntersection array. */
  for (let i = 0; i < tree1Values.length; i++) {
    for (let j = 0; j < tree2Values.length; j++) {
      if (tree1Values[i] === tree2Values[j]) {
        treeIntersection.push(tree1Values[i]);
      }
    }
  }

  return treeIntersection;
}

module.exports = tree_intersection;

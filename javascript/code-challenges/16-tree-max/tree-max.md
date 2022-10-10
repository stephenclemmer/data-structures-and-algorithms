
# Tree Max

**Challenge:**
Write  method for the Binary Tree class called tree-max that finds maximum value

Arguments: none
Returns: The largerst number in the binary tree

You can assume that the values stored in the Binary Tree will be numeric.

All of the methods that already exist in this class are available to use.

**Edge Cases to test**

1. What if the tree is empty?
2. What if the values are negative?

**Visual**
![Tree Max Whiteboard](../../../javascript/code-challenges/assets/Code%20Challenge%2016.png)

**Approach:**

1. Chack to see if the tre is empty. If it is, then return an error message.
2. Declare a temp variable to use as a counter, and set the initial value to the root value.
3. Recurse through the tree
4. Check the value of each node as you recurse
5. Compare the value of each node to the value of the temp variable
6. If the value of the current node is greater than the value of the temo variable, then the temp variable is equal to the current node’s value.
7. Continue recursing through the tree.
8. Return the temp value.

**Code**
[Code for treeMax](tree-max.js)

**Efficiency:**
Time: O(n)
Space: O(1)

## API

**new Node(value)**
Creates a new node with the value specified.

**new BinaryTree()**
Creates an empty binary tree

**new BinarySeacrhTree()**
Creates an empty binary search tree

### Binary Tree Methods:

**preOrder**
Traverses the tree Root, Left, Right

**inOrder**
Traverses the tree Left, Root, Right

**postOrder**
Traverses the tree Left, Right, Root

**treeMax**
Returns the highest value in the binary tree

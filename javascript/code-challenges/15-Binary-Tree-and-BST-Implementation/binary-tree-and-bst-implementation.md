# Implementatin: Trees

## Node

**Challenge:**
Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.

**Approach:**

1. Created a Node class with a constructor that takes a value.
2. set the value to the value specified
3. set the left and right pointers to null.

**Efficiency:**
This has a time of O(1), because it creates a single node. It has a space of O(1) because it creates a single node.

## Binary Tree

**Challenge:**
Create a Binary Tree class

**Approach:**

1. Created a Binary Tree class with a constructor that takes no value, because the tree will be empty.
2. Set the value of the root to null to create an empty tree.

**Efficiency:**
This has a time of O(1), because it creates a single empty tree. It has a space of O(1) because the tree is empty.

## Binary Tree Methods

**Challenge:**
Define a method for each of the depth first traversals:
- pre order
- in order
- post order which returns an array of the values, ordered appropriately.

**Approach:**

**pre order:**

1. created an empty array to push the values onto as the tree is traversed.
2. pushed the current node's value into the array, which in this case is the root's value.
3. If there is a node to the left, then the node to the left will be traversed. On each traversal their value will be pushed into the array. This will continue to the laft until there are no more left values at which point the right values will be traversed and pushed into the array.
4. called the initial traverse function with a value of the root.
5. returned the array with all values that have been pushed into it.

**in order:**

1. created an empty array to push the values onto as the tree is traversed.
2. The tree is traveresed to its leftmost leaf, at which point the value is pushed in.
3. Once the left nodes have been traversed, the right nodes will be tarversed and pushed into the array.
4. This continues until the tree is traversed to the root at which point the root will be pushed into the array.
5. Then, the right side of the tree will be traversed from left to right.
6. I called the initial traverse function with a value of the root.
7. I returned the array with all values that have been pushed into it.

**post order:**

1. created an empty array to push the values onto as the tree is traversed.
2. The tree is traveresed to its leftmost leaf, at which point the value is pushed in.
3. Then, the tree moves to its next closest righthand child, if there is one, and that is pushed into the array.
4. This continues until the tree's lefthand side is traversed, at which point the righthadn side is traversed, starting at its leftmost leaef, and moving up toward the root from left to right.
5. Finally, the root is added to the array.
6. I called the initial traverse function with a value of the root.
7. I returned the array with all values that have been pushed into it.


**Efficiency:**
This has a time of O(n), because the whole tree will need to be traversed, and the length of time that will take is dependent on the length of the tree. It has a space of O(1) because no additional space will be needed.

## Binary Search Tree

**Challenge:**
**Create a Binary Search Tree class**
This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:

**Approach:**

1. Created a Binary Tree class with a constructor that takes no value, because the tree will be empty.
2. Set the value of the root to null to create an empty tree.

**Efficiency:**
This has a time of O(1), because it creates a single empty tree. It has a space of O(1) because the tree is empty.

## Binary Search Tree Methods

**Add**
Arguments: value
Return: nothing
Adds a new node with that value in the correct location in the binary search tree.

**Approach**

1. Create a new node with the value equal to the value specified.
2. Checks to see if the tree is empty, at which point it makes the new node the root.
3. If the tree is not empty, then the tree is traversed, if the value specified as an argument is equal to the current value, then the tree already contains the value and it returns undefined.
4. If the value specified as an argument is less than the current value, and the current.left is null, then the new node becomes current.left, and the tree is returned. Otherwise, the tree continues to be traversed to the left.
5. If the value specified as an argument is not less than the current value, and the current.right is null, then the new node becomes current.right, and the tree is returned. Otherwise, the tree continues to be traversed to the right.
6. Steps four and five are repeated until the new node is added to the tree, or until undefined is returned, indicating that the value is already present in the tree.

**Efficiency:**
This has a time of O(LogN), because the tree will get cut in half at each step as it is being traversed, and the whole tree will be n large. It has a space of O(1) because no additional space will be needed.

**Contains**
Argument: value
Returns: boolean indicating whether or not the value is in the tree at least once.

**Approach:**

1. If there is no root, then a message is rteturned indicationg that the tree is empty.
2. If the tree is not empty, then the current node is set to the root.
3. Avaiable called found is defined and set to false as a default, indicating that the value is not present.
4. while there is a current node as the tree is traversed, and while the value has not been found:
5. If the value entered as an argument is less than the current value, then the current value will move left,
6. If the value entered as an argument is greater than the the current value, then the current value will move right.
7. If the current can neither move left or right, then the current is equal to the value entered as an argument, at which point found is set equal to the current, which breaks out of the loop.
8. If found is still false, then it returns false. If found is true then it returns true.


**Efficiency:**
This has a time of O(LogN), because the tree will get cut in half at each step as it is being traversed, and the whole tree will be n large. It has a space of O(1) because no additional space will be needed.


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

### Binary Search Tree Methods:

**add(value)**
Adds a value to the binary tree.

**contains(value)**
Traverses the tree. Returns true if the value is conatined in the tree. Returns false if the value is not contained in the tree.


# Implementatin: Trees

## Challenge

##### Write the following methods for the Linked List class:

1. append
2. insertBefore
3. insertAfter

## Node

**Challenge:**
Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.

**Approach**
<!-- I created a new node with the new value. Since only the end of the list will point to null, I traveresed the linked list until I came to a current.next that was equal to null by creating a while loop that would continue to move current to current.next as long as current.next did not equal null. This would cause the while loop to break at the point while current equaled the last node in the linked list. I then pointed current.next to the new node, which will make the new node the last value in the linked list. I then returned to break out of the loop. -->

**Efficiency:**
<!-- This has a time of O(n), because the whole list will need to be traversed, and the length of time that will take is dependent on the length of the list. It has a space of O(1) because other than the new node, no additional space will be needed. -->

## Binary Tree

**Challenge:**
Create a Binary Tree class

**Challenge:**
Define a method for each of the depth first traversals:
- pre order
- in order
- post order which returns an array of the values, ordered appropriately.

**Approach:**

**pre order:**

**in order:**

**post order:**

<!-- I first checked to see if the list was empty. If it was empty, I alerted the user that the list was empty.

If the list is not empty, then I prepared to traverse the list by setting the the current value to the head.

I checked the head in case its value was the value to be inserted before. If it were, then I created a new node with the new value which was inputted as an argument,pointed the new node to the current value, and set the head to the new node.

If the head's value was not the one that was entered as an argument, looked at the current.next's value until I found one that matched the value we were looking for. At this time I created a new node and assigned it the new value that was given as an argument, pointed the new node to the node after the current node (current.next), and then pointed the current node toward the new node. I then returned to break out of the loop. -->

**Efficiency:**
<!-- This has a time of O(n), because the whole list will need to be traversed, and the length of time that will take is dependent on the length of the list. It has a space of O(1) because other than the new node, no additional space will be needed. -->

## Binary Search Tree

**Challenge:**
**Create a Binary Search Tree class**
This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:

**Add**
Arguments: value
Return: nothing
Adds a new node with that value in the correct location in the binary search tree.

**Contains**
Argument: value
Returns: boolean indicating whether or not the value is in the tree at least once.

**Approach**
<!-- I first checked to see if the list was empty. If it was empty, I alerted the user that the list was empty.

If the list is not empty, then I prepared to traverse the list by setting the the current value to the head.

As I traveresed the list, if the current value was equal to the value that had been input as an argument, then I created a new node and assigned it the new value that had been entered as an argument. Then, I pointed the new node to the current node's next node. Then, I pointed the current node's next value to the new node. I then returned to break out of the loop. -->

**Efficiency:**
<!-- This has a time of O(n), because the whole list will need to be traversed, and the length of time that will take is dependent on the length of the list. It has a space of O(1) because other than the new node, no additional space will be needed. -->


## API
<!-- Description of each method publicly available to your Linked List -->
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


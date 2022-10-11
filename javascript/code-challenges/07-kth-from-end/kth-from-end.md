# k-th value from the end of a linked list.

Write the following method for the Linked List class:

## kth from end

**argument:** a number, k, as a parameter.

**Challenge**
Return the node’s value that is k places from the tail of the linked list.
You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

**Approach:**

1. In the LinkedList contructor, a counter was created for 'this.length' with an initial value of zero.
2. As nodes were added in each method the counter incremented.
3. If 'k' is a number within the range of the length of the
4. If 'k' is longer than the length of the linked list, then an error is thrown.
5. If 'k' is less than one, then an error is thrown.
6. If 'k' is between one and the length of the list, then:
7. a variable called nodeIndex is set as the length minus 'k'.
8. The current node is set to this.head.
9. A for loop moves the current node as long as i is less than the value of the nodeIndex.
10. At this point the current value will be on the kth-from-the-end node.
11. The value of the current node is returned.

**Efficiency:**
Space: O(1)
Time: O(n)

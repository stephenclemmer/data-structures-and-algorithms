# Stacks and Queues

Stacks have a single point where nodes may both enter and exit. They operate on a first in, last out order. i.e., the Call Stack, or a stack of plates.

Queues have a single point of entry and a single point of exit. They operate on a first in first out order. i.e., a line of people waiting to ride a roller coaster.

## Challenge

### Node

Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.

### Stack

Create a Stack class that has a top property. It creates an empty Stack when instantiated. This object should be aware of a default empty value assigned to top when the stack is created. The class should contain the following methods:

### Stack Methods:

**push:**

- Arguments: value
- adds a new node with that value to the top of the stack with an O(1) Time performance.

**pop:**

- Arguments: none
- Returns: the value from node from the top of the stack
- Removes the node from the top of the stack
- Should raise exception when called on empty stack

**peek:**

- Arguments: none
- Returns: Value of the node located at the top of the stack
- Should raise exception when called on empty

**stack is empty:**

- Arguments: none
- Returns: Boolean indicating whether or not the stack is empty.

### Queue

Create a Queue class that has a front property. It creates an empty Queue when instantiated. This object should be aware of a default empty value assigned to front when the queue is created.
The class should contain the following methods:

### Queue Methods

**enqueue:**

- Arguments: value
- adds a new node with that value to the back of the queue with an O(1) Time performance.

**dequeue:**

- Arguments: none
- Returns: the value from node from the front of the queue
- Removes the node from the front of the queue
- Should raise exception when called on empty queue

**peek:**

- Arguments: none
- Returns: Value of the node located at the front of the queue
- Should raise exception when called on empty stack

**is empty:**

- Arguments: none
- Returns: Boolean indicating whether or not the queue is empty


## Approach & Efficiency
Node: O1

**Stack:**
stack O1
push O1
pop O1
peek O1
isEmpty: O1

**Queue**
queue O1
enqueue O1
dequeue O1
peek O1
isEmpty: O1


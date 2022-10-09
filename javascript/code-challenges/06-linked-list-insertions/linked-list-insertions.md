# Linked List Insertions
<!-- Short summary or background information -->

## Challenge

##### Write the following methods for the Linked List class:

1. append
2. insertBefore
3. insertAfter

## append

**Challenge:**
arguments: new value
adds a new node with the given value to the end of the list

**Approach**
I created a new node with the new value. Since only the end of the list will point to null, I traveresed the linked list until I came to a current.next that was equal to null by creating a while loop that would continue to move current to current.next as long as current.next did not equal null. This would cause the while loop to break at the point while current equaled the last node in the linked list. I then pointed current.next to the new node, which will make the new node the last value in the linked list. I then returned to break out of the loop.

**Efficiency:**
This has a time of O(n), because the whole list will need to be traversed, and the length of time that will take is dependent on the length of the list. It has a space of O(1) because other than the new node, no additional space will be needed.

## insert before

**Challenge:**
arguments: value, new value
adds a new node with the given new value immediately before the first node that has the value specified

**Approach**
I first checked to see if the list was empty. If it was empty, I alerted the user that the list was empty.

If the list is not empty, then I prepared to traverse the list by setting the the current value to the head.

I checked the head in case its value was the value to be inserted before. If it were, then I created a new node with the new value which was inputted as an argument,pointed the new node to the current value, and set the head to the new node.

If the head's value was not the one that was entered as an argument, looked at the current.next's value until I found one that matched the value we were looking for. At this time I created a new node and assigned it the new value that was given as an argument, pointed the new node to the node after the current node (current.next), and then pointed the current node toward the new node. I then returned to break out of the loop.

**Efficiency:**
This has a time of O(n), because the whole list will need to be traversed, and the length of time that will take is dependent on the length of the list. It has a space of O(1) because other than the new node, no additional space will be needed.

## insert after

**Challenge:**
arguments: value, new value
adds a new node with the given new value immediately after the first node that has the value specified

**Approach**
I first checked to see if the list was empty. If it was empty, I alerted the user that the list was empty.

If the list is not empty, then I prepared to traverse the list by setting the the current value to the head.

As I traveresed the list, if the current value was equal to the value that had been input as an argument, then I created a new node and assigned it the new value that had been entered as an argument. Then, I pointed the new node to the current node's next node. Then, I pointed the current node's next value to the new node. I then returned to break out of the loop.

**Efficiency:**
This has a time of O(n), because the whole list will need to be traversed, and the length of time that will take is dependent on the length of the list. It has a space of O(1) because other than the new node, no additional space will be needed.


## API
<!-- Description of each method publicly available to your Linked List -->
**new Node(value)**
Creates a new node with the value specified.

**new LinkedList()**
Creates an empty linked list

**includes(value)**
Method for checking to see if a linked-list includes a node with the value specified.

**toString()**
Method that generates a string showing all of the nodes and their values in the entire linked list

**insert(value)**
Method that inserts a node with the specified value at the beginning of a linked-list.

**append(value)**
Method that adds a node with a given value to the end of the linked list.

**insertBefore(value, newValue)**
Method that inserts a new node with the new value specified before a node in the linked-list that has the value specified.

**insertAfter(value, newValue)**
Method that inserts a new node with the new value specified after a node in the linked-list that has the value specified.

![linked-list-zip whiteboard 1](../assets/Code%20Challenge%2008.png)

**Feature Tasks**
Write a function called zip lists
Arguments: 2 linked lists
Return: New Linked List, zipped as noted below
Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the the zipped list.
Try and keep additional space down to O(1)
You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

**Algorithm**
Define a function called zipLists that takes in two linked lists as arguments, (L1 and L2)
Define a new variable for the final list (L3)
Define a pointer (P) for appending to the end of L3.
Define a 'current' pointer (C1)

**helper  function**
make a helper function named zipNode that takes in a linked list and a pointer to handle:
git checkout -b 
1. using 'current' to point to the head node from a list
2. reassigning the head to the mext node in the list
3. pointing current to null, so the node will be removed from the list
4. pointing the pointer to the node that was removed.
5. moving the pointer to the node that was just pointed to
6. assigning the pointer's next to null
7. RETURNING THE POINTER

while L1's head is not null, AND L2's head is not null:

The helper function will be used to zip each list to the other.
SInce the first node in the first list has already been set as the new head of the final zipped list, the helper function should be run on list one, and then on list two

Once the while loop is broken, it's possible that the other list has remaining values, so each list needs to be checked to:

1. Check if there's something still it the list.
2. If there is soemthing in the list, then the pointer's next value should be set to the head of the list, which will append the rest of the list to the end of the zipped list.

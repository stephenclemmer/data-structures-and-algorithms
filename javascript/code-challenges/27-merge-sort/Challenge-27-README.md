# Merge Sort

## Sources

[Algorithm Video](https://www.youtube.com/watch?v=JSceec-wEyw)

[Sorting Algorithm Comparisons](https://ayush-arora.medium.com/sorting-algorithms-properties-pros-cons-comparisons-1b43599d587b)

[Big O Notation and Space/Time Complexity](https://medium.com/swlh/big-o-notation-and-time-space-complexity-1806936e6330#:~:text=O(nlogn)%20is%20known%20as,using%20O(logn)%20space.)

[Big O Notation: O(N Log N)](https://dev.to/lofiandcode/big-o-part-4-n-log-n-4hgp)

[Stable vs. UnStable Sorting Algorithms](https://www.freecodecamp.org/news/stability-in-sorting-algorithms-a-treatment-of-equality-fa3140a5a539/#:~:text=A%20stable%20sorting%20algorithm%20maintains,after%20the%20collection%20is%20sorted.)

[Geeks for Geeks](https://www.geeksforgeeks.org/merge-sort/?ref=lbp)

[w3 Resource](https://www.tutorialspoint.com/how-to-implement-merge-sort-in-javascript)

___

## Blog

The Merge Sort algorithm takes a "divide and conquer" approach to sorting. It divides the list in ever-smaller halves until it cannot be further divided. Think of this as each number getting its own chute to start from, like horses lining up on a track before a race. Then, it begins to compare each set of numbers, and sorts them from lowest to highest, merging each set into a new set as it compares. First, it compares each number with the one immeditealy next to it, merging, them into a sorted set of two. Then, the sets of two are merged into a sorted set of four. The sets of four are merged into a sorted set of eight. This pattern continues until all of the values have been sorted and merged into s single set of values.

The Merge Sort algorithm is made up of two functions. It uses recursion to traverse through the unsorted array, sorting as is traverses the unsorted array.

Merge sort is a stable sorting algorithm. A stable sorting algorithm maintains the relative order of the items with equal sort keys. An unstable sorting algorithm does not. In other words, when a collection is sorted with a stable sorting algorithm, items with the same sort keys preserve their order after the collection is sorted. This is usefule when related types of data may be associated with what one is trying to sort, i.e. a column of names on a spreadsheet that also contains columns for phone number and address.

Like Insertion Sort, Merge sort is a comparison-based sorting algorithm. However, unlike Insertion Sort, Merge Sort doesn't go through the whole list several times, which makes it quicker for larger lists. Good use cases for merge sort include sorting through linked-lists. Downsides include being memory heavy, because it needs to store the sub elements of the inital split, and it also has to manage a second array.

___

## Algorithm

**My algorithm:**

1. check the left index of the array is less than the right index of the array, if the array satisfies the condition then calculate the midpoint of the array.
2. Divide the numbers to be sorted,
3. Compare the first set of two numbers that are next to oneanother
4. Compare the value of each pair within the set, merging them into a set where each pair is sorted.
5. Then, compare the first set of two to the second set of two, again merging the numbers from lowest to highset into a new set of four.
6. Then, compare the first set of four to the second set of four, again merging the numbers from lowest to highset into a new set of eight.
7. This process continues until all of the numbers have been merged into a final set which has been sorted.

**Geeks for Geeks Algorithm:**

step 1: start

step 2: declare array and left, right, mid variable

step 3: perform merge function.
    if left > right
        return
    mid= (left+right)/2
    mergesort(array, left, mid)
    mergesort(array, mid+1, right)
    merge(array, left, mid, right)

step 4: Stop

___

## Pseudocode

```
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

___

## Code

The merge sort is made up of two functions; mergeSort, and a helper function called mergeArrays. It uses recursion to traverse through the unsorted array, sorting as is traverses the unsorted array.

**mergeArrays Helper Function:**

```javascript
function mergeArrays(leftSubArray, rightSubArray) {
         let array = []
         while (leftSubArray.length && rightSubArray.length) {
            if (leftSubArray[0] < rightSubArray[0]) {
               array.push(leftSubArray.shift())
            } else {
               array.push(rightSubArray.shift())
            }
         }
         return [ ...array, ...leftSubArray, ...rightSubArray ]
      }
```

**mergeSort Function:**

```javascript
      function mergeSort(unsortedArray) {
         const middleIndex = unsortedArray.length / 2
         if(unsortedArray.length < 2) {
            return unsortedArray
         }
         const leftSubArray = unsortedArray.splice(0, middleIndex)
         return mergeArrays(mergeSort(leftSubArray),mergeSort(unsortedArray))
      }
```

___

## Sample Input

[8,4,23,42,16,15]
___

## Implementation

___

## Big O

Time: O(nLogn) -O(nlogn) implies that logn operations will occur n times. Any algorithm that repeatedly divides a set of data in half and then processes those halves independently with a sub algorithm that has a time complexity of O(N), will have an overall time complexity of O(N log N). Examples include Merge sort, Heap sort, and Quick sort.

Space: O(nLogn) -  O(nlogn) implies that logn operations will occur n times. Any algorithm that repeatedly divides a set of data in half and then processes those halves independently with a sub algorithm that has a time complexity of O(N), will have an overall time complexity of O(N log N). Examples include Merge sort, Heap sort, and Quick sort.

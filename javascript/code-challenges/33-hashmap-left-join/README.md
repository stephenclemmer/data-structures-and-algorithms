# 33-hashmap-left-join

Collaborated with:
Brandon Pitts

## Problem Domain
Write a function called left join that takes two hash maps as its arguments.

The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.

The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.

Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic

## Inputs

Two agruments, both of which are hash maps

## Outputs

A table (or other data structure of some kind) that holds the information from the first list, and has added coulumns for information from the second list. Any thing from the first list that doesn't have a corresponding item from the secod list will get a value of "null" in the new column(s).

// Write a function that LEFT JOINs two hashmaps into a single data structure.
// The first argument is a hashmap that has a string as a keys, and a synonym of the key as a value.
// The second argument is a hashmap that has a string as a keys, and an antonym of the key as a value.
// Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
// LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row.
// If no values exist in the right hashmap, then NULL should be appended to the result row.


Hashmap-left-join

###Challenge
Write a function that LEFT JOINs two hashmaps into a single data structure.

Write a function called left join
Arguments: two hash maps
The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic

Approach & Efficiency
Created a leftJoin function that takes two hashmaps as arguments. We then create an empty array Then we create an array of the keys in hashmap1. This for loop is iterating through the keys array. Create a variable for the key, value, and antonym.

Then we are pushing the key, value, and antonym into the result array. Returning the result array.


[Whiteboard](./assets/Code%20Challenge%2033%20Whiteboard.png)


function leftJoin(hashmap1, hashmap2){

  // Create an empty array to store the result.
  let result = [];
  // Get the keys of the first hashmap and loop through them.
  let keys = Object.keys(hashmap1);
  for (let i = 0; i < keys.length; i++){
    // For each key, get the value of the key from the first hashmap, and the value of the key from the second hashmap.
    let key = keys[i];
    let value = hashmap1[key];
    let antonym = hashmap2[key];
    // push the key, the value from the first hashmap, and the value from the second hashmap into the result array
    result.push([key, value, antonym]);
  }
  return result;
}

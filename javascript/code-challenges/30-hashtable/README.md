# Hashtables
<!-- Short summary or background information -->

In hashing, large keys are converted into small keys by using hash functions. The values are then stored in a data structure called hash table. The idea of hashing is to distribute entries (key/value pairs) uniformly across an array. Each element is assigned a key (converted key). By using that key you can access the element in O(1) time. Using the key, the algorithm (hash function) computes an index that suggests where an entry can be found or inserted.

Hashing is implemented in two steps:

1. An element is converted into an integer by using a hash function. This element can be used as an index to store the original element, which falls into the hash table.
2. The element is stored in the hash table where it can be quickly retrieved using hashed key.

> hash = hashfunc(key)

> index = hash % array_size

In this method, the hash is independent of the array size and it is then reduced to an index (a number between 0 and array_size − 1) by using the modulo operator (%).

**Hash function**

> A hash function is any function that can be used to map a data set of an arbitrary size to a data set of a fixed size, which falls into the hash table. The values returned by a hash function are called hash values, hash codes, hash sums, or simply hashes.

> To achieve a good hashing mechanism, It is important to have a good hash function with the following basic requirements:

1. Easy to compute: It should be easy to compute and must not become an algorithm in itself.

2. Uniform distribution: It should provide a uniform distribution across the hash table and should not result in clustering.

3. Less collisions: Collisions occur when pairs of elements are mapped to the same hash value. These should be avoided.

*Note:*
> Irrespective of how good a hash function is, collisions are bound to occur. Therefore, to maintain the performance of a hash table, it is important to manage collisions through various collision resolution techniques.



**Hash maps do this to store values:**

- accept a key
- calculate the hash of the key
- use modulus to convert the hash into an array index
- store the key with the value by appending both to the end of a linked list

**Hash maps do this to read value:**


- accept a key
- calculate the hash of the key
- use modulus to convert the hash into an array index
- use the array index to access the short LinkedList representing a bucket
- search through the bucket looking for a node with a key/value pair that matches the key you were given

## Resources:

[article](https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/#:~:text=You%20can%20implement%20a%20Hash,value%20pairs%20from%20the%20table.)

[video](https://www.youtube.com/watch?v=shs0KM3wKv8)

## Challenge
<!-- Description of the challenge -->

**Challenge Setup & Execution**
Branch Name: hashtable

**Creating a Hash**
A hashtable traditionally is created from an array. I always like the size 1024. this is important for index placement. After you have created your array of the appropriate size, do some sort of logic to turn that “key” into a numeric number value. Here is a simplistic hashing algorithm:

- Add or multiply all the ASCII values together.
- Multiply it by a prime number such as 599.
- Use modulo to get the remainder of the result, when divided by the total size of the array.
- Insert into the array at that index.

#### Example:

```javascript
Key = "Cat"
Value = "Josie"

67 + 97 + 116 = 280

280 * 599 = 69648

69648 % 1024 = 16

Key gets placed in index of 16.
```

Challenge Type: New Implementation

**Features**
Implement a Hashtable Class ...

... with the following methods:

> ### keys( )

The keys() method returns a collection (array) of unique hash keys.

**Returns:** Collection of keys

```javascript
class HashTable(){
  constructor() {
    this.table = new Array(1024);
    this.size = 0;
  }
}
```

<!-- or
```javascript
class HashTable {
  constructor() {
    this.object = {};
    this.size = 0;
    this.length = 0;
  }
}
``` -->

> ### hash( )

The hash() method will accept a key as a string, conduct the hash, and then return the index of the array where the key/value should be placed.

**Arguments:** key
**Returns:** Index in the collection for that key

```javascript
hash(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % this.table.length;;
}
```
<!-- or
```javascript
hash(key) {
  return key.toString().length % this.size
}
``` -->

> ### set( )

The set() method that accepts  (key, value) as its parameters:

- The set() method will call the _hash() method to get the index value.
- The [key, value] pair will be assigned to the table at the specified index
- Then, the size property will be incremented by one

When adding a new key/value pair to a hashtable:

1. send the key to the hash() method.
2. Once you determine the index of where it should be placed, go to that index
3. Check if something exists at that index already, if it doesn’t, add it with the key/value pair.
4. If something does exist, add the new key/value pair to the data structure within that bucket.

**Arguments:** key, value
**Returns:** nothing
This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
Should a given key already exist, replace its value from the value argument given to this method.

```javascript
set(key, value) {
  const index = this._hash(key);
  this.table[index] = [key, value];
  this.size++;
}
```
To create the second array, you need to update the set() method so that it will:

Look to the table[index] and loop over the array values.
If the key at one of the arrays is equal to the key passed to the method, replace the value at index 1 and stop any further execution with the return statement.
If no matching key is found, push a new array of key and value to the second array.
Else, initialize a new array and push the key/value pair to the specified index
Whenever a push() method is called, increment the size property by one.
The complete set() method code will be as follows:

```javascript
set(key, value) {
  const index = this._hash(key);
  if (this.table[index]) {
    for (let i = 0; i < this.table[index].length; i++) {
      // Find the key/value pair in the chain
      if (this.table[index][i][0] === key) {
        this.table[index][i][1] = value;
        return;
      }
    }
    // not found, push a new key/value pair
    this.table[index].push([key, value]);
  } else {
    this.table[index] = [];
    this.table[index].push([key, value]);
  }
  this.size++;
}
```

> ### get( )
The get() method accepts a key value as its parameter:

- The method will call the _hash() method to once again retrieve the table index
- Return the value stored at table[index]

The get() method takes in a key, gets the Hash, and goes to the index location specified. Once at the index location is found in the array, it is then the responsibility of the algorithm the iterate through the bucket and see if the key exists and return the value.

**Arguments:** key
**Returns:** Value associated with that key in the table

```javascript
get(key) {
  const index = this._hash(key);
  return this.table[index];
}
```
>The get() method so that it will also check the second-level array with a for loop and return the right key/value pair:
```javascript
get(key) {
  const target = this._hash(key);
  if (this.table[target]) {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[target][i][0] === key) {
        return this.table[target][i][1];
      }
    }
  }
  return undefined;
}
```

> ### has( )

The has() method will accept a key, and return a bool on if that key exists inside the hashtable. The best way to do this is to have the contains call the hash() method and check the hashtable if the key exists in the table given the index returned.

**Arguments:** key
**Returns:** Boolean, indicating if the key exists in the table already.

```javascript
has(key) {
  const hash = this.hash(key);
  if (this.object.hasOwnProperty(hash) && this.object[hash].hasOwnProperty(key)){

    return this.object\[hash][key];
  } else {
    return null;
  }
}
```


## Structure and Testing
Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Be sure to follow your language/frameworks standard naming conventions (e.g. C# uses PascalCasing for all method and class names).

Any exceptions or errors that come from your code should be contextual, descriptive, capture-able errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom error that describes what went wrong in calling the methods you wrote for this lab.

Write tests to prove the following functionality:

- Setting a key/value to your hashtable results in the value being in the data structure
- Retrieving based on a key returns the value stored
- Successfully returns null for a key that does not exist in the hashtable
- Successfully returns a list of all unique keys that exist in the hashtable
- Successfully handle a collision within the hashtable
- Successfully retrieve a value from a bucket within the hashtable that has a collision
- Successfully hash a key to an in-range value
- Ensure your tests are passing before you submit your solution.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## API
<!-- Description of each method publicly available in each of your hashtable -->

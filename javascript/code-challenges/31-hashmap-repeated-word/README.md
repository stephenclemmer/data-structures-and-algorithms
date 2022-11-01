# Code Challenge 31

## Problem Domain

Write a function called repeated word that finds the first word to occur more than once in a string

## Inputs and Outputs

Input: string

Output: First repeated word in the string

## Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

## Testing

1. Test if the string does not have any reeated words, return the string 'No repeated words.'

2. Will return the first repreat word in a string.

3. Will return the first repeated word, regardless of case.

## Visual

![hashmap-repeated-words whiteboard](./assets/Code%20Challenge%2031%20Whiteboard.png)

## Algorithm

- define a function named repeatedWord that takes in a string
- remove all of the punctuation from the string
- make the string all lowercase
- use the Map function in javascript to create a new instance of a hashmap.
- split the string on every space
- For the length of the string, check if the word is in the map.
- If it is, it is adding one to the count.
- If it is not, it is adding the word to the map and setting the count to 1.
- Then it is checking if the count is greater than 1. If it is, it is returning the word.
- If the count never goes above one then the phrase 'No word is being repeated' will be returned

## Code

let test = "Ravi, Had been! 'saying' that he had! been there."

<!-- /**
 * Remove all punctuation from a string.
 * @param string - The string to remove punctuation from.
 * @returns The string with all punctuation removed.
 */ -->

```javascript
var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

function removePunctuation(string) {
  return string.replace(regex, '');
}
```

<!-- This function is taking a string and removing all punctuation from it. Then it is making the string
lowercase. Then it is creating a map to store the words and their count. */
function first_repeating_word(string) -->

```javascript
  let puncString = removePunctuation(string);

  let lowString = puncString.toLowerCase();


  let word_count = new Map();
```

  <!-- This is a for loop that is iterating through the string. It is splitting the string into an array
  of words. Then it is checking if the word is in the map. If it is, it is adding one to the count.
  If it is not, it is adding the word to the map and setting the count to 1. Then it is checking if
  the count is greater than 1. If it is, it is returning the word. -->

```javascript
  for (let i of lowString.split(' ')) {


    if (word_count.has(i)) {
      word_count.set(i, word_count.get(i) + 1);
    }
    else word_count.set(i, 1);

    if (word_count.get(i) > 1)
      return i;
  }
```

<!-- This is the default return value. If no word is being repeated, it will return this string.  -->

```javascript
  return 'No word is being repeated';
}

```



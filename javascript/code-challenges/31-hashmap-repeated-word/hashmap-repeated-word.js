
let test = "Ravi, Had been! 'saying' that he had! been there."

/**
 * Remove all punctuation from a string.
 * @param string - The string to remove punctuation from.
 * @returns The string with all punctuation removed.
 */
var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

function removePunctuation(string) {
  return string.replace(regex, '');
}

/* This function is taking a string and removing all punctuation from it. Then it is making the string
lowercase. Then it is creating a map to store the words and their count. */
function first_repeating_word(string) {

  let puncString = removePunctuation(string);

  let lowString = puncString.toLowerCase();


  let word_count = new Map();

  /* This is a for loop that is iterating through the string. It is splitting the string into an array
  of words. Then it is checking if the word is in the map. If it is, it is adding one to the count.
  If it is not, it is adding the word to the map and setting the count to 1. Then it is checking if
  the count is greater than 1. If it is, it is returning the word. */
  for (let i of lowString.split(' ')) {


    if (word_count.has(i)) {
      word_count.set(i, word_count.get(i) + 1);
    }
    else word_count.set(i, 1);

    if (word_count.get(i) > 1)
      return i;
  }


  /* This is the default return value. If no word is being repeated, it will return this string. */
  return 'No word is being repeated';
}

// Driver Code
console.log(first_repeating_word(test));

module.exports = {first_repeating_word, removePunctuation};




let hashmap1 = {
  'fond': 'enamored',
  'wrath': 'anger',
  'diligent': 'employed',
  'outfit': 'garb',
  'guide': 'usher'
};

let hashmap2 = {
  'fond': 'averse',
  'wrath': 'delight',
  'diligent': 'idle',
  'guide': 'follow',
  'flow': 'jam'
};

/**
 * @param hashmap1 - a hashmap with key-value pairs of synonyms
 * @param hashmap2 - { a hashmap with key-value pairs of antonyms
 * @returns An array of arrays. Each array contains the key, value, and antonym of the key.
 */

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

console.log(leftJoin(hashmap1, hashmap2));


module.exports = leftJoin;

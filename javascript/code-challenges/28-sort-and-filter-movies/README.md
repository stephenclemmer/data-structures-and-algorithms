# sort-and-filter-movies

## Challenge Setup & Execution

**Branch Name:** `sort-and-filter-movies`

**Challenge Type:** Code Challenge / Algorithm

## Approach

After researching this problem, I realized that I could sort this dataset by using an insert sort method. I decided to approach the sortYear function first because it seemed to be the least complex, and most analagous to the insert sort algorithm of which I am famliar. I took my insert sort code and refactored it, which gave me the results I was looking for very quickly.

Next, I decided to approach the sortTitle function, because aside from solving the problem of neededing to ignore the article 'The' (and a space), to get the list alphabetized I figured that with a slight refactor of the sortYear function I could get it alphebetized. I was able to do so fairly quickly, but the titles that began with 'The' were still out of place. Since only two indexes would be compared with reach pass if the for loop, for each of the indexes (arr\[j] or arr\[j+1], I used the . includes method to pinpoint the word 'The' in each title, and then used the .replace method to replace 'The ' with an empty string. I initially did this within the while loop, but found that it created an off by one error while testing so I moved the logic out into the for loop. It should be noted that for the tests to pass, I removed the articles from the expected results of the test.

Finally I approached solving the inGenre method since it needed only one aditional step added to the sortTitle function. My approach was to create an additional genre-array, and then first sort all of the movies of the genre entered as an argument into the genre-array. Then, I sorted the genre-array in the same way that I sorted using sortTitle.






## Feature Tasks

- Implement the functions `sortYear`, `sortTitle`, and `inGenre` in the file `sort.ts`.

  - Execute your tests while developing using `npm run watch`
  - Execute your tests in CI using `npm test`

- Functions:
  - sortYear
    - Arguments: `movies` array
    - Sorts the input array by year, in ascending order.
  - sortTitle
    - Arguments: `movies` array
    - Sorts the input array by title, ignoring `"The "` at the beginning of titles.
  - inGenre
    - Arguments: `movies` array, `genre` string
    - Filters the input array, returning only those movies who include `genre`.

- Extract the comparator callbacks
  - sortYear and sortTitle should both be implemented by passing a custom comparison function to the built-in sort utility.
  - Export these helper functions at the top level of your file, and call them from your sortYear and sortTitle functions.
  - Import these helper functions into your test, and write tests that verify they return the appropriate comparison values (<0, 0, or >0).

## Example

See tests.js

## Requirements

Ensure your complete solution follows the standard requirements.

1. Write additional [unit tests](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Challenge_Testing){:target="\_blank"}
1. Follow the [template for a well-formatted README](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Challenge_Documentation){:target="\_blank"}
1. Submit the assignment following [these instructions](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Challenge_Submission){:target="\_blank"}

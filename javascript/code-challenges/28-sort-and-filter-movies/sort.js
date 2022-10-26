'use strict';

const movies = require('./movies');

// write your own comparator function for each function and export THOSE separately for testing as well. You will also use comparators in the three pre-written functions bellow

// examples for demo
const books = ['A Tale of Two Cities', 'Mary Poppins', 'Lord of the Rings'];

// sample:
let sampleComparator = (a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
};

// comparator for books:
function bookComparator(a, b) {
  const bookA = a.replace('A ', '');
  const bookB = b.replace('A ', '');

  if (bookA < bookB) return -1;
  if (bookA > bookB) return 1;
  return 0;

}

console.log(books);
books.sort(bookComparator);
console.log(books);

const standings = [
  { team: 'Lions', score: 4 },
  { team: 'Tigers', score: 1 },
  { team: 'Bears', score: 5 },
  { team: 'OhMy...', score: 3 },
];

//Demo:  stay tuned...

// what is a comparator?
// function that determines sort definitions



// Complete for Code Challenge 28
function sortYear(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    while (j >= 0 && arr[j].year > temp.year) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}



function sortTitle(arr) {

  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];

    if (arr[j].title.includes('The')) {
      arr[j].title = arr[j].title.replace('The ', '');
    }

    if (arr[j + 1].title.includes('The')) {
      arr[j + 1].title = arr[j + 1].title.replace('The ', '');
    }

    while (j >= 0 && arr[j].title > temp.title) {

      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}


function inGenre(arr, genres) {

  let genresArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].genres.includes(genres)) {
      genresArr.push(arr[i]);
    }
  }

  for (let i = 1; i < genresArr.length; i++) {
    let j = i - 1;
    let temp = genresArr[i];

    if (genresArr[j].title.includes('The')) {
      genresArr[j].title = genresArr[j].title.replace('The ', '');
    }

    if (genresArr[j + 1].title.includes('The')) {
      genresArr[j + 1].title = genresArr[j + 1].title.replace('The ', '');
    }

    while (j >= 0 && genresArr[j].title > temp.title) {
      console.log('INSIDE THE WHILE LOOP');

      genresArr[j + 1] = genresArr[j];
      j--;
    }
    genresArr[j + 1] = temp;
  }
  return genresArr;
}

module.exports = { sortYear, sortTitle, inGenre };

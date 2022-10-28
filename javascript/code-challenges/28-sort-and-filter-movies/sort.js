'use strict';

const movies = require('./movies');

// write your own comparator function for each function and export THOSE separately for testing as well. You will also use comparators in the three pre-written functions bellow


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

      genresArr[j + 1] = genresArr[j];
      j--;
    }
    genresArr[j + 1] = temp;
  }
  return genresArr;
}

module.exports = { sortYear, sortTitle, inGenre };

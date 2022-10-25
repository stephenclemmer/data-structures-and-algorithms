function mergeArrays(leftSubArray, rightSubArray) {
  let array = [];
  while (leftSubArray.length && rightSubArray.length) {
    if (leftSubArray[0] < rightSubArray[0]) {
      array.push(leftSubArray.shift());
    } else {
      array.push(rightSubArray.shift());
    }
  }
  return [...array, ...leftSubArray, ...rightSubArray];
}

function mergeSort(unsortedArray) {
  const middleIndex = unsortedArray.length / 2;
  if (unsortedArray.length < 2) {
    return unsortedArray;
  }
  const leftSubArray = unsortedArray.splice(0, middleIndex);
  return mergeArrays(mergeSort(leftSubArray), mergeSort(unsortedArray));
}

module.exports = {mergeSort, mergeArrays};

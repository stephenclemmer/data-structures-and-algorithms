const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    let temp = nums[i];
    while (j >= 0 && nums[j] > temp) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j+1] = temp;
  }
  return nums;
};

// let array = [8,4,23,42,16,15];

// console.log(insertionSort(array));

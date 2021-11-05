const nums = [2, 1, 3, 5, 4];

const selectionSort = (nums) => {
  for (i = 0; i < nums.length; i++) {
    let minIndex = i;
    const temp = nums[i];
    for (j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }

    nums[i] = nums[minIndex];
    nums[minIndex] = temp;
  }
  return nums;
};

console.log(selectionSort(nums));

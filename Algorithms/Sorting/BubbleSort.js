const nums = [2, 1, 3, 5, 4, 200, 123];

const bubbleSort = (nums) => {
  for (i = 0; i < nums.length; i++) {
    for (j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
};

console.log(bubbleSort(nums));

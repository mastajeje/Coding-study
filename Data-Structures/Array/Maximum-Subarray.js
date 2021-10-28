// Kadane's Algorithm
// local_maximum[i] = max(Array[i], Array[i] + local_maximum[i-1])

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// 숫자 배열 nums가 주어 졌을때 가장 큰 원소들의 합을 가진 부분배열의 합을 return 하시요(최소한 하나의 숫자는 있어야 합니다).

var maxSubArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  return Math.max(...nums);
};

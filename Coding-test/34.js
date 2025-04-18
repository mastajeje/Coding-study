function solution(nums) {
  var answer = 0;
  const k = nums.length / 2;
  const numSet = new Set(nums);

  if (numSet.size > k) {
    answer = k;
  } else {
    answer = numSet.size;
  }

  return answer;
}

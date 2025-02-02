// 시간 복잡도 : O(NlogN);

const solution = (array) => {
  return array.sort((a, b) => a - b);
};

solution([1, -5, 2, 4, 3]);
console.log(solution([1, -5, 2, 4, 3]));

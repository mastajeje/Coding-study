// 조건 1. 중복값 제거
// 조건 2. 내림차순 정렬

const solution = (array) => {
  let result;
  // 조건 1. 중복값 제거
  const filteredArray = [...new Set(array)];
  // 조건 2. 내림차순 정렬

  result = filteredArray.sort((a, b) => b - a);

  return result;
};

console.log(solution([4, 2, 2, 1, 3, 4]));
console.log(solution([2, 1, 1, 3, 2, 5, 4]));

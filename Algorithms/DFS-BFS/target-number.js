// https://school.programmers.co.kr/learn/courses/30/lessons/43165

const solution = (numbers, target) => {
  let result = 0;

  const countTarget = (value, idx) => {
    if (idx < numbers.length) {
      countTarget(value + numbers[idx], idx + 1);
      countTarget(value - numbers[idx], idx + 1);
    } else {
      if (value === target) result++;
    }
  };

  countTarget(0, 0);

  return result;
};

console.log(solution([1, 1, 1, 1, 1], 3));
//expected: 5

console.log(solution([4, 1, 2, 1], 4));
//expected: 2

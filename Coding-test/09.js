//10진수를 2진수로 변환하기
const solution = (input) => {
  let stack = [];

  while (input >= 1) {
    stack.push(input % 2);
    input = Math.floor(input / 2);
  }

  return stack.reverse().join("");
};

console.log(solution(10));
console.log(solution(27));
console.log(solution(12345));

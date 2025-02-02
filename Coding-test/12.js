// 주식가격
const solution = (prices) => {
  const pricesLength = prices.length;
  let result = new Array(pricesLength).fill(0);
  let stack = [0];
  for (i = 0; i < pricesLength; i++) {
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      const j = stack.pop();
      result[j] = i - j;
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    const lastSecond = prices.length - 1;
    const i = stack.pop();
    result[i] = lastSecond - i;
  }

  return result;
};

console.log(solution([1, 2, 3, 2, 3]));
// expected [4,3,1,1,0]
console.log(solution([1, 6, 9, 5]));
// expected [3,2,1,0]

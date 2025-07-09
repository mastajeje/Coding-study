// 피보나치 함수 (DP)

let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "BaekJoon/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();

// console.log(input);

const getOnesAndZeroes = (n) => {
  let ones = 0;
  let zeroes = 0;
  if (n === 0) {
    zeroes = 1;
  } else if (n === 1) {
    ones = 1;
  } else {
    const dp = [
      [1, 0],
      [0, 1],
    ];
    for (let i = 2; i <= n; i++) {
      dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
    }

    zeroes = dp[n][0];
    ones = dp[n][1];
  }

  return console.log(`${zeroes} ${ones}`);
};

input.forEach((num) => {
  getOnesAndZeroes(num);
});

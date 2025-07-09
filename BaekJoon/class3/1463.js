//1로 만들기
let input = parseInt(
  require("fs")
    .readFileSync(
      process.platform === "linux" ? "/dev/stdin" : "BaekJoon/example.txt"
    )
    .toString()
    .trim(),
  10
);

const dp = [0, 0, 1, 1];
for (let i = 4; i <= input; i++) {
  dp[i] = dp[i - 1] + 1;
  // 2와 3 모두로 나누어 떨어지는 경우를 생각해야 함
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
}

console.log(dp[input]);

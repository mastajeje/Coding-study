let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "BaekJoon/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(Number);
// .map((elem) => elem.split(" ").map(Number));

input.shift();

const dp = [0, 1, 2, 4];

for (let i = 4; i <= 10; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

input.forEach((N) => {
  console.log(dp[N]);
});

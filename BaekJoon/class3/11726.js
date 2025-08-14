let input = parseInt(
  require("fs")
    .readFileSync(
      process.platform === "linux" ? "/dev/stdin" : "BaekJoon/example.txt"
    )
    .toString()
    .trim()
    .split("\n"),
  10
);

// .map((elem) => elem.split(" ").map(Number));

const dp = [0, 1, 2];

for (let i = 3; i <= input; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[input]);

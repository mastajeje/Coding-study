//ATM

let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "BaekJoon/example.txt"
  )
  .toString()
  .trim()
  .split("\n");

input.shift();

const timeToWithdraw = input[0]
  .split(" ")
  .map((time) => parseInt(time, 10))
  .sort((a, b) => a - b);

let answer = 0;
let sum = 0;

for (let i = 0; i < timeToWithdraw.length; i++) {
  sum += timeToWithdraw[i];
  answer += sum;
}

console.log(answer);

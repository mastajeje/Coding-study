let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "BaekJoon/example.txt"
  )
  .toString()
  .trim()
  .split("\n");

const numbers = input[1].split(" ").map(Number);

let answer = 0;
numbers.forEach((num) => {
  if (num === 1) return;

  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) return;
  }

  answer += 1;
});

console.log(answer);

let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "BaekJoon/example.txt"
  )
  .toString()
  .trim()
  .split("\n");

input.shift();

const numbers = input.shift().split(" ").map(Number);

const range = input.map((elem) => elem.split(" ").map(Number));
const sums = [0];
for (let i = 0; i < numbers.length; i++) {
  sums[i + 1] = sums[i] + numbers[i];
}

let answer = [];
range.forEach(([i, j]) => {
  answer.push(sums[j] - sums[i - 1]);
});

console.log(answer.join("\n"));

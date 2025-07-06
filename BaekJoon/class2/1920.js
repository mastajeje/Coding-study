let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "BaekJoon/example.txt"
  )
  .toString()
  .trim()
  .split("\n");

const numbersN = input[1].split(" ").map(Number);
const numbersM = input[3].split(" ").map(Number);
const numN = {};
const answer = [];
numbersN.forEach((num) => {
  numN[num] = true;
});

numbersM.forEach((num) => {
  if (numN[num]) {
    answer.push(1);
  } else {
    answer.push(0);
  }
});

console.log(answer.join("\n"));

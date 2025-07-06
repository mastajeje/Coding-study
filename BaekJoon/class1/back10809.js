let input = require("fs")
  .readFileSync("BaekJoon/example.txt") // /dev/stdin
  .toString()
  .trim();
//   .split("\n");

const abcs = "abcdefghijklmnopqrstuvwxyz";

const answer = Array(26).fill(-1);

for (let i = 0; i < input.length; i++) {
  const currentChar = input[i];
  const charIndex = abcs.indexOf(currentChar);
  if (answer[charIndex] === -1) {
    answer[charIndex] = i;
  }
}

console.log(answer.join(" "));

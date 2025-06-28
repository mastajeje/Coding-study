let input = require("fs")
  .readFileSync("BaekJoon/example.txt") // /dev/stdin
  .toString()
  .trim()
  .split("\n")[1]
  .split("");

// **** \r은 더이상 사용되지 않는다

const answer = input.reduce((acc, cur) => {
  acc = parseInt(acc);
  cur = parseInt(cur);
  return acc + cur;
});

console.log(answer);

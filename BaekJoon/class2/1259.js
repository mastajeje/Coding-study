// 팰린드롬수

let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "BaekJoon/example.txt"
  )
  .toString()
  .trim()
  .split("\n");

input.pop();
input.forEach((number) => {
  const trimedNum = number.replace("\r", "");
  const lastDigitIndex = trimedNum.length - 1;
  for (let i = 0; i < Math.floor(trimedNum.length / 2); i++) {
    if (trimedNum[i] !== trimedNum[lastDigitIndex - i]) {
      return console.log("no");
    }
  }
  console.log("yes");
});

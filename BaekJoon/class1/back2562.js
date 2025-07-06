let input = require("fs")
  .readFileSync("BaekJoon/example.txt") // /dev/stdin
  .toString()
  .trim()
  .split("\n");

let maxNumIndex = 0;
let maxNum = 0;

// ** input을 정수로 변환시켜줘야 제대로 비교가 가능
input.forEach((num, index) => {
  num = parseInt(num);
  if (num > maxNum) {
    maxNum = num;
    maxNumIndex = index + 1;
  }
});

console.log(maxNum);
console.log(maxNumIndex);

let input = require("fs")
  .readFileSync("BaekJoon/example.txt") // /dev/stdin
  .toString()
  .trim()
  .split("\n");

// **** \r은 더이상 사용되지 않는다

//첫 번째 인수 제거
const T = Number(input.shift());

input.forEach((testCase) => {
  const [R_str, S] = testCase.split(" ");
  let result = "";
  R = Number(R_str);
  if (S) {
    S.split("").forEach((char) => {
      result += char.repeat(R);
    });
    console.log(result);
  }
});

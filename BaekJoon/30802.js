// 웰컴 키트
let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "BaekJoon/example.txt"
  )
  .toString()
  .trim()
  .split("\n");

const totalAttendees = parseInt(input[0], 10);
const orderBySizes = input[1].split(" ").map(Number);
const [T, P] = input[2].split(" ").map(Number);

let TAmount = 0;

//  PAmount[0] === amount of ordered pencil bundle
// PAmount[1] === amount of individually ordered pencil
let PAmount = [0, 0];

orderBySizes.forEach((size) => {
  const amount = Math.ceil(size / T);
  TAmount += amount;
});

PAmount[0] = Math.floor(totalAttendees / P);
PAmount[1] = totalAttendees % P;

console.log(TAmount);
console.log(PAmount[0], PAmount[1]);

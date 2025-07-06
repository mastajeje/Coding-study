let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "BaekJoon/example.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const bigBoard = input.map((row) => row.split(""));
let answer = Infinity;

const checkBoard = (startX, startY) => {
  let repaintB = 0; //시작 B
  let repaintW = 0; // 시작 W

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const currentColor = bigBoard[startX + i][startY + j];
      // (i+j) % 2 === 0 이면 시작 색, 1이면 반대 색
      if ((i + j) % 2 === 0) {
        if (currentColor !== "W") repaintW++;
        if (currentColor !== "B") repaintB++;
      } else {
        if (currentColor !== "W") repaintB++;
        if (currentColor !== "B") repaintW++;
      }
    }
  }
  return Math.min(repaintB, repaintW);
};

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    answer = Math.min(checkBoard(i, j), answer);
  }
}

console.log(answer);

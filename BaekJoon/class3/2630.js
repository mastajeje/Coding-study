let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "BaekJoon/example.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const paper = input.map((row) => {
  return row.split(" ").map(Number);
});

let bluePaper = 0;
let whitePaper = 0;

const checkPaper = (startRow, startCol, size) => {
  const color = paper[startRow][startCol];

  for (let r = startRow; r < startRow + size; r++) {
    for (let c = startCol; c < startCol + size; c++) {
      if (color !== paper[r][c]) {
        //1st quadrant
        checkPaper(startRow, startCol + size / 2, size / 2);
        // 2nd quadrant
        checkPaper(startRow, startCol, size / 2);
        //3rd quadrant
        checkPaper(startRow + size / 2, startCol, size / 2);
        //4th quadrant
        checkPaper(startRow + size / 2, startCol + size / 2, size / 2);
        return;
      }
    }
  }
  if (color === 0) {
    whitePaper++;
  } else {
    bluePaper++;
  }
};

checkPaper(0, 0, N);

console.log(whitePaper);
console.log(bluePaper);

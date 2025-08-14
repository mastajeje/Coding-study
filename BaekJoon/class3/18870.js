// 좌표 압축
let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "BaekJoon/example.txt"
  )
  .toString()
  .trim()
  .split("\n");
// .map((elem) => elem.split(" "));

input.shift();
const coords = input[0].split(" ").map(Number);
const mappedIndices = {};

const coordsSet = new Set(coords);
const uniqueCoords = [...coordsSet].sort((a, b) => a - b);

uniqueCoords.forEach((coord, index) => {
  mappedIndices[coord] = index;
  index++;
});

const compressedCoord = coords.map((coord) => {
  return mappedIndices[coord];
});

console.log(compressedCoord.join(" "));

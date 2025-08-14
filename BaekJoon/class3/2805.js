let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "BaekJoon/example.txt"
  )
  .toString()
  .trim()
  .split("\n");

const M = parseInt(input.shift().split(" ")[1], 10);
const trees = input[0].split(" ").map(Number);

let start = 1;
let end = Math.max(...trees);
let mid = 0;
let answer = 0;
const calculateTreeAmount = (height) => {
  let cutTree = 0;
  trees.forEach((tree) => {
    if (tree > height) cutTree += tree - height;
  });

  return cutTree;
};

while (start <= end) {
  mid = Math.floor((start + end) / 2);
  const total = calculateTreeAmount(mid);

  if (total >= M) {
    start = mid + 1;
    answer = mid;
  } else {
    end = mid - 1;
  }
}
console.log(answer);

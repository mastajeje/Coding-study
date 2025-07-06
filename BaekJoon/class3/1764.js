let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "BaekJoon/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((elem) => elem.trim());

let [N, M] = input.shift().split(" ").map(Number);
const result = [];
const neverHeardSet = new Set(input.splice(0, N));

input.forEach((neverSeen) => {
  if (neverHeardSet.has(neverSeen)) result.push(neverSeen);
});

console.log(result.length);
result.sort().forEach((elem) => {
  console.log(elem);
});

//숨바꼭질

let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "BaekJoon/example.txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number);
// .map((elem) => elem.split(" "));
const N = input[0];
const K = input[1];

let queue = [[N, 0]];
let head = 0;
const visited = new Set();
while (head < queue.length) {
  const [curr, time] = queue[head++];

  if (curr === K) return console.log(time);
  if (!visited.has(curr)) {
    visited.add(curr);

    if (curr - 1 >= 0) queue.push([curr - 1, time + 1]);
    if (curr + 1 <= 100000) queue.push([curr + 1, time + 1]);
    if (curr * 2 <= 100000) queue.push([curr * 2, time + 1]);
  }
}

let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "BaekJoon/example.txt"
  )
  .toString()
  .trim()
  .split("\n");

const graph = input.slice(2).map((pair) => pair.split(" ").map(Number));

const network = {};
let affected = 0;
graph.forEach((pair) => {
  const [a, b] = pair;

  network[a] = network[a] || [];
  network[b] = network[b] || [];
  network[a].push(b);
  network[b].push(a);
});

const visited = new Set();

let needVisit = [1];

while (needVisit.length !== 0) {
  const current = needVisit.shift();
  if (!visited.has(current)) {
    visited.add(current);
    if (network[current]) {
      // needVisit.push(...network[current]);
      needVisit = [...network[current], ...needVisit];
    }
  }
}

console.log(visited.size - 1);

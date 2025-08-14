let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "BaekJoon/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((elem) => elem.split(" ").map(Number));

const N = input.shift()[0];

const createGraph = (edges) => {
  const graph = Array.from({ length: N + 1 }, () => []);
  edges.forEach((edge) => {
    const [x, y] = edge;
    graph[x].push(y);
    graph[y].push(x);
  });

  return graph;
};

const visited = new Set();

const bfs = (startNode) => {
  const queue = [startNode];
  let head = 0;
  while (head < queue.length) {
    const node = queue[head++];
    if (!visited.has(node)) {
      visited.add(node);
      graph[node].forEach((adjNode) => {
        if (!visited.has(adjNode)) queue.push(adjNode);
      });
    }
  }
};

const graph = createGraph(input);

let answer = 0;

graph.forEach((node, nodeIndex) => {
  if (nodeIndex === 0) return;
  if (!visited.has(nodeIndex)) {
    bfs(nodeIndex);
    answer++;
  }
});

console.log(answer);

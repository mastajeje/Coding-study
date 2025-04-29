//BFS traverse
const makeAdjList = (graph) => {
  const adjList = {};

  for (const [a, b] of graph) {
    if (!adjList[a]) adjList[a] = [];
    adjList[a].push(b);
  }

  return adjList;
};

const bfs = (graph, startNode) => {
  const visited = [startNode];
  const needVist = [startNode];

  while (needVist.length > 0) {
    const node = needVist.shift();

    for (const neigbor of graph[node] || []) {
      if (!visited.includes(neigbor)) {
        needVist.push(neigbor);
        visited.push(neigbor);
      }
    }
  }

  return visited;
};

const solution = (graph, start) => {
  const adjList = makeAdjList(graph);

  let result = [];

  result = bfs(adjList, start);

  return result;
};

console.log(
  solution(
    [
      [1, 2],
      [1, 3],
      [2, 4],
      [2, 5],
      [3, 6],
      [3, 7],
      [4, 8],
      [5, 8],
      [6, 9],
      [7, 9],
    ],
    1
  )
);
// //expected [1,2,3,4,5,6,7,8,9]

console.log(
  solution(
    [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 0],
    ],
    1
  )
);
// //expected [1,2,3,4,5,0]

//DFS traverse

const solution = (graph, start) => {
  let result = [];
  const adjList = {};
  for (let [a, b] of graph) {
    if (!adjList[a]) adjList[a] = [];
    adjList[a].push(b);
  }

  const dfs = (node, visited, result) => {
    visited.add(node);
    result.push(node);

    (adjList[node] || []).forEach((neigbor) => {
      if (!visited.has(neigbor)) {
        dfs(neigbor, visited, result);
      }
    });
  };

  const visited = new Set();
  dfs(start, visited, result);

  return result;
};

console.log(
  solution(
    [
      ["A", "B"],
      ["B", "C"],
      ["C", "D"],
      ["D", "E"],
    ],
    "A"
  )
);
//expected ['A','B','C','D','E']

console.log(
  solution(
    [
      ["A", "B"],
      ["A", "C"],
      ["B", "D"],
      ["B", "E"],
      ["C", "F"],
      ["E", "F"],
    ],
    "A"
  )
);
//expected ['A','B','D','E','F','C']

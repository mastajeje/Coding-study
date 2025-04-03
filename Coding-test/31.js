// 1st solution
function solution(info, edges) {
  let maxSheep = 0;
  const graph = Array.from({ length: info.length }, () => []);

  for (const [parent, child] of edges) {
    graph[parent].push(child);
  }

  const dfs = (sheep, wolf, visited) => {
    if (sheep <= wolf) return;
    maxSheep = Math.max(maxSheep, sheep);

    for (let i = 0; i < visited.length; i++) {
      let node = visited[i];

      for (let next of graph[node]) {
        if (!visited.includes(next)) {
          let newVisited = [...visited, next];
          dfs(
            sheep + (info[next] === 0 ? 1 : 0),
            wolf + (info[next] === 1 ? 1 : 0),
            newVisited
          );
        }
      }
    }
  };
  dfs(1, 0, [0]);

  return maxSheep;
}

console.log(
  solution(
    [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [
      [0, 1],
      [1, 2],
      [1, 4],
      [0, 8],
      [8, 7],
      [9, 10],
      [9, 11],
      [4, 3],
      [6, 5],
      [4, 6],
      [8, 9],
    ]
  )
);
// expected 5

console.log(
  solution(
    [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [2, 6],
      [3, 7],
      [4, 8],
      [6, 9],
      [9, 10],
    ]
  )
);
//expected 5

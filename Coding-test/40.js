// dijkstra

const solution = (graph, start) => {
  const distances = {};
  const path = {};
  const visited = new Set();
  const nodes = Object.keys(graph);

  // Initialize
  for (const node of nodes) {
    distances[node] = Infinity;
    path[node] = [start];
  }

  distances[start] = 0;

  while (nodes.length) {
    // Sort by distance
    nodes.sort((a, b) => distances[a] - distances[b]);
    const closestNode = nodes.shift();

    if (distances[closestNode] === Infinity) break;
    visited.add(closestNode);

    for (const neighbor in graph[closestNode]) {
      if (!visited.has(neighbor)) {
        const newDistance =
          distances[closestNode] + graph[closestNode][neighbor];
        if (newDistance < distances[neighbor]) {
          distances[neighbor] = newDistance;
          path[neighbor] = [...path[closestNode], neighbor];
        }
      }
    }
  }
  console.log(path, distances);
  //   return path, distances;
};

console.log(solution({ A: { B: 9, C: 3 }, B: { A: 5 }, C: { B: 1 } }, "A"));
// [{'A': 0, 'B': 4, 'C': 3}, {'A': ['A'], 'B': ['A', 'C', 'B'], 'C': ['A', 'C']}]

console.log(solution({ A: { B: 1 }, B: { C: 5 }, C: { D: 1 }, D: {} }, "A"));
// [{'A': 0, 'B': 1, 'C': 6, 'D': 7}, {'A': ['A'], 'B': ['A', 'B'], 'C': ['A', 'B', 'C'], 'D': ['A', 'B', 'C', 'D']}]

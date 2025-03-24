const bfs = (grid) => {
  const rows = grid.length;
  const cols = grid[0].length;

  // up, right, down, left
  const dr = [0, 1, 0, -1];
  const dc = [-1, 0, 1, 0];

  //[startRow, startCol, distance]
  const queue = [[0, 0, 1]];

  const visited = Array(rows)
    .fill()
    .map(() => Array(cols).fill(false));
  visited[0][0] = true;

  while (queue.length > 0) {
    const [row, col, distance] = queue.shift();

    if (row === rows - 1 && col === cols - 1) return distance;

    for (let i = 0; i < 4; i++) {
      const newRow = row + dr[i];
      const newCol = col + dc[i];
      console.log(visited);
      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        !visited[newRow][newCol] &&
        grid[newRow][newCol] !== 0
      ) {
        visited[newRow][newCol] = true;

        queue.push([newRow, newCol, distance + 1]);
      }
    }
  }

  return -1;
};

console.log(
  bfs([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
//expected 11

console.log(
  bfs([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
//expected -1

//https://school.programmers.co.kr/learn/courses/30/lessons/1844

// const solution = (maps) => {
//   const rows = maps.length;
//   const cols = maps[0].length;
//   const queue = [];
//   let endRow;
//   let endCol;

//   //   up,down,left,right
//   const dr = [-1, 1, 0, 0];
//   const dc = [0, 0, -1, 1];

//   // const visited = Array(rows)
//   //   .fill()
//   //   .map(() => Array(cols).fill(false));

//   const visited = Array.from(Array(rows), () =>
//     Array(cols)
//       .fill(false)
//       .map(() => Array(2).fill(false))
//   );
//   console.log(visited);
//   //   find start and end point
//   // for (let i = 0; i < rows; i++) {
//   //   const start = maps[i].indexOf("S");
//   //   const end = maps[i].indexOf("E");

//   //   if (start !== -1) {
//   //     visited[i][start] = true;
//   //     // [row,col,switch, distance]
//   //     queue.push([i, start, false, 0]);
//   //   }

//   //   if (end !== -1) {
//   //     visited[i][end] = true;
//   //     endRow = i;
//   //     endCol = end;
//   //   }
//   // }

//   // while (queue.length > 0) {
//   //   const [row, col, isSwitchOn, distance] = queue.shift();
//   //   console.log(distance, row, endRow, col, endCol);
//   //   if (row === endRow && col === endCol && isSwitchOn) return distance;

//   //   for (let i = 0; i < 4; i++) {
//   //     const newRow = row + dr[i];
//   //     const newCol = col + dc[i];

//   //     if (
//   //       newRow >= 0 &&
//   //       newRow < rows &&
//   //       newCol >= 0 &&
//   //       newCol < cols &&
//   //       !visited[newRow][newCol] &&
//   //       maps[newRow][newCol] !== "X"
//   //     ) {
//   //       if (maps[newRow][newCol] === "L" || isSwitchOn) {
//   //         queue.push([newRow, newCol, true, distance + 1]);
//   //         visited[newRow][newCol] = true;
//   //       } else {
//   //         queue.push([newRow, newCol, false, distance + 1]);
//   //         visited[newRow][newCol] = true;
//   //       }
//   //     }
//   //   }
//   // }

//   // return -1;
// };

// 두 번째 풀이이
const bfs = (grid, start, end) => {
  const rows = grid.length;
  const cols = grid[0].length;
  let queue = [];

  //up down left right
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];

  const visited = Array(rows)
    .fill()
    .map(() => Array(cols).fill(false));

  queue.push([start[0], start[1], 0]);
  visited[start[0]][start[1]] = true;

  while (queue.length > 0) {
    const [row, col, distance] = queue.shift();

    if (row === end[0] && col === end[1]) return distance;

    for (let i = 0; i < 4; i++) {
      const newRow = row + dr[i];
      const newCol = col + dc[i];

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        !visited[newRow][newCol] &&
        grid[newRow][newCol] !== "X"
      ) {
        queue.push([newRow, newCol, distance + 1]);
        visited[newRow][newCol] = true;
      }
    }
  }
  return -1;
};

function solution(maps) {
  let start;
  let end;
  let lever;
  const rows = maps.length;
  for (let i = 0; i < rows; i++) {
    const startCol = maps[i].indexOf("S");
    const endCol = maps[i].indexOf("E");
    const leverCol = maps[i].indexOf("L");
    if (startCol !== -1) {
      start = [i, startCol];
    }
    if (endCol !== -1) {
      end = [i, endCol];
    }

    if (leverCol !== -1) {
      lever = [i, leverCol];
    }
  }

  const toLever = bfs(maps, start, lever);
  const toEnd = bfs(maps, lever, end);

  if (toLever === -1 || toEnd === -1) return -1;

  return toLever + toEnd;
}

console.log(solution(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"]));
//expected 16

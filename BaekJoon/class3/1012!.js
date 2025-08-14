let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "BaekJoon/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((elem) => elem.split(" ").map(Number));

const T = input.shift();
let line = 0;

const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const bfs = (farm, visited, x, y, M, N) => {
  const queue = [[x, y]];
  visited[y][x] = true;
  while (queue.length) {
    const [cx, cy] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const ny = cy + dy[i];
      const nx = cx + dx[i];

      if (
        ny >= 0 &&
        ny < N &&
        nx >= 0 &&
        nx < M &&
        farm[ny][nx] === 1 &&
        !visited[ny][nx]
      ) {
        visited[ny][nx] = true;
        queue.push([nx, ny]);
      }
    }
  }
};

for (let t = 0; t < T; t++) {
  const [M, N, K] = input[line++];

  const farm = Array.from({ length: N }, () => Array(M).fill(0));
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  for (let i = 0; i < K; i++) {
    const [x, y] = input[line++];
    farm[y][x] = 1;
  }

  let count = 0;

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (farm[y][x] === 1 && !visited[y][x]) {
        bfs(farm, visited, x, y, M, N);

        count++;
      }
    }
  }

  console.log(count);
}

//bfs, grid

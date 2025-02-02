const updateLocation = (x, y, dir) => {
  switch (dir) {
    case "U":
      return [x, y + 1];
    case "D":
      return [x, y - 1];
    case "L":
      return [x - 1, y];
    case "R":
      return [x + 1, y];
  }
};

const solution = (input) => {
  let result = [];

  const visited = new Set();
  let x = 0;
  let y = 0;

  input.split("").forEach((dir) => {
    // update location
    const [nx, ny] = updateLocation(x, y, dir);

    // boundary check
    if (nx > 5 || nx < -5 || ny > 5 || ny < -5) return;

    // record visited path
    visited.add(`${x}${y}${nx}${ny}`);
    visited.add(`${nx}${ny}${x}${y}`);

    // update new current location
    [x, y] = [nx, ny];
  });

  //중복 path 제거

  return visited.size / 2;
};

console.log(solution("ULURRDLLU"));
// expected: 7
console.log(solution("UDDUU"));
// expected: 2

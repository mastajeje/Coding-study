const solution = (matrix) => {
  let result = [];

  let left = 0;
  let right = matrix[0].length - 1; // length of columns (-1 to match with index #)
  let top = 0;
  let bottom = matrix.length - 1; // length of rows

  while (left <= right && top <= bottom) {
    // 1. left-top => right
    for (i = left; i <= right; i++) {
      console.log("1");
      result.push(matrix[top][i]);
    }
    top++;

    // 2. top-right => bottom
    for (i = top; i <= bottom; i++) {
      console.log("2");
      result.push(matrix[i][right]);
    }
    right--;

    // 3. bottom-right => left
    if (top < bottom) {
      for (i = right; i >= left; i--) {
        console.log("3");
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // 4. bottom-left => top
    if (left < right) {
      for (i = bottom; i >= top; i--) {
        console.log("4");
        result.push(matrix[i][left]);
      }
      left++;
    }

    // repeat until left <= right && top <== bottom
  }

  return result;
};

console.log(
  solution([
    [1],
    [3],
    // [3, 4], // Single column matrix
  ])
);
// console.log(
//   solution([
//     [1, 2, 3],
//     [5, 6, 7],
//     [9, 10, 11],
//     [9, 10, 11],
//   ])
// );

// 1st attempt (failed)
// const solution = (input) => {
//   let result = [];

//   // let i = 0,
//   //   j = 0;
//   // while (true) {
//   //   //   result.push(input[i].shift());

//   //   if (input[i][j + 1]) {
//   //     result.push(input[i].shift());
//   //     j++;
//   //   } else if (input[i + 1][j]) {
//   //     result.push(input[i + 1].pop());
//   //     i++;
//   //     console.log(i, j, "2");
//   //   } else if (input[i][j - 1]) {
//   //     result.push(input[i].shift());
//   //     j--;
//   //     console.log(i, j, "3");
//   //   } else if (input[i - 1][j]) {
//   //     result.push(input[i - 1][j]);
//   //     i--;
//   //     console.log(i, j, "4");
//   //   } else break;
//   // }
//   console.log(result);
//   return result;
// };

// console.log(
//   solution([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// 2nd attempt
const solution = (matrix) => {
  let result = [];

  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;

  while (left <= right && top <= bottom) {
    // 1. top-left -> Right
    for (i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // 2. top-right -> Bottm
    for (i = top; i <= bottom; i++) {
      // console.log(top, bottom, i);
      result.push(matrix[i][right]);
    }
    right--;

    // 3. bottom-right -> Left
    // *현재 bottom의 위치가 현재 top의 위치를 넘어가지 않기위한 보호조치가 필요
    // if (top <= bottom) {
    for (i = right; i >= left; i--) {
      result.push(matrix[bottom][i]);
    }
    bottom--;
    // }

    // 4. bottom-left -> Top
    // *현재 left 위치가 현재 right의 위치를 넘어가지 않기위한 보호조치가 필요
    // if (left <= right) {
    for (i = bottom; i >= top; i--) {
      result.push(matrix[i][left]);
    }
    left++;
    // }
  }

  return result;
};

console.log(
  solution([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  solution([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);

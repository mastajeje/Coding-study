// 수포자1 = [1,2,3,4,5]
// 수포자2 = [2,1,2,3,2,4,2,5]
// 수포자3 = [3,3,1,1,2,2,4,4,5,5,]

const solution = (input) => {
  let result = [];

  student1 = [1, 2, 3, 4, 5];
  student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  //   let score1 = 0,
  //     score2 = 0,
  //     score3 = 0;

  //수정
  const scores = [0, 0, 0];

  for (let i = 0; i < input.length; i++) {
    if (input[i] === student1[i % student1.length]) scores[0]++;
    if (input[i] === student2[i % student2.length]) scores[1]++;
    if (input[i] === student3[i % student3.length]) scores[2]++;
  }

  // const scores =[ score1, score2, score3]

  //   최고점자 찾기
  const highScore = Math.max(...scores);

  scores.forEach((score, index) => {
    if (score === highScore) result.push(index + 1);
  });

  return result;
};

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));

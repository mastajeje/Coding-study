//시간복잡도 = O(N^2log(N^2))

const solution = (input) => {
  let result = [];
  // 서로 다른 인덱스 2개를 뽑아 더해 만들 수 있는 모든 경우의 수를 배열에 넣기
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) result.push(input[i] + input[j]);
  }

  // 중복 제거 && 오름차순 정렬
  result = [...new Set(result)].sort((a, b) => a - b);

  return result;
};

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));

// ** 처음 부터 끝까지 문제파악 먼저저

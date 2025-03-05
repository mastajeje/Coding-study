const combinations = (arr, n) => {
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combis = combinations(rest, n - 1);
    console.log(combis, n);
    const combine = combis.map((v) => [fixed, ...v]);
    result.push(...combine);
  });
  //   return result;
};

const solution = (input) => {
  let result = [];
  const k = 3;
  for (i = 0; i < input.length; i++) {
    for (j = i + k - 1; j < input.length; j++) {
      console.log(`${input[i]}${input[i + 1]}${input[j]}`);
    }
  }

  return result;
};

// console.log(solution(["a", "b", "c", "d", "e", "f"]));

console.log(combinations(["a", "b", "c", "d", "e", "f"], 2));

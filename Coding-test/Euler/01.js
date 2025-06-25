const solution = (input) => {
  let result = 0;
  const quotient3 = Math.floor(input / 3);
  const quotient5 = Math.floor(input / 5);
  const quotient15 = Math.floor(input / 15);
  console.log(quotient3, quotient5, quotient15);

  for (i = 1; i <= quotient3; i++) {
    if (i * 3 === input) break;
    result += i * 3;
  }
  for (i = 1; i <= quotient5; i++) {
    if (i * 5 === input) break;
    result += i * 5;
  }
  for (i = 1; i <= quotient15; i++) {
    if (i * 15 === input) break;
    result -= i * 15;
  }

  return result;
};

console.log(solution(1000));

const recursiveFactorial = (number) => {
  if (number === 0) {
    return 1;
  }
  return number * recursiveFactorial(number - 1);
};

const iterativeFactorial = (number) => {
  let answer = 1;
  for (let i = number; i > 0; i--) {
    answer = answer * i;
  }
  return answer;
};

// 1. find base case
// 2. find recursive case
// 3. usually have two returns

// console.log(recursiveFactorial(0));
console.log(iterativeFactorial(5));

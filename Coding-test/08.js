//괄호 짝 맞추기

const solution = (input) => {
  let stack = [];
  let top = -1;

  for (const char of input) {
    stack.push(char);
    top++;

    // if (stack.length <= 1) return;

    if (stack[top] === ")" && stack[top - 1] === "(") {
      stack.pop();
      stack.pop();
      top = top - 2;
    }
    // console.log(stack);
  }

  return stack.length === 0;
};

console.log(solution("(())()"));
//expected: True

console.log(solution("((())()"));

console.log(solution(")("));

const rotateString = (string) => {
  string.push(string.shift());
  return string;
};

const checkString = (string) => {
  const stack = [];
  let top = -1;
  string.forEach((char) => {
    // if (char === "(" || char === "{" || char === "[") {
    //   stack.push(char);
    // } else if (char === ")" || char === "}" || char === "]") {
    //   if (stack.length === 0) {
    //     stack.push(char);
    //   } else {
    //     stack.pop();
    //   }
    // }
    stack.push(char);
    top++;

    if (stack[top] === ")" && stack[top - 1] === "(") {
      stack.pop();
      stack.pop();
      top = top - 2;
    }
    if (stack[top] === "}" && stack[top - 1] === "{") {
      stack.pop();
      stack.pop();
      top = top - 2;
    }
    if (stack[top] === "]" && stack[top - 1] === "[") {
      stack.pop();
      stack.pop();
      top = top - 2;
    }
  });

  return stack.length === 0;
};

const solution = (input) => {
  let string = [...input];
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    //  check for correctness
    if (checkString(string)) count++;

    //  rotate string
    string = rotateString(string);
  }

  return count;
};

console.log(solution("[](){}"));
console.log(solution("}]()[{"));
console.log(solution("[)(]"));
console.log(solution("}}}"));

let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "BaekJoon/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.trim());

input.shift();

input.forEach((ps) => {
  const stack = [];
  for (let i = 0; i < ps.length; i++) {
    if (stack.length === 0) {
      stack.push(ps[i]);
      continue;
    }

    if (ps[i] === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else {
      stack.push(ps[i]);
    }
  }
  if (stack.length === 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
});

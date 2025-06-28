let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "BaekJoon/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((triangle) => triangle.split(" ").map(Number));

input.forEach((triangle) => {
  triangle.sort((a, b) => a - b);
  const [A, B, C] = triangle;
  if (A === 0) return;

  if (A ** 2 + B ** 2 === C ** 2) {
    console.log("right");
  } else {
    console.log("wrong");
  }
});

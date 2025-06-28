let input = require("fs")
  .readFileSync("BaekJoon/example.txt") // /dev/stdin
  .toString()
  .trim();
// .split("\n");

for (let i = 1; i <= input; i++) {
  console.log(`${" ".repeat(input - i)}${"*".repeat(i)}`);
}

let input = require("fs")
  .readFileSync("BaekJoon/example.txt")
  .toString()
  .trim()
  .split("\n");

const [k, ...numbers] = input;

numbers.sort((a, b) => a - b);

numbers.forEach((num) => console.log(num));

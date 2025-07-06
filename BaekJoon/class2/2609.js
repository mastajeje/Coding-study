let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "BaekJoon/example.txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort();
const getGCD = (a, b) => {
  if (a % b === 0) return b;

  const r = a % b;

  return getGCD(b, r);
};

const GCD = getGCD(input[1], input[0]);

const LCM = (input[1] * input[0]) / GCD;

console.log(GCD);
console.log(LCM);

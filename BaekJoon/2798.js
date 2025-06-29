let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "BaekJoon/example.txt"
  )
  .toString()
  .trim()
  .split("\n");

const targetValue = parseInt(input[0].split(" ")[1], 10);
const cards = input[1].split(" ").map(Number);
const NUMBER_OF_PICKED_CARD = 3;

function getClosestValue(arr, targetSum) {
  let maxValue = 0;
  function backtrack(start, path, sum) {
    if (path.length === NUMBER_OF_PICKED_CARD) {
      if (targetSum >= sum) {
        maxValue = Math.max(maxValue, sum);
        return;
      }
    }

    if (sum > targetSum) return;

    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      backtrack(i + 1, path, sum + arr[i]);
      path.pop();
    }
  }

  backtrack(0, [], 0);
  return maxValue;
}

console.log(getClosestValue(cards, targetValue));

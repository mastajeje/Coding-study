// 카드2
let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "BaekJoon/example.txt"
  )
  .toString()
  .trim();
// .split("\n");
const N = parseInt(input, 10);

const deck = Array.from({ length: N }, (_, i) => i + 1);
let head = 0;

while (deck.length - head > 1) {
  // remove first card
  head += 1;

  // send a card to the end
  deck.push(deck[head]);
  head += 1;
}

console.log(deck[head]);

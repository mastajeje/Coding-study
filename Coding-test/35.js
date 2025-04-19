function solution(n, words) {
  const usedWords = new Set();
  let prevChar = words[0][0];

  for (i = 0; i < words.length; i++) {
    const word = words[i];
    if (usedWords.has(word) || prevChar !== word[0]) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
    usedWords.add(word);
    prevChar = word.slice(-1);
  }

  return [0, 0];
}

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);
//expected: [3,3]

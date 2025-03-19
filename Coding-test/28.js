function solution(n, a, b) {
  let players = n;
  var answer = 0;
  let playerA = a;
  let playerB = b;
  while (players >= 2) {
    console.log("ab", playerA, playerB, players);
    if (
      (players / 2 >= playerA && players / 2 < playerB) ||
      (players / 2 < playerA && players / 2 >= playerB)
    ) {
      answer = Math.log(players) / Math.log(2);
      break;
    } else if (playerA > players / 2 && playerB > players / 2) {
      players = players / 2;
      playerA = playerA - players;
      playerB = playerB - players;
    } else players = players / 2;
  }
  console.log("answer", answer);
  return answer;
}

console.log(solution(8, 5, 6));
//expected 3
// console.log(solution(8, 4, 7));
// //expected 3

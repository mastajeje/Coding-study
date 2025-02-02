//크레인 인형 뽑기 게임

function solution(board, moves) {
  var answer = 0;
  const basket = [];
  for (const move of moves) {
    for (i = 0; i < board.length; i++) {
      if (board[i][move - 1] != 0) {
        // 바구니 로직
        if (
          basket.length != 0 &&
          basket[basket.length - 1] === board[i][move - 1]
        ) {
          basket.pop();
          answer += 2;
        } else {
          basket.push(board[i][move - 1]);
        }
        board[i][move - 1] = 0;
        break;
      } else if (i === board.length - 1 && board[i][move - 1] === 0) {
        basket.push(0);
      }
    }
  }

  return answer;
}

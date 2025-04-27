function solution(phone_book) {
  var answer = true;
  phone_book.sort();

  for (let i = 0; i < phone_book.length; i++) {
    if (phone_book[i + 1] && phone_book[i + 1].startsWith(phone_book[i])) {
      answer = false;
    }
  }

  return answer;
}

console.log(solution(["119", "97674223", "1195524421"]));
//expected: false

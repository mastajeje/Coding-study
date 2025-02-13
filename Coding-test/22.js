// 오픈 채팅방
function solution(record) {
  var answer = [];
  const nickNameObj = {};

  record.forEach((log) => {
    log = log.split(" ");
    const action = log[0];
    const uid = log[1];
    const nickName = log[2];
    if (action === "Leave") return;

    if (!nickNameObj[uid] || nickNameObj[uid] !== nickName)
      nickNameObj[uid] = nickName;
  });

  for (let log of record) {
    log = log.split(" ");
    const action = log[0];
    const uid = log[1];

    if (action === "Enter") {
      answer.push(`${nickNameObj[uid]}님이 들어왔습니다.`);
    } else if (action === "Leave") {
      answer.push(`${nickNameObj[uid]}님이 나갔습니다.`);
    }
  }

  return answer;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
// expected: ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
